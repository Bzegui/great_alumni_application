// imports :

import React, { useState } from 'react';

import { 
    
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonInput, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonButton,
    IonCard

} from '@ionic/react';

// CSS imports :

import '../../stylesheets/LoginForm.css';

const Login: React.FC = () => {

    // state management for user ID and password :

    const [userId, setUserId] = useState<string>();

    const [userPassword, setUserPassword] = useState<string>();
    
    return (

        <IonPage>

            <IonHeader>

                <IonToolbar>

                    <IonTitle>Formulaire de connexion</IonTitle>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <IonCard>

                    {/* user Login */}

                    <IonList>

                        {/* user ID */}

                        <IonItem>

                            {/**/}

                            <IonLabel position="stacked">ID</IonLabel>

                            <IonInput value={userId} placeholder="Identifiant de connexion" onIonChange={e => setUserId(e.detail.value!)}>

                                
                            </IonInput>

                        </IonItem>

                        {/* user password */}

                        <IonItem>

                            <IonLabel position="stacked">Password</IonLabel>

                            <IonInput 
                            
                                value={userPassword} 

                                placeholder="Mot de passe de connexion" 
                                
                                type="password" onIonChange={e => setUserPassword(e.detail.value!)}>

                            </IonInput>

                        </IonItem>

                    </IonList>

                </IonCard>

                <IonButton expand='block'>Submit</IonButton>

                {/* To user registration */}

                <IonItem routerLink="/register_page_1" className='ion-text-center'>

                    <IonLabel >Pas de compte? Enregistrez-vous !</IonLabel>

                </IonItem>

            </IonContent>

        </IonPage>
    );
};

export default Login;