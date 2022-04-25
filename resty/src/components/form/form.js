import React from "react";
import './form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: '',
            method: ''
         }


        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    changeHandler(e) {
        let url = e.target.value;
        this.setState({ url });
    }
    submitHandler(e) {
        e.preventDefault();

    }

    buttonHandler(e) {
        let method = e.target.value;
        this.setState({ method })
    }

    render() {
        return (
            <>
                <form id='formid' align="center">
                    <label id="url">
                        <span> URL:</span>
                        <input type="text" name="url" id="url" placeholder="http://api.url.here" onChange={this.changeHandler} />
                        <button type="submit" value="submit" onClick={this.submitHandler}> GO! </button>
                    </label>
                    <br></br>
                    <br></br>
                    <label id="methode">
                        <input type="button" value="GET" onClick={this.buttonHandler} />
                        <input type="button" value="POST" onClick={this.buttonHandler} />
                        <input type="button" value="PUT" onClick={this.buttonHandler} />
                        <input type="button" value="DELETE" onClick={this.buttonHandler} />
                    </label>
                    <br id="br"></br>
                   
                    <textarea readonly className="results" value={this.state.method +' '+ this.state.url} />
                   
                </form>

                <div>
                   
                </div>
            </>
        )
    }
}
export default Form;