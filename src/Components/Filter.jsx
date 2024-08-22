import React from "react";
import { filterData } from "../data";
 const Filter =({filterData})=>{
    return(
        <div>
            {filterData.map((data)=>{
                <button>
                    {data.title};
                </button>
            })}
        </div>
    )
 }

 export default Filter;