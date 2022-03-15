import React from "react";
import ShowCard from "./ShowCard";

import IMAGE from "../../images/not-found.png";
const ShowLogic = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowLogic;
