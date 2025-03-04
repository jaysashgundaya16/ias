import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonAlert, 
  IonButton
} from '@ionic/react';
import './Feed.css'; 

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Alert</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="background-image">
        <IonList inset={true}> 
        </IonList>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Feed;