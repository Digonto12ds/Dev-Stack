import React from "react";
import type { Itech } from "../../type/TypeTech";

interface ItechCardProps {
  tech: Itech;
}

const TechCard = ({ tech }: ItechCardProps) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-8 h-8" src={tech.icon} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
