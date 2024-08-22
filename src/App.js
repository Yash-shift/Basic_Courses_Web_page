import React, { useEffect } from "react";
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { apiurl,filterData } from "./data";
import { toast } from "react-toastify";

const App=() => {

  useEffect(() =>{
  const fetchData = async()=>{
    try{
      const res =await fetch(apiurl);
      const data = await res.json();
    }
    catch(error){
      toast.error("somethingwrong happened");

    }
  }
});
  


  return (
    <div>
      <Navbar></Navbar>
      <Filter> filterData={filterData}</Filter>
      <Cards></Cards>
    </div>
  );
};

export default App;