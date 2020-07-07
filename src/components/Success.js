import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'





export class Success extends Component {
    render() {
       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success">
                        
                    </AppBar>
                    <h1>
                        Thank You For Your Submission
                    </h1>
                    <p>
                    You Will Get Email With Full Details
                    </p>
                        
                        
                        
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success