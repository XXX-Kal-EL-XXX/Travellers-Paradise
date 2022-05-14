import React, { Component } from "react";
import firebase from 'firebase/compat/app';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebaseConfig from "./FireBase";
import '../App.css'


export class OTP extends Component {
    
    
    componentDidMount(){
        firebase.initializeApp(firebaseConfig);
    
        const uiConfig = {
            signInOptions: [{
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters :{
                    type: 'image',
                    size: 'normal',
                    badge: 'bottomleft'
                },
                defaultCountry: 'IN'
            }],
            callbacks: {
                signInSucessWithAuthResult: function(authResult, redirectUrl){
                    return true;
                }
            },
            signInSuccessUrl: "/booking"
        };
        if(firebaseui.auth.AuthUI.getInstance()) {
            const ui = firebaseui.auth.AuthUI.getInstance()
            ui.start('#firebaseui-auth-container', uiConfig)
        }
        else {
        const ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container",uiConfig);
        }
    };


    render(){
        return (
            <div className="container">
            <div className="otp" id='firebaseui-auth-container'></div>
            </div>
        )
    }
}