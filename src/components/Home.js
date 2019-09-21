import React, {Component} from "react";
import SideBar from "./SideBar";
import Delivery from "./Delivery";
import "../styles/Home.scss";

class Home extends Component {

    //Static initialize values
    state = {
        deliveries: [ {id:"1", checked: false}, {id:"2", checked: true}, {id:"3", checked: false}, {id:"4", checked: true}, {id:"5", checked: true} ],
        checkedList: ["2", "4", "5"] //Ids of checked deliveries
    };

    checkAllHandler = (event) => {
        if(!(event.target.classList.contains("active"))) {
            let checkList = [];
            event.target.classList.add("active");
            this.state.deliveries.forEach(element => {
                checkList.push(element.id);
            });
            this.setState({
                deliveries: (this.state.deliveries.map(element => {element.checked = true; return element})),
                checkedList: checkList
            });
        } else {
            event.target.classList.remove("active");
            this.setState({
                deliveries: (this.state.deliveries.map(element => {element.checked = false; return element})),
                checkedList: []
            });
        }
    };

    checkedDelivery = (deliveryId, isChecked) => {
        let list = this.state.checkedList;
        if (isChecked) {
            if (list.indexOf(deliveryId.toString()) === -1) {
                list.push(deliveryId);
            }
            this.setState({ checkedList: list});
        }else {
            if (list.indexOf(deliveryId.toString()) !== -1) {
                list = list.filter(value => { return (value !== deliveryId) });
                this.setState({ checkedList: list});
            }
        }
        let newCheck = this.state.deliveries.map(value => {
            value.checked = list.indexOf(value.id.toString()) !== -1;
            return value;
        });

        this.setState({deliveries: newCheck});
    };

    render() {

        let deliveries = this.state.deliveries.map(element => {
           return <Delivery key={element.id} id={element.id} checked={element.checked} checkedDelivery={this.checkedDelivery} />
        });

        return(
           <>
               <div className="home-container">
                   <SideBar/>
                    <div className="delivers-container">
                        <div className="delivers-options-container">
                            <div className=
                                     { deliveries.length === this.state.checkedList.length? "checkAll active": "checkAll"}
                                 onClick={this.checkAllHandler} />
                            <div className="input-container">
                                <input className="search-input"  placeholder="Search" type="text" />
                            </div>
                        </div>
                        {deliveries}
                    </div>
                </div>
               <div className="add-button" />
           </>
        )
    }
}

export default Home;