import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export class Educational extends Component {
    // confirm = e =>{
    //     // e.preventDefault();
    //     // this.props.handleConfirmation();
    //     <Confirmation/>
    // }

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e =>{
        e.preventDefault();
        this.props.previousStep();
    }

    
    render() {
        const {values , handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar className='center' title='Enter Educational Details'/>
                    <Container component="main"  maxWidth="xs">
                    <form validate='true'>
                        <div>
                            <TextField hintText='Enter your Educational Qualification '
                                floatingLabelText="Educational Qualification"
                                onChange={handleChange('educational_qualification')}
                                defaultValue={values.educational_qualification}
                                fullWidth
                                name='educational_qualification'
                            />
                        </div>

                        <TextField hintText='Enter your Rank'
                            floatingLabelText="Rank "
                            onChange={handleChange('rank')}
                            defaultValue={values.rank}
                            fullWidth
                            name='rank'
                        />
                        <div>
                            <TextField hintText='Enter your  Department'
                                floatingLabelText="Department "
                                onChange={handleChange('department')}
                                defaultValue={values.department}
                                fullWidth
                                name='department'
                            />
                        </div>

                        <div>
                            <TextField hintText='Enter your Next Of kin '
                                floatingLabelText="Next Of kin "
                                type='number'
                                onChange={handleChange('next_of_kin')}
                                defaultValue={values.next_of_kin}
                                fullWidth
                                name='next_of_kin'
                            />
                        </div>
                        
                        <div>
                            <TextField hintText='Enter your  Next Of kin Address'
                                floatingLabelText="  Next Of kin Address"
                                onChange={handleChange('next_of_kin_address')}
                                defaultValue={values.next_of_kin_address}
                                fullWidth
                                name='next_of_kin_address'
                            />
                        </div>
                       

                        <div>
                            <TextField hintText='Enter your Next Of kin Phone Number'
                                floatingLabelText="Next Of kin Phone Number"
                                type='number'
                                onChange={handleChange('next_of_kin_phone_no')}
                                defaultValue={values.next_of_kin_phone_no}
                                fullWidth
                                name='next_of_kin_phone_no'
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
                                    label='Save'
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

export default Educational
