import "./Resources.css";
import React, { useState, useEffect } from "react";
import { Container, Header, List, Image } from "semantic-ui-react"

const Resources = () => {

    return (
        <div>
            <Container text>
                <Header className="resourcesHeader" textAlign="center" size="huge">
                    <Header.Content>
                        Resources
                        <Header.Subheader className="resourcesSubheader">
                            Some extra info
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <Header as="h3" textAlign="left" size="medium">
                    Lorem ipsum dolor sit amet
                </Header>
                <List divided relaxed>
                    <List.Item>
                        <Image src="https://www.washingtonpost.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.washingtonpost.com">Link #1</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.cnn.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.cnn.com/">Link #2</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.aclu.org/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.aclu.org/">Link #3</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
                <Header as="h3" textAlign="left" size="medium">
                    consectetuer adipiscing elit
                </Header>
                <List divided relaxed>
                    <List.Item>
                        <Image src="https://www.nbcnews.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.nbcnews.com/">Link #1</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.usatoday.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.usatoday.com/">Link #2</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.theguardian.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.theguardian.com/us">Link #3</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
                <Header as="h3" textAlign="left" size="medium">
                    Aenean commodo ligula eget dolor
                </Header>
                <List divided relaxed>
                    <List.Item>
                        <Image src="https://www.bbc.co.uk/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.bbc.co.uk">Link #1</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.nytimes.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.nytimes.com/" >Link #2</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Image src="https://www.cnn.com/favicon.ico" verticalAlign='middle' size="mini" />
                        <List.Content>
                            <List.Header as='a' href="https://www.cnn.com/">Link #2</List.Header>
                            <List.Description as='a'>Short desc. of above</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        </div >
    );
};

export default Resources;