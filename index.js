import React from 'react';
import ReactDOM from "react-dom";
import App from "./src/App.js";

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./src/misc/reducer";

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>,
	document.querySelector('#myGarden'));