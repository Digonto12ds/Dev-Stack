import React, { type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../type/TypeTech";
import { RxCross1 } from "react-icons/rx";
interface iSelectProps {
  tech: Itech;
  isSelected: Itech[];
  setIsSelected: Dispatch<SetStateAction<Itech[]>>;
}

const SelectedTech = ({ tech, isSelected, setIsSelected }: iSelectProps) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <h2 className="font-bold py-2 px-2">Your Stack</h2>
        <div className="container mx-auto ">
          {isSelected.map((tech: Itech, index: number) => {
            return (
              <div className="flex justify-between items-center gap-4 py-2 px-2">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold">{tech.name}</h3>
                    <p className="text-sm text-slate-500">{tech.category}</p>
                  </div>
                </div>

                {/* button */}
                <button className="font-bold text-slate-500 text-2xl">
                  <RxCross1 />
                </button>
              </div>
            );
          })}
            {/* remove btn */}
        </div>
      </div>
    </div>
  );
};

export default SelectedTech;
