import React, { useState } from 'react';
import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonPage, IonItemDivider } from '@ionic/react';

const customAlertOptions = {
  header: 'Pizza Toppings',
  subHeader: 'Select your toppings',
  message: '$1.00 per topping',
  translucent: true
};

const customPopoverOptions = {
  header: 'Hair Color',
  subHeader: 'Select your hair color',
  message: 'Only select your dominant hair color'
};

const customActionSheetOptions = {
  header: 'Colors',
  subHeader: 'Select your favorite color'
};

export const InterfaceOptionsSelection: React.FC = () => {

  const [toppings, setToppings] = useState<string[]>([]);
  const [hairColor, setHairColor] = useState<string>();
  const [color, setColor] = useState<string>();

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>
              Interface Options
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Alert</IonLabel>
            <IonSelect
              interfaceOptions={customAlertOptions}
              interface="alert"
              multiple={true}
              placeholder="Select One"
              onIonChange={e => setToppings(e.detail.value)}
              value={toppings}
            >
              <IonSelectOption value="bacon">Bacon</IonSelectOption>
              <IonSelectOption value="olives">Black Olives</IonSelectOption>
              <IonSelectOption value="xcheese">Extra Cheese</IonSelectOption>
              <IonSelectOption value="peppers">Green Peppers</IonSelectOption>
              <IonSelectOption value="mushrooms">Mushrooms</IonSelectOption>
              <IonSelectOption value="onions">Onions</IonSelectOption>
              <IonSelectOption value="pepperoni">Pepperoni</IonSelectOption>
              <IonSelectOption value="pineapple">Pineapple</IonSelectOption>
              <IonSelectOption value="sausage">Sausage</IonSelectOption>
              <IonSelectOption value="Spinach">Spinach</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Popover</IonLabel>
            <IonSelect
              interfaceOptions={customPopoverOptions}
              interface="popover"
              placeholder="Select One"
              onIonChange={e => setHairColor(e.detail.value)}
              value={hairColor}>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Action Sheet</IonLabel>
            <IonSelect
              interfaceOptions={customActionSheetOptions}
              interface="action-sheet"
              placeholder="Select One"
              onIonChange={e => setColor(e.detail.value)}
              value={color}
            >
              <IonSelectOption value="red">Red</IonSelectOption>
              <IonSelectOption value="purple">Purple</IonSelectOption>
              <IonSelectOption value="yellow">Yellow</IonSelectOption>
              <IonSelectOption value="orange">Orange</IonSelectOption>
              <IonSelectOption value="green">Green</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Toppings: {toppings.length ? toppings.reduce((curr, prev) => prev + ', ' + curr, '') : '(none selected)'}</IonItem>
          <IonItem>Hair Color: {hairColor}</IonItem>
          <IonItem>Color: {color ?? '(none selected)'}</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};