import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

export class PlaceMarker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {lat, lng, price} = this.props

    return(
      <Marker
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        labelContent={`<div class="map-price-marker"><span>$${price}</span></div>`} />
    );
  }
}

export default PlaceMarker;
