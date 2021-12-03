import { Component } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";

class CardObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            supertype: this.props.carddata.supertype,
            name: this.props.carddata.name,
            set: this.props.carddata.setname,
            hp: this.props.carddata.hp,
            type: this.props.carddata.type,
            tcgprice: this.props.carddata.tcgplayerprice,
            marketprice: this.props.carddata.marketprice,
            link: this.props.carddata.tcglink,
            image: this.props.carddata.image
        }
    }

    handleebay() {
        this.props.ebayfunc(this.state.set, this.state.name);
    }

    render() {
        return (
            <Col className="mt-5 mb-5">
                <Card className="text-centered w-100 h-100">
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                        <Card.Title>Name: {this.state.name}</Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush">
                        {this.state.supertype === "Pokémon"? 
                        <>
                            <ListGroup.Item>Type: {this.state.type}</ListGroup.Item>
                            <ListGroup.Item>HP: {this.state.hp}</ListGroup.Item>
                        </>:null}
                        <ListGroup.Item>Set Name: {this.state.set}</ListGroup.Item>
                        <ListGroup.Item>TCGPlayer Price: <a href={this.state.link}><span>{this.state.tcgprice}</span></a></ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" onClick={this.handleebay.bind(this)}>Get Ebay Results</Button>
                </Card>
            </Col>
        )
    }
}

export default CardObject;