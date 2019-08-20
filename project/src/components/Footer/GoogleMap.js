import React from 'react';
import GoogleMapReact from 'google-map-react';
class GoogleMap extends React.Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render(){
        return(
        <section className="google-map">
            <GoogleMapReact
            bootstrapURLKeys={{key:"AIzaSyDDB_h74FEYaq49bdcsY_jo3Y3jCSJm7s0"}}   
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

          </GoogleMapReact>
        </section>
        )
    }
}
export default GoogleMap