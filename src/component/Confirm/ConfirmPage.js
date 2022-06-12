import React, { Component, useState } from 'react';
import './ConfirmPage.css';
import Cover from '../Images/cover.png';
import Logo from '../Images/kora.png';
import Stepper from '../Stepper/Stepper';

const ConfirmPage = ({prevStep, nextStep, handleChange, values}) => {

    const cont = e => {
       e.preventDefault();
       nextStep();
    }

    const back = e => {
       e.preventDefault();
       prevStep();
    }
      const  {firstname, lastname, email, phone, address, gender, occupation, state, lga, education, hobbies, age, stack, whystack, whyconsider} = values

    return (
      <div className='Page1Container'>
          <div className='Page1Wrapper'>
                <div className='Page1Form'>
                    <div className='Page1FormWrap'>

                        <div className='Page1LogoHold'>
                           <img src={Logo} alt='Logo'className='Logo'/> Kora Academy
                        </div>

                        <div className='NextHold'><Stepper choose={3}/></div>
                        <div className='HeaderHold'>Confirm Registration Details</div>

                        <div className='Datas'>
                            <span>First Name:</span> {firstname}
                        </div>
                        <div className='Datas'>
                            <span>Last Name:</span> {lastname}
                        </div>
                        <div className='Datas'>
                            <span>Email:</span> {email}
                        </div>
                        <div className='Datas'>
                            <span>Phone:</span> {phone}
                        </div>
                        <div className='Datas'>
                            <span>Address:</span> {address}
                        </div>
                        <div className='Datas'>
                            <span>Gender:</span> {gender}
                        </div>
                        <div className='Datas'>
                            <span>Occupation:</span> {occupation}
                        </div>
                        <div className='Datas'>
                            <span>State:</span> {state}
                        </div>
                        <div className='Datas'>
                            <span>LGA:</span> {lga}
                        </div>
                        <div className='Datas'>
                            <span>Education:</span> {education}
                        </div>
                        <div className='Datas'>
                            <span>Hobbies:</span> {hobbies}
                        </div>
                        <div className='Datas'>
                            <span>Age:</span> {age}
                        </div>
                        <div className='Datas'>
                            <span>Stack:</span> {stack}
                        </div>
                        <div className='Datas'>
                            <span>Why the Stack:</span> {whystack}
                        </div>
                        <div className='Datas'>
                            <span>Why Should We Consider You:</span> {whyconsider}
                        </div>
                       
                        <div className='ButtonsHold'>
                            <button className='Btn2'
                                onClick={back}
                            >
                                Back
                            </button>

                            <button className='Btn1' 
                                onClick={cont}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
                <img src={Cover} alt='MainImage' className='Image'/>
          </div>
      </div>
    )
}

export default ConfirmPage;