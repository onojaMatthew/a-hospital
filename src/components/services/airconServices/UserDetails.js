import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

export default class UserDetails extends Component{
    render(){
        return(
            <div>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Form size='large'>
                            <Segment stacked style={styles.segment}>
                                <Grid.Column style={{ maxWidth: 450, }}>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Full Name'
                                        type='text'
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='mail outline'
                                        iconPosition='left'
                                        placeholder='Mobile Number'
                                        type='text'
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Email'
                                        type='email'
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Postal code'
                                        type='text'
                                        className={'input'}
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='call square'
                                        iconPosition='left'
                                        placeholder='Full Address'
                                        type='text'
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='call square'
                                        iconPosition='left'
                                        placeholder='E.G Tower A1'
                                        type='text'
                                        style={styles.input}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='call square'
                                        iconPosition='left'
                                        placeholder='Unit number #'
                                        type='text'
                                        style={styles.input}
                                    />

                                    <Button style={styles.button} fluid size='large'>Create account</Button>
                                </Grid.Column>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const styles = {
    header:{
        marginTop:30,
        marginBottom:20,
        color:'#fff'
    },
    input:{
        height:40,
        outline:'1px solid #434343',
        background:'none !important',
        color:'#fff !important'
    },
    segment:{
        background:'rgb(56, 53, 53)',
        marginTop:20,
        borderRadius:0
    },
    items:{
        marginBottom:40,
        borderBottom:'1px solid #fff',
        padding:5
    },
    button:{
        background:'rgb(67, 67, 67 )',
        borderRadius:25,
        padding:10
    },
    newToUs:{
        marginTop:10
    },
    group:{
        marginLeft:20
    },
    forgot:{
        marginLeft:40
    },
    check:{
        color:'#fff',
        marginLeft:10
    },
    others:{
        textAlign:'center'
    },
    transparent:{
        background:'transparent',
        border:'none',
    }
};