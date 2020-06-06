import "./NearMe.css";
import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react"

const NearMe = () => {

    return (
        <div>
            <Input
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                centered icon="search"
                placeholder="Enter a location..."
                size="massive"
            />
        </div >
    );
};

export default NearMe;