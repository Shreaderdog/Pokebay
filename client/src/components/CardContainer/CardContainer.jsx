import { Component } from "react";
import { Row } from "react-bootstrap";
import CardObject from './CardObject/CardObject';

class CardContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            c: []
        }
    }

    componentDidMount() {
        let x = [];
        let y = [];
        let n = 0;
        for (var i = 0; i < this.props.cards.length; i++) {
            if (n < 4) {
                y = [...y, this.props.cards[i]];
                n += 1;
            } else {
                x = [...x, y];
                y = [];
                n = 0;
            }
        }
        if (y.length > 0) {
            x = [...x, y]
        }
        this.setState({ c: x})
    }

    render() {
        return (
            <div className="mr-5">
                {this.state.c.map((c1, index) => {
                    return (
                        <Row className="align-self-flex-start" key={c1[0].image+index}>
                            {c1.map((card,) => <CardObject key={card.name+card.setname+card.tcgplayerprice} carddata={card} ebayfunc={this.props.ebayfunc} />)}
                        </Row>
                    )
                })}
            </div>
        )
    }
}

export default CardContainer;