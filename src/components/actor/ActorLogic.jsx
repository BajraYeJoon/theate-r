import React from "react";
import ActorCard from "./ActorCard";

import IMAGE from "../../images/not-found.png";
import { FlexGrid } from "../styled";

const ActorLogic = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          name={person.name}
          key={person.id}
          country={person.country ? person.country.name :  null}
          birthday={person.birthday}
          image={person.image ? person.image.medium : IMAGE}
          deathday={person.deathday}
          gender={person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorLogic;
