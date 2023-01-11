import React from 'react';
 

const authContext = React.createContext({name:"",
title:"",login:()=>{}});
 
export default authContext;