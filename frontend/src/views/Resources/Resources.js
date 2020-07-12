import "./Resources.css";
import React, { useState, useEffect, useRef } from "react";
import { Container, Header, List, Image } from "semantic-ui-react"
import sources from "./articles.js"

const Resources = () => {
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

    const subheading = (num) => {
        let whichSubheading;
        if (num == 1)
            whichSubheading = sources.subheading1;
        else if (num == 2)
            whichSubheading = sources.subheading2;
        else if (num == 3)
            whichSubheading = sources.subheading3;

        const list = whichSubheading.articles.map(source => {
            if (windowWidth >= 580) {
                return (
                    <List.Item>
                        <Image src={source.favicon} verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header className="articleName" as='a' href={source.link} target="_about">{source.name}</List.Header>
                            <List.Description className="description">{source.desc}</List.Description>
                        </List.Content>
                    </List.Item>
                );
            }
            else {
                return (
                    <List.Item>
                        <List.Content className="listContent">
                            <List.Header className="articleName" as='a' href={source.link} target="_about">{source.name}</List.Header>
                            <List.Description className="description">{source.desc}</List.Description>
                        </List.Content>
                    </List.Item>
                );
            }
        })

        return (
            <div>
                <Header as="h3" textAlign="left" size="medium" className={"heading" + num}>
                    {whichSubheading.title}
                </Header>
                <List divided relaxed>
                    {list}
                </List>
            </div>
        )
    }

    return (
        <div>
            <Container text className="textContainer">
                <Header id="header" textAlign="center" size="huge">
                    <Header.Content>
                        Resources
                        <Header.Subheader id="subheader">
                            Some extra info
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                {subheading(1)}
                <br />
                {subheading(2)}
                <br />
                {subheading(3)}
            </Container>
        </div >
    );
};

export default Resources;