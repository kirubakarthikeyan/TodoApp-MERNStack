import React from 'react';
import {connect} from 'react-redux';
import  * as action from '../actions/actions';
import { setTimeout } from 'timers';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../../node_modules/uikit/dist/js/uikit'


 class Alert extends React.Component
{
state={}

    displayAlert()
    {
        if(this.props.message!=undefined)
        {

            setTimeout(()=>
            {
        
                    this.setState({
                        val:{display:"none"}
                    })
        
            },1000)
        return(<div style={this.state.val} class="alert alert-success" role="alert">
        {this.props.message}
      </div>)
        }

        else{
            return(null);
        }


   


    }

    


 




    

render()
{

 return(
    <div>
{this.displayAlert()}

</div>
 )
    

}


}

export default Alert;