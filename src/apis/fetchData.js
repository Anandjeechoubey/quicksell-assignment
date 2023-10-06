import Axios from "axios";
// import React,  {useState} from "react";

const fetchData = () => {
  return Axios.get("https://jsonplaceholder.typicode.com/posts/1");
};

export default fetchData;
