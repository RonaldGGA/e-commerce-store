import React from "react";

import { Billboard as BillboardType } from "@/types";

interface BillBoardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillBoardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center ">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs mx-auto text-center">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
