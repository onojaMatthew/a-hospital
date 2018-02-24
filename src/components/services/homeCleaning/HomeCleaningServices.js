import React, { Component } from 'react';
import { Grid, Header, Container, Label, Divider, Input, Select } from 'semantic-ui-react';

export default class LaundarySummary extends Component{
    render(){
        const options= [
            {key:'1 Bedroom Unit ', value:'1 Bedroom Unit', text:'1 Bedroom Unit'},
            {key:'2 Bedroom Unit ', value:'2 Bedroom Unit', text:'2 Bedroom Unit'},
            {key:'3 Bedroom Unit ', value:'3 Bedroom Unit', text:'3 Bedroom Unit'},
            {key:'4 Bedroom Unit ', value:'4 Bedroom Unit', text:'4 Bedroom Unit'},
            {key:'5 Bedroom Unit ', value:'5 Bedroom Unit', text:'5 Bedroom Unit'},
        ];
        return(
            <Container text style={styles.container}>
                <Header content={'Choose bedroom unit while 1-4 bathroom is available for each selected bedroom unit'}
                        textAlign={'center'} as='h3'  />
                <Divider />
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}><Label pointing={'right'} color={'blue'}>Bedroom</Label></p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Select options={options} placeholder={'choose your service'} />
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>


                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>
                                Bedroom
                            </Label>
                        </p>

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'}>
                    <Grid.Column width={10}>


                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>
                                Oven Cleaning Hour(s)
                            </Label>
                        </p>

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'} stackable>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>
                                Internal Window Cleaning Hour(s)
                            </Label>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'} stackable>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>Ironing Hour(s)
                            </Label>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Grid textAlign={'center'} verticalAlign={'center'} stackable>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>Fridge Cleaning Hour(s)
                            </Label>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                <Divider />
                <Grid textAlign={'center'} verticalAlign={'center'} stackable>
                    <Grid.Column width={10}>
                        <p style={styles.summaryText}>
                            <Label pointing={'right'} color={'blue'}>
                                Cupboard Cleaning Hour(s)
                            </Label>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input type={'number'} min={1} style={{width:220}} />
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