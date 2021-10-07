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
 
  // useEffect(()=>{
  //   const getPosts = async()=>{
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=100');
  //     setData(res.date);
  //   }
  //   getPosts();
  // }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=100}`)
      .then((res) => {
        setData(_.chunk(res.data, 10));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const Capitalize = (i) => {
    i.title = i.title[0].toUpperCase().concat(i.title.slice(1));
    i.body = i.body[0].toUpperCase().concat(i.body.slice(1));
  };
  data.forEach((ele) =>
    ele.forEach((i) => {
      Capitalize(i);
    })
  );
  // let newData = data;
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {/* {data.forEach((i) => {
          return <CardRB id={i.id} title={i.title} body={i.body} />;
        })} */}
        {data.forEach((i)=>{
          i.forEach((j)=>{
            return console.log(j.title);
          })
        })}
      </div>
      <Pagination1
        data={data}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
