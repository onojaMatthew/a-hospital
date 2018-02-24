import PropTypes from 'prop-types'
import React from 'react'
import DesktopContainer from './desktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children }) => (
    <div style={style.body}>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);
let style = {
    body:{
        backgroundColor:"rgba(173, 173, 173, 0.2)"
    }
};
ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};
export default ResponsiveContainer;