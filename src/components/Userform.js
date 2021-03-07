import React, { Component } from 'react'
import Personaldetails from './Personaldetails';
import UserDetails from './Userdetails';
import Workdetails from './Workdetails';
import Confirmation from './Confirmation'
import Educational from './Educational';

export class Userform extends Component {


    state = {
        step: 1,
        photo_url: '',
        registration_no: '',
        rank: '',
        department: '',
        state_of_service: '',
        current_residential_address: '',
        date_of_birth: '',
        first_name: '',
        other_name: '',
        surname: '',
        maiden_name: '',
        sex: '',
        religion: '',
        blood_group: '',
        facial_marks: '',
        disability: '',
        height: '',
        weight: '',
        personal_phone_no: '',
        nationality: '',
        state_of_origin: '',
        lga_of_origin: '',
        village: '',
        permanent_home_address: '',
        national_identity_no: '',
        email_address: '',
        marital_status: '',
        educational_qualification: '',
        next_of_kin: '',
        relationship_with_next_of_kin: '',
        next_of_kin_address: '',
        next_of_kin_phone_no: '',
    }

    nextStep = () =>{
        const{step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    previousStep = () =>{
        const{step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        })
    }

    handleConfirmation = () =>{
        
        <Confirmation/>
    }

    render() {
        const {step} = this.state;
        const values = {step}

        switch(step){
            case 1: 
                return(
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2: 
                    return <Personaldetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        previousStep={this.previousStep}
                        values={values}
                    />
            case 3: 
                return <Workdetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                previousStep={this.previousStep}
                values={values}
            />
            case 4: 
                return <Educational
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                previousStep={this.previousStep}
                values={values}
                handleConfirmation={this.handleConfirmation}
                />
            case 4: 
                return <Confirmation
                    handleConfirmation={this.handleConfirmation}
                />
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default Userform
