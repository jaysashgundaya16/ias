import React, { useState, useEffect } from 'react';
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
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonAlert,
  IonText,
  IonInput,
} from '@ionic/react';

const BIAReport: React.FC = () => {
  const [biaTitle, setBiaTitle] = useState('');
  const [biaDescription, setBiaDescription] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  const [biaReports, setBiaReports] = useState<any[]>([]);
  const [formMessage, setFormMessage] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    loadBIAReports();
  }, []);

  const loadBIAReports = () => {
    const data = localStorage.getItem('biareports');
    if (data) {
      setBiaReports(JSON.parse(data));
    }
  };

  const saveBIAReports = () => {
    localStorage.setItem('biareports', JSON.stringify(biaReports));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!biaTitle || !biaDescription || !riskLevel) {
      setFormMessage('Please fill out all required fields correctly.');
      setIsAlertOpen(true);
      return;
    }

    const newBIAReport = {
      title: biaTitle,
      description: biaDescription,
      riskLevel,
      id: Date.now(),
    };

    const updatedBIAReports = [...biaReports, newBIAReport];
    setBiaReports(updatedBIAReports);
    saveBIAReports();
    setFormMessage('BIA report submitted successfully!');
    setIsAlertOpen(true);
    resetForm();
  };

  const resetForm = () => {
    setBiaTitle('');
    setBiaDescription('');
    setRiskLevel('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>BIA Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        {/* BIA Report Form */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Create BIA Report</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                  value={biaTitle}
                  onIonChange={e => setBiaTitle(e.detail.value!)}
                  placeholder="Enter BIA report title"
                  required
                />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                  value={biaDescription}
                  onIonChange={e => setBiaDescription(e.detail.value!)}
                  placeholder="Enter BIA report description"
                  required
                />
              </IonItem>
              <IonItem>
                <IonLabel>Risk Level</IonLabel>
                <IonSelect
                  value={riskLevel}
                  onIonChange={e => setRiskLevel(e.detail.value!)}
                  placeholder="Select Risk Level"
                  
                >
                  <IonSelectOption value="Low">Low</IonSelectOption>
                  <IonSelectOption value="Medium">Medium</IonSelectOption>
                  <IonSelectOption value="High">High</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonButton expand="full" type="submit">Submit BIA Report</IonButton>
            </form>
            {formMessage && <IonText color="danger">{formMessage}</IonText>}
          </IonCardContent>
        </IonCard>

        {/* BIA Reports List */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Submitted BIA Reports</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {biaReports.length === 0 ? (
              <p>No BIA reports submitted yet.</p>
            ) : (
              <IonCard>
                {biaReports.map((report) => (
                  <IonCard key={report.id} className="ion-margin-bottom">
                    <IonCardHeader>
                      <IonCardTitle>{report.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p><strong>Description:</strong> {report.description}</p>
                      <p><strong>Risk Level:</strong> {report.riskLevel}</p>
                    </IonCardContent>
                  </IonCard>
                ))}
              </IonCard>
            )}
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

export default BIAReport;
