

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            checkNum: "",
            isSubmitted: false,
            inputNum: [123,2,3]
        };
    }

    onChangeEdit = e => {
        this.setState({[e.target.name]: e.target.value})

     
    }

    onSubmit = e => {
        e.preventDefault();
                const {checkNum} = this.state;
        

       if(this.state.inputNum.indexOf(Number(this.state.checkNum)) > -1){
        this.setState({isSubmitted: true});
        }
        
    }




    render() {

        return(
            <div className="card" align="center">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label id="firstLabel">Check Number</label>
                        <input className="form-control"
                               type="text"
                               name="checkNum"
                               ref="checkNum"
                               value={this.state.first}
                               onChange={this.onChangeEdit}
                               />

                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <h1>{this.state.isSubmitted && "Result: " + this.state.checkNum }</h1>
                    {!this.state.isSubmitted}
                </form>

            </div>
        )
    }
}
      ReactDOM.render(<Form />, document.getElementById('app'));