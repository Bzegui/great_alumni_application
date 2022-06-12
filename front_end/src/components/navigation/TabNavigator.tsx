// imports :

import { Redirect, Route } from 'react-router-dom';

import {
  
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

// icons imports :

import { journal, newspaper, globe } from 'ionicons/icons';

// pages imports :

import Login from '../../pages/auth/Login';

import RegisterPageOne from '../../pages/auth/register/RegisterPageOne';

import RegisterPageTwo from '../../pages/auth/register/RegisterPageTwo';

import AlumniDirectory from '../../pages/views/main/AlumniDirectory';

import NewsFeed from '../../pages/views/main/NewsFeed';

import SupportPlatform from '../../pages/views/main/SupportPlatform';

// CSS imports :

import '../../stylesheets/tabs/Tabs.css'

// test imports :

import { InterfaceOptionsSelection } from '../../pages/auth/TestAuthForm'
import CheckedStateTest from '../../pages/auth/register/CheckedStateTest';
import RegisterPageTwoTest from '../../pages/auth/register/RegisterPageTwoTest';

// Tab navigator function :

const TabNavigator: React.FC = () => {

    return (
   
      <IonReactRouter>

        <IonTabs>

          <IonRouterOutlet>

            {/* to login */}

            <Route exact path="/login">

              {/* <InterfaceOptionsSelection/> */}

              <Login />

            </Route>

            {/* to register -- page 1 */}

            <Route exact path="/register_page_1">

              <RegisterPageOne />

            </Route>

            {/* to register -- page 2 */}

            <Route exact path="/register_page_2">

              {/* <RegisterPageTwo />  RegisterPageTwoTest CheckedStateTest */} 

              < RegisterPageTwoTest/>

            </Route>

            {/* to alumni directory */}

            <Route exact path="/alumni_directory">

              <AlumniDirectory />

            </Route>

            {/* to newsfeed */}

            <Route path="/news_feed">

              <NewsFeed />

            </Route>

            {/* to support platform */}

            <Route path="/support_platform">

              <SupportPlatform />

            </Route>

            {/* to home - main redirection */}

            <Route exact path="/">

              <Redirect to="/login" />

            </Route>

          </IonRouterOutlet>

          <IonTabBar slot="bottom">

            <IonTabButton tab="alumni_directory" href="/alumni_directory">

              <IonIcon icon={journal} />

              <IonLabel>annuaire</IonLabel>

            </IonTabButton>

            <IonTabButton tab="news_feed" href="/news_feed">

              <IonIcon icon={newspaper} />

              <IonLabel>actualités</IonLabel>

            </IonTabButton>

            <IonTabButton tab="support_platform" href="/support_platform">

              <IonIcon icon={globe} />

              <IonLabel>plateforme d'entraide</IonLabel>

            </IonTabButton>

          </IonTabBar>

        </IonTabs>

      </IonReactRouter>
    )  
};

// exports :
  
export default TabNavigator;
  