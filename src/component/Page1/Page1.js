import React, { Component } from 'react';
import './Page1.css';
import Cover from '../Images/cover.png';
import Logo from '../Images/kora.png';
import { CgProfile } from 'react-icons/cg';
import Stepper from '../Stepper/Stepper'

export class Page1 extends Component {
    continue = e => {
       e.preventDefault();
       this.props.nextStep();
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

                        <div className='NextHold'>
                            <Stepper choose={0}/>
                        </div>

                        <div className='IconHold'>
                            <CgProfile fontSize={70} color='grey'/>
                        </div>

                        <div className='ImgInput'>
                            Upload Photo
                            <input type='file' />
                        </div>

                        <div className='Holder'>
                            <label>First Name</label>
                            <input 
                                placeholder='Enter First Name'
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Last Name</label>
                            <input 
                                placeholder='Enter Last Name'
                                onChange={handleChange('lastname')}
                                defaultValue={values.lastname}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Email Address</label>
                            <input 
                                placeholder='e.g jonny@gmail.com'
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Phone Number</label>
                            <input 
                                placeholder='+234 0000 0000 00'
                                onChange={handleChange('phone')}
                                defaultValue={values.phone}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Home Address</label>
                            <input 
                                placeholder='Street/City/State'
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                            />
                        </div>

                        <div className='Holder'>
                            <label>Gender</label>
                            <input 
                                placeholder='Gender'
                                onChange={handleChange('gender')}
                                defaultValue={values.gender}
                            />
                        </div>

                        <button className='Btn1'
                            onClick={this.continue}
                        >
                            Continue
                        </button>

                    </div>
                </div>
                <img src={Cover} alt='MainImage' className='Image'/>
          </div>
      </div>
    )
  }
}

export default Page1