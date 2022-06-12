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
    IonCard,
    IonSelect,
    IonSelectOption

} from '@ionic/react';

// CSS imports :

//import '../../stylesheets/LoginForm.css';

const RegisterPageOne: React.FC = () => {

    // state management for user last name, firstname, department and graduation year :

    const [userLastName, setUserLastName] = useState<string>();

    const [userFirstName, setUserFirstName] = useState<string>();

    const [department, setUserDepartment] = useState<string>('78');

    const [graduationYear, setGraduationYear] = useState<string>('1970');
    
    return (

        <IonPage>

            <IonHeader>

                <IonToolbar>

                    <IonTitle>Formulaire d'enregistrement</IonTitle>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <IonCard>

                    {/* user Register */}

                    <IonList>

                        {/* user last name */}

                        <IonItem>

                            {/**/}

                            <IonLabel position="stacked">Nom</IonLabel>

                            <IonInput value={userLastName} placeholder="Saisissez votre nom" onIonChange={e => setUserLastName(e.detail.value!)} />

                        </IonItem>

                        {/* user first name */}

                        <IonItem>

                            <IonLabel position="stacked">Prénom</IonLabel>

                             {/* faire condition ternaire pour valeurs par défaut pour les select */}

                            <IonInput value={userFirstName} placeholder="Saisissez votre prénom" onIonChange={e => setUserFirstName(e.detail.value!)} />
 
                        </IonItem>

                        {/* user department */}

                        <IonItem>

                            {/**/}

                            <IonLabel position="stacked">Département</IonLabel>

                            <IonSelect value={department} placeholder="Sélectionnez votre département" onIonChange={e => setUserDepartment(e.detail.value!)} >

                                <IonSelectOption value="78">78 - Yvelines</IonSelectOption>

                                <IonSelectOption value="15">15 - Cantal</IonSelectOption>

                            </IonSelect>
 
                        </IonItem>

                        {/* user graduation year */}

                        <IonItem>

                            {/**/}

                            <IonLabel position="stacked">Année de promotion</IonLabel>

                            <IonSelect value={graduationYear} placeholder="Choisissez votre année de promotion" onIonChange={e => setGraduationYear(e.detail.value!)} >

                                <IonSelectOption value="1971">1971</IonSelectOption>

                                <IonSelectOption value="1970">1970</IonSelectOption>

                            </IonSelect>
 
                        </IonItem>
                       
                    </IonList>

                </IonCard>

                {/* to register page 2 */}

                <IonButton expand='block' routerLink="/register_page_2">Next</IonButton>

            </IonContent>

        </IonPage>
    );
};

export default RegisterPageOne;

/** to reuse later in the code
 * 
 * {department == ''? IonSelect.arguments.value == '78' : IonSelect.arguments.value == department}
 */