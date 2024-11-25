import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";

import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductId: React.FC<ProductPageProps> = async ({ params }) => {
  //We get the product the use clicked on and using the category it has we load the other products
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/*Gallery*/}
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:my-0">
              {/*Info*/}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductId;