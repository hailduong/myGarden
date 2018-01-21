import React from 'react';
import Home from "./Home/Home.js";
import AddPlant from "./AddPlant/AddPlant";
import SideMenu from "./SideMenu";
import * as ons from "onsenui";
import {
	Tabbar, Tab, Page, Icon, Toolbar, ToolbarButton, Navigator,
	List, ListItem, Splitter, SplitterSide, SplitterContent
} from "react-onsenui";


export default class App extends React.Component {

	state = {
		menuIsOpen: false
	};

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

	showMenu = () => {
		this.setState({
			menuIsOpen: true
		})
	};

	hideMenu = () => {
		this.setState({
			menuIsOpen: false
		})
	};

	renderTopToolbar = () => {
		return (
			<Toolbar>
				<div className='center'>myGarden</div>
				<div className='right'>
					<ToolbarButton onClick={this.showMenu}>
						<Icon icon='md-more-vert'></Icon>
					</ToolbarButton>
				</div>
			</Toolbar>
		);
	};

	renderAppContainer = (route, navigator) => {
		return (
			<Splitter>
				<SplitterContent>
					<Page navigator={navigator} renderToolbar={this.renderTopToolbar}>
						<Tabbar renderTabs={this.renderTabs}/>/>
					</Page>
				</SplitterContent>
				<SplitterSide isOpen={this.state.menuIsOpen}
							  collapse={"collapse"}
							  onClose={this.hideMenu}
							  onOpen={this.showMenu}
							  side="right"
				>
					<SideMenu/>
				</SplitterSide>
			</Splitter>
		)
	};

	render() {
		return (
			<Navigator
				renderPage={this.renderAppContainer}
				initialRoute={{
					title: 'Home',
					hasBackButton: false
				}}
			/>
		)
	}


}


ons.ready(function() {
	ReactDOM.render(<MyPage />, document.getElementById('app'));
});