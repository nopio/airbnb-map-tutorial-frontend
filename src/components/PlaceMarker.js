import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import { PlaceInfoWindow } from './PlaceInfoWindow';

export class PlaceMarker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showTooltip: false
    }
  }

  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const {showTooltip} = this.state
    const {lat, lng, name, price, description} = this.props

    return(
      <Marker
        onClick={this.clickTooltip.bind(this)}
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        labelClass='map-price-container'
        labelContent={`<div class="map-price-marker"><span>$${price}</span></div>`}
        key='marker1'>
        {showTooltip && (
          <PlaceInfoWindow key={'info1'}
                           description={description}
                           name={name}
                           price={price}
                           closeWindow={this.closeWindow.bind(this)}/>
        )}
      </Marker>
    );
  }
}

export default PlaceMarker;
