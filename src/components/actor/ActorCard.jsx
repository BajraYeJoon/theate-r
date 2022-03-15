import React from "react";

const ActorCard = ({ image, gender, country, birthday, deathday, name }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>

      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>

      <p>{country ? `Comes from (${country})` : "No country known"}</p>

      {birthday ? <p>Born on {birthday}</p> : null}

      <p>{deathday ? `Died on ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
