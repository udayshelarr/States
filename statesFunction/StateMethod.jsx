import React, { Component } from "react";

class StateMethod extends Component
{
    state={userName:"Uday Shelar"};
    render()
    {
        console.log(this)
        return(
            <h1>{this.state.userName}</h1>
        )
    }
}
export default StateMethod