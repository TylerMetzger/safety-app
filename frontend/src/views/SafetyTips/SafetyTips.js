import "./SafetyTips.css";
import React, { useState, useEffect } from "react";
import { Container, Header, Image } from "semantic-ui-react"
import tips from "../../assets/horizontalTipsJPGBigger.jpg"

const SafetyTips = () => {
    return (
        <div>
            <Image src={tips} className="tipsPicture" />
            <p className="tipsSource">
                Source: <a className="link" href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf" target="_blank">https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf</a>
            </p>
        </div>
    );
};

export default SafetyTips;