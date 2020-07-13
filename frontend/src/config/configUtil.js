exports.getGoogleMapsKey = () => {
    return process.env.MAPS_KEY || require("./config").googleMaps.key;
}