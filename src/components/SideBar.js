import React, {Component} from "react";
import "../styles/SideBar.scss";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class SideBar extends Component {
    state = {
        filters: false
    };

    componentDidMount() {
        M.AutoInit();
    }

    changeInput = (event) => {
        let active = false;
        if (event.target.checked) {
            document.getElementById(event.target.name).classList.add("active");
            active = true;
        } else {
            document.getElementById(event.target.name).classList.remove("active");
            let inputs = document.getElementsByTagName("input");
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].type === 'checkbox' && inputs[i].checked) {
                    active = true;
                }
            }
        }
        this.setState({filters: active});
    };

    render() {
        return (
            <div className="sideBar-container">
                <div className={this.state.filters ? "text-filters active": "text-filters"}/>
                <div className="filters-container">
                    <ul>
                        <li id="sales" className="sales">
                            <div className="switch">
                                <label>
                                    <input name="sales" type="checkbox" onChange={this.changeInput} />
                                    <span className="lever"/>
                                </label>
                            </div>
                        </li>
                        <li id="calendar" className="calendar">
                            <div className="switch">
                            <label>
                                <input name="calendar" type="checkbox" onChange={this.changeInput} />
                                <span className="lever"/>
                            </label>
                            </div>
                        </li>
                        <li id="heart" className="heart">
                            <div className="switch">
                                <label>
                                    <input name="heart" type="checkbox" onChange={this.changeInput} />
                                    <span className="lever"/>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="text-status" placeholder="" >

                </div>
                <div className="input-container">
                    <input className="search-input"  placeholder="Search" type="text" />
                </div>
                <div className="button-container">
                    <button className="deliver-btn"/>
                </div>
            </div>
        )
    }
}

export default SideBar;