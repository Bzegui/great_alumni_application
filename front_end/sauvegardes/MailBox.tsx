import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';

const MailBox: React.FC = () => {

  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>Messagerie</IonTitle>

        </IonToolbar>

      </IonHeader>
      
      <IonContent fullscreen className='ion-text-center ion-margin-top'>

        <br/>

        <IonText>Messagerie</IonText>

      </IonContent>
    </IonPage>
  );
};

export default MailBox;
