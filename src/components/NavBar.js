import React, {Component} from "react";
import "../styles/NavBar.scss";

class NavBar extends Component {
    render() {
        return(
            <div>
                <div className="logo"/>
                <div className="nav-container">
                    <ul>
                        <li className="home nav-active">
                            <p className="nav-text"/>
                        </li>
                        <li className="message">
                            <p className="nav-text"/>
                        </li>
                        <li className="wishlist">
                            <p className="nav-text"/>
                        </li>
                        <li className="setting">
                            <p className="nav-text"/>
                        </li>
                        <li className="account">
                            <p className="nav-text"/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;
