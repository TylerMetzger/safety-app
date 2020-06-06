import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Sticky, Menu } from "semantic-ui-react";

const NavBar = () => {
    return (
        <Sticky>
            <Menu>
                <Menu.Item name="About" href="/about">
                    About
                </Menu.Item>
                <Menu.Item name="SafetyTips" href="/safetytips">
                    Safety Tips
                </Menu.Item>
                <Menu.Item name="NearMe" href="/nearme">
                    Find Protests
                </Menu.Item>
                <Menu.Item name="Resources" href="/resources">
                    Resources
                </Menu.Item>
            </Menu>
        </Sticky>
    );
};

export default NavBar;
