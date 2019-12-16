import React, { Component } from "react";

class Addnumber extends Component{

    constructor(props){
        super(props);

            this.state={

                num1:0,
                num2:0,
                addition:null
          
              };

            

        }
    
        fetchNum1Data=(event)=>{
            this.setState({num1 : event.target.value})
            //console.log(event.target.value);
        }
        fetchNum2Data=(event)=>{
            this.setState({num2 : event.target.value});
        }

        additionOfNumbers=(e)=>{
            
            let add=parseInt(this.state.num1) + parseInt(this.state.num2);
            console.log(this.state.num1);
            this.setState({addition:add});
            console.log(this.state.addition);
        }
        
    render(){
        
        const style={
            width:"250px",
            display:"inline"
            
        }

    return(

        <div>
            <div className="row">
          <div className="col-md-8">
          
          <div class="p-3 mb-2 bg-info text-black" style={{maxwidth:"18rem",margin:"130px"}}>
          <div className="card-body">
          <h4 className="card-title">Addition Of Two Numbers</h4>
          
          
          <input type="number" placeholder="First Number" className="form-control" style={style} onChange={this.fetchNum1Data}/>
          <span style={{margin:"10px"}}>+</span>
            <input type="number" placeholder="Second Number" className="form-control" style={style} onChange={this.fetchNum2Data}/><br/><br/>
            <button type="button" className="btn btn-secondary" onClick={this.additionOfNumbers}>Add</button><br/><br/>
            <label className="font-weight-bold" htmlFor="lblAddition">{this.state.addition}</label>

        </div>
      </div>

            
          </div>
        </div>

        </div>

    );
}
}
export default Addnumber;