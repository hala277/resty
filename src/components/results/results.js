import './results.scss'

const Results = (props) => {

  return (
    <section>
      <p>method:{props.method}</p>
      <p>URL:{props.url}</p>
      <div id="data">
      <pre >{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </div>
    </section>
  )
}


export default Results;