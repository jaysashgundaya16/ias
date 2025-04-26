import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonLabel,
  IonAlert, 
  IonButton
} from '@ionic/react';
import './Feed.css'; // Import the CSS file for styling
import FeedContainer from '../../components/FeedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="profile-content">
        <div className="profile-box">
          <img 
            src="https://avatars.githubusercontent.com/u/143623778?v=4" // Replace with your image URL
            alt="Profile"
            className="profile-image"
          />
          <IonLabel className="profile-name">Jaysash Gundaya</IonLabel>
          <IonLabel className="profile-email">20221269@nbsc.edu.ph</IonLabel>
          <IonLabel className="profile-bio">Hi Folks! Welcome to My Profile.</IonLabel>
        </div>
      </IonContent>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Profile Information"
        subHeader="User  Details"
        message="This alert provides information about the user profile. You can view the user's name, email, and a brief bio. If you have any questions or need further assistance, feel free to reach out!"
        buttons={['OK']}
      ></IonAlert>
    </IonPage>
  );
};

export default Feed;