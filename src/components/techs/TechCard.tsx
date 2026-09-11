import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../type/TypeTech";
import { FaStar } from "react-icons/fa";
import SelectedTech from "./SelectedTech";

interface ItechCardProps {
  tech: Itech;
  isSelected: Itech[];
  setIsSelected: Dispatch<SetStateAction<Itech[]>>;
}

const TechCard = ({ tech, isSelected, setIsSelected }: ItechCardProps) => {
  const [isAdd, setIsAdd] = useState(false);

  const handleSelectePlayer = () => {
    setIsAdd(true);

    //selected techs
    setIsSelected([...isSelected, tech]);
  };
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm border border-slate-200">
        <figure className="flex justify-between items-center px-5 pt-5">
          <img className="w-10 h10" src={tech.icon} alt={tech.name} />
          <span className="badge badge-secondary">{tech.badge}</span>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{tech.name}</h2>

          <p className="text-slate-600">{tech.description}</p>

          {/* //! category,difficulty,ratting */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="mt-2">
              <span className="badge badge-outline">{tech.category}</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-slate-500">{tech.difficulty}</p>
            </div>
            <div>
              <p className="font-semibold flex items-center gap-2">
                <FaStar color="yellow" />
                {tech.rating}
              </p>
            </div>
          </div>

          <div className="card-action mt-4">
            <button
              onClick={() => handleSelectePlayer()}
              className="btn btn-primary w-full bg-black rounded-2xl"
              disabled={isAdd}
            >
              {isAdd === true ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
