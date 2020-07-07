import "./About.css";
import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react"

const About = () => {

    return (
        <div>
            <Container text className="textContainer">
                <Header className="aboutHeader" textAlign="center" size="huge">
                    <Header.Content>
                        About
                        <Header.Subheader className="aboutSubheader">
                            Why protest?
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <p>
                    Protesting is an important foundation of a proper democracy. Not only is it protected by the first
                    amendment, but it is one of the key methods of demanding accountability from those that represent you.
                    By exercising your first amendment rights, you are strengthening democracy via direct and active
                    participation. You are sharing views, opinions, grievances, and criticisms of the current governance
                    and demand that you will see change. Protests allow commonly marginalized groups to force their
                    government to recognize them.
                </p>
                <p>
                    Not all change is immediate. Protesting doesn't just require one stint of activism, but rather constant
                    political involvement. Protesting is a civic duty that leads to a more informed and involved population.
                    For those of you that are ready to protest, this website will show a map of protests sent in to its
                    database along with other resources you may need. Thank you.
                </p>
                <p>
                    Sources:
                    <br />
                    <a href="https://right-to-protest.org/debate-protest-rights/why-the-right-to-protest/" className="source">
                        Why The Right to Protest?
                    </a>
                    <br />
                    <a href="https://www.opendemocracy.net/en/six-reasons-why-protest-is-so-important/" className="source">
                        Six reasons why protest is so important for democracy
                    </a>
                </p>
            </Container>
        </div >
    );
};

export default About;