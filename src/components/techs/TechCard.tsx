import { type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../type/TypeTech";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface ItechCardProps {
  tech: Itech;
  isSelected: Itech[];
  setIsSelected: Dispatch<SetStateAction<Itech[]>>;
}

const TechCard = ({ tech, isSelected, setIsSelected }: ItechCardProps) => {
  const isAdd = isSelected.some((item) => item.name === tech.name);

  const handleSelectePlayer = () => {
    if (isAdd) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    //selected techs
    setIsSelected([...isSelected, tech]);
    toast.success(`${tech.name} added to your stack!`);
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
          <div className="flex flex-wrap justify-between items-center gap-2 mt-3">
            <span className="badge badge-outline">{tech.category}</span>

            <span className="text-sm text-slate-500">{tech.difficulty}</span>

            <span className="font-semibold flex items-center gap-1">
              <FaStar color="yellow" />
              {tech.rating}
            </span>
          </div>

          <div className="card-action mt-4">
            <button
              onClick={() => handleSelectePlayer()}
              className={`btn btn-primary w-full bg-black rounded-2xl ${isAdd ? "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500" : ""}`}
              //   disabled={isAdd} becasu of this the tostify is not working properly
            >
              {isAdd === true ? "✓ Added to Stack" : "Add to Stack"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
