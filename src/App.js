import React from 'react';
import Home from "./Home/Home.js";
import AddPlant from "./AddPlant/AddPlant";
import {Route, BrowserRouter} from "react-router-dom";
import TabNavigator from "./TabNavigator";

import {Tabbar, Tab, Page, Icon, Toolbar, ToolbarButton} from "react-onsenui";


export default class App extends React.Component {

	renderTabs = () => {
		return [
			{
				content: <Page><Home/></Page>,
				tab: <Tab label='Home' icon='md-home'/>
			},
			{
				content: <Page><AddPlant/></Page>,
				tab: <Tab label='Add Plant' icon='md-file-plus'/>
			}
		];

	};

	renderToolbar = () => {
		return (
			<Toolbar>
				<div className='center'>myGarden</div>
				<div className='right'>
					<ToolbarButton>
						<Icon icon='md-menu'></Icon>
					</ToolbarButton>
				</div>
			</Toolbar>
		);
	};

	render() {
		return (
			<Page renderToolbar={this.renderToolbar}>
				<Tabbar swipeable={true} renderTabs={this.renderTabs}/>/>
			</Page>
		)
	}

}