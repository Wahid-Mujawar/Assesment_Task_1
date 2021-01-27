import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class ProductDetails extends Component {
   continue = e => {
      e.preventDefault();
      this.props.nextStep()
   };

   back = e => {
      e.preventDefault();
      this.props.previousStep()
   };

   render() {
      const { values, handleChange } = this.props;
      return (
       <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter The Product Details"/>
            <TextField
            hintText="Select Product Id"
            floatingLabelText="product"
            onChange={handleChange('product')}
            defaultValue={values.product}
            />
            <br/>

            <TextField
            hintText="Select Viewer Id"
            floatingLabelText="viewer"
            onChange={handleChange('viewer')}
            defaultValue={values.viewer}
            />
            <br/>
            <br/>

            <RaisedButton
               label="Continue"
               primary={true}
               style={styles.button}
               onClick={this.continue}
               />

            <RaisedButton
               label="Back"
               primary={false}
               style={styles.button}
               onClick={this.back}
               />
          </React.Fragment>
       </MuiThemeProvider>
      )
   }
}

const styles ={
   button: {
      margin: 15
   }
}

export default ProductDetails;
