import React from "react";
import {Page, List, ListItem} from "react-onsenui";

export default class SideMenu extends React.Component {

	dataSource = ['Home', 'Add Plant', 'Settings'];

	renderMenuRow = (item) => {
		return (
			<ListItem key={item}>{item}</ListItem>
		)
	};

	render() {

		return (
			<Page>
				<List
					dataSource={this.dataSource}
					renderRow={this.renderMenuRow}
				/>
			</Page>
		)
	}
}