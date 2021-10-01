import React from "react";
import "./planets.css";
import planetImg from "../../assets/img/planets.png";
import SelectCard from "./planetSelectCard/SelectCard.jsx";
import { Component } from "react";
import api from "../../services/api.js";

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], previousPage: "", nextPage: "" };
  }

  async componentDidMount() {
    await api
      .get("/planets")
      .then((response) => {
        const list = response.data;
        const previousPage = list.previous
          ? list.previous.split("/").reverse()[0]
          : "";
        const nextPage = list.next ? list.next.split("/").reverse()[0] : "";

        this.setState({
          list,
          previousPage,
          nextPage,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  renderNext(event) {
    event.preventDefault();
    const { nextPage } = this.state;
    api
      .get(`/planets/${nextPage}`)
      .then((response) => {
        const list = response.data;
        const previousPage = list.previous
          ? list.previous.split("/").reverse()[0]
          : "";
        const nextPage = list.next ? list.next.split("/").reverse()[0] : "";

        this.setState({
          list,
          previousPage,
          nextPage,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  renderPrevious(event) {
    event.preventDefault();
    const { previousPage } = this.state;
    api
      .get(`/planets/${previousPage}`)
      .then((response) => {
        const list = response.data;
        const previousPage = list.previous
          ? list.previous.split("/").reverse()[0]
          : "";
        const nextPage = list.next ? list.next.split("/").reverse()[0] : "";

        this.setState({
          list,
          previousPage,
          nextPage,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  renderLeftArrow() {
    const { previousPage } = this.state;
    let arrow;
    if (previousPage !== "") {
      arrow = (
        <span type="button" onClick={(event) => this.renderPrevious(event)}>
          &#60;
        </span>
      );
    }
    return <div>{arrow}</div>;
  }
  renderRightArrow() {
    const { nextPage } = this.state;
    let arrow;
    if (nextPage !== "") {
      arrow = (
        <span type="button" onClick={(event) => this.renderNext(event)}>
          &#62;
        </span>
      );
    }
    return <div>{arrow}</div>;
  }

  renderSelectCards() {
    return this.state.list.results?.map((items) => {
      const planetID = items.url.split("/").reverse()[1];
      return <SelectCard key={planetID} id={planetID} name={items.name} />;
    });
  }

  render() {
    return (
      <div className="planetsMain">
        <div className="planetImg">
          <img src={planetImg} alt="tatooine" />
        </div>
        <div className="content">
          <div className="header">
            <div className="titleSection">
              <h1>Planets</h1>
            </div>
            <div className="description">
              <h3>Discover Planets of the Galaxy</h3>
              <h3>Click on a Planet name to begin</h3>
            </div>
          </div>
          <div className="selectcardSection">
            <div className="arrow">{this.renderLeftArrow()}</div>
            <div className="cards">{this.renderSelectCards()}</div>
            <div className="arrow">{this.renderRightArrow()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Planets;
