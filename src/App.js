import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from './Store/actions/searchAction';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SearchLocationInput from './components/SearchLocationInput'
import MapContainer from './components/GoogleMap'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  searchAction: () => dispatch(searchAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {



  render() {
    return (
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4, ml: 2, mr: 2 }}>
          <SearchLocationInput></SearchLocationInput>
          <MapContainer></MapContainer>
        </Container>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
