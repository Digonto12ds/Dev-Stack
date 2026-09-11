import { use, useState } from "react";
import type { Itech } from "../../type/TypeTech";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";
interface ItechProps {
  techPromise: Promise<Itech[]>;
}

const Tech = ({ techPromise }: ItechProps) => {
  // console.log(techPromise, "from tech ");

    const [isSelected, setIsSelected] = useState<Itech[]>([]);

  const techs = use(techPromise);
  return (
    <div className="container mx-auto">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
          Explore the{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--brand-gradient)" }}>
            Technologies
          </span>
        </h3>
        <p className="text-slate-500 mt-2 mb-8 text-base md:text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <AvailableTech techs={techs} isSelected={isSelected} setIsSelected={setIsSelected}></AvailableTech>
        </div>
        <div>
          <SelectedTech isSelected={isSelected} setIsSelected={setIsSelected}></SelectedTech>
        </div>
      </div>
    </div>
  );
};

export default Tech;
