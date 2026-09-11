import React, { type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../type/TypeTech";
import { RxCross1 } from "react-icons/rx";
interface iSelectProps {
  tech: Itech;
  isSelected: Itech[];
  setIsSelected: Dispatch<SetStateAction<Itech[]>>;
}

const SelectedTech = ({ tech, isSelected, setIsSelected }: iSelectProps) => {
  const handleRemoveTech = (techToRemove: Itech) => {
    const resttechs = isSelected.filter(
      (t: Itech) => t.name !== techToRemove.name,
    );
    setIsSelected(resttechs);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <h2 className="font-bold py-2 px-2">Your Stack</h2>

        <div className="container mx-auto ">
          {isSelected.length === 0 ? (
            <div>
              <p className="text-sm text-slate-500 px-2">
                Your stack is empty.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-500 px-2">
                {isSelected.length} Technology Selected
              </p>
              {isSelected.map((tech: Itech, index: number) => {
                return (
                  <div className="flex justify-between items-center gap-4 py-2 px-2">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-8 w-8"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{tech.name}</h3>
                        <p className="text-sm text-slate-500">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                    {/* button */}
                    <button
                      className="font-bold text-slate-500 text-2xl"
                      onClick={() => {
                        handleRemoveTech(tech);
                      }}
                    >
                      <RxCross1 />
                    </button>
                  </div>
                );
              })}
            </>
          )}

          {/* Remove All Button */}
          <button
            className="btn btn-sm btn-outline btn-error mt-2 flex justify-center items-center gap-2 w-full rounded-2xl"
            onClick={() => setIsSelected([])}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedTech;
