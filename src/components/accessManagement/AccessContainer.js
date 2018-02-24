import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn'
import { Grid, Segment, Form, Header,Tab, Icon } from 'semantic-ui-react'

export default class AccessContainer extends Component{
    render(){
        const panes = [
            { menuItem: 'Sign In', render: () => <Tab.Pane style={styles.transparent} attached={false}>
                <SignIn />
            </Tab.Pane> },
            { menuItem: 'Create account', render: () => <Tab.Pane style={styles.transparent} attached={false}>
                <SignUp />
            </Tab.Pane> },

        ];
        return(
            <div>

                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450, }}>
                        <Form size='large' className={'login'}>
                            <Segment stacked style={styles.segment}>
                                <Icon name={'remove'} style={styles.close} />
                                <Header content={'121LifeStyle'} as={'h1'} style={styles.header} />

                                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
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
        borderRadius:25,
        padding:10
    },
    close:{
        float:'right',
        color:'#fff',
        fontSize:30
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
