import { Product } from "@/types";
import qs from "query-string";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  //constructs a query with the given params in the query prop
  //https://yourapiurl.com/oroducts?colorId=red&sizeId=M&categoryId=123&isFeatured=true
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await axios.get(url);

  return res.data;
};

export default getProducts;
