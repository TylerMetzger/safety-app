import "./NearMe.css";
import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react"
import GoogleMapComponent from "../../components/GoogleMap/GoogleMapComponent.js"

const NearMe = () => {

    return (
        <Container className="textContainer">
            <Header id="header" textAlign="center" size="huge">
                <Header.Content>
                    Find Protests
                        <Header.Subheader id="subheader" className="searchSubheader">
                        Click a marker for details
                        </Header.Subheader>
                </Header.Content>
            </Header>

            <GoogleMapComponent />
        </Container>
    );
};

export default NearMe;