import React, { Component } from 'react';
import { Grid, Header, Container, Divider } from 'semantic-ui-react';

export default class AirconInstallationSummary extends Component{

    render(){
        return(
            <Container text>
                <Header content={'Service Summary'} textAlign={'center'} as='h1'  />
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>

                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 0</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>

                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 0</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider />
                <Grid>
                    <Grid.Column width={8}>
                        <p>Total</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div style={styles.next}>
                            <p style={styles.total}><strong>$ 8</strong></p>
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