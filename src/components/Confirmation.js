import React, { Component } from 'react'
import completed from '../assets/completed.jpg'
import Container from '@material-ui/core/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Confirmation extends Component {
  
  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className='center' title='Registration complete'/>
          <Container component="main"  maxWidth="xs">
            <img style={styles.width} src={completed} alt="complete image"/>
            <h2 style={styles.fontsized}>Thank you for registering</h2>
          </Container>
        </React.Fragment>

      </MuiThemeProvider>
      
    )
  }
}

const styles = {
  width: {
     width: '100%'
  },
  fontsized:{
      fontSize: "30px",
      textAlign: 'center'
  }
}

export default Confirmation
