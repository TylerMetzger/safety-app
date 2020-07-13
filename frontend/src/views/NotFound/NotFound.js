import "./NotFound.css";
import React, { useState, useEffect } from "react";

const NotFound = () => {

    return (
        <div className="uhoh" id="subheader">
            Uh-oh. Page Not Found. Please click <a href="/about"> here </a> to return to the home page or use the nav bar at the top.
        </div>
    );
};

export default NotFound;