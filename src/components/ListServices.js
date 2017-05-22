import React, { Component } from 'react'
import { getServices } from '../apis/siteContent.js'


class ListServices extends Component {

  render() {

    const Service = getServices();

    const ServiceItem = (servicesMap) => {
      return servicesMap.services.map((service) => {
        return (
          <li key={service.key} className={service.type}>{service.content}</li>
        )
      });
    }

    return (
      <ul className="list-plian no-margin">
        {ServiceItem(Service)}
      </ul>
    );
  }
}


export default ListServices