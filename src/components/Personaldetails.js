import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class Personaldetails extends Component {
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
                    <AppBar style={styles.center} title='Enter Personal Details'/>
                    <Container component="main" maxWidth="xs">
                        <form validate='true'>
                            <TextField hintText='Enter your Height'
                                floatingLabelText="Height"
                                type="number"
                                margin="normal"
                                required
                                name='height'
                                fullWidth
                                onChange={handleChange('height')}
                                defaultValue={values.height }
                            />
                            <div>
                                <TextField hintText='Enter your Weight'
                                    floatingLabelText="Weight"
                                    type="number"
                                    margin="normal"
                                    required
                                    name='weight'
                                    fullWidth
                                    onChange={handleChange('weight')}
                                    defaultValue={values.weight }
                                />
                            </div>
                            <div>
                                <TextField hintText='Enter your  Facial Marks'
                                    floatingLabelText="Any Facial Marks?"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name='facial_marks'
                                    onChange={handleChange('facial_marks')}
                                    defaultValue={values.facial_marks}
                                />
                            </div>
                            <div>
                                <TextField hintText='Enter your Blood Group'
                                    floatingLabelText="Blood group"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={handleChange('blood_group')}
                                    defaultValue={values.blood_group}
                                />
                            </div>

                            <div style={styles.disability} className='disability'>
                                <FormLabel style={styles.formlabel} component="legend">Any Disability?</FormLabel>
                                <FormControlLabel
                                    control={<Checkbox value="disability" color="primary" />}
                                    label="Yes"
                                    defaultValue={values.disability}
                                    labelPlacement="start"
                                    name='disability'
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={handleChange('disability')}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="disability" color="primary" />}
                                    label="No"
                                    defaultValue={values.disability}
                                    labelPlacement="start"
                                    margin="normal"
                                    required
                                    onChange={handleChange('disability')}
                                    fullWidth
                                    name='disability'
                               />
                            </div>
                          
                            {/* <div style={styles.upload}>
                                <FormLabel style={styles.formlabel} component="legend">Upload Fingerprint</FormLabel>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    name='fingerprint'
                                    onChange={handleChange('disability')}
                                    type="file"
                                    style={styles.input}
                                />
                                <label style={styles.label} htmlFor="contained-button-file">
                                    <Button variant="contained"  color="primary" startIcon={<CloudUploadIcon/>}
                                    component="span">
                                    Upload 
                                    </Button>
                                </label>
                            </div> */}

                            <FormControl style={styles.top}>
                                <InputLabel fullWidth id="demo-simple-select-label">Marital Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=''
                                    fullWidth
                                    name='marital_status'
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={'Single'}>Single</MenuItem>
                                    <MenuItem value={'Married'}>Married</MenuItem>
                                    <MenuItem value={'Divorce'}>Divorce</MenuItem>
                                    <MenuItem value={'Widow'}>Widow</MenuItem>
                                    <MenuItem value={'Widower'}>Widower</MenuItem>

                                </Select>
                            </FormControl>

                            <Grid container style={styles.top}>
                                <Grid item xs sm >
                                    <RaisedButton
                                        label='Previous'
                                        className='btn'
                                        type="button"
                                        primary={false}
                                        margin="normal"
                                        fullWidth
                                        style={styles.button}
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
                                    style={styles.button}
                                    onClick={this.continue}
                                />
                                </Grid>
                            </Grid>

                        </form>
                        
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
    },
    disability:{
        margin: "20px 0",
        display: 'flex'
    },
    input:{
        display: 'none'
    },
    upload:{
        display: 'flex'
    },
    formlabel:{
        lineHeight: 2.5
    },
    label:{
        paddingLeft: '2rem'
    },
    center:{
        textAlign: 'center'
    }

}

export default Personaldetails
