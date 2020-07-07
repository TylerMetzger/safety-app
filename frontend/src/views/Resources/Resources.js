import "./Resources.css";
import React, { useState, useEffect } from "react";
import { Container, Header, List, Image } from "semantic-ui-react"
import sources from "./articles.js"

const Resources = () => {

    const subheading = (num) => {
        let whichSubheading;
        if (num == 1)
            whichSubheading = sources.subheading1;
        else if (num == 2)
            whichSubheading = sources.subheading2;
        else if (num == 3)
            whichSubheading = sources.subheading3;

        const list = whichSubheading.articles.map(source => {
            return (
                <List.Item>
                    <Image src={source.favicon} verticalAlign='middle' size="mini" />
                    <List.Content>
                        <List.Header as='a' href={source.link} target="_about">{source.name}</List.Header>
                        <List.Description as='a'>{source.desc}</List.Description>
                    </List.Content>
                </List.Item>
            );
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
                <Header className="resourcesHeader" textAlign="center" size="huge">
                    <Header.Content>
                        Resources
                        <Header.Subheader className="resourcesSubheader">
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