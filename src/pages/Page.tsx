import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton, IonIcon } from '@ionic/react';
import axios from 'axios';
import mapImage from '../assets/img/images.jpeg';
import './Page.css';
import MyFields from '../components/MyFields';
import Cookies from 'js-cookie';
import { notificationsOutline } from 'ionicons/icons';
import myimage from '../assets/img/5.png';
import LogoutButton from '../components/Deconnect';


interface Field {
  field: any;
}

const Page: React.FC = () => {
  const [Listfield, setField] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let id = Cookies.get('id_owner');
    axios.get('http://localhost:8080/api/owner/fields?idUser='+id)
      .then(response => {
        setField(response.data);
        console.log(response.data);
        const id = response.data.id_owner;

        console.log(id);
        const email = response.data.email;
 
        console.log(email);
      })
      .catch(error => {
        console.error('An error occurred while fetching data:', error);
      });
  }, []);

  const openNotificationModal = () => {
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader class='test'>
          <img src={myimage} alt="Welcome Image"/>
          <IonIcon icon={notificationsOutline} size='smile' className='notification'  onClick={openNotificationModal} />
          <LogoutButton/>
      </IonHeader>
      <IonContent className='cont'>
      <IonTitle className='title'>Field List</IonTitle>
        <div className='container'>
          <div className='slider'>
            <div className='map-container'>
                {Listfield.map((field , index)=> (
                    <MyFields key={index} field={field} />
                  ))}
            </div>
          </div>
        </div>
      </IonContent>

      {/* Notification Modal */}
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar className='notif'>
            <IonTitle>Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* Your notification content goes here */}
          <p>This is where your notifications will appear.</p>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Page;
