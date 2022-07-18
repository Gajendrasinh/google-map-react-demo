import React, { Component, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import store from './../Store/store';

const containerStyle = {
    width: '95%',
    height: '75%'
}

export class MapContainer extends Component {

    constructor(props) {

        super(props);
        console.log("store.getState()")
        console.log(store.getState().location)

        this.state = { // for google map places autocomplete
            address: '',

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 4.210484,
                lng: 101.975769
            }
        };
    }

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
    apiKey: ('AIzaSyCkIJMa0XbMx0pTYyEFg5n-3U6onIiG0fc')
})(MapContainer)