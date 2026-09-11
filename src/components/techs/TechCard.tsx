import React from "react";
import type { Itech } from "../../type/TypeTech";
import { FaStar } from "react-icons/fa";

interface ItechCardProps {
  tech: Itech;
}

const TechCard = ({ tech }: ItechCardProps) => {
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
          <div className="flex justify-between items-center">
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
            <button className="btn btn-primary w-full bg-black rounded-2xl">
              Add to Stack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
