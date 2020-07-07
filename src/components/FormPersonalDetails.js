import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values,handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details">
                        
                    </AppBar>
                        <TextField hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        >
                        </TextField>
                        <br></br>
                        <TextField hintText="Enter Your City Name"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        >
                        </TextField>

                        <br></br>
                        <TextField hintText="Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        >
                        </TextField>
                        
                        <br></br>
                        <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        >
                        </RaisedButton>

                        <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                        >
                        </RaisedButton>
                        
                        
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin:15
    }
}

export default FormPersonalDetails