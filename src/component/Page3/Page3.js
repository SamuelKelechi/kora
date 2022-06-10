import React, { Component, useState } from 'react';
import './Page3.css';
import Cover from '../Images/cover.png';
import Logo from '../Images/kora.png';
import Stepper from '../Stepper/Stepper';

export class Page3 extends Component {

    continue = e => {
       e.preventDefault();
       this.props.nextStep();
    }

    back = e => {
       e.preventDefault();
       this.props.prevStep();
    }
  render() {
      const {values, handleChange} = this.props;

    return (
      <div className='Page1Container'>
          <div className='Page1Wrapper'>
                <div className='Page1Form'>
                    <div className='Page1FormWrap'>

                        <div className='Page1LogoHold'>
                           <img src={Logo} alt='Logo'className='Logo'/> Kora Academy
                        </div>

                        <div className='NextHold'><Stepper choose={2}/></div>

                        
                        <div className='SectionHold'>
                            <label>What Stack are you interested in?</label>
                            <div className='StackHold'>
                                <span>
                                    <input type='radio'
                                        onChange={handleChange('interest')}
                                        defaultValue={values.interest}
                                        name='interest'
                                    />Backend Development
                                </span>

                                <span>
                                    <input type='radio'
                                        onChange={handleChange('interest')}
                                        defaultValue={values.interest}
                                        name='interest'
                                    />Frontend Development
                                </span>

                                <span>
                                    <input type='radio'
                                        onChange={handleChange('interest')}
                                        defaultValue={values.interest}
                                        name='interest'
                                    />Product Design
                                </span>
                            </div>
                        </div>

                        <div className='SectHold'>
                            <label>Why are you interested in the Stack?</label>
                            <textarea 
                                placeholder='Minimum of 120 words'
                                onChange={handleChange('whystack')}
                                defaultValue={values.whystack}
                            />
                        </div>

                        <div className='SectHold2'>
                            <label>Why should you be considered for this opportunity?</label>
                            <textarea 
                                placeholder='Minimum of 120 words'
                                onChange={handleChange('whyconsider')}
                                defaultValue={values.whyconsider}
                                />
                        </div>

                        <div className='Bottom'>
                           <input type='checkbox' 
                                onChange={handleChange('agree')}
                                defaultValue={values.agree}
                           /> 
                           I agree to Kora Academy <span>Terms and conditions</span>
                        </div>

                        <div className='ButtonsHold'>
                            <button className='Btn2'
                                onClick={this.back}
                            >
                                Back
                            </button>

                            <button className='Btn1' disabled={!this.agree}>
                                Continue
                            </button>
                        </div>

                    </div>
                </div>
                <img src={Cover} alt='MainImage' className='Image'/>
          </div>
      </div>
    )
  }
}

export default Page3