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
    if (this.state.height == 0) {
      this.setState({ height: "auto" });
    } else {
      this.setState({ height: 0 });
    }
  };

  render() {
    return (
      <div className="requests-item">
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
            <div className="requests-item__description">
              <img
                className="requests-item__description-img"
                src="http://via.placeholder.com/160x94"
              />
              <p className="requests-item__description-text">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default RequestsItem;
