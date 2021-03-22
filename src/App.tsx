import * as React from 'react';
import { Header } from './components/';
import './styles/_app.scss';



const App = () => {
    return(
        <div className="wrapper">
            <Header/>
            <div className="content"></div>
        </div>
    )
}

export default App;
