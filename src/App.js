import React from 'react';
import Home from "./Home/Home.js";
import AddPlant from "./AddPlant/AddPlant";
import * as ons from "onsenui";
import {Tabbar, Tab, Page, Icon, Toolbar, ToolbarButton} from "react-onsenui";


export default class App extends React.Component {

	constructor() {
		super();
		ons.disableAutoStyling();
	}

	renderTabs = () => {
		return [
			{
				content: <Page key="1"><Home/></Page>,
				tab: <Tab key="1" label='Home' icon='md-home'/>
			},
			{
				content: <Page key="2"><AddPlant/></Page>,
				tab: <Tab key="2" label='Add Plant' icon='md-file-plus'/>
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