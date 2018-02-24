import React, { Component } from 'react';
import { Grid, Header, Container, Label, Divider, Select } from 'semantic-ui-react';

export default class OfficeCleaningServices extends Component{
    render(){
        const options= [
            {key:'Size < 900 sq. ft ', value:'Size < 900 sq. ft', text:'Size < 900 sq. ft'},
            {key:'Size 901 - 1400 sq. ft', value:'Size 901 - 1400 sq. ft', text:'Size 901 - 1400 sq. ft'},
            {key:'Size 1401 - 2000 sq. ft', value:'Size 1401 - 2000 sq. ft', text:'Size 1401 - 2000 sq. ft'},
            {key:'Size 2001 - 2400 sq. ft', value:'Size 2001 - 2400 sq. ft', text:'Size 2001 - 2400 sq. ft'},
            {key:'Size > 2400 sq. ft', value:'Size > 2400 sq. ft', text:'Size > 2400 sq. ft'},
        ];
        const option=[
            {key:'Once a week (4 times)', text:'Once a week (4 times)', value:'Once a week (4 times)'},
            {key:'Thrice a week (12 times)', text:'Thrice a week (12 times)', value:'Thrice a week (12 times)'},
            {key:'Mon - Fri daily (20 times)', text:'Mon - Fri daily (20 times)', value:'Mon - Fri daily (20 times)'}
        ];
        return(
            <Container text style={styles.container}>
                <Header content={'We provide a safe and secure office services'}
                        textAlign={'center'} as='h3'  />
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Office Size</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={options} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Cleaning Frequency for a month</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={option} placeholder={'choose your service'} />
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