import React, { Component } from 'react'
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import ConfirmPage from '../Confirm/ConfirmPage';
import Success from '../Feedback/Success'


export class Admission extends Component {
  state = {
    step: 1,
    avatar: null,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    occupation: '',
    state: '',
    lga: '',
    education: '',
    hobbies: '',
    age: '',
    stack: '',
    whystack: '',
    whyconsider: '',
  }

  // Next step proceed
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Return to Previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle Fields Change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const {step} = this.state;
    const {avatar, firstname, lastname, email, phone, address, gender, occupation, state, lga, education, hobbies, age, stack, whystack, whyconsider} = this.state;
    const values = {avatar, firstname, lastname, email, phone, address, gender, occupation, state, lga, education, hobbies, age, stack, whystack, whyconsider}
  
    switch(step) {
      case 1:
        return (
          <Page1 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
        case 2:
          return (
            <Page2 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
            />
          )
        case 3:
          return (
            <Page3 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
            />
          )
        case 4:
          return (
            <ConfirmPage 
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
            />
          )
          case 5:
            return <Success />
            
        default: 
    }
  }
}

export default Admission;