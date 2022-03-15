import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import { apiGet } from "../config/config";



export const Home = () => {
  const [input, setInput] = useState("");
  const [res, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      console.log(result)
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

  const renderResult = () => {
    if (res && res.length === 0) {
      return <div> No result found</div>;
    }

    if (res && res.length > 0) {
      return (
        <div>
          {res.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
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
      />
      <button type="button" onClick={onSearch}>
        {" "}
        Search
      </button>

      {renderResult()}
    </MainLayout>
  );
};

export default Home;
