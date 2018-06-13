import React from 'react';
import classes from './DrawerToggle.less';

const drawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;