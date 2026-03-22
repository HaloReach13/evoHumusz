import React, { Component } from 'react';
import '../css/NewsAndBlogs.css';

const CardContent = ({ model }) => (
  <>
    <div className="card-overlay"></div>
    
    <div className={`card-badge`}>
      {model.type.toUpperCase()}
    </div>
    
    <div className="card-content">
      <h2 className="card-title">{model.title}</h2>
      <p className="card-desc">{model.description}</p>
      
      <p className="card-date">
        {new Date(model.date).toLocaleDateString('hu-HU')}
      </p>
      
      <button className="card-button">
        Olvasd el
      </button>
    </div>
  </>
);

export class CardSmall extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-small" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}

export class CardMedium extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-medium" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}

export class CardLarge extends Component {
  render() {
    const { model } = this.props;
    return (
      <div className="card-base card-large" style={{ backgroundImage: `url(${model.image})` }}>
        <CardContent model={model} />
      </div>
    );
  }
}