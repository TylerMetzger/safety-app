const rrad = require('rrad');
exports.getRandomAddress = () => {
    return rrad.addresses[Math.floor(Math.random() * rrad.addresses.length)];
}

exports.getRandomDate = () => {
    const day = 50000 * 60 * 60 * 24;
    return new Date(Date.now() + (Math.floor(Math.random() * day)));
};

const randomNames = [
    "March for George Floyd",
    "Against Police Brutality",
    "Black Lives Matter!",
    "Defund the Police",
    "Don't forget their names",
    "Black Lives Still Matter!!!",
    "Demand Accountability",
    "Protect Black Lives",
    "Remembrance for those Lost to Police Brutality",
    "All Lives Don't Matter Until Black Lives Do",
    "Demolish Systemic Racism",
    "Protest for Equality"
]
exports.getRandomName = () => {
    return randomNames[Math.floor(Math.random() * randomNames.length)];
}

const randomOrganizers = [
    "ACLU",
    "Various Citizens",
    "BLM Chapter 17",
    "Black Alliance for Just Immigration",
    "Color Of Change",
    "The Movement for Black Lives",
    "NAACP Legal Defense and Educational Fund, Inc.",
    "UndocuBlack Network",
    "COMMUNITY POWER PROJECT",
    "WHITE SILENCE = VIOLENCE",
    "BOX POPULI!",
    "THE MIX"
]
exports.getRandomOrganizer = () => {
    return randomOrganizers[Math.floor(Math.random() * randomOrganizers.length)];
}

const randomReasons = [
    "Demand justice for George Floyd",
    "To protest police brutality.",
    "Raise awarness about the struggles of living while being black",
    "Raise awareness about the benefits of defunding the police",
    "Demand the arrest of the officers who killed Breonna Taylor",
    "Raise awareness of all those killed by police.",
    "Black citizens are still being disproportionately targeted and killed by the police and it needs to stop. Join us to march against it.",
    "Take to the streets to protest for black lives.",
    "Demand sweeping police reform to guarantee the protection of black lives.",
    "Continue the fight for Black Lives Matter",
    "Demand justice for Elijah McCain",
    "Hold a peaceful vigil for those that lost their lvies to police brutality and demand accountability from the police."
]
exports.getRandomReason = () => {
    return randomReasons[Math.floor(Math.random() * randomReasons.length)];
}