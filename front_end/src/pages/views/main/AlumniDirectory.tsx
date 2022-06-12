// imports :

import { IonContent, IonHeader, IonPage, IonToolbar, IonText, IonSegment, IonSegmentButton, IonIcon, IonLabel } from '@ionic/react';

import { useState } from 'react';

// icons imports :

import { journal, person } from 'ionicons/icons';

const AlumniDirectory: React.FC = () => {

  // useState hook for storing selected segment value :

  const [selectedSegmentValue, setSelectedSegmentValue] = useState<string>('');

  // conditional display of content :

  // 'contentDisplay' variable to store 'forum' and 'messagerie' content :

  let contentDisplay;

  // 'profileContentDisplay' function to display 'forum' content :


  const profileContentDisplay = () => {


    return (
    
      <IonText>profil content</IonText>    
    )
  }

  // 'messagerieContentDisplay' function to display 'messagerie' content :

  const alumniDirectoryContentDisplay = () => {


    return (
    
      <IonText>annuaire des anciens content</IonText>
    )
  }

  // 'if...else' condition to toggle 'user profile' and 'alumni directory' content, depending on the value of the segment stored in 'setSelectedSegment' state :

  if (selectedSegmentValue === 'user_profile') {

    // forum content display.
    
    contentDisplay = profileContentDisplay();

  } else {

    // messagerie content display.

    contentDisplay = alumniDirectoryContentDisplay()
  }

  // Content returned by 'AlumniDirectory' function :

  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonSegment>

            <IonSegmentButton value="user_profile" onClick={event => setSelectedSegmentValue('user_profile')}>
              
              <IonIcon icon={person} />

              <IonLabel>Profil</IonLabel>
              
            </IonSegmentButton>

            <IonSegmentButton value="alumni_directory" onClick={event => setSelectedSegmentValue('alumni_directory')}>

              <IonIcon icon={journal} />
              
              <IonLabel>Annuaire</IonLabel>
              
            </IonSegmentButton>

          </IonSegment>

        </IonToolbar>

      </IonHeader>
      
      <IonContent fullscreen className='ion-text-center ion-margin-top'>

        <br/>

        <IonText>Plateforme d'entraide</IonText>

        <br/>

        <IonText>{contentDisplay}</IonText>

        <br/>

        {/* for development only */}
      
        {/* <IonText>content test {JSON.stringify(selectedSegmentValue)}</IonText> */}

      </IonContent>
    </IonPage>
  );
};

export default AlumniDirectory;