import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/pages/home';
import Cv from './component/pages/cv';
import Git from './component/pages/git';
import ConflictGit from './component/pages/conflictGit';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact="exact" path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/cv' component={Cv} />
                    <Route path='/git' component={Git} />
                    <Route path='/conflict-git' component={ConflictGit} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
