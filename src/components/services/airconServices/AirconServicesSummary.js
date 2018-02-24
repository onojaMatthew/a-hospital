import React, { Component } from 'react';
import { Grid, Header, Container, Divider } from 'semantic-ui-react';

export default class AirconServicesSummary extends Component{

    render(){
        return(
            <Container text>
                <Header content={'Service Summary'} textAlign={'center'} as='h1'  />
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>Fancoil General Washing Services @
                            S$30/fancoil/service,0 fancoil(s) per service, 8 time(s) repeat order</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            15% discount for Fancoil General Washing Services
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            Subtotal for Fancoil General Washing Services
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            Fancoil Chemical Overhaul Wash @ S$150/fancoil/service,
                            0 fancoil(s) per service, 2 time(s) repeat order
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>0% discount for Fancoil Chemical Overhaul Wash</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>Subtotal for Fancoil Chemical Overhaul Wash</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            Condenser Chemical Overhaul Wash @ S$100/fancoil/service,
                            4 condenser(s) per service, 2 time(s) repeat order
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            0% discount for Condenser Chemical Overhaul Wash
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>Subtotal for Condenser Chemical Overhaul Wash</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Grid>
                    <Grid.Column width={8}>
                        <p>Total</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div style={styles.next}>
                            <p style={styles.total}><strong>$0</strong></p>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const styles = {
    summaryText:{
        textAlign:"left",
    },
    next:{
        float:'right'
    },
    total:{
        marginLeft:75
    }
};