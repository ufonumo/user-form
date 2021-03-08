import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export class Userdetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar style={styles.center}  title='Enter User Details'/>
                    <Container component="main" maxWidth="xs">
                        <TextField hintText='Enter your First name'
                            floatingLabelText="First Name"
                            onChange={handleChange('first_name')}
                            defaultValue={values.first_name}
                            name='first_name'
                            fullWidth
                        />
                        <div>
                            <TextField hintText='Enter your Maiden name'
                                floatingLabelText="Maiden Name"
                                onChange={handleChange('maiden_name')}
                                defaultValue={values.maiden_name}
                                name='maiden_name'
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your other names'
                                floatingLabelText="Other Names"
                                onChange={handleChange('other_name')}
                                defaultValue={values.other_name}
                                name='other_name'
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your email address'
                                floatingLabelText="Email address"
                                onChange={handleChange('email_address')}
                                defaultValue={values.email_address}
                                fullWidth
                                name='email_address'
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your Phone Number'
                                floatingLabelText="Phone Number"
                                onChange={handleChange('email_address')}
                                defaultValue={values.personal_phone_no}
                                fullWidth
                                type='number'
                                name='personal_phone_no'
                            />
                        </div>
                        <div>
                            <TextField hintText='Enter your Religion'
                                floatingLabelText="Religion"
                                onChange={handleChange('religion')}
                                defaultValue={values.religion}
                                fullWidth
                                name='religion'
                            />
                        </div>

                        <div>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                fullWidth
                                name='date_of_birth'
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>                   

                        <div style={styles.disability} className='disability'>
                                <FormLabel style={styles.formlabel} component="legend">Sex:</FormLabel>
                                <FormControlLabel
                                    control={<Checkbox value="disability" color="primary" />}
                                    label="Female"
                                    defaultValue={values.sex}
                                    labelPlacement="start"
                                    name='male'
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={handleChange('disability')}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="disability" color="primary" />}
                                    label="Male"
                                    defaultValue={values.disability}
                                    labelPlacement="start"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name='female'
                                    onChange={handleChange('disability')}
                                />
                            </div>

                        <div>
                            <RaisedButton
                                label='continue'
                                primary={true}
                                fullWidth
                                style={styles.button}
                                onClick={this.continue}
                            />
                        </div>
                    </Container>

                                  
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        marginTop: "20px",
    },
    checkbox:{
        marginTop: "20px",
        padding: '0 30px',
    },
    center:{
        textAlign: 'center'
    },
    formlabel:{
        lineHeight: 2.5
    },
    disability:{
        margin: "20px 0",
        display: 'flex'
    },
}


export default Userdetails
