import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import NewNewsletterForm from './newsletterNewForm'

class EditNewsletter extends Component {

  onSubmit = (fields, button) => {

    // if (button == 'submit') {
    //   this.props.history.push('/dashboard');
    // } else {
    //   // save new newsletter on the backend and perform a post req
    //   console.log('trying to submit backend');

    // }
    console.log('trying to submit')
  }

  onCancel = () => {
    this.props.history.push('/dashboard');

  };

  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);

  }

  render() {
    return (
      <div className='new-newsletter'>
        <NewNewsletterForm
          newsletterToEdit={this.props.newsletterToEdit}
          formTitle='Edit Newsletter'
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return {
    newsletterToEdit
  }
}


export default connect(null, actions)(EditNewsletter);