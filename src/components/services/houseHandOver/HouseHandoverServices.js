import React, { Component } from 'react';
import { Grid, Header, Container, Label, Divider, Select } from 'semantic-ui-react';

export default class HouseHandOverServices extends Component{
    render(){
        const bedroom= [
            {key:'1 Bedroom', value:'1 Bedroom', text:'1 Bedroom'},
            {key:'2 Bedroom', value:'2 Bedroom', text:'2 Bedroom'},
            {key:'3 Bedroom', value:'3 Bedroom', text:'3 Bedroom'},
            {key:'4 Bedroom', value:'4 Bedroom', text:'4 Bedroom'},
            {key:'5 Bedroom', value:'5 Bedroom', text:'5 Bedroom'},
        ];
        const bathroom=[
            {key:'1 Bathroom', text:'1 Bathroom', value:'1 Bathroom'},
            {key:'2 Bathroom', text:'2 Bathroom', value:'2 Bathroom'},
        ];
        return(
            <Container text style={styles.container}>
                <Header content={'We provide complete house handover cleaning services'}
                        textAlign={'center'} as='h3'  />
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Number of Bedroom(s)</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={bedroom} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Number of Bathroom(s)</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={bathroom} placeholder={'choose your service'} />
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