import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
   state = {
      step: 1,
      firtsName: '',
      lastName: '',
      productid: '',
      viewerid: '',
   }

   //Proceed to next Step

   nextStep = () => {
      const {step} = this.state;
      this.setState({
         step: step + 1
      });
   }

   //Go to pervious Step

   previousStep = () => {
      const {step} = this.state;
      this.setState({
         step: step - 1
      });
   }

   //Handle fields change

   handleChange = input => e => {
      this.setState({[input]: e.target.value});
   }


   render() {
      const { step } = this.state;
      const { firstName, lastName, email, productid,viewerid } = this.state;
      const values = { firstName, lastName, email, productid, viewerid }

      switch(step) {
         case 1:
            return (
               <FormUserDetails
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={values}/>
            )

         
      }
   }
}

export default UserForm
