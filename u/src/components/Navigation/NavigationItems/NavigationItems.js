import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
            <NavigationItem link="/" >Me</NavigationItem>
        <NavigationItem link="/Admin" >Admin</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
    </ul>
);

export default navigationItems;