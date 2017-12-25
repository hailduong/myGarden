import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
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

// TODO:
/*
 * 1. Sort by remaining days
 * 2. 
 * */


export default class App extends React.Component {

	state = {
		data: {}
	};

	renderItem = ({item, index}) => {

		return (
			<View style={[Styles.marginBottomMD]}>
				<View>
					<Text>ID: {item.id}</Text>
					<Text>Name: {item.name}</Text>
					<Text>Last time: {item.lastTime}</Text>
					<Text>Remaining: {item.remainingDay} days</Text>
					<Text>Type: {item.type}</Text>
					<Text>Amount: {item.amount}</Text>
					<Text>Interval: {item.interval}</Text>
				</View>
				<View style={[Styles.marginTopSM]}>
					<Button onPress={this.updateItem} title="Update"/>
				</View>
			</View>
		)
	};

	updateItem = () => {
		// TODO
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
		return (
			<View style={styles.container}>
				<FlatList style={Styles.box} data={this.state.data}
						  renderItem={this.renderItem}
						  keyExtractor={this.keyExtractor}
				/>
				<View><Text>Footer Text</Text></View>
			</View>
		);
	}
	
	componentDidMount() {
		const dataWithRemainingDays = this.calculateRemainingDays(initialData);
		console.log('dataWithRemainingDays', dataWithRemainingDays);
		this.setState({
			data: dataWithRemainingDays
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
