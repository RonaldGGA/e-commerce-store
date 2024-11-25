"use client";

import Button from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ valueKey, data, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    //creates an object containing just the searchParams {?sizeId=1223423} = {sizeId:1223424}
    const current = qs.parse(searchParams.toString());

    //updated the object with the clicked id
    const query = {
      ...current,
      [valueKey]: id,
    };
    //Deselect the size filter if you clicked in a selected one
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    // console.log(window.location.href);//actual url
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true } //dont put the null props in the url
    );

    router.push(url);
  };

  return (
    <div className="mb-0">
      <h3 className="text-lg font-semibold">{name}</h3>
      <h3 className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data?.map((filter) => (
          <div key={filter?.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter?.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter?.id)}
            >
              {filter?.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
