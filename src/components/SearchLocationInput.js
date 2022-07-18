import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from './../Store/actions/searchAction';
import Autocomplete from "react-google-autocomplete";

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch, place) => ({
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
                    apiKey="AIzaSyDQRjgcwgd917cq-ufrPawhlTV8yyr5LgU"
                    onPlaceSelected={(place) => {
                        console.log(place);
                        this.props.searchAction(place.formatted_address)
                    }}
                />
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocationInput);