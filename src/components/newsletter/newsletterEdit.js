import React, { Component } from 'react';
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
    // this.props.fetchNewsletterWithId()
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className='new-newsletter'>
        <NewNewsletterForm
          title='Edit Newsletter'
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)} />
      </div>
    )
  }
}

export default EditNewsletter;