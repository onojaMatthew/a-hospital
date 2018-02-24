import React, {Component} from "react";
import PropTypes from 'prop-types'
import HomepageHeading from './homeHeading';
import {
    Button,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar
} from 'semantic-ui-react'
class MobileContainer extends Component {
    state = {};
    CloseSideBar =()=>this.setState({ sidebarOpened:false});
    OpenSideBar = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;
        return (
            <Responsive minWidth={208} maxWidth={991}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu}  onClick={this.CloseSideBar} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' onClick={this.CloseSideBar}><Icon name="close" fitted/>Close</Menu.Item>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>Facility Management</Menu.Item>
                        <Menu.Item as='a'>Sign Up/Login</Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher dimmed={sidebarOpened}  style={{ minHeight: '100vh' }}>
                        <div className="cover">
                            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em',background: `url(${require('../../../asset/content-bg-cover.png')})` }} vertical>
                                <Container>
                                    <Menu inverted pointing secondary size='large'>
                                        <Menu.Item >
                                            <Icon name='sidebar' onClick={this.OpenSideBar}/>
                                        </Menu.Item>
                                        <Menu.Item position='right'>
                                            <Button as='a'  style={{ marginLeft: '0.5em',backgroundColor:"transparent",color:"#fff",border:"1px solid rgb(132, 132, 132)"}}>Sign Up/Login</Button>
                                        </Menu.Item>
                                    </Menu>
                                </Container>
                                <HomepageHeading mobile />
                            </Segment>
                        </div>
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};
export default MobileContainer;