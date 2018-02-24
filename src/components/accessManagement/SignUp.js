import React, { Component } from 'react';
import { Grid, Form, Button, Icon } from 'semantic-ui-react'
export default class SignIn extends Component{
    render(){
        return(
            <div>
                <Grid.Column style={{ maxWidth: 450, }}>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Name'
                        type='text'
                        style={styles.input}
                    />
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
                        placeholder='Password'
                        type='password'
                        style={styles.input}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Retype password'
                        type='password'
                        className={'input'}
                        style={styles.input}
                    />
                    <Form.Input
                        fluid
                        icon='call square'
                        iconPosition='left'
                        placeholder='Telephone'
                        type='text'
                        style={styles.input}
                    />

                    <Button style={styles.button} fluid size='large'>Create account</Button>
                    <p style={styles.newToUs}>Already have an account? <a href='#'>Sign In</a></p>

                    <p style={styles.others}>Sign Up with:</p>
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