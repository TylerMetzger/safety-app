import "./SafetyTips.css";
import React, { useState, useEffect, useRef } from "react";
import { Container, Header, Grid } from "semantic-ui-react"
import { whatToDo, whatToBring, whatToWear, whatNotToDo, dealingWithTeargas, knowYourRights } from "./Tips.js"

const SafetyTips = () => {
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

    if (windowWidth >= 950) {
        return (
            <div>
                <Container className="textContainer">
                    <Header id="header" textAlign="center">
                        <Header.Content>
                            Safety Tips
                            <Header.Subheader id="subheader">
                                As provided by <a href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank">Amnesty International</a>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                {whatToDo}
                            </Grid.Column>
                            <Grid.Column>
                                {whatToBring}
                            </Grid.Column>
                            <Grid.Column>
                                {whatToWear}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {whatNotToDo}
                            </Grid.Column>
                            <Grid.Column>
                                {dealingWithTeargas}
                            </Grid.Column>
                            <Grid.Column>
                                {knowYourRights}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div >
        );
    } else if (windowWidth > 450) {
        return (
            <div>
                <Container className="textContainer">
                    <Header id="header" textAlign="center">
                        <Header.Content>
                            Safety Tips
                        <Header.Subheader id="subheader">
                                As provided by <a href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank">Amnesty International</a>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                {whatToDo}
                            </Grid.Column>
                            <Grid.Column>
                                {whatNotToDo}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {whatToWear}
                            </Grid.Column>
                            <Grid.Column>
                                {whatToBring}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {dealingWithTeargas}
                            </Grid.Column>
                            <Grid.Column>
                                {knowYourRights}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div >
        );
    } else {
        return (
            <div>
                <Container className="textContainer">
                    <Header id="header" textAlign="center">
                        <Header.Content>
                            Safety Tips
                        <Header.Subheader id="subheader">
                                As provided by <a href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank">Amnesty International</a>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Grid columns={1}>
                        <Grid.Column>
                            {whatToDo}
                        </Grid.Column>
                        <Grid.Column>
                            {whatNotToDo}
                        </Grid.Column>
                        <Grid.Column>
                            {whatToWear}
                        </Grid.Column>
                        <Grid.Column>
                            {whatToBring}
                        </Grid.Column>
                        <Grid.Column>
                            {dealingWithTeargas}
                        </Grid.Column>
                        <Grid.Column>
                            {knowYourRights}
                        </Grid.Column>
                    </Grid>
                </Container>
            </div >
        );
    }
};

export default SafetyTips;