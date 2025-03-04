import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonSpinner
  } from '@ionic/react';
  import { pin, share, trash, call } from 'ionicons/icons';
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Spinner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color = "light">
        <IonItem>
        <IonLabel>Default</IonLabel>
        <IonSpinner></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Dots</IonLabel>
        <IonSpinner name="dots"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Lines</IonLabel>
        <IonSpinner name="lines"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Lines Small</IonLabel>
        <IonSpinner name="lines-small"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Lines Sharp</IonLabel>
        <IonSpinner name="lines-sharp"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Lines Sharp Small</IonLabel>
        <IonSpinner name="lines-sharp-small"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Bubbles</IonLabel>
        <IonSpinner name="bubbles"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Circles</IonLabel>
        <IonSpinner name="circles"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Circular</IonLabel>
        <IonSpinner name="circular"></IonSpinner>
      </IonItem>
      <IonItem>
        <IonLabel>Crescent</IonLabel>
        <IonSpinner name="crescent"></IonSpinner>
      </IonItem>
      
                 
        </IonContent>
      </IonPage>
    );
  };
  export default Favorites;