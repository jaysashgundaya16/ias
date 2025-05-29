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
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
  IonIcon,
} from '@ionic/react';
import { createClient } from '@supabase/supabase-js';
import { addCircleOutline } from 'ionicons/icons'; // Importing an icon

// Replace with your own Supabase URL and anon key
const SUPABASE_URL = 'https://ypmhcyklosieqqfhdsrz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbWhjeWtsb3NpZXFxZmhkc3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzQxNjUsImV4cCI6MjA1ODM1MDE2NX0.FebBjZYn-wTMMCdYrA9F8kcf8vCtQ7tz4yfhVxH9ayg'; // Keep this secure

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface Incident {
  id: number;
  reporter_name: string;
  reporter_email: string;
  incident_type: string;
  incident_date: string;
  incident_time: string;
  incident_description: string;
  status: string;
}

const IncidentReport: React.FC = () => {
  const [reporterName, setReporterName] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentTime, setIncidentTime] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('incidents')
      .select('*')
      .order('incident_date', { ascending: false })
      .order('incident_time', { ascending: false });

    if (error) {
      setFormMessage(`Failed to load incidents from database: ${error.message}`);
      setIsAlertOpen(true);
    } else if (data) {
      setIncidents(data as Incident[]);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !reporterName ||
      !reporterEmail ||
      !incidentType ||
      !incidentDate ||
      !incidentTime ||
      !incidentDescription
    ) {
      setFormMessage('Please fill out all required fields correctly.');
      setIsAlertOpen(true);
      return;
    }

    const newIncident: Omit<Incident, 'id'> = {
      reporter_name: reporterName,
      reporter_email: reporterEmail,
      incident_type: incidentType,
      incident_date: incidentDate,
      incident_time: incidentTime,
      incident_description: incidentDescription,
      status: 'Open',
    };

    setIsLoading(true);
    const { data, error } = await supabase.from('incidents').insert([newIncident]);

    setIsLoading(false);

    if (error) {
      setFormMessage(`Failed to submit the incident: ${error.message}`);
      setIsAlertOpen(true);
    } else {
      setFormMessage('Incident submitted successfully!');
      setIsAlertOpen(true);
      await loadIncidents();
      resetForm();
    }
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
        <IonToolbar color="primary">
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
              <IonButton expand="full" type="submit" disabled={isLoading} color="success">
                {isLoading ? <IonSpinner name="dots" /> : <IonIcon icon={addCircleOutline} />} Submit
              </IonButton>
            </form>
            {formMessage && <IonText color="danger">{formMessage}</IonText>}
          </IonCardContent>
        </IonCard>

        {/* Incident Report History Table */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Incident Report History</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {isLoading ? (
              <IonSpinner name="lines" />
            ) : incidents.length > 0 ? (
              <IonGrid>
                <IonRow>
                  <IonCol><strong>Name</strong></IonCol>
                  <IonCol><strong>Email</strong></IonCol>
                  <IonCol><strong>Type</strong></IonCol>
                  <IonCol><strong>Date</strong></IonCol>
                  <IonCol><strong>Time</strong></IonCol>
                  <IonCol><strong>Description</strong></IonCol>
                  <IonCol><strong>Status</strong></IonCol>
                </IonRow>
                {incidents.map((incident) => (
                  <IonRow key={incident.id}>
                    <IonCol>{incident.reporter_name}</IonCol>
                    <IonCol>{incident.reporter_email}</IonCol>
                    <IonCol>{incident.incident_type}</IonCol>
                    <IonCol>{incident.incident_date}</IonCol>
                    <IonCol>{incident.incident_time}</IonCol>
                    <IonCol>{incident.incident_description}</IonCol>
                    <IonCol>{incident.status}</IonCol>
                  </IonRow>
                ))}
              </IonGrid>
            ) : (
              <IonText>No incidents reported yet.</IonText>
            )}
          </IonCardContent>
        </IonCard>

        <IonAlert
          isOpen={isAlertOpen}
          onDidDismiss={() => setIsAlertOpen(false)}
          header="Notification"
          message={formMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default IncidentReport;
