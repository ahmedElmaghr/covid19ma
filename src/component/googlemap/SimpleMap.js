import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import './SimpleMap.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.438}
            lng={-7.519}
            text="Morocco"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;