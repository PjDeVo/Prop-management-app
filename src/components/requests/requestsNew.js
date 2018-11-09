import React, { Component } from "react";
import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewRequest extends Component {
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
      <div className="new-request">
        <NewNewsletterForm
          formTitle="New Service Request"
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
        />
      </div>
    );
  }
}

export default NewRequest;
