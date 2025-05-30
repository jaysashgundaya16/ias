import { useState } from 'react';
import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';

import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
const supabase = createClient('https://ypmhcyklosieqqfhdsrz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbWhjeWtsb3NpZXFxZmhkc3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzQxNjUsImV4cCI6MjA1ODM1MDE2NX0.FebBjZYn-wTMMCdYrA9F8kcf8vCtQ7tz4yfhVxH9ayg');


// Reusable AlertBox component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="login-card">
          <IonAvatar className="avatar-wrapper">
            <img
                src="https://64.media.tumblr.com/f9902d17e747edea5bc0fd80665efb9f/198143a632ac808c-e9/s400x600/c0fea488be809710333a61a8574a652e11751d2b.gifv"
              alt="Salmoon"
            />
            <div className="avatar-glow"></div>
          </IonAvatar>

          <h1 className="Register-title">ADMIN LOGIN</h1>
          <p style={{ textAlign: 'left', color: '#666', marginBottom: '20px' }}>
            Please login or sign up to continue
          </p>

          <IonInput
            placeholder="Your Email"
            type="email"
            fill="outline"
            style={{
              borderRadius: '12px',
              marginBottom: '10px',
              '--highlight-color-focused': '#ACC572',
              '--border-color': '#ACC572'
            }}
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />

          <IonInput
            placeholder="Your Password"
            type="password"
            fill="outline"
            style={{
              borderRadius: '12px',
              marginBottom: '10px',
              '--highlight-color-focused': '#ACC572',
              '--border-color': '#ACC572'
            }}
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="full"
            fill="solid"
            color="warning"
            style={{ marginTop: '20px' }}
          >
            Login
          </IonButton>

          <IonButton routerLink="/it35-lab/Register" expand="full" fill="clear" color="success" >
          Don't have an account?
        </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>

     {/* Floating Animation and Card Styles */}
     <style>
        {`
          
          }

          @keyframes floatAvatar {
            0%, 100% {
              transform: translateY(0) rotateY(0deg) rotateX(0deg);
            }
            50% {
              transform: translateY(-15px) rotateY(12deg) rotateX(8deg);
            }
          }

          .login-card {
    
            max-width: 380px;
            margin: 8% auto 0 auto;
            padding: 25px 25px 30px 25px;
            background:rgb(8, 8, 8);
            border-radius: 20px;
            animation: floatCard 6s ease-in-out infinite;
            display: flex;
            flex-direction: column;
            align-items: center;
            
          }


          .login-card ion-input {
            width: 100%;
            margin-top: 15px;
          }

          .login-card ion-button {
            width: 100%;
          }

          .avatar-wrapper {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            animation: floatAvatar 6s ease-in-out infinite;
            cursor: default;
            margin-bottom: 20px;
          }
        `}
      </style>
    </IonPage>
  );
};

export default Login;