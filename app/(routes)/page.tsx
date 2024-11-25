import Container from "../components/ui/container";
import Billboard from "../components/billboard";
import getBillboard from "@/actions/get-billboard";
import { Suspense } from "react";
import getProducts from "@/actions/get-products";
import ProductList from "@/app/components/product-list";

export const revalidate = 0;
export default async function Home() {
  const billboard = await getBillboard("f00eacde-bbe6-44af-bb7a-0b2dd7c84df6");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Suspense>
    </Container>
  );
}
