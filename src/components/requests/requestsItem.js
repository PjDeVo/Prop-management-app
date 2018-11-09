import React, { Component } from "react";
import Icon from "../icon";
import Button from "../button";
import AnimateHeight from "react-animate-height";

class RequestsItem extends Component {
  constructor() {
    super();

    this.state = {
      height: "auto"
    };
  }

  toggleDropdown = () => {
    var element = document.getElementById("requests-item");
    if (this.state.height == 0) {
      element.classList.add("bg-F8");
      this.setState({ height: "auto" });
    } else {
      element.classList.remove("bg-F8");
      this.setState({ height: 0 });
    }
  };

  render() {
    return (
      <div id="requests-item" className="requests-item">
        <Icon
          className="requests-item__icon"
          icon="fas fa-exclamation-triangle"
        />
        <div className="requests-item__title">
          <div className="requests-item__title__text">Breh da Fuck</div>
          <Icon
            callback={() => this.toggleDropdown()}
            className="requests-item__title__arrow"
            icon="fas fa-sort-down"
          />
        </div>

        <div className="requests-item__tenant-unit">PattyCakes - unit 115</div>

        <div className="requests-item__date">05/29/1995</div>
        <Button
          icon="fas fa-wrench"
          className="requests-item__move"
          callback={() =>
            console.log("trying to move request item/change jawns status")
          }
        />

        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="item-description">
              <img
                className="item-description__img"
                src="http://via.placeholder.com/160x94"
              />
              <p className="item-description__text">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default RequestsItem;
