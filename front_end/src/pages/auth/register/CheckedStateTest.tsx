import React, { useState } from "react";

import ReactDOM from "react-dom";

import { useForm } from "react-hook-form";

import {

  IonContent,
  IonPage,
  IonButton,
  IonHeader,
  IonInput,
  IonGrid,
  IonItem,
  IonLabel,
  IonCheckbox

} from "@ionic/react";

import { useAppSelector } from "../../../typing/hooks/Hooks";

// CSS imports :

import '../../../stylesheets/register/Register.css'

import '../../../stylesheets/global/Global.css'

const CheckedStateTest: React.FC = () => {

  const location = document.getElementById('location');

  // location for new created rows :

  const addInput = () => {

    // row creation :

    let row = document.createElement('ion-row');

    row.setAttribute('id', 'new_row');

    //alert("ok")

    //let form = document.getElementById('register_form');

    //if(form) (form as HTMLFormElement).reset(); 


    let input = document.createElement('input');

    input.setAttribute("type", "text");

    let boxInput = document.createElement('input');

    boxInput.setAttribute("type", "checkbox");

    location?.appendChild(row);

    row?.appendChild(input);

    row?.appendChild(boxInput);
  }

  const deleteRows = () => {

    let row = document.getElementById('new_row');

    const SELECTED_INPUTS = document.querySelectorAll('input[type="checkbox"]:checked');

    let ROWS_TO_REMOVE = [];

    // delete select options :

    if (location !== null) {

      if (!SELECTED_INPUTS.length)

      {
        alert("Erreur !, rien à supprimer");
        
        return;

      } else {

        for (let i = 0; i < SELECTED_INPUTS.length; i++)

        {
          ROWS_TO_REMOVE.push(SELECTED_INPUTS[i])
        }

        while (location.hasChildNodes) {

          location.removeChild(row as HTMLElement);
        }


          
          //SELECTED_INPUTS.forEach(element => row !== null? (row as HTMLFormElement).remove() /* // type assertion. */ : alert(Error("DOM HTML element #new_row not found"))
        
        

        

        //alert(JSON.stringify(location.firstChild));

        //alert(location.lastChild?.nodeValue);
      }

      

    } else {

      alert(Error("Unable to find DOM element #location"))
    }
    
  }

  return (   

    <><div id="location">


      <p></p>

    </div><button type="button" onClick={addInput}> ajouter une ligne </button>

    <button type="button" onClick={deleteRows}> supprimer  une ligne </button>

    </>             
  );  
};

export default CheckedStateTest;

/** to reuse later
 * 
 * if (SELECTED_INPUTS) {

          while (location.firstChild) {
    
            location.removeChild(location.firstChild);
          }
        }
 */