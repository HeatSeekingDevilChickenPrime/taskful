import React, { Component, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

function GoogleAuth() {
  const clientId =
    '1066770667864-ec7u92o89agqbfghb8qj69354a5o91vu.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log('success:', res);
    //send res.Ca to server
    
  };

  const onFailure = (err) => {
    console.log('failed:', err);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      prompt="consent"
      approvalPrompt="force"
      scope="profile"
    />
  );
}

export default GoogleAuth;
