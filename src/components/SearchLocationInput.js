import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from './../Store/actions/searchAction';
import Autocomplete from "react-google-autocomplete";
import store from './../Store/store';


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => ({
    searchAction: (place) => dispatch(searchAction(place))
});

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
    ...state
})

/**
 * @class SearchLocationInput
 * @extends {Component}
 */

class SearchLocationInput extends Component {

    render() {
        return (
            <div>
                <Autocomplete
                    style={{ width: "250px", marginBottom: "10px", height: "30px" }}
                    id="countryAnother"
                    placeholder="Search here..."
                    apiKey="AIzaSyCkIJMa0XbMx0pTYyEFg5n-3U6onIiG0fc"
                    onPlaceSelected={(place) => {
                        this.props.searchAction(place.formatted_address);
                    }}
                />
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocationInput);