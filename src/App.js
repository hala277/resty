
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/Footer/Footer";
import Results from "./components/results/results"
import History from './components/history/history'
import React, { useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  history: []
}

function App() {

  const [data, setData] = useState(null);
  const [Request, setRequest] = useState({})
  const [history, setHistory] = useState([]);
  const [state, dispatch] = useReducer(historyReducer, initialState);

  function historyReducer(state = history, action) {
    const { type, payload } = action;

    switch (type) {
      case 'STORE_DATA':
        const history = [...state.history, payload.history]
        return { history };
      default:
        return state;
    }
   
  }
  // console.log('app history',{history})

  function addAction(history) {
    return {
      type: 'STORE_DATA',
      payload: { history },
    }
  }

  const callApi = async (Request) => {
    setRequest(Request);

    const response = await axios(Request.url, (Request.body) ? (Request.body) : null);
    // console.log('app response',response)
    // dispatch(addAction(Request));

    const result = {
      headers: response.headers,
      results: response.data
    }
    setHistory([...history,Request]);
    setData(result);
    dispatch(addAction(Request))
    // console.log('app result', result)
  }
  // console.log('dataaaaaaaaa',data.headers)


  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <History history={history}/>
      <Results data={data}
        url={Request.url} method={Request.method} />
      <Footer />
    </>
  );
}


export default App;
