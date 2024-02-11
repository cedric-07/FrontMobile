import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import defaultImage from '../assets/img/1.jpeg';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import { addOutline, createOutline } from 'ionicons/icons'; // Import the add icon
import './MyFields.css';

interface Field {
  field: any;
}

const MyFields: React.FC<Field> = ({ field }) => {
  const history = useHistory(); // Initialize useHistory
  const [plotCount, setPlotCount] = useState(2); // State to store plot count

  const handleEditClick = () => {
    // Redirect to the "/map" path
    history.push('/map');
  };

  const incrementPlotCount = () => {
    setPlotCount(prevCount => prevCount + 1); // Increment plot count
  };

  return (
    <div className="my-fields-container">
      <IonCard className="my-fields-card">
        {field.image ? (
          <img src={field.image} alt="Field" />
        ) : (
          <img src={defaultImage} alt="Default" />
        )}
        <IonCardHeader>
            <IonCardSubtitle>Area : {field.area} m</IonCardSubtitle>
          <IonCardSubtitle>Name Field : {field.location}</IonCardSubtitle>
          <IonCardSubtitle>Plot Number: {plotCount}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton onClick={handleEditClick}>
            <IonIcon style={{ width: '15px', height: '15px' }} icon={createOutline} />
          </IonButton> 
          <IonButton onClick={incrementPlotCount}>
            <IonIcon style={{ width: '15px', height: '15px' }} icon={addOutline} /> {/* Add the add icon */}
          </IonButton>

        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default MyFields;
