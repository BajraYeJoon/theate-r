import React from "react";
import ActorCard from "./ActorCard";

import IMAGE from "../../images/not-found.png";

const ActorLogic = ({ data }) => {
  return (
    <div>
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
    </div>
  );
};

export default ActorLogic;
