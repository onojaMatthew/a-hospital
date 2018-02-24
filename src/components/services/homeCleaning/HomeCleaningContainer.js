import React, { Component } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';
import HomeCleaningServices from './HomeCleaningServices';
import HomeCleaningSummary from "./HomeCleaningSummary";
import UserDetails from "./UserDetails";

export default class HomeCleaningContainer extends Component{
    state = {
        type: 1
    };

    handleSelectionClick=()=>{
        this.setState({type:1})
    };

    handleConfirmClick=()=>{
        this.setState({type:2})
    };

    handleBillingClick=()=>{
        this.setState({type:3})
    };

    renderViews=()=>{
        this.setState({type: this.state.type + 1})
    };
    previousViews=()=>{
        this.setState({type: this.state.type - 1})
    };
    render(){
        const { type } = this.state;
        return(
            <div>
                <Grid centered stackable style={styles.stepGroup} className='stepGrid'>
                    <Step.Group size='mini'>
                        { type===1 ?<Step
                                link
                                icon='truck'
                                title='Products'
                                description='Make Your Selections'
                                style={styles.step1}
                            />:
                            <Step
                                link
                                icon='truck'
                                onClick={this.handleSelectionClick}
                                title='Products'
                                description='Select your services'
                            />}
                        { type===2 ?<Step
                                link
                                icon='info'
                                title='Confirm'
                                description='Confirm your ordered services'
                                style={styles.step1}
                            />:
                            <Step
                                link
                                icon='info'
                                onClick={this.handleConfirmClick}
                                title='Confirm'
                                description='Confirm your ordered services'
                            />}


                        { type===3 ?<Step
                            icon='credit card'
                            link
                            onClick={this.handleClick}
                            title='Billing'
                            description='Enter billing information'
                            style={styles.step1}
                        />:<Step
                            icon='credit card'
                            link
                            onClick={this.handleBillingClick}
                            title='Billing'
                            description='Enter billing information'
                        />}
                    </Step.Group>
                </Grid>
                {{
                    1: <HomeCleaningServices />,
                    2: <HomeCleaningSummary />,
                    3: <UserDetails />
                }[type]}
                <Grid stackable={true} textAlign="center" style={{marginTop: 20}}>
                    <Grid.Column width={8}>
                        {type !==1 ? <Button onClick={this.previousViews} basic color='blue' icon='left arrow'><Icon name='arrow left'/>Back</Button>:null}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {type !==3? <Button onClick={this.renderViews} basic color='blue'>Next<Icon name='arrow right'/></Button>:<Button  basic color='blue'>Payment</Button>}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const styles = {
    stepGroup:{
        marginTop:10,
        marginBottom:10,
    },
    step1:{
        color:'#0000ff',
        background:'#00ff00'
    }
};