import React,{Component} from "react";

class Pro extends Component
{
    constructor()
    {
        super()
        this.states={
            username:"uday Shelar",
            skills:["html","css","JS"]
        
        };

    }
    render()
    {
        return(
            <>
            <h1>{this.states.username}</h1>
            <ul>
                {
                    this.states.skills.map((x)=>{
                        return(
                            <li>{x}</li>
                        )
                    }
                    )
                }
            </ul>
            </>
        )
    }
}
export default Pro