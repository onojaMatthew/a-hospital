import React, { Component } from 'react';
import { Grid, Header, Container, Divider } from 'semantic-ui-react';

export default class HouseHandOverSummary extends Component{

    render(){
        return(
            <Container text>
                <Header content={'Service Summary'} textAlign={'center'} as='h1'  />
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            Subtotal for cleaning services
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 240</strong></p>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            15% Discount
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <p style={{textAlign:'right'}}><strong>$ 4</strong></p>
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