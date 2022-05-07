import './results.scss'
import ReactJson from 'react-json-view';

const Results = (props) => {
  // console.log('hhhhhhhhhhhhhhh result --> '+ props.data.headers);
  return (
    <section>
      <label id="req">
        <p id="left">method:{props.method}</p>
        <p id="right">URL:{props.url}</p>
      </label>
      {/* <div id="data">
      <pre >{props.data ? JSON.stringify(props.data, null, 2) : null}</pre>
      </div> */}
       <pre > 
         {props.data ? 

      <div id="data">
      <h2>Headers</h2>
      <ReactJson src={props.data.headers} />
      <h2>Results</h2>
      <ReactJson src={props.data.results} />
     
      </div>
      : null}</pre>
    </section>
  )
}


export default Results;