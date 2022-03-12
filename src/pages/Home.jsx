import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { apiGet } from "../config/config";

const renderResult = (results) => {
  if (results && results.length === 0) {
    return <div> No result found</div>;
  }
  if (results && results.length > 0) {
    return (
      <div>
        {results.map((item) => (
          <div key={item.results.id.id}>{item.results.id.title}</div>
        ))}
      </div>
    );
  }

  return null;
};

export const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/SearchAll/k_7ik12w4q/${input}`).then((result) => {
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

      {renderResult(results)}
    </MainLayout>
  );
};

export default Home;
