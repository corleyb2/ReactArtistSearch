import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import MediaCard from "./components/MediaCard";
import SearchAppBar from "./components/SearchAppBar";

function App() {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getResults() {
      const getData = await axios.get(
        `https://itunes.apple.com/search?term=${query}`
      );
      await setData(getData.data.results);
    }
    getResults();
  }, [toggle]);
  // console.log(data);
  return (
    <div className="App">
      <SearchAppBar
        setQuery={setQuery}
        setToggle={setToggle}
        toggle={toggle}
      ></SearchAppBar>
      <header className="App-header"></header>

      {data.map((el) => (
        <MediaCard data={el} key={el.trackId} />
      ))}
    </div>
  );
}

export default App;
