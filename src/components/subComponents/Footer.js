import React, { Component } from 'react';
import { Grid, Container, Divider, List, Header, Segment } from 'semantic-ui-react';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <Segment
                    inverted
                    vertical
                    style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
                >
                    <Container textAlign='center'>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h3' content='121LifeStyle Company' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Company' />
                                    <List link inverted>
                                        <List.Item as='a'>About Us</List.Item>
                                        <List.Item as='a'>Join Our Team</List.Item>
                                        <List.Item as='a'>Read Blog</List.Item>
                                        <List.Item as='a'>Press</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Pricing</List.Item>
                                        <List.Item as='a'>Documentation</List.Item>
                                        <List.Item as='a'>Support</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Footer Header' />
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Divider inverted section />
                        <List horizontal inverted divided link>
                            <List.Item as='a' href='#'>Site Map</List.Item>
                            <List.Item as='a' href='#'>Contact Us</List.Item>
                            <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                            <List.Item as='a' href='#'>Privacy Policy</List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}