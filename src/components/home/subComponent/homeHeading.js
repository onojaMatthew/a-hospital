import React from 'react';
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Header,
    Icon
} from 'semantic-ui-react'
const HomepageHeading = ({ mobile }) => (
    <Container >
        <Header
            as='h1'
            content='Relax, Refresh and Unwind.'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Pampering Yourself for more lovely moment with your family and define your own lifestyle. 121 Lifestyle has a team of dedicated service crews with can-do, passion and perfect-every-time way of commited services.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button style={style.startButton} className="startBtn" primary size='huge'>
            Get Started
            <Icon name='right arrow' />
        </Button>
    </Container>
);
let style ={
    startButton:{
        backgroundColor:"rgba(93, 67, 226, 0.67)"
    }
};
HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};
export default HomepageHeading