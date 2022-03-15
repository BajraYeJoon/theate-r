import React from "react";
import ShowCard from "./ShowCard";

import IMAGE from "../../images/not-found.png";
import { FlexGrid } from "../styled";
const ShowLogic = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowLogic;
