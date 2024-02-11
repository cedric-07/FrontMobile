import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { IonIcon, IonInput, IonButton, IonAlert } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './Signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log('Email changed:', email);
    console.log('Password changed:', password);
  }, [username, password]);

  const handleSignUp = () => {
    if (!username || !email || !password) {
      // If any of the fields are empty, show an alert
      setShowAlert(true);
      return; // Stop execution
    }
  
    axios.post('http://localhost:8080/api/register', {
      name: username,
      email: email,
      pwd: password
    })
    .then(response => {
      console.log('Sign up successful');
      history.push('/login');
    })
    .catch(error => {
      console.error('Sign up failed', error);
      setShowAlert(true);
    });
  };

  return (
    <div className='img'>
      <div className="big-blog">
        <div className="forms">
          <div className="ion-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" 
             fill="currentColor" className="circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <h1>Sign in</h1>
          </div>

          <div className='label'>
            <label></label>
            <IonInput 
              type="text" 
              placeholder='Username'
              onIonChange={(e) => setUsername(e.detail.value!)}
              className='email-bloc'/>
          </div>

          <div className='label'>
            <label></label>
            <IonInput 
              type="text" 
              placeholder='user@example.com'
              onIonChange={(e) => setEmail(e.detail.value!)}
              className='email-bloc'/>
          </div>

          <div className='label'>
            <label ></label>
            <IonInput
              className='password-blog'
              type="password"
              placeholder='Your password'
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </div>

          <div>
            <IonButton onClick={handleSignUp} expand="block" className="signup-button">Sign in</IonButton>
          </div>
        </div>
      </div>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Sign Up Failed'}
        message={'There was an error signing up. Please try again.'}
        buttons={['OK']}
      />
    </div>
  );
};

export default Signup;
