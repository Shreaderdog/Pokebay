import { Component } from "react";
import { Row } from "react-bootstrap";
import CardObject from './CardObject/CardObject';

class CardContainer extends Component {
    
    constructor(props) {
        super(props);
        let x = [];
        let y = [];
        let z = [];
        for (var i = 0; i < this.props.cards.length; i++) {
            if (i < 4) {
                x = [...x, this.props.cards[i]];
            } else if (i < 8) {
                y = [...y, this.props.cards[i]];
            } else {
                z = [...z, this.props.cards[i]];
            }
        }
        this.state = {
            c1: x,
            c2: y,
            c3: z
        }
    }

    render() {
        return (
            <>
                <Row className="align-self-flex-start">
                    {this.state.c1.map((card) => <CardObject key={card.name+card.setname+card.tcgplayerprice} carddata={card} ebayfunc={this.props.ebayfunc} />)}
                </Row>
                <Row className="align-self-flex-start">
                    {this.state.c2.map((card) => <CardObject key={card.name+card.setname+card.tcgplayerprice} carddata={card} ebayfunc={this.props.ebayfunc} />)}
                </Row>
                <Row className="align-self-flex-start">
                    {this.state.c3.map((card) => <CardObject key={card.name+card.setname+card.tcgplayerprice} carddata={card} ebayfunc={this.props.ebayfunc} />)}
                </Row>
            </>
        )
    }
}

export default CardContainer;