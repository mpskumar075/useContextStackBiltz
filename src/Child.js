import React from "react";
import "./style.css";
import SubChild from "./SubChild"

export default function Child(props) {
  return (
    <div>
      <h1>Passing to SubChild</h1>
       <SubChild /> 
    </div>
  );
}
