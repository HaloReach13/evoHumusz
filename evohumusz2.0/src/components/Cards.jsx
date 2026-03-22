import React, { Component } from 'react';
import '../css/NewsAndBlogs.css'; // CSS beimportálása

// Közös belső tartalom, hogy ne kelljen háromszor leírni
const CardContent = ({ model }) => (
  <>
    {/* Sötétítő átmenet */}
    <div className="card-overlay"></div>
    
    {/* Üveghatású címke a jobb felső sarokban */}
    <div className={`card-badge`}>
      {model.type.toUpperCase()}
    </div>
    
    {/* Szöveges tartalom */}
    <div className="card-content">
      <h2 className="card-title">{model.title}</h2>
      <p className="card-desc">{model.description}</p>
      
      {/* Magyar formátumú dátum */}
      <p className="card-date">
        {new Date(model.date).toLocaleDateString('hu-HU')}
      </p>
      
      {/* Az "Olvasd el" gomb */}
      <button className="card-button">
        Olvasd el
      </button>
    </div>
  </>
);

// 1. SMALL Kártya
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

// 2. MEDIUM Kártya
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

// 3. LARGE Kártya
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