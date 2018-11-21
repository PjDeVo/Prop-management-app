import React, { Component } from "react";
import NewNewsletterForm from "../newsletter/newsletterNewForm";
import { connect } from "react-redux";

import * as actions from "../../actions";

class NewRequest extends Component {
  onSubmit = fields => {
    // if (button == 'submit') {
    //   this.props.history.push('/dashboard');
    // } else {
    //   // save new newsletter on the backend and perform a post req
    //   console.log('trying to submit backend');

    // }
    console.log(fields, "bruh.");
    const { title, body, image } = fields;
    var formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);

    console.log("bruh");
    this.props.createNewRequest(this.props._id, formData, () => {
      this.props.history.push("/dashboard");
    });
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="new-request">
        <NewNewsletterForm
          formTitle="New Service Request"
          onCancel={() => this.onCancel()}
          onSubmit={this.onSubmit}
          fieldOnePlaceholder="Service Request Title"
          fieldOneTitle="Service Request Title"
          fieldTwoPlaceholder="Service Description Here"
          fieldTwoTitle="Description"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { _id } = state.auth.user;
  return { _id };
}

NewRequest = connect(
  mapStateToProps,
  actions
)(NewRequest);

export default NewRequest;
