import React, { Component } from 'react'
import PropTypes from 'prop-types';
import HomepageHeading from './homeHeading';
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Image,
    Visibility,
} from 'semantic-ui-react'
class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;
        return (
            <Responsive {...Responsive.onlyComputer}>
                <div className="cover">
                    <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu}>
                        <Menu
                            className="menu"
                            borderless
                            style={!fixed?style.Menu:null}
                            fixed={fixed ? fixed && 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container style={!fixed ?style.menuHolder:null}>
                                <Menu.Item>
                                    <Image size="small"  src={require('../../../asset/logo.png')}/>
                                </Menu.Item>
                                <Menu.Item  position='right'>
                                    <Menu.Item as='a' active>Home</Menu.Item>
                                    <Menu.Item as='a'>Facility Management</Menu.Item>
                                    <Button as='a' inverted={!fixed}  style={{ marginLeft: '0.5em',backgroundColor: fixed ?"#fff":null,border:fixed?"1px solid rgb(132, 132, 132)":null}}>Sign Up/Login</Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Visibility>
                    <Segment inverted textAlign='center' style={{ minHeight: 590, padding: '1em 0em',background: `url(${require('../../../asset/content-bg-cover.png')})` }} vertical>
                        <HomepageHeading />
                    </Segment>
                </div>
                {children}
            </Responsive>
        )
    }
}
let style={
    Menu:{
        border: "medium none",
        marginTop: -14,
        borderBottom:"1px solid rgba(255, 255, 255, 0.61)"
    },
    menuHolder:{
        paddingTop: 18
    }
};
DesktopContainer.propTypes = {
    children: PropTypes.node,
};
export default DesktopContainer