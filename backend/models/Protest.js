const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: { type: String, required: false },
    // may want to store more but look at https://developers.google.com/maps/documentation/geocoding/start
    // to see how JSON results are returned.
    location: {
        coordinates: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true }
        },
        address: { type: String, required: true }
    },
    // Mongoose stores dates as the number of seconds since Jan 1, 1970. It converts to a date in UTC time automatically.
    date: { type: mongoose.Schema.Types.Date, required: true },
    reason: { type: String, required: true },
    organizer: { type: String, required: false }
});

exports.Model = mongoose.model('Protest', Schema);


/* TODO:
        - Check how location is stored
            - Should address be split into the components of state, city, county, etc.?
            - If each part is required then when does the information get filled out? Maybe middleware?
        - Should you require a name, organizer, etc.?
        - Think of some extra attributes you may want to see from a protest being stored.
            - Maybe extra info
            - Places to donate
        - Make sure the Date schema type works correctly.
*/