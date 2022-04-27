import React from "react";
import './form.scss'
import { useState } from "react";
// import useForm from "react-hook-form";

function Form(props) {


    const [url, setUrl] = useState();
    const [method, setMethod] = useState('GET');
    const [body, setBody] = useState();
    // const [isLoaded, setIsLoaded] = useState(false);
    // const { setError, error } = useForm();


    function changeHandler(e) {
        e.preventDefault();
        let urlsub = e.target.value;
        // this.setState({ urlsub })
        setUrl(urlsub);

    }
    function submitHandler(e) {
        e.preventDefault();
        const data = {
            method: method,
            url: url,
        }

        if (body) {
            data.body = body;
        }
        else {
            props.handleApiCall(data);
        }
    }

    function buttonHandler(e) {
        let methodhan = e.target.value;
        setMethod(methodhan);
    }

    function textHandler(e) {
        e.preventDefault();
        setBody(e.target.value);
    }

    // useEffect(() => {
    //     fetch("https://api.example.com/items")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setBody(result);
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   }, [])

    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    return (
        <>
            <form id='formid' align="center" onSubmit={submitHandler}>
                <label id="url">
                    <span> URL:</span>
                    <input type="text" name="url" id="url" placeholder="http://api.url.here" onChange={changeHandler} />
                    <button type="submit" value="submit" onClick={submitHandler}> GO! </button>
                </label>
                <br></br>
                <br></br>
                <label id="methode">
                    <input type="button" value="GET" onClick={buttonHandler} />
                    <input type="button" value="POST" onClick={buttonHandler} />
                    <input type="button" value="PUT" onClick={buttonHandler} />
                    <input type="button" value="DELETE" onClick={buttonHandler} />
                </label>
                <br id="br"></br>

                {/* <textarea readonly className="results" value={method +' '+ url} /> */}
                <label >
                    <textarea id="textarea"  type="textarea" onChange={textHandler} />
                </label>
            </form>

            <div>

            </div>
        </>
    )
      }
// }

export default Form;