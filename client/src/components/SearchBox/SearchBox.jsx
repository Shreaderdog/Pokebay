import { Component } from "react";
import { Form, Row, Col, Button} from "react-bootstrap";
import API from '../../api';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            sets: [],
            supertypes: [],
        }
    }

    componentDidMount() {
        API.get('/cards/getTypes')
            .then((result) => {
                this.setState({types: result.data});
            })
        API.get('/cards/getSets')
            .then((result) => {
                this.setState({sets: result.data});
            })
        API.get('/cards/getSuperTypes')
            .then((result) => {
                this.setState({supertypes: result.data});
            })
    }

    setName(name) {
        this.props.setName(name);
    }

    setSet(set) {
        this.props.setSet(set);
    }

    setType(type) {
        this.props.setType(type);
    }

    setSuperType(superType) {
        this.props.setSupertype(superType);
    }

    handleChange(value, checked) {
        if (checked) {
            this.setType(value.type);
        }
    }

    render() {
        return (
            <div className="mt-5">
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Pokemon Name" onChange={(e) => {this.setName(e.target.value)}}/>
                        </Col>
                        <Col>
                            <Form.Select onChange={(e) => {this.setSuperType(e.target.value)}}>
                                <option value={""} >Select a SuperType</option>
                                {this.state.supertypes.map((supertype) => {return (<option key={supertype} value={supertype}>{supertype}</option>)})}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select onChange={(e) => {this.setSet(e.target.value)}}>
                                <option>Select a Set</option>
                                <option value={""}>All Sets</option>
                                {this.state.sets.map((set) => {return (<option key={set.name} value={set.setid}>{set.name}</option>)})}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Check inline label="No Element" name="typegroup" type="radio" onChange={(e) => {this.handleChange("", e.target.checked)}}/>
                                {this.state.types.map((type) => {return (<Form.Check key={type} inline label={type} name="typegroup" type='radio' onChange={(e) => {this.handleChange({type}, e.target.checked)}}/>)})}
                            </Form.Group>
                        </Col>
                        <Col>
                        <Button onClick={this.props.getcardfunc}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default SearchBox;