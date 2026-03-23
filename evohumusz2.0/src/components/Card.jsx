import React, { Component } from 'react';
import '../css/NewsAndBlogs.css';
import { CardContent } from './CardContent';

export class SmallCard extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-small" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}

export class MediumCard extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-medium" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}

export class LargeCard extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-large" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}