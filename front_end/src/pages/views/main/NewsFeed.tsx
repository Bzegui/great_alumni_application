// imports :

import { 
  
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText, 
  IonIcon

} from '@ionic/react';

// icons imports :

// import { newspaper } from 'ionicons/icons';

const NewsFeed: React.FC = () => {

  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>Fil d'actualités</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen className='ion-text-center ion-margin-top'>

        <br/>

        <IonText>Fil d'actualités</IonText>

      </IonContent>
    </IonPage>
  );
};

export default NewsFeed;
