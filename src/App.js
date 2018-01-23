import React from 'react';
import ReactDOM from "react-dom";
import Home from "./Home/Home.js";
import AddPlant from "./UpdatePlant/AddPlant";
import EditPlant from "./UpdatePlant/EditPlant";
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
				content: <Page key="1"><Home navigator={this.props.navigator}/></Page>,
				tab: <Tab key="1" label='Home' icon='md-home'/>
			},
			{
				content: <Page navigator={this.props.navigator} key="2"><AddPlant/></Page>,
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

	renderHomePage = (route, navigator) => {
		return (
			<Page renderToolbar={this.renderTopToolbar}>
				<Tabbar navigator={navigator} renderTabs={this.renderTabs}/>/>
			</Page>
		)
	};

	render() {
		return (
			<Splitter>
				<SplitterContent>
					<Navigator renderPage={this.renderHomePage} initialRoute={{title: "Home"}}/>
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
	}


}

