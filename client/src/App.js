import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Navigation from './components/Navigation/Navigation';
import CardContainer from "./components/CardContainer/CardContainer";
import EbayContainer from "./components/EbayContainer/EbayContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import API from './api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let cardfunc = this.getcards.bind(this);
    let ebayfunc = this.getebay.bind(this);
    let setfunc = this.setSet.bind(this);
    let namefunc = this.setName.bind(this);
    let typefunc = this.setType.bind(this);
    let supertypefunc = this.setSupertype.bind(this);
    this.state = {
      ebaykey: 1,
      key: 1,
      type: "",
      name: "",
      set: "",
      supertype: "",
      setfunc: setfunc,
      namefunc: namefunc,
      typefunc: typefunc,
      supertypefunc: supertypefunc,
      cardfunction: cardfunc,
      ebayfunction: ebayfunc,
      cardlist: [],
      ebayResults: []
    };
  }

  componentDidMount() {
    this.getcards();
  }

  errortoast(msg) {
    toast.error(msg, {position: toast.POSITION.TOP_RIGHT});
  }

  setSet(set) {
    this.setState({set: set});
  }

  setName(name) {
    this.setState({name: name});
  }

  setSupertype(supertype) {
    this.setState({supertype: supertype});
  }

  setType(type) {
    this.setState({type: type});
  }

   getcards() {
    let searchquery = {
      name: this.state.name,
      type: this.state.type,
      set: this.state.set,
      supertype: this.state.supertype
    }
    API.post('/cards/search', searchquery)
      .then(res => {
        if(res.data.error) {
          console.log(res.data.error)
          this.errortoast(res.data.error);
        } else {
          this.setState({cardlist: res.data.cards});
          this.setState({key: this.state.key+1});
        }
      }
    )
  }

   getebay(set, name) {
    let searchquery = {
      name: name,
      set: set
    }

    API.post('/ebay/ebayFind', searchquery)
      .then(res => {
        this.setState({ebayResults: res.data});
        this.setState({ebaykey: this.state.key+1});
      }
    )
  }

  render() {
    return (
      <>
        <Navigation />
        <SearchBox setSet={this.state.setfunc} setName={this.state.namefunc} setType={this.state.typefunc} setSupertype={this.state.supertypefunc} getcardfunc={this.state.cardfunction}/>
        <div className="d-flex flex-row">
          <Container className="mt-5 d-flex flex-column w-100  bg-light">
            <CardContainer key={this.state.key} cards={this.state.cardlist} ebayfunc={this.state.ebayfunction} />
          </Container>
          <Container className="mt-5 ml-10 d-flex w-50  h-50 bg-light">
            <EbayContainer key={this.state.ebaykey} res={this.state.ebayResults} />
          </Container>
          <ToastContainer/>
        </div>
      </>
    )
  }
}

export default App;
