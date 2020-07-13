exports.getDbUri = () => {
    return process.env.DB_URI || require("./config").db.uri;
};
// IDK if the DB_HOST, PORT, or NAME thing actually works tbh
exports.getDbHost = () => {
    return process.env.DB_HOST || require("./config").db.host;
};
exports.getDbPort = () => {
    return process.env.DB_PORT || require("./config").db.port;
};
exports.getDbName = () => {
    return process.env.DB_NAME || require("./config").db.name;
};
//////////////////////////////////////////////////////////////