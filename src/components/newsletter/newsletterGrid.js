import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox'

import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';
import { setTimeout } from 'timers';



class NewsletterGrid extends Component {

  handleAddNewsletter = () => {
    this.props.history.push('/newsletter/new');
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchNewsletters();
    }, 1000);

  }

  render() {


    return (
      <div className='newsletter-grid'>
        <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()} />

        <NewsletterBox {...this.props.latestNewsletter} />
        < NewsletterArchive />
        <NewsletterLatest {...this.props.latestNewsletter} />

      </div>
    )
  }
}

function mapsStateToProps(state) {
  const { newsletters } = state.newsletters;
  const latestNewsletter = newsletters[0];
  return {
    latestNewsletter
  }
}

export default connect(mapsStateToProps, actions)(NewsletterGrid);