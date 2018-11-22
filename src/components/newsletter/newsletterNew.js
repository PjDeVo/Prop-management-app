import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import NewNewsletterForm from "./newsletterNewForm";

class NewNewsletter extends Component {
  onSubmit = fields => {
    const { title, body, image } = fields;
    var formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);

    this.props.createNewNewsletter(formData, () => {
      this.props.history.push("/dashboard");
    });
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="new-newsletter">
        <NewNewsletterForm
          formTitle="New Newsletter"
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          fieldOnePlaceholder="Newsletter Title"
          fieldOneTitle="Newsletter Title"
          fieldTwoPlaceholder="Body Here"
          fieldTwoTitle="Description"
        />
      </div>
    );
  }
}

NewNewsletter = connect(
  null,
  actions
)(NewNewsletter);

export default NewNewsletter;
