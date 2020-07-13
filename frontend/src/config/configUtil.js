exports.getGoogleMapsKey = () => {
    if (process.env.NODE_ENV === "production") //for deployment
        return process.env.MAPS_KEY;
    else
        return require('./config.js').googleMaps.key;
}