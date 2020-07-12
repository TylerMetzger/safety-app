import "./GoogleMapComponent.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { GoogleMap, LoadScript, Marker, MarkerClusterer, Autocomplete } from '@react-google-maps/api';
import { getGoogleMapsKey } from "../../config/configUtil.js";
import { getAllProtests } from "../../api/ProtestApi.js";
import { Modal } from "semantic-ui-react";

const GoogleMapComponent = () => {
    const [map, setMap] = useState(null);
    const [listOfProtests, setListOfProtests] = useState([]);
    const [protestsLoaded, setProtestsLoaded] = useState(false);
    const [listOfRoundedMarkerLocations, setListOfRoundedMarkerLocations] = useState([]);
    //this is to prevent overlap but makes it so markers may not be exactly accurate to their latlng 
    //const [isModalOpen, setIsModalOpen] = useState(false);
    //const [currentModalId, setCurrentModalId] = useState(0);

    const loadProtests = async () => { //call the api to set the list of protests
        const list = await getAllProtests();
        setListOfProtests(list.data);
        setProtestsLoaded(true);
    };
    if (!protestsLoaded) { //check if the protests are loaded, if not, call the load protests function
        loadProtests();
    };

    const containerStyle = { //some styling stuff for the map
        width: "1000px",
        height: '580px',
        top: "5%",
        left: "50%",
        position: "relative",
        transform: "translate(-50%, 0%)"
    };
    const mobileContainerStyle = { //some styling stuff for the map
        width: "100%",
        height: '580px',
        top: "5%",
        left: "50%",
        position: "relative",
        transform: "translate(-50%, 0%)"
    };

    const center = { //Positve is North and East negative is South and West
        lat: 36.82, // -90 to 90 (S to N)
        lng: -98.58 // -180 to 180 (W to E)
    };
    const restriction = { //Restricts to North America as seen at https://legallandconverter.com/p45.html
        latLngBounds: {
            north: 70,
            south: 10,
            west: -170,
            east: -50
        }
    }
    const MapOptions = { // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
        center: center,
        zoom: 4,
        disableDefaultUI: true,
        restriction: restriction,
        streetViewControl: true
    }
    const clustererOptions = { //gives the images used for the clusterer
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    };
    //used for displaying dates and times
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["AM", "PM"];

    const protestMarkers = clusterer => //the component that will act as the list of markers wrapped around by the clusterer
        listOfProtests.map(protest => {
            let markerPos = { //setup the marker for latlng data type
                lat: protest.location.coordinates.lat,
                lng: protest.location.coordinates.lng
            }
            let roundedMarkerPos = { //manually make it so markers don't stack on top of eachother
                lat: Math.round(markerPos.lat),
                lng: Math.round(markerPos.lng)
            }
            for (let i = 0; i < listOfRoundedMarkerLocations.length; i++) { //if the markers have very close addresses, shift them a bit
                if (listOfRoundedMarkerLocations[i].lat === roundedMarkerPos.lat && listOfRoundedMarkerLocations[i].lng === roundedMarkerPos.lng) {
                    markerPos.lat += ((Math.random() - .5) / 5000);
                    markerPos.lng += ((Math.random() - .5) / 5000);
                    roundedMarkerPos.lat = Math.round(markerPos.lat);
                    roundedMarkerPos.lng = Math.round(markerPos.lng);
                }
            }
            listOfRoundedMarkerLocations.push(roundedMarkerPos); //keep a record of all the rounded locations so you can shift future maerkers

            const protestDate = new Date(protest.date); //set up protest date so you can get rid of old protests

            if (protestDate >= Date.now()) { //if the protest still hasn't happened yet
                const displayDate = dayNames[protestDate.getDay()] + ", " + monthNames[protestDate.getMonth()] + " " + protestDate.getDate() + ", " + protestDate.getFullYear();
                const displayTime = ((protestDate.getHours() + 24) % 12 || 12) + ":" + protestDate.getMinutes() + " " + hours[Math.floor(protestDate.getHours() / 12)];
                //The above is just setting up some of the display stuff using the Date() object.
                let organizers;
                if (protest.organizer) {
                    organizers = <p>Organizers: {protest.organizer}</p>;
                }

                return ( //return a modal with a marker as a trigger point
                    <Modal
                        trigger={<Marker position={markerPos} clusterer={clusterer} onClick={onMarkerClick} />}
                        //open={currentModalId === protest._id}
                        openOnTriggerClick={true}
                        dimmer="blurring"
                        closeIcon
                    >
                        <Modal.Header>Protest Details</Modal.Header>
                        <Modal.Content>
                            <Modal.Description> {/* Maybe change up how the details look / the order of them */}
                                <p>Name: {protest.name}</p>
                                {organizers}
                                <p>Address: {protest.location.address}</p>
                                <p>Date: {displayDate}</p>
                                <p>Time: {displayTime}</p>
                                <p>Why we protest: {protest.reason}</p>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal >
                );
            }
        })

    const onLoad = useCallback((map) => { //used for loading and setting map initially
        map.setOptions(MapOptions);
        setMap(map);
    }, [])
    const onUnmount = useCallback((map) => { //used when unmounting the map object
        setMap(null)
    }, [])
    const onMarkerClick = (markerPos) => { //when you click on a marker, zoom in and slide over to it
        map.panTo(markerPos.latLng);
    } //ideally the modal opens after this but was not able to figure it out so far


    if (window.innerWidth >= 1100)
        return (
            <LoadScript
                googleMapsApiKey={getGoogleMapsKey()}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <MarkerClusterer options={clustererOptions} maxZoom={16} gridSize={30}>
                        {protestMarkers}
                    </MarkerClusterer>
                </GoogleMap>
            </LoadScript >
        );
    else {
        return (
            <LoadScript
                googleMapsApiKey={getGoogleMapsKey()}
            >
                <GoogleMap
                    mapContainerStyle={mobileContainerStyle}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <MarkerClusterer options={clustererOptions} maxZoom={16} gridSize={30}>
                        {protestMarkers}
                    </MarkerClusterer>
                </GoogleMap>
            </LoadScript >
        );
    }
};

export default GoogleMapComponent;