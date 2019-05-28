import React from 'react';
import './App.css';
import faker from 'faker';
import { Card } from 'semantic-ui-react';

class ContractDetailForm extends React.Component {

	render() {
		return (
			<Card>
				<Card.Content>
					{faker.lorem.paragraphs()}
				</Card.Content>
			</Card>
		)
	}
}
export default ContractDetailForm;