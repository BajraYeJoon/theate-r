import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
export const Home = () => {
  const [input, setInput] = useState("");

  const onSearch = () => {
    fetch(`https://imdb-api.com/en/API/SearchAll/k_7ik12w4q/${input}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
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

  return (
    <MainLayout>
      <input
        type="text"
        onChange={inputChange}
        onKeyDown={onKeyDown}
        value={input ?? ""}
      />
      <button type="button" onClick={onSearch}>
        {" "}
        Search
      </button>
    </MainLayout>
  );
};

export default Home;
