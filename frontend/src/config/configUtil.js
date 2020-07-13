exports.getGoogleMapsKey = () => {
    if (process.env.NODE_ENV === "production")
        return process.env.MAPS_KEY;
    else
        return require('./config.js').googleMaps.key;
}