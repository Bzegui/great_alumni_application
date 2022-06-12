import React, { useState } from "react";

import {

  IonContent,
  IonPage,
  IonButton,
  IonHeader,
  IonInput,
  IonGrid,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonText,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol

} from "@ionic/react";

import { useAppDispatch, useAppSelector } from "../../../typing/hooks/Hooks";

// CSS imports :

import '../../../stylesheets/register/Register.css'

import '../../../stylesheets/global/Global.css'

// redux imports :

import { registerDataArray } from "../../register_data/registerData";

import { updateRegisterData } from "../../../redux/features/data_storage/register/registerDataSlice";

// libraries imports :

import { HTTP } from '@ionic-native/http';

const RegisterPageTwoTest: React.FC = () => {

  /*******************Acces au store Redux et gestion des states, useSelector() et useState() hooks********************* */

  // 'useSelector' hook typed to 'useAppSelector' to access sensor data in redux store :

  const registerData = useAppSelector(state => state.registerData);

  // defining and storing states for data modification :

  // 'useDispatch' hook typed to 'useAppDispatch' to dispatch modified sensor data to redux store :
 
  const dispatch = useAppDispatch();

  // use state for inputs states :

  const [schoolName, setSchoolName] = useState<string>(registerData.schoolName);

  const [address, setAddress] = useState<string>(registerData.address);

  const [degree, setDegree] = useState<string>(registerData.degree);

  // use state for checkbox state :

  const [checked, setChecked] = useState<boolean>(false);

  // use state for checkbox state : 

  const [inputStatus, setInputStatus] = useState<string>('');

  /*******************Déclaration des variables principales********************* */

  // for displaying content :

  const location: HTMLElement | null = document.getElementById('display_created_content');

  // inputs retrieval :

  const SCHOOL_NAME_INPUT: HTMLElement | null = document.getElementById('school_name');

  const ADDRESS_INPUT: HTMLElement | null = document.getElementById('address');

  const DEGREE_INPUT: HTMLElement | null = document.getElementById('degree');

  // elements retrieval :

  const REGISTER_FORM = document.getElementById('register_form');

  // object for input value storage :

  /*******************Déclaration des fonctions d'ajout et de suppression des lignes********************* */

  // Create content based on user inputs :

  const createAcademicCuriculumContent = () => {

    if (schoolName === '' || address === '' || degree === '') {

      setInputStatus(`un ou plusieurs des champs de saisie est(sont) vide(s)`)

    } else {

        registerDataArray.push(schoolName)

        let row = document.createElement('ion-row');

        // column input container creation :

        let schoolNameInput = document.createElement('ion-input');

        let addressInput = document.createElement('ion-input');

        let degreeInput = document.createElement('ion-input');

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

        schoolNameColumn.appendChild(schoolNameInput);

        addressColumn.appendChild(addressInput);

        degreeColumn.appendChild(degreeInput);

        suppressColumn.appendChild(selectedRowBox);

        // display for columns and inputs -- CSS classes and attributes :

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

        // set attributes for checkboxes :

        selectedRowBox.setAttribute('checked', `${checked}`)

        selectedRowBox.setAttribute('id', 'box');
    }
  }

  // Submit the form :

  const onFormSubmit = (event: React.SyntheticEvent) => {

    event.preventDefault(); /* Empêcher le rafraichissement de la page web lorsque

    le formulaire est soumis par l'utilisateur. */

    if (REGISTER_FORM) {

      // Reset the form :

      (REGISTER_FORM as HTMLFormElement).reset(); 

      // Reinitialize inputs value :

      setSchoolName('');

      setAddress('');
      
      setDegree('')
    } 

    createAcademicCuriculumContent();
  }

  /*const deleteRow = () => {

    //setChecked(true);

    // Récupération des inputs de type 'checkbox' ayant le statut 'coché' :

    const SELECTED_INPUTS = document.querySelectorAll('input[type="checkbox"]:checked')

    alert(JSON.stringify(SELECTED_INPUTS));

    /*if (checked === true) {

      location?.removeChild(row);

      //schoolNameColumn?.removeChild(schoolNameInput);
    }*/

    //location?.removeChild(row);

    //alert(checked)
  //}

  /*******************Déclaration des fonctions d'arrêt de la saisie utilisateur********************* */

  const stopUserInput = () => {
    
    // dispatch new register data values, entered by user, to redux store : 

    dispatch(updateRegisterData({ schoolName, address, degree }))
  }

  /*******************Déclaration des fonctions d'envoi des infos du formulaire en HTTP********************* */

  const sendRegisterInfosToBackEnd = async() => {

    // JSON to store user registration data :

    const USER_REGISTER_DATA = {

      schoolName: registerData.schoolName,
      address: registerData.address,
      degree: registerData.degree
    }

    // HTTP GET request to post registration data : 

    // IP http://192.168.43.207//localhost:3000/

    await HTTP.post('http://localhost:3000/', USER_REGISTER_DATA, {headers: 'none'}).then(data => {

      // If sensor already exists on lorawan server/gateway (GET request status === '200') :

      // Provide profiles list with data from server :

      if (data.status === 200) {

        alert('ok');

        /** retrieved sensor data from LoRaWan server for modifying sensor data information : */ 

        console.log(data.status);
        console.log(data.data);
      }
        
    }).catch(error => {

        // If sensor doesn't exists on lorawan server (GET request status === '404') :

        // If GET request status is other than '404' :

        // eslint-disable-next-line no-useless-concat
        alert(error.status + " " + 'this is the error status');
        alert(error.error); // error message as string
        alert(error.headers);           
    });  
  }

  return (

      <IonPage>

        <IonHeader>

          <IonToolbar>

            <IonTitle>Formulaire d'enregistrement</IonTitle>

          </IonToolbar>

        </IonHeader>
  
        <IonContent>

          <form style={{ padding: 18 }} id="register_form">

            <IonText>{inputStatus}</IonText>

            <IonGrid id="display_created_content">

              <IonRow>

                <IonCol>

                  <IonInput

                    id = 'school_name'

                    name = 'school_name'

                    className='register-form-table register-form-input'

                    placeholder= "nom école"
                                        
                    onIonChange={e => setSchoolName(e.detail.value!)}    

                    value={schoolName}
                                
                  />
                  
                </IonCol>

                <IonCol>

                  <IonInput 

                    id = 'address'

                    name = 'address'

                    className='register-form-table register-form-input'
                  
                    value={address}

                    placeholder="adresse" 
                      
                    onIonChange={e => setAddress(e.detail.value!)}                                       
                  />

                </IonCol>

                <IonCol>

                  <IonInput 

                    id = 'degree'

                    name = 'degree'

                    className='register-form-table register-form-input'
                    
                    value={degree}

                    placeholder="diplôme" 
                    
                    onIonChange={e => setDegree(e.detail.value!)}      
                  />

                </IonCol>
              </IonRow>

              

            </IonGrid>

            <IonButton onClick={onFormSubmit}> ajouter une ligne </IonButton>

            <IonButton> supprimer une ligne </IonButton>

          </form>

          <IonButton onClick={stopUserInput}> finir la saisie </IonButton>

          <IonButton onClick={sendRegisterInfosToBackEnd}> Suivant </IonButton>

        </IonContent>

      </IonPage>
  );  
};

export default RegisterPageTwoTest;

/** to reuse later in code
 * 
 *   //school_names = []

    // function call :

    // create html elements for each value :

      //alert(school_names[i])

      if (displayCreatedContent !== null) {

        if ((SCHOOL_NAME_INPUT as HTMLFormElement).value === '') {

          alert('no content to add')
    
        } else {
           
       
      
        }
      } 


      else if (registerDataArray.includes(schoolName) || registerDataArray.includes(address) || registerDataArray.includes(degree)) {

      setInputStatus(`l'élément/les éléments que vous cherchez à ajouter existe(ent) déjà dans la liste`)
 */