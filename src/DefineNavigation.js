import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoadingText from './LoadingText';
import App from './App';



function DefineNavigation() {

return (

        //Define navigation for Drawer page
        <Switch>
        {//Route for LoadingText page 
        }    
        <Route path="/LoadingText">
            <LoadingText />
        </Route>

        <Route path="/">
            <App />
        </Route>
    </Switch>
);
}

export default DefineNavigation;