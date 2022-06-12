// imports :

import React, { useState } from 'react';

import { 
    
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonInput, 
    IonButton,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,

} from '@ionic/react';

// CSS imports :

import '../../../stylesheets/register/Register.css'

import '../../../stylesheets/global/Global.css'

// Types imports :

import { useAppDispatch, useAppSelector } from '../../../typing/hooks/Hooks';

// Redux imports :

import { updateRegisterData } from '../../../redux/features/data_storage/register/registerDataSlice';

// 'RegisterPageTwo' function :

const RegisterPageTwo: React.FC = () => {

    /** to access register data from redux store : */ 

    // 'useSelector' hook typed to 'useAppSelector' to access sensor data in redux store :

    const registerData = useAppSelector(state => state.registerData);

    // defining and storing states for sensor data modification :

    // 'useDispatch' hook typed to 'useAppDispatch' to dispatch modified sensor data to redux store :
 
    const dispatch = useAppDispatch();

    // state management for grid inputs :

    // 'useState' hook to set modified register data values, entered by the user :

    const [schoolName, setSchoolName] = useState<string>(registerData.schoolName);

    const [address, setAddress] = useState<string>(registerData.address);

    const [degree, setDegree] = useState<string>(registerData.degree);

    // 'onRegisterDataUpdated' function when new register data values are submitted by user :

    const onRegisterDataUpdated = () => {

        // dispatch new register data values, entered by user, to redux store : 

        dispatch(updateRegisterData({ schoolName, address, degree }))
    }

    // columns creation for user input :

    // location for new created rows :

    const location: HTMLElement | null = document.getElementById('location');

    const CreateAcademicCuriculumContent = () => {

        // row creation :

        let row = document.createElement('ion-row');

        // column input container creation :

        let schoolNameInput = document.createElement('ion-input');

        let addressInput = document.createElement('ion-input');

        let degreeInput = document.createElement('ion-input');

        // columns for register data values entered by user :

        // columns creation :

        let schoolNameColumn = document.createElement('ion-col');

        let addressColumn = document.createElement('ion-col');

        let degreeColumn = document.createElement('ion-col');

        let suppressColumn = document.createElement('ion-col');

        // checkbox creation for row suppression :

        let selectedRowBox = document.createElement('ion-checkbox');

        // heritage :

        // type check to ensure that location value is not null :

        location !== null? location.appendChild(row) : alert(Error("DOM HTML element #location not found"));

        row.appendChild(schoolNameColumn);

        row.appendChild(addressColumn);

        row.appendChild(degreeColumn);

        row.appendChild(suppressColumn);

        suppressColumn.appendChild(selectedRowBox);

        schoolNameColumn.appendChild(schoolNameInput);

        addressColumn.appendChild(addressInput);

        degreeColumn.appendChild(degreeInput);

        // display for columns and inputs -- CSS classes and attributes :

        // set an ID for each new created row :

        row.setAttribute('id', 'new_row');

        // set an ID for each new created checkbox :

        selectedRowBox.setAttribute('id', 'new_row_box');

        // set placeholders, classlists and attributes for other elements :

        schoolNameInput.placeholder = `${schoolName}`

        schoolNameInput.classList.add('register-form-table');

        schoolNameInput.classList.add('register-form-input');

        schoolNameInput.setAttribute('readonly', '')

        addressInput.placeholder = `${address}`

        addressInput.classList.add('register-form-table');

        addressInput.classList.add('register-form-input');

        addressInput.setAttribute('readonly', '');

        degreeInput.placeholder = `${degree}`

        degreeInput.classList.add('register-form-table');

        degreeInput.classList.add('register-form-input');

        degreeInput.setAttribute('readonly', '');

        // reset form after new line addition :

        // pick up form location by ID :

        let form: HTMLElement | null = document.getElementById('register_form');

        // form resetting :

        form !== null? (form as HTMLFormElement).reset() /* // type assertion. */ : alert(Error("DOM HTML element #register_form not found"));
    }

    const DeleteAcademicCuriculumContent = () => {

        // retrieve rows to remove :

        let row: HTMLElement | null = document.getElementById('new_row');

        // retrieve rows checkboxes :

        let selectedRowBox: HTMLElement | null  = document.getElementById('new_row_box');

        // elements suppression :

        // if 'getElementById' methods return results for 'row' and 'selectedRowBox' other than 'null' :

        if (location !== null && selectedRowBox !== null && row !== null) {


            if ((selectedRowBox as HTMLFormElement).checked === true) {

                (row as HTMLFormElement).remove()
            }
            
        // if location can't be retrieved : 
    
        } else {
    
            alert(Error("Unable to find DOM element #location"))
        }
    }

    return (

        <IonPage>

            <IonHeader>

                <IonToolbar>

                    <IonTitle>Formulaire d'enregistrement</IonTitle>

                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen>

                <IonCard>

                    {/* user school curiculum */}

                    {/* column headers */}

                    <IonGrid>

                        {/* headers row */}

                        <IonRow>

                            <IonCol>Nom école</IonCol>

                            <IonCol>Adresse</IonCol>

                            <IonCol>Date-intitulé diplôme</IonCol>

                        </IonRow>

                    </IonGrid>

                    <form id="register_form">

                        <IonGrid className='register-form-table' id='location'>

                            <IonRow>

                                <IonCol>

                                    {/* to do : vider le placeholder des champs de saisie après chaque nouvelle saisie de lignes */}

                                    <IonInput

                                        id = "school_name_entry"
                                    
                                        className='register-form-table register-form-input'
                                    
                                        value={schoolName}

                                        placeholder= "nom école"
                                        
                                        onIonChange={e => setSchoolName(e.detail.value!)}                                  
                                    />

                                </IonCol>

                                <IonCol>

                                    <IonInput 

                                        className='register-form-table register-form-input'
                                    
                                        value={address}

                                        placeholder="adresse" 
                                        
                                        onIonChange={e => setAddress(e.detail.value!)}                                       
                                    />

                                </IonCol>

                                <IonCol>

                                    <IonInput 

                                        className='register-form-table register-form-input'
                                        
                                        value={degree}

                                        placeholder="diplôme" 
                                        
                                        onIonChange={e => setDegree(e.detail.value!)}      
                                    />

                                </IonCol>

                            </IonRow> 

                        </IonGrid>

                    </form>

                    <IonButton onClick={CreateAcademicCuriculumContent}>ajouter une ligne</IonButton>

                    <IonButton onClick={DeleteAcademicCuriculumContent}>supprimer les lignes sélectionnées</IonButton>

                </IonCard>

                {/* to dispatch register data to redux store */}

                <IonButton expand='block' onClick={onRegisterDataUpdated}>Finir la saisie</IonButton>

                {/* to register page 3 */}

                <IonButton expand='block'>Suivant</IonButton>

            </IonContent>

        </IonPage>
    );
};

export default RegisterPageTwo;

/** to reuse later in code
 * 
 * 
 *         // retrieve selected rows (by checkboxes) :
        
        const SELECTED_INPUTS = document.querySelectorAll('input[type="checkbox"]:checked');



        // if none of the checkboxes is ticked :

            if (!SELECTED_INPUTS.length)
    
            {
              alert("Erreur !, rien à supprimer");
              
              return;
    
            } else {
    
                // Remove selected rows :
              
                //SELECTED_INPUTS.forEach(element => row !== null? (row as HTMLFormElement).remove() /* // type assertion. */// : alert(Error("DOM HTML element #new_row not found"))
                //);
            //}
//*/