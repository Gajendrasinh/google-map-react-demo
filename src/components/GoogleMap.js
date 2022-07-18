import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import store from './../Store/store';
import { useSelector } from 'react-redux';

const containerStyle = {
    width: '95%',
    height: '75%'
}


export class MapContainer extends Component {

    constructor(props) {

        super(props);

        store.subscribe(() => this.setState({ mapCenter: store.getState().searchReducer.location }))

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 4.210484,
                lng: 101.975769
            }
        };

    }
    componentWillUnmount() {
        store.unsubscribe()
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