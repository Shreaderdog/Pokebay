import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class EbayRow extends Component {

    render() {
        return (
                <Card className="text-centered w-100 h-100">
                    <Card.Img style={{height: "10rem", width: "7rem"}} className="align-self-center" variant="top" src={this.props.carddata.image}/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>${this.props.carddata.price}</ListGroup.Item>
                        <ListGroup.Item><a href={this.props.carddata.url}>{this.props.carddata.title}</a></ListGroup.Item>
                    </ListGroup>
                </Card>
        )
    }
}

export default EbayRow;