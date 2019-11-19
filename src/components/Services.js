import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Services extends Component {

  state={
    services:[
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.'
      },
      {
        icon: <FaHiking />,
        title: 'free hikings',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle van',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.'
      },{
        icon: <FaBeer />,
        title: 'Stroges Drink',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ab.'
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index)=>{
            return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
