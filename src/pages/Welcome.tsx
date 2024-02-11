import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonButtons, IonTitle, IonMenuButton, IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Welcome.css';
import myimage from '../assets/img/5.png';

const Welcome: React.FC = () => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push('/login');
  };

  const redirectToSignUp = () => {
    history.push('/signup');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Welcome Back</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" size-md="6" className="ion-text-center ion-padding-vertical">
              <img src={myimage} alt="Welcome Image" className="welcome-image" />
            </IonCol>
            <IonCol size="12" size-md="6" className="ion-padding-vertical">
              <div className="welcome-text">
                    <h1>Welcome Back</h1>
                    <button className='login' onClick={redirectToLogin}>Log in</button>
                    <button className='signin'  onClick={redirectToSignUp}>Sign in</button>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
