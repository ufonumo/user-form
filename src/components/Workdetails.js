import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export class Workdetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e =>{
        e.preventDefault();
        this.props.previousStep();
    }

   

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar className='center' title='Enter Work Details'/>
                    <Container component="main"  maxWidth="xs">
                    <form validate='true'>
                         <TextField hintText='Enter your Registration Number'
                            floatingLabelText="Registration Number"
                            onChange={handleChange('registration_no')}
                            defaultValue={values.registration_no}
                            fullWidth
                            name='registration_no'
                        />
                        <div>
                            <TextField hintText='Enter your Home Address'
                                floatingLabelText="Home Address"
                                onChange={handleChange('permanent_home_address')}
                                defaultValue={values.permanent_home_address}
                                fullWidth
                                name='permanent_home_address'
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your  Residential Address'
                                floatingLabelText="Current Residential Address"
                                onChange={handleChange('current_residential_address')}
                                defaultValue={values.current_residential_address}
                                fullWidth
                                name='current_residential_address'
                            />
                        </div>
                       

                        <div>
                            <TextField hintText='Enter your Village'
                                floatingLabelText="Village"
                                onChange={handleChange('village')}
                                defaultValue={values.village}
                                fullWidth
                                name='village'
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your L.G.A of service'
                                floatingLabelText="L.G.A of service"
                                onChange={handleChange('lga_of_service')}
                                defaultValue={values.lga_of_service}
                                fullWidth
                                name='lga_of_service'
                            />
                        </div>

                        <div>
                            <TextField hintText='Enter your L.G.A of Origin '
                                floatingLabelText="L.G.A of Origin"
                                onChange={handleChange('lga_of_origin')}
                                defaultValue={values.lga_of_origin}
                                fullWidth
                                name='lga_of_origin'
                            />
                        </div>
        

                        <div>
                            <TextField hintText='Enter your State of Origin '
                                floatingLabelText="State of Origin"
                                onChange={handleChange('state_of_origin')}
                                defaultValue={values.state_of_origin}
                                fullWidth
                                name='state_of_origin'
                            />
                        </div>

                        <div>
                            <TextField hintText='Enter your Nationality '
                                floatingLabelText="Nationality"
                                onChange={handleChange('nationality')}
                                defaultValue={values.nationality}
                                fullWidth
                                name='nationality'
                            />
                        </div>

                    </form>
                       
                        <Grid container style={styles.top}>
                                <Grid item xs sm >
                                    <RaisedButton
                                        label='Previous'
                                        className='btn'
                                        type="button"
                                        primary={false}
                                        margin="normal"
                                        fullWidth
                                        onClick={this.previous}
                                    />
                                </Grid>
                                <Grid item xs sm>
                                <RaisedButton
                                    label='Continue'
                                    primary={true}
                                    type="button"
                                    className='btn'
                                    margin="normal"
                                    fullWidth
                                    onClick={this.continue}
                                />
                                </Grid>
                            </Grid>
                    </Container>
                    
                                  
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    top: {
        marginTop: "30px",
        marginBottom: "30px",
    },
    checkbox:{
        marginTop: "20px",
        padding: '0 30px',
    }
}

export default Workdetails
