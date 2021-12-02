import { Component } from "react";
import { Table } from "react-bootstrap";
import EbayRow from "./EbayRow/EbayRow";

class EbayContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-column">
                <p className="align-self-center"><b>Item Listings</b></p>
                {this.props.res.map((card) => <EbayRow key={card.url} carddata={card} />)}
                </div>
            </div>
        )
    }
}

export default EbayContainer;