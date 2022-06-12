import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';

const UserProfile: React.FC = () => {

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-text-center ion-margin-top'>

        <br/>

        <IonText>Profil utilisateur</IonText>

      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
