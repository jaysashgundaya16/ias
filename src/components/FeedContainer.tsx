// IncidentReport.tsx

import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonInput,
  IonCard,
  IonContent,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonAlert,
  IonText,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
} from '@ionic/react';

const IncidentReport: React.FC = () => {
  const [reporterName, setReporterName] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentTime, setIncidentTime] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [incidents, setIncidents] = useState<any[]>([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = () => {
    const data = localStorage.getItem('incidents');
    if (data) {
      setIncidents(JSON.parse(data));
    }
  };

  const saveIncidents = () => {
    localStorage.setItem('incidents', JSON.stringify(incidents));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!reporterName || !reporterEmail || !incidentType || !incidentDate || !incidentTime || !incidentDescription) {
      setFormMessage('Please fill out all required fields correctly.');
      setIsAlertOpen(true);
      return;
    }

    const newIncident = {
      reporterName,
      reporterEmail,
      incidentType,
      incidentDate,
      incidentTime,
      incidentDescription,
      status: 'Open',
      id: Date.now(),
    };

    const updatedIncidents = [...incidents, newIncident];
    setIncidents(updatedIncidents);
    saveIncidents();
    setFormMessage('Incident submitted successfully!');
    setIsAlertOpen(true);
    resetForm();
  };

  const resetForm = () => {
    setReporterName('');
    setReporterEmail('');
    setIncidentType('');
    setIncidentDate('');
    setIncidentTime('');
    setIncidentDescription('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Report a Security Incident</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Report a Security Incident</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonInput
                  value={reporterName}
                  onIonChange={e => setReporterName(e.detail.value!)}
                  placeholder="Your full name"
                  required
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type="email"
                  value={reporterEmail}
                  onIonChange={e => setReporterEmail(e.detail.value!)}
                  placeholder="you@example.com"
                  required
                />
              </IonItem>
              <IonItem>
                <IonSelect
                  value={incidentType}
                  onIonChange={e => setIncidentType(e.detail.value!)}
                  placeholder="Select Type"
                  
                >
                  <IonSelectOption value="Phishing">Phishing</IonSelectOption>
                  <IonSelectOption value="Malware Infection">Malware Infection</IonSelectOption>
                  <IonSelectOption value="Data Breach">Data Breach</IonSelectOption>
                  <IonSelectOption value="Unauthorized Access">Unauthorized Access</IonSelectOption>
                  <IonSelectOption value="Denial of Service">Denial of Service</IonSelectOption>
                  <IonSelectOption value="Other">Other</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonInput
                  type="date"
                  value={incidentDate}
                  onIonChange={e => setIncidentDate(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type="time"
                  value={incidentTime}
                  onIonChange={e => setIncidentTime(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem>
                <IonTextarea
                  value={incidentDescription}
                  onIonChange={e => setIncidentDescription(e.detail.value!)}
                  placeholder="Briefly describe the incident"
                  required
                />
              </IonItem>
              <IonButton expand="full" type="submit">Submit</IonButton>
            </form>
            {formMessage && <IonText color="danger">{formMessage}</IonText>}
          </IonCardContent>
        </IonCard>
        <IonAlert
          isOpen={isAlertOpen}
          onDidDismiss={() => setIsAlertOpen(false)}
          header="Success"
          message={formMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default IncidentReport;
