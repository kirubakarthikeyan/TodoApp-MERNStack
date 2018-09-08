import React,{Component} from 'react';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { withRouter, Link } from 'react-router-dom'



class Card extends Component{






render()
{


    

    
return(
    <div className="row container-fluid topper">

{/* <ListDays/> */}
    
    
<div className="col-md-12">



<div className="row">



<div className="col-md-4 ">
<div onClick={()=>this.props.history.push('/code')} className="uk-card code uk-card-default  uk-card-body uk-width-1-2@m">
    <h3 className="uk-card-title">Code</h3>
   
    <div class="uk-card-media-top">
                <img src="https://juststickers.in/wp-content/uploads/2017/11/ninja-coder.png" alt=""/>
            </div>
   
</div>
</div>

</div>
</div>





</div>





)

}


}

export default Card;
