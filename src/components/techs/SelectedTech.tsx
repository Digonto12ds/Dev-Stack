import React from "react";
import type { Itech } from "../../type/TypeTech";
interface iSelectProps {
    tech: Itech[],
}

const SelectedTech = ({techs}:iSelectProps) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <h2 className="font-bold py-2 px-2">Your Stack</h2>
        <div className="card-body">
          <h2 className="card-title">Xsmall Card</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTech;
