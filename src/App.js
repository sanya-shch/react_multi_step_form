import React from 'react';

import './App.css';
import UserForm from './components/UserForm';

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <UserForm />
            </div>
        );
    }

}
