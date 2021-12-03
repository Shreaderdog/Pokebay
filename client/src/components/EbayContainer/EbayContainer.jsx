import { Component } from "react";
import { Row } from "react-bootstrap";
import EbayRow from "./EbayRow/EbayRow";

class EbayContainer extends Component {

    render() {
        return (
            <div className="ml-5">
            {this.props.res.map((card) => {
                return(
                <Row key={card.url} className="mt-5">
                    <EbayRow carddata={card}/>
                </Row>
            )
            })}
        </div>
        )
    }
}

export default EbayContainer;