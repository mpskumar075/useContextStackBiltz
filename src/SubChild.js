import React from "react";
import AuthContext from "./authContext";


export default function SubChild(props) {
  var useContextData = React.useContext(AuthContext)

  return (
    <>
    <h1>{useContextData.name}</h1>
    <h1>{useContextData.title}</h1>
    <button onClick={useContextData.login}>Click to run context</button>
    </>
  );
}