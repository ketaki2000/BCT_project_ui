import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages


import PendingInsurances from './insurances/PendingInsurances';
import ApprovedInsurances from './insurances/ApprovedInsurances';
import CreateInsurance from "./CreateInsurance";


import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";



// components
import Sidebar from "../components/Sidebar";


import Preloader from "../components/Preloader";
import App from '../App';
import HospitalStaff from './staff';
import InsuranceCompany from './company/Company';


const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => { console.log("props:",props);
      return (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          
          <Component {...props} />
          
        </main>
      </>
    )}}
    />
  );
};

export default () => (
  <Switch>
    
    
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    
    
    <RouteWithSidebar exact path={Routes.PendingInsurances.path} component={PendingInsurances} />
    <RouteWithSidebar exact path={Routes.ApprovedInsurances.path} component={ApprovedInsurances} />
    <RouteWithSidebar exact path={Routes.CreateInsurance.path} component={CreateInsurance} />
    <Route exact path={Routes.HospitalStaff.path} component={HospitalStaff} />

    <Route exact path={Routes.InsuranceCompany.path} component={InsuranceCompany} />

    

    <Route to={Routes.App.path} component={App}/>
  </Switch>
);
