// imports :

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonSegment, IonSegmentButton, IonIcon, IonLabel } from '@ionic/react';

import { useState } from 'react';

// icons imports :

import { mail, globe } from 'ionicons/icons';

const SupportPlatform: React.FC = () => {

  // useState hook for storing selected segment value :

  const [selectedSegmentValue, setSelectedSegmentValue] = useState<string>('');

  // conditional display of content :

  // 'contentDisplay' variable to store 'forum' and 'messagerie' content :

  let contentDisplay;

  // 'forumContentDisplay' function to display 'forum' content :


  const forumContentDisplay = () => {


    return (
    
      <IonText>forum content</IonText>    
    )
  }

  // 'messagerieContentDisplay' function to display 'messagerie' content :

  const messagerieContentDisplay = () => {


    return (
    
      <IonText>messagerie content</IonText>
    )
  }

  // 'if...else' condition to toggle 'forum' and 'messagerie' content, depending on the value of the segment stored in 'setSelectedSegment' state :


  if (selectedSegmentValue === 'forum') {

    // forum content display.
    
    contentDisplay = forumContentDisplay();

  } else {

    // messagerie content display.

    contentDisplay = messagerieContentDisplay()
  }

  // Content returned by 'SupportPlatform' function :

  return (

    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonSegment>

            <IonSegmentButton value="forum" onClick={event => setSelectedSegmentValue('forum')}>
              
              <IonIcon icon={globe} />

              <IonLabel>Forum</IonLabel>
              
            </IonSegmentButton>

            <IonSegmentButton value="messagerie" onClick={event => setSelectedSegmentValue('messagerie')}>
              
              <IonIcon icon={mail} />

              <IonLabel>Messagerie</IonLabel>
              
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
      
        <IonText>content test {JSON.stringify(selectedSegmentValue)}</IonText>

      </IonContent>
    </IonPage>
  );
};

export default SupportPlatform;