import React from 'react';
import Navbar from './Navbar';
import InfoCard from './InfoCard';
import faker from 'faker';
import './App.css'
import {Card} from 'semantic-ui-react';
import ContractDetailForm from './ContractDetailForm';

class App extends React.Component {

	state = {
		homePage: true,
		arr: [],
		indexId: null
	};

	componentDidMount() {
		let arr = [];
		for (let i = 0; i < 6; i++) {
			arr.push({ 
				key: i,
				header: faker.lorem.words(),
				description: faker.lorem.lines(), 
				image:faker.image.image() 
			}); 
		}
		this.setState({arr});
	}

	onSelectedContract = (indexId) => {
		console.log(indexId);
		this.setState({
			homePage: false,
			indexId: indexId
		})
	};

	render() {

		const { homePage, arr = [], indexId } = this.state;
		return (
			homePage ? (
				<div className = "mainBody">
					<Navbar />
					<Card.Group itemsPerRow={3} className = "cardSection">
						{ arr && arr.length ? 
							arr.map((ele,ind)=> <InfoCard
								key={ind}
								onSelectedContract={(indexId) => this.onSelectedContract(indexId)}
								index = {ind}
								contractHeader = {ele.header}
								contractIcon = {ele.image}
								contractDescription = {ele.description}
							    />)
						: null}
					</Card.Group>
					<div className = "about">

					</div>
				</div>
			) : (
				<div className = "contractBody">
					<Navbar />
					<Card.Group itemsPerRow={2} className = "cardSection">
						<Card>
							<Card.Content>
								{faker.lorem.paragraphs()}
							</Card.Content>
						</Card>
						<ContractDetailForm contractNo = {indexId}/>
					</Card.Group>
				</div>
			)
		);
	}
}
export default App;
