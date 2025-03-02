import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonList
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
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color = "light">
       <IonList inset={true}>
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Ionitron</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions>
         
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Cortana</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions>
       
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Bender</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions>
         
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>BB-8</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions>
         
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="start">
          <IonItemOption color="success">Archive</IonItemOption>
        </IonItemOptions>
                 </IonItemSliding>
               </IonList>
        </IonContent>
      </IonPage>
    );
  };
  export default Favorites;