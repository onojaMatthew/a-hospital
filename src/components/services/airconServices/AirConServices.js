import React, {Component} from 'react';
import {Grid, Step, Form, Container, Input,  Divider, Label} from 'semantic-ui-react';

export default class ServiceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const {active} = this.state;

        return (
            <div>
                <Step.Group size='mini'>
                    <Step
                        active={active === 'Products'}
                        link
                        icon='truck'
                        onClick={this.handleClick}
                        title='Products'
                        description='Make Your Selections'
                    />
                    <Step
                        active={active === 'Billing'}
                        icon='credit card'
                        link
                        onClick={this.handleClick}
                        title='Billing'
                        description='Enter billing information'
                    />
                </Step.Group>
                <div>
                    <Container>

                        <Grid
                            textAlign='center'
                            style={{height: '100%'}}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{maxWidth: 700}}>
                                <Form size='large' className={'login'}>
                                    <Form.Field className={'myInput'} inline>
                                        <Input type="number" min={1} style={styles.input}/>
                                        <p><Label pointing='left' color='blue'>Number of Fancoil(s) General Washing
                                            Services</Label></p>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field className='myInput' inline>
                                        <Input type="number" min={1} style={styles.input}/>
                                        <p><Label pointing='left' color='blue'>Number of Fancoil(s) Chemical Overhaul
                                            Wash</Label></p>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field className={'myInput'} inline>
                                        <Input style={styles.input} type="number" min={1}/>
                                        <p><Label pointing='left' color='blue'>Number of Condenser(s) Chemical Overhaul
                                            Wash</Label></p>
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <p style={{textAlign: 'center', paddingTop: 40, paddingBottom: 40}}>
                                        More subsequent repeat orders will entitle more discounts.<br/>
                                        3-6 repeat orders get 10% discount and more than 7 times get 15%
                                        discount in one contract sign-up. <br/>Rule of thumb, General Services
                                        once in every 3 months and Chemical Overhaul Wash once in every one year.<br/>
                                        Below number of repeat orders are for two years contract.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid
                            textAlign='center'
                            style={{height: '100%'}}
                            verticalAlign='middle'
                        >
                            <Grid.Column style={{maxWidth: 700}}>
                                <Form size='large' className={'login'}>
                                    <Form.Field inline>
                                        <Input type="number" min={1} style={styles.input}/>
                                        <p><Label pointing='left' color='blue'>Number of repeat orders for Fancoil(s)
                                            General Washing Services</Label></p>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field inline>
                                        <Input type="number" min={1} style={styles.input}/>
                                        <p><Label pointing='left' color='blue'>Number of repeat orders for Fancoil(s)
                                            Chemical Overhaul Wash</Label></p>
                                    </Form.Field>
                                    <Divider/>
                                    <Form.Field inline>
                                        <Input type="number" min={1} style={styles.input}/>
                                        <p><Label pointing='left' color='blue'>Number of repeat orders for Condenser(s)
                                            Chemical Overhaul Wash</Label></p>
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>

            </div>
        )
    }
}

const styles = {
    input: {
        float:'left'
    },
    label: {
        marginRight: "3.7em"
    },
};






