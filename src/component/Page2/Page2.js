import React, { Component } from 'react';
import './Page2.css';
import Cover from '../Images/cover.png';
import Logo from '../Images/kora.png';
import Stepper from '../Stepper/Stepper';

export class Page2 extends Component {
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

                        <div className='NextHold'><Stepper choose={1}/></div>

                        <div className='Holder'>
                            <label>Current Occupation</label>
                            <input 
                                placeholder='Enter Occupation'
                                onChange={handleChange('occupation')}
                                defaultValue={values.occupation}
                            />
                        </div>

                        <div className='Holder'>
                            <label>State of Origin</label>
                            <input 
                                placeholder='Enter State of Origin'
                                onChange={handleChange('state')}
                                defaultValue={values.state}
                            />
                        </div>

                        <div className='Holder'>
                            <label>LGA of Origin</label>
                            <input 
                                placeholder='Enter L.G.A of Origin'
                                onChange={handleChange('lga')}
                                defaultValue={values.lga}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Highest Level of Education</label>
                            <input 
                                placeholder='Enter your Highest level of Education'
                                onChange={handleChange('education')}
                                defaultValue={values.education}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Hobbies</label>
                            <input 
                                placeholder='Street/City/State'
                                onChange={handleChange('hobbies')}
                                defaultValue={values.hobbies}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Age</label>
                            <div className='RadioHold'>
                                <span>
                                    <input type='radio'
                                        onChange={handleChange('age')}
                                        defaultValue={values.age}
                                        name='gender'
                                    />17-20
                                </span>

                                <span>
                                    <input type='radio'
                                        onChange={handleChange('age')}
                                        defaultValue={values.age}
                                        name='gender'
                                    />21-25
                                </span>

                                <span>
                                    <input type='radio'
                                        onChange={handleChange('age')}
                                        defaultValue={values.age}
                                        name='gender'
                                    />26-30
                                </span>

                                <span>
                                    <input type='radio'
                                        onChange={handleChange('age')}
                                        defaultValue={values.age}
                                        name='gender'
                                    />31-35
                                </span>
                            </div>
                        </div>

                        <div className='ButtonsHold'>
                            <button className='Btn2'
                                onClick={this.back}
                            >
                                Back
                            </button>

                            <button className='Btn1'
                                onClick={this.continue}
                            >
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

export default Page2