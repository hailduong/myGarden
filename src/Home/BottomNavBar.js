import React from "react";
import {connect} from "react-redux";
import * as Actions from "../misc/actions";
import * as ons from "onsenui";


class BottomNavBar extends React.Component {

	state = {
		type: "10-30-20",
		amount: '0.5'
	};

	setFertilizeInfo = () => {
		const {type, amount} = this.state;
		this.props.setFertilizerInfo(type, amount)
	};

	handleTypeChange = (event) => {
		this.setState({type: event.target.value}, this.setFertilizeInfo)
	};

	handleAmountChange = (event) => {
		this.setState({amount: event.target.value}, this.setFertilizeInfo)
	};

	render() {

		const {type, amount} = this.state;

		return (
			<nav className="home__navbar navbar navbar-default navbar-fixed-bottom">
				<div className="container">
					<div className="row">
						<div className="col-xs-6">
							<select value={type} onChange={this.handleTypeChange} className="form-control">
								<option value="10-30-20">
									Yellow: 10-30-20
								</option>
								<option value="30-15-10">
									Green: 30-15-10
								</option>
								<option value="15-20-25">
									Pink: 15-20-25
								</option>
								<option value="12-12-17">
									Purple: 12-12-17
								</option>
								<option value="17-12-7">
									Green: 17-12-7
								</option>
							</select>
						</div>
						<div className="col-xs-6">
							<select value={amount} onChange={this.handleAmountChange} className="form-control">
								<option value="0.5">
									0.5 spoon
								</option>
								<option value="1">
									1 spoon
								</option>
								<option value="0.25">
									0.25 spoon
								</option>
								<option value="2">
									2 spoon
								</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<button onClick={this.getBackupData} className="btn btn-default">Get Backup Data</button>
						</div>
						<div className="col-xs-6">
							<button onClick={this.backUpData} className="btn btn-default">Backup</button>
						</div>
					</div>
				</div>
			</nav>
		)
	}

	backUpData = () => {
		const docRef = db.collection("lyduong").doc("fertilizer");
		const data = {
			plants: this.props.plants,
			fertilizerInfo: this.props.fertilizerInfo
		};
		docRef.set(data);
		console.log('- Data is backed up:', data);
		ons.notification.toast({message: 'Data backed up', timeout: 2000})
	};

	getBackupData = () => {
		const docRef = db.collection("lyduong").doc("fertilizer");
		docRef.get().then((doc) => {
			if (doc.exists) {
				const docData = doc.data();
				console.log('- Data retrieved:', docData);
				this.props.getBackupData(docData);
				localStorage.myGarden = JSON.stringify(docData);
				console.log('- Data is also saved to localStorage');
				ons.notification.toast({message: 'Data received', timeout: 2000})
			} else {
				console.log("- No such document!");
			}
		})

	};

	getData = () => {
		// Get from localStorage, 
		const localStorageMyGarden = localStorage.myGarden;
		if (!!localStorageMyGarden) {
			console.log('- Data exists in LocalStorage, we will use localStorage data');
			this.props.getBackupData(JSON.parse(localStorageMyGarden));
		} else {
			// If not exist, get data from Firebase
			console.log('- Data is not in localStorage, will get from Database');
			this.getBackupData();
		}


	};

	componentDidMount() {
		this.getData();
		const {type, amount} = this.props.fertilizerInfo;
		this.setState({type, amount});
	}
}

const mapStateToProps = (state) => ({
	plants: state.plants,
	fertilizerInfo: state.fertilizerInfo
});

const mapDispatchToProps = (dispatch) => ({
	setFertilizerInfo: (type, amount) => {
		dispatch(Actions.setFertilizerInfo(type, amount));
	},
	getBackupData: (data) => {
		dispatch(Actions.getBackupData(data))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavBar)