import React, { use } from "react";
import type { Itech } from "../../type/TypeTech";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";
interface ItechProps {
  techPromise: Promise<Itech[]>;
}

const Tech = ({ techPromise }: ItechProps) => {
  // console.log(techPromise, "from tech ");
  const techs = use(techPromise);
  console.log(techs, "tech");
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h3>
        <p className="text-slate-500 mt-2 mb-8 text-base md:text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex gap-6">
        <div>
          <AvailableTech techs={techs}></AvailableTech>
        </div>
        <div>
          <SelectedTech></SelectedTech>
        </div>
      </div>
    </div>
  );
};

export default Tech;
