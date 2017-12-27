import React from 'react';
import {StyleSheet, Text, View, FlatList, Button, Picker} from 'react-native';
import Styles from "./assets/Styles";
import sortBy from "sort-by";

const initialData = [
	{
		id: 1,
		name: 'Dua Can Hong',
		lastTime: 1514048400000,
		type: '5-30-30',
		amount: 1,
		interval: 4
	},
	{
		id: 2,
		name: 'Dua Can Do',
		lastTime: 1514048400000,
		type: '5-30-30',
		amount: 1,
		interval: 6
	},
	{
		id: 3,
		name: 'Dua Can Tim',
		lastTime: 1514048400000,
		type: '5-30-30',
		amount: 1,
		interval: 8
	},
	{
		id: 4,
		name: 'Hong Thien Huong',
		lastTime: 1514048400000,
		type: '12-12-17',
		amount: 1,
		interval: 10
	},
	{
		id: 5,
		name: 'Chuong Vang',
		lastTime: 1514048400000,
		type: '12-12-17',
		amount: 1,
		interval: 4
	}
];

export default class App extends React.Component {

	state = {
		data: [],
		currentType: "12-12-17",
		currentAmount: 1
	};

	renderItem = ({item, index}) => {

		const lastTime = new Date(item.lastTime).toDateString();

		const updateThisItem = () => {
			this.updateItem(item.id)
		};

		return (
			<View style={[Styles.marginBottomMD]}>
				<View>
					<Text>ID: {item.id}</Text>
					<Text>Name: {item.name}</Text>
					<Text>Last time: {lastTime}</Text>
					<Text>Remaining: {item.remainingDay} days</Text>
					<Text>Type: {item.type}</Text>
					<Text>Amount: {item.amount}</Text>
					<Text>Interval: {item.interval}</Text>
				</View>
				<View style={[Styles.marginTopSM]}>
					<Button onPress={updateThisItem} dataID={item.id} title="Update"/>
				</View>
			</View>
		)
	};

	getIndexOfItem(id) {
		return this.state.data.findIndex((item) => {
			return item.id === id;
		});
	}

	updateItem = (itemID) => {

		const today = new Date().getTime();
		const currentType = this.state.currentType;
		const currentAmount = this.state.currentAmount;

		const indexOfCurrentItem = this.getIndexOfItem(itemID);

		const newState = JSON.parse(JSON.stringify(this.state));

		const targetItem = newState.data[indexOfCurrentItem];

		targetItem.lastTime = today;
		targetItem.type = currentType;
		targetItem.amount = currentAmount;
		targetItem.remainingDay = targetItem.interval;

		this.setState(newState);

	};

	keyExtractor = (item, index) => {
		return item.id
	};

	calculateRemainingDays = (dataArray) => {
		const currentDate = new Date().getTime();
		const oneDayTime = 8.64e+7;

		const dataWithRemainingDays = dataArray.map((item) => {
			const {lastTime, interval} = item;
			const remainingDay = interval - Math.floor((currentDate - lastTime) / oneDayTime);
			return {...item, remainingDay}
		}).sort(sortBy('remainingDay'));

		return dataWithRemainingDays;
	};

	render() {

		const dataWithRemainingDays = this.calculateRemainingDays(this.state.data);

		return (
			<View style={styles.container}>
				<FlatList style={Styles.box} data={dataWithRemainingDays}
						  renderItem={this.renderItem}
						  keyExtractor={this.keyExtractor}
				/>
				<View style={Styles.box}>
					<Text style={Styles.bold}>Type:</Text>
					<Picker
						selectedValue={this.state.currentType}
						onValueChange={(itemValue, itemIndex) => this.setState({currentType: itemValue})}>
						<Picker.Item label="12-12-17" value="12-12-17"/>
						<Picker.Item label="17-12-7" value="17-12-7"/>
						<Picker.Item label="5-30-30" value="5-30-30"/>
						<Picker.Item label="30-15-10" value="30-15-10"/>
						<Picker.Item label="10-30-20" value="10-30-20"/>
						<Picker.Item label="15-20-25" value="15-20-25"/>
					</Picker>
					<Text style={Styles.bold}>Amount (spoon)</Text>
					<Picker
						selectedValue={this.state.currentAmount}
						onValueChange={(itemValue, itemIndex) => this.setState({currentAmount: itemValue})}>
						<Picker.Item label="1" value="1"/>
						<Picker.Item label="2" value="2"/>
						<Picker.Item label="3" value="3"/>
						<Picker.Item label="4" value="4"/>
						<Picker.Item label="5" value="5"/>
					</Picker>
				</View>
			</View>
		);
	}

	componentDidMount() {
		this.setState({
			data: initialData
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		justifyContent: 'center',
	}
});
