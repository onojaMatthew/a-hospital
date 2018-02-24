import React from 'react';
import ResponsiveContainer from './subComponent/ResponsiveContainer';
import Footer from '../subComponents/Footer'
import {
    Item,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Card,
    Segment,
    Icon
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Container style={{marginTop: 61}} textAlign='center'>
            <h1>Welcome to  121 Lifestyle</h1>
            <p>The new and easy way of life where you get to Relax, Refresh and Unwind.</p>
        </Container>
        <Segment style={{ padding: '4em 0em' }} vertical>
            <Grid centered container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Segment>
                        <Header as='h2' icon>
                            <Icon name='clock' circular/>
                            CAN-DO
                            <Header.Subheader>
                                Always listen to what customers want and do all possible ways to achieve them in our can-do ways.
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment>
                        <Header as='h2' icon>
                            <Icon name='idea' circular/>
                            PASSION
                            <Header.Subheader>
                                Personalize our services and passion driven by all individuals in what we are doing that influence many others.
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment>
                        <Header as='h2' icon>
                            <Icon name='headphone' circular/>
                            PERFECT-EVERY-TIME
                            <Header.Subheader>
                                Zero defect bringing minimal cost structure and achieving repeated orders from loyal customers.
                            </Header.Subheader>
                        </Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Container>
                <h1 style={style.howItWorks}>How it works</h1>
            <Divider style={{marginBottom:30}} fitted />
            </Container>
            <Segment basic className="HowItWorks">
                <Container>
                <Grid centered container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Card raised style={{borderRadius:0}}>
                                <Image src={require('../../asset/customer.jpg')} />
                                <Card.Content  style={style.howItWorksListContent}>
                                    <Card.Header>
                                        <Divider horizontal><h2>You</h2></Divider>
                                        <span style={{fontSize:15}}>Activates 121 app for</span>
                                    </Card.Header>
                                    <Card.Description>
                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Regular services (laundry / home cleaning / aircon cleaning / etc.)</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Ad-hoc requests (house handover cleaning / Plumbing / TV repair / etc.)</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Repeat orders and make your life simpler</List.Header>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card raised style={{borderRadius:0}}>
                                <Image src={require('../../asset/worker.jpg')} />
                                <Card.Content  style={style.howItWorksListContent}>
                                    <Card.Header>
                                        <Divider horizontal><h2>Us</h2></Divider>
                                        <span style={{fontSize:15}}>Expects good work ethics</span>
                                    </Card.Header>
                                    <Card.Description>
                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Through rigorous hiring and training process</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>With a quality, honest and productive behaviour</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'> Follows the clients' house rules</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'> Conduct quarterly performance dialogue</List.Header>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Card raised style={{borderRadius:0}}>
                                <Image src={require('../../asset/management.jpg')} />
                                <Card.Content style={style.howItWorksListContent}>
                                    <Card.Header>
                                        <Divider horizontal><h2>We</h2></Divider>
                                        <span style={{fontSize:15}}>Provides a safe and secure environment</span>
                                    </Card.Header>
                                    <Card.Description>
                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Matching the right crew expert for the task</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Knowing who are the crews before visiting via app</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
                                                <List.Content>
                                                    <List.Header as='span'>Quality operations excellence with reasonable price</List.Header>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
            </Segment>
            <Container>
                <Divider section horizontal style={{marginTop:40}}><h1>Our Services</h1></Divider>
            </Container>
            <Segment style={{padding: "40px 0px 40px 0px"}}>
            <Grid centered container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image className="OurServices"  size='tiny' rounded src={require('../../asset/007-tool.png')} />
                                <Item.Content>
                                    <Item.Header as='a'>Laundry Services</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Outsource your laundry services for maintaining its material texture and colouring through our premium dry cleaning.
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image  className="OurServices" size='tiny' src={require('../../asset/006-air-conditioner.png')} />
                                <Item.Content>
                                    <Item.Header as='a'>Aircon General Services</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Maintaining your aircon regularly for the unit to function effectively and efficiently throughout its years of service.
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image className="OurServices" size='tiny' src={require('../../asset/005-spanner.png')} />                                <Item.Content>
                                    <Item.Header as='a'> Aircon New Installation</Item.Header>
                                    <Item.Description>
                                        <p>Provides either replacement of your non-functioning aircon or new installation to beat the hot and humid weather.
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{padding: "10px 0px 39px 0px"}} centered container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image className="OurServices" size='tiny' src={require('../../asset/003-house-1.png')} />
                                <Item.Content>
                                    <Item.Header as='a'>Home Cleaning</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Spend your quality time with your family and love ones and let the qualified and trained house helpers to do the cleaning.                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image className="OurServices" size='tiny' src={require('../../asset/002-clean.png')} />                                <Item.Content>
                                    <Item.Header as='a'>Office Cleaning</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Provide a clean and pleasant working environment for all staff for their quality and productive works in exchange.                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Item.Group>
                            <Item>
                                <Item.Image className="OurServices" size='tiny' src={require('../../asset/001-vacuum-cleaner.png')} />                                <Item.Content>
                                    <Item.Header as='a'>Handover House Cleaning</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Provide a clean and pleasant working environment for all staff for their quality and productive works in exchange.
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
        </Segment>
        <Footer/>
    </ResponsiveContainer>
);
let style = {
    howItWorks:{
        fontSize: 42,
        textAlign: "center",
        marginTop: 29,
        position:"relative",
        top: 13
    },
    OurServices:{
        width:"41px !important",
        height:31
    },
    howItWorksListContent:{
        minHeight: "19em"
    }

};
export default HomepageLayout
