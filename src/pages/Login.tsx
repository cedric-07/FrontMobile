import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import image from '../assets/img/3.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import the js-cookie library
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Validation de l'email
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setShowAlert(true);
      return;
    }

    // Validation du mot de passe
    if (!password || password.length < 6) {
      setErrorMessage('The password must contain at least 6 characters.');
      setShowAlert(true);
      return;
    }

    axios.post('http://localhost:8080/api/login', {
      email: email,
      pwd: password
    })
      .then(response => {
        console.log('Login successful');
        // Set email and ID using cookies
        Cookies.set('email', response.data.email);
        Cookies.set('id_owner', response.data.idOwner);
        history.push('/page');
      })
      .catch(error => {
        setErrorMessage('An error occurred during login. Please try again.');
        setShowAlert(true);
      });
  };

  const closeAlert = () => {
    setShowAlert(false);
    setErrorMessage('');
  };

  // Function to get user ID from cookies
  const getUserIdFromCookie = () => {
    return Cookies.get('id_owner');
  };

  return (
    <IonPage>
      <IonContent className='page'>
        
        <div className="big-blog">
        <img src={image} alt="" />
        
            <IonTitle className='title' >Login</IonTitle>
      

          <div className='label'>
            <IonInput
              type="email"
              placeholder='user@example.com'
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              className='email-bloc' />
          </div>

          <div className='label'>
            <IonInput
              className='password-blog'
              type="password"
              placeholder='Your Password'
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </div>

        

          <IonButton onClick={handleLogin} className="login-button">Log In</IonButton>

        </div>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Login failed Failed'}
        message={'Verify your email or password. Please try again.'}
        buttons={['OK']}
      />
    </IonPage>
  );
};

export default Login;
