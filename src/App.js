import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardRB from "./Components/CardRB";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Pagination1 from "./Components/Pagination";
import _ from "lodash";

function App() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=${12 * 8}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const Capitalize = (i) => {
    i.title = i.title[0].toUpperCase().concat(i.title.slice(1));
    i.body = i.body[0].toUpperCase().concat(i.body.slice(1));
  };

  data.forEach((ele) => Capitalize(ele));

  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {data.map((i) => {
          return <CardRB id={i.id} title={i.title} body={i.body} />;
        })}
      </div>
      <Pagination1 pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
