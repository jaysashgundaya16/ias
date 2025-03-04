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
import { pin, share, trash, call } from 'ionicons/icons';
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
      
      <IonContent fullscreen color="light">
      <IonList inset={true}> 
      </IonList>
      </IonContent>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
    </IonPage>
  );
};
export default Feed;