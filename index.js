import React from 'react';
import ReactDOM from "react-dom";
import App from "./src/App.js";

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./src/misc/reducer";

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, reduxDevTool);

store.subscribe(() => {
	const currentState = store.getState();
	localStorage.setItem('myGarden', JSON.stringify(currentState));
	console.log('- Store is saved to `localStorage`');
});


ReactDOM.render(<Provider store={store}><App/></Provider>,
	document.querySelector('#myGarden'));