import prisma from "@/app/lib/db";
import { LoadingProductCard, ProductCard } from "./ProductCard";
import { Suspense } from "react";

async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export const FeaturedProducts = () => {
  return (
    <div>
      <>
        <h2 className="text-2xl font-extrabold tracking-tight">
          Featured Items
        </h2>
        <Suspense fallback={<LoadingRows />}>
          <LoadFeaturedProduct />
        </Suspense>
      </>
    </div>
  );
};

const LoadFeaturedProduct = async () => {
  const data = await getData();
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const LoadingRows = () => {
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  );
};
