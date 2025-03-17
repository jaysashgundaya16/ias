import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput,
  IonItem,
  IonLabel,
  useIonRouter,
  IonAlert
} from '@ionic/react';

const Register: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const doRegister = () => {
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      setAlertMessage('Please fill in all fields.');
      setShowAlert(true);
    } else if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
    } else {
      
      console.log('User  registered:', { username, email, password });
      
      
      navigation.push('/it35-lab', 'forward', 'replace'); 
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput 
            value={username} 
            onIonChange={e => setUsername(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput 
            type="email" 
            value={email} 
            onIonChange={e => setEmail(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput 
            type="password" 
            value={password} 
            onIonChange={e => setPassword(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput 
            type="password" 
            value={confirmPassword} 
            onIonChange={e => setConfirmPassword(e.detail.value!)} 
            required 
          />
        </IonItem>
        <IonButton onClick={doRegister} expand="full" className="ion-margin-top">
          Register
        </IonButton>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Error'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;