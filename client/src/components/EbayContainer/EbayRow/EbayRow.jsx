import { Component } from "react";
import './EbayRow.css';

class EbayRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column ebayrow">
                <img className="align-self-center mt-5 mb-2" src={this.props.carddata.image} style={{height: "7rem", width: "7rem"}} /> <br/>
                <span className="align-self-center">${this.props.carddata.price}</span><br/>
                <a href={this.props.carddata.url}>{this.props.carddata.title}</a> 
                
            </div>
        )
    }
}

export default EbayRow;