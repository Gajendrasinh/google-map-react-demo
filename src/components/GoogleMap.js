import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import configureStore from './../Store/store';


const containerStyle = {
    width: '95%',
    height: '95%'
}

export class MapContainer extends Component {

    constructor(props) {
        super(props);

        // console.log(configureStore.getState())

        this.state = { // for google map places autocomplete
            address: '',

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 49.2827291,
                lng: -123.1207375
            }
        };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({ address });
        //   geocodeByAddress(address)
        //     .then(results => getLatLng(results[0]))
        //     .then(latLng => {
        //       console.log('Success', latLng);

        //       // update center state
        //       this.setState({ mapCenter: latLng });
        //     })
        //     .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <div id='googleMaps'>

                <Map
                    containerStyle={containerStyle}
                    google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDQRjgcwgd917cq-ufrPawhlTV8yyr5LgU')
})(MapContainer)