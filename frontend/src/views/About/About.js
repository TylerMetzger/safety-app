import "./About.css";
import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react"

const About = () => {

    return (
        <div>
            <Container text>
                <Header className="aboutHeader" textAlign="center" size="huge">
                    <Header.Content>
                        About
                        <Header.Subheader className="aboutSubheader">
                            Why protest?
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <p>
                    Nulla sit amet leo ante. Pellentesque ut diam magna. Proin ac pellentesque urna, id sodales mauris. Morbi accumsan ut dui quis gravida. Aliquam laoreet massa non elementum aliquam. Morbi pharetra at nulla a malesuada. Nullam diam neque, ultricies aliquet consequat id, venenatis at dui. In ultricies tincidunt tortor, in malesuada nibh ultrices vel. Sed aliquet dignissim vehicula.
                </p>
                <p>
                    Nam vitae dolor non urna dignissim sodales. Fusce sagittis aliquet neque facilisis sollicitudin. Sed pellentesque vehicula est, et eleifend felis vehicula vel. Morbi ornare tellus eget neque convallis, sit amet ultrices metus egestas. Etiam nec venenatis urna, et pharetra elit. Donec quis consequat eros, id convallis eros. Mauris vestibulum velit at arcu fermentum, quis aliquam ipsum tincidunt. Sed laoreet posuere felis id luctus. Phasellus erat felis, venenatis vitae libero vel, pulvinar feugiat massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu magna a ipsum convallis lacinia in aliquam mauris. Vivamus turpis turpis, varius ut tincidunt vel, elementum id arcu. Sed finibus odio non lectus dapibus eleifend eu ut sem. Vestibulum quis libero in ipsum congue finibus et et velit. Vivamus et ipsum aliquet, suscipit est ut, dapibus eros. Nullam scelerisque dolor lacus, a fringilla sem pretium eu.
                </p>
                <p>
                    Morbi nec sapien tortor. Etiam vel ornare magna, eget venenatis lectus. Aenean ac metus sed lorem sagittis rhoncus in convallis mauris. Vestibulum vestibulum arcu risus, et mollis ipsum ornare tincidunt. Donec ultricies ultrices blandit. Mauris quis blandit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor iaculis congue. Integer condimentum, nibh molestie laoreet dapibus, ante odio tincidunt lacus, a semper enim augue vitae velit. Nulla fermentum lectus vel mi venenatis hendrerit. Integer vel mi volutpat massa fermentum rhoncus nec eget ligula. Nunc orci lacus, gravida et ultrices eu, vestibulum euismod ex. Nam ultricies ultrices augue non semper.
                </p>
            </Container>
        </div >
    );
};

export default About;