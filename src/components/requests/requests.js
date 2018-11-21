import React, { Component } from "react";

import * as actions from "../../actions";
import { connect } from "react-redux";
import RequestsItem from "./requestsItem";

class Requests extends Component {
  render() {
    return (
      <div className="requests">
        {console.log(this.props.requests)}
        {this.props.requests.map(requestItem => {
          return <RequestsItem {...requestItem} key={requestItem._id} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { requests } = state.requests;
  return {
    requests
  };
}

export default connect(mapStateToProps)(Requests);
