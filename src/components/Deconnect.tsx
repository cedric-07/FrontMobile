// LogoutButton.tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for redirection
import { logOutOutline } from 'ionicons/icons';

const LogoutButton: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions (clear tokens, user data, etc.)
    // For example, if using localStorage:
    localStorage.removeItem('authToken'); // Clear authentication token
    // Redirect to the desired path
    history.push('/');
  };

  return (
    <IonButton onClick={handleLogout}>
    <IonIcon style={{ width: '15px', height: '15px' }} icon={logOutOutline} /> {/* Add the logout icon */}
  </IonButton>
  );
};

export default LogoutButton;
