import React from "react";
import "./style.css";
import Child from "./Child";
import AuthContext from "./authContext"

export default function App() {

  const [name, setName] = React.useState("Sampat");
  const [title, setTitle] = React.useState("kumar");
  const login = () => {
    alert("hello context is working")
  }
  return (
    <React.Fragment>
    <AuthContext.Provider value={{name:name,title:title,login:login}}>
      <h1>Hello StackBlitz!</h1>
     <Child />
     </AuthContext.Provider>
     </React.Fragment>
  );
}
