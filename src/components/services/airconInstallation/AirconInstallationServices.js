import React, { Component } from 'react';
import { Grid, Header, Container, Label, Divider, Select } from 'semantic-ui-react';

export default class AirconInstallationServices extends Component{
    render(){
        const aircon= [
            {key:'Daikin ', value:'Daikin', text:'Daikin'},
            {key:'Mitsubishi Electric', value:'Mitsubishi Electric', text:'Mitsubishi Electric'},
            {key:'Panasonic', value:'Panasonic', text:'Panasonic'}
        ];
        const brand=[
            {key:'System 1', text:'System 1', value:'System 1'},
            {key:'System 2', text:'System 2', value:'System 2'},
            {key:'System 3', text:'System 3', value:'System 3'},
            {key:'System 4', text:'System 4', value:'System 4'}
        ];
        const packag=[
            {key:'9000 (1 FCU)', text:'9000 (1 FCU)', value:'9000 (1 FCU)'},
            {key:'12000 (1 FCU)', text:'12000 (1 FCU)', value:'12000 (1 FCU)'},
            {key:'18000 (1 FCU)', text:'18000 (1 FCU)', value:'18000 (1 FCU)'},
            {key:'24000 (1 FCU)', text:'24000 (1 FCU)', value:'24000 (1 FCU)'}
        ];
        return(
            <Container text style={styles.container}>
                <Header content={'We provide a safe and secure office services'}
                        textAlign={'center'} as='h3'  />
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Please select the brand of Aircon</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={aircon} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Please select the system(s)</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={brand} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Please select the package</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={packag} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const styles = {
    container:{
        marginTop:20
    },
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