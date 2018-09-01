import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './Component/Wizard/Wizard';
import Wizardtwo from './Component/Wizard/Wizardtwo';
import Wizardthree from './Component/Wizard/Wizardthree';
import Dashboard from './Component/Dashboard/Dashboard';

export default (
            <Switch>
                <Route component={Dashboard} exact path= '/'/>
                <Route component={Wizard} path= '/wizard/'/>
                <Route component={Wizard} path= '/edit/:id'/>
                <Route component={Wizardtwo} path= '/Wizardtwo'/>
                <Route component={Wizardthree} path='/Wizardthree' />
            </Switch>
        )