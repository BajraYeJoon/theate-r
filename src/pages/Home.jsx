import React, { useState } from "react";
import ActorLogic from "../components/actor/ActorLogic";
import MainLayout from "../components/MainLayout";
import ShowLogic from "../components/shows/ShowLogic";
import { apiGet } from "../config/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [res, setResults] = useState(null);
  const [optionValue, setOptionValue] = useState("shows");

  const isSearch = optionValue === "shows";

  const onSearch = () => {
    apiGet(`/search/${optionValue}?q=${input}`).then((result) => {
      setResults(result);
      console.log(result);
    });
  };

  const inputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onKeyDown = (event) => {
    if (event.code === "Enter") {
      onSearch();
    }
  };

  const radioChange = (e) => {
    setOptionValue(e.target.value);
  };

  console.log(optionValue);

  const renderResult = () => {
    if (res && res.length === 0) {
      return <div> No result found</div>;
    }

    if (res && res.length > 0) {

    
      return res[0].show
        ? <ShowLogic data={res}/>
        : <ActorLogic data={res}/>;
    }
    return null;
  };

  return (
    <MainLayout>
      <input
        type="text"
        onChange={inputChange}
        onKeyDown={onKeyDown}
        value={input ?? ""}
        placeholder="Search for shows and actors"
      />

      <div>
        <label htmlFor="search-shows">
          Shows
          <input
            type="radio"
            id="search-shows"
            value="shows"
            onChange={radioChange}
            checked={isSearch}
          />
        </label>

        <label htmlFor="search-actors">
          Actors
          <input
            type="radio"
            id="search-actors"
            value="people"
            onChange={radioChange}
            checked={!isSearch}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        {" "}
        Search
      </button>

      {renderResult()}
    </MainLayout>
  );
};

export default Home;
