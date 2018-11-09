import React, { Component } from "react";
import NewNewsletterForm from "./newsletterNewForm";

class NewNewsletter extends Component {
  onSubmit = (fields, button) => {
    // if (button == 'submit') {
    //   this.props.history.push('/dashboard');
    // } else {
    //   // save new newsletter on the backend and perform a post req
    //   console.log('trying to submit backend');

    // }
    console.log("trying to submit");
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

export default NewNewsletter;
