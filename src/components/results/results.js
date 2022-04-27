import './results.scss'

const Results = (props) => {

  return (
    <section>
     <label id="req">
      <p id="left">method:{props.method}</p>
      <p id="right">URL:{props.url}</p>
      </label>
      <div id="data">
      <pre >{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </div>
    </section>
  )
}


export default Results;