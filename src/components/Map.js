import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} />
));

export class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 7

    this.state = {
      lat: 50.0515918,
      lng: 19.9357531
    };
  }

  render() {
    var {lat, lng} = this.state;

    return(
      <div style={{width: `750px`, height: `750px`}}>
        <AirbnbMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}
