import "./NavBar.css";
import React, { useState, useEffect, useRef } from "react";
import { Sticky, Menu } from "semantic-ui-react";

const NavBar = () => {
    const [active, setActive] = useState(window.location.pathname);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };
    const useEventListener = () => {
        // Create a ref that stores handler
        const savedHandler = useRef();

        // Update ref.current value if handler changes.
        // This allows our effect below to always get latest handler ...
        // ... without us needing to pass it in effect deps array ...
        // ... and potentially cause effect to re-run every render.
        useEffect(() => {
            savedHandler.current = handleWindowSizeChange;
        }, []);

        useEffect(
            () => {
                // Make sure window supports addEventListener
                // On 
                const isSupported = window && window.addEventListener;
                if (!isSupported) return;

                // Create event listener that calls handler function stored in ref
                const eventListener = event => savedHandler.current(event);

                // Add event listener
                window.addEventListener('resize', eventListener);

                // Remove event listener on cleanup
                return () => {
                    window.removeEventListener('resize', eventListener);
                };
            },
            ['resize', window] // Re-run if eventName or element changes
        );
    };
    useEventListener('resize', handleWindowSizeChange);

    if (windowWidth > 450) {
        return (
            <Sticky className="sticky">
                <Menu
                    className="navBar"
                    fluid
                    attached
                >
                    <Menu.Item name="NearMe" href="/nearme" active={active === "/nearme"}>
                        Find Protests
                    </Menu.Item>
                    <Menu.Item name="SafetyTips" href="/safetytips" active={active === "/safetytips"}>
                        Safety Tips
                    </Menu.Item>
                    <Menu.Item name="Resources" href="/resources" active={active === "/resources"}>
                        Resources
                    </Menu.Item>
                    <Menu.Item name="About" href="/about" active={active === "/about"}>
                        About
                     </Menu.Item>
                </Menu>
            </Sticky>
        );
    }
    else {
        return (
            <Sticky className="sticky">
                <Menu
                    className="navBar"
                    fluid
                    attached
                    widths={4}
                >
                    <Menu.Item name="About" href="/about" active={active === "/about"}>
                        About
                    </Menu.Item>
                    <Menu.Item name="SafetyTips" href="/safetytips" active={active === "/safetytips"}>
                        Safety Tips
                    </Menu.Item>
                    <Menu.Item name="NearMe" href="/nearme" active={active === "/nearme"}>
                        Find Protests
                    </Menu.Item>
                    <Menu.Item name="Resources" href="/resources" active={active === "/resources"}>
                        Resources
                    </Menu.Item>
                </Menu>
            </Sticky>
        );
    }
};

export default NavBar;
