import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './components/Common/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/Common/App';
import registerServiceWorker from './components/Common/registerServiceWorker';
import configureStore from './components/Common/configureStore';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'



const store = configureStore();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



// ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();




