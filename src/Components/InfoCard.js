import './App.css';

import { Card, Button } from 'semantic-ui-react';

import React, { Component } from 'react';

class InfoCard extends Component {

  onButtonClick = (event) => {
          event.preventDefault();
          this.props.onSelectedContract(this.props.index);
  };
    render() {
        return (
            <Card>
              <div className="container">
                <img alt="ImageErr" className="image" src={this.props.contractIcon} />
                <div className="middle">
                  <div className="text">  
                    <Button 
                      onClick={this.onButtonClick} 
                      inverted color='black' 
                      content="See Contract" />
                  </div>
                </div>
              </div>
              <Card.Content>
                <Card.Header>{this.props.contractHeader}</Card.Header>
                <Card.Description>
                  {this.props.contractDescription}
                </Card.Description>
              </Card.Content>
            </Card>
        );
    }
}


export default InfoCard;