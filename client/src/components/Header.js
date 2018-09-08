import React,{Component} from 'react';
import '../../node_modules/uikit/dist/css/uikit.css'
import '../App.css';
import '../../node_modules/font-awesome/css/font-awesome.css'; 

class Header extends Component{





render()
{
return(
<nav style={{background:"white"}}  className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li  className="uk-active"><a id="font" href="#">lifestyle</a></li>
            <li>
                
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        {/* <li className="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li> */}
                    </ul>
                </div>
            </li>
        </ul>

        <div className="uk-navbar-right">
                        
            
                        
                        </div>

    </div>
                      


</nav>
)

}


}

export default Header;
