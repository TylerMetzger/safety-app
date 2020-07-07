import { Types } from 'mongoose';
import { getRandomDate, getRandomName, getRandomOrganizer, getRandomReason, getRandomAddress } from '../../../util/randomFunctions.js'

interface Protest {
    name: String;
    location: {
        coordinates: {
            lat: Number,
            lng: Number
        },
        address: String
    };
    date: Date;
    reason: String;
    organizer: String;
    _id: Types.ObjectId;
}

let randomProtestList = [];
let randomAddress;

for (var i = 0; i < 84; i++) {
    randomAddress = getRandomAddress();
    randomProtestList.push({
        name: getRandomName(),
        location: {
            coordinates: {
                lat: randomAddress.coordinates.lat,
                lng: randomAddress.coordinates.lng
            },
            address: randomAddress.address1 + ", " + randomAddress.city + ", " + randomAddress.state + " " + randomAddress.postalCode + ", USA"
        },
        date: getRandomDate(),
        reason: getRandomReason(),
        organizer: getRandomOrganizer(),
        _id: new Types.ObjectId()
    });
}

const protestsData: Protest[] = randomProtestList;

export = protestsData;
