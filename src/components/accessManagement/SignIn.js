import React, { Component } from 'react';
import { Grid, Segment, Icon, Form, Button, Checkbox, Header, List } from 'semantic-ui-react'
export default class SignIn extends Component{
    render(){
        return(
            <div>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450, }}>
                        <Form.Input
                            fluid
                            icon='mail outline'
                            iconPosition='left'
                            placeholder='Email'
                            type='email'
                            style={styles.input}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            color='white'
                            placeholder='Password'
                            type='password'
                            style={styles.input}
                        />
                        <Form.Group style={styles.group}>
                            <Checkbox /> <p style={styles.check}>Remember me</p>
                            <p style={styles.forgot}><a href={''}>Forgot Your Password?</a></p>
                        </Form.Group>
                        <Button style={styles.button} fluid size='large'>Sign In</Button>
                        <p style={styles.newToUs}>New to us? <a href='#'>Sign Up</a></p>

                        <p style={styles.others}>Sign In with:</p>
                        <Button.Group>
                            <Button color='facebook'>
                                <Icon name='facebook' /> Facebook
                            </Button>
                            <Button.Or />
                            <Button color='google plus'>
                                <Icon name='google plus' /> Google Plus
                            </Button>
                        </Button.Group>
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
        background:'linear-gradient(to right, #434343, #000)',
        marginTop:20,
        borderRadius:0
    },
    items:{
        marginBottom:40,
        borderBottom:'1px solid #fff',
        padding:5
    },
    button:{
        background:'rgba(93, 67, 226, 0.67)',
        borderRadius:25,
        padding:10
    },
    newToUs:{
        marginTop:10,
        color:'#fff'
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
        textAlign:'center',
        color:'#fff'
    },
    transparent:{
        background:'transparent',
        border:'none',
    }
};
