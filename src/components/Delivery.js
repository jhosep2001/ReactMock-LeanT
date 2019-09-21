import React, {Component} from "react";
import DeliveryClass from "../model/DeliveryClass";
import "../styles/Delivery.scss";

class Delivery extends Component {

    state= {
        checked: false,
        delivery: {}
    };

    componentDidMount() {
        let delivery = new
        DeliveryClass(
            this.props.id,
            Date(Date.now()).toString().split("GM")[0],
            "Houston, TX, 33619",
            "Atlanta, GA, 30123",
            "truck",
            250
        );
        this.setState({
            checked: this.props.checked,
            delivery: delivery
        });
    }

    checkDelivery = (event) => {
        if(!(event.target.classList.contains("active"))) {
            event.target.classList.add("active");
            this.setState( {checked: true});
            this.props.checkedDelivery(this.state.delivery.id, true);
        } else {
            event.target.classList.remove("active");
            this.setState( {checked: false});
            this.props.checkedDelivery(this.state.delivery.id, false);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.checked !== this.props.checked) {
            this.setState({checked: this.props.checked});
        }
    }

    render() {
        return(
            <div className="deliveryItem-Container">
                <div className={this.state.checked? "checkDelivery active" : "checkDelivery"} id={this.state.delivery.id}
                     onClick={this.checkDelivery} />
                <div className="delivery-data-container">
                    <div className="delivery-date">{this.state.delivery.date}</div>
                    <div className="delivery-route">
                        <div className="delivery-origin">{this.state.delivery.origin}</div>
                        <div className="delivery-route-icons">
                            <div className="navigation-icon" />
                            <div className="arrow-icon"/>
                        </div>
                        <div className="delivery-destination">{this.state.delivery.destination}</div>
                    </div>
                    <div className={this.state.delivery.transportMode}/>
                    <div className="delivery-value">{this.state.delivery.value}</div>
                    <div className="option-square"/>
                    <div className="options-points"/>
                </div>
            </div>
        )
    }
}

export default Delivery;