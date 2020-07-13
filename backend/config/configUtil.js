exports.getDbUri = () => {
    return process.env.DB_URI || require("./config").db.uri;
};