
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/Footer/Footer";
import Results from "./components/results/results"
import React, { useState } from "react";
import axios from "axios";

function App (){

  const [data,setData] = useState(null);
  const [Request,setRequest]= useState({})
  

const callApi = async (Request) => {
  setRequest(Request);

const response = await axios(Request.url,(Request.body) ? (Request.body): null );
const result = {
  headers: response.headers,
  results:response.data
}
setData(result);
console.log('app result',result)
}
// console.log('dataaaaaaaaa',data.headers)

  
  return (
   <>
  <Header/>
  <Form handleApiCall = {callApi}/>
  <Results data={data}
  url={Request.url} method={Request.method}/>
  <Footer/>
   </>
  );
}


export default App;
