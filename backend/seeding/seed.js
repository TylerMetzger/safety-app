require("ts-node").register();
const { Seeder } = require("mongo-seeding");
const path = require("path");
const configUtil = require("../config/configUtil.js");

const seedConfig = {
    database: {
        host: configUtil.getDbHost(),
        port: configUtil.getDbPort(),
        name: configUtil.getDbName()
    },
    dropDatabase: true
};
const seeder = new Seeder(seedConfig);
console.log("Seeding from " + path.resolve("./", "data"));

const collections = seeder.readCollectionsFromPath(
    path.resolve("./data"),
    {
        extensions: ["ts"],
        transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
    }
);

seeder
    .import(collections)
    .then(() => {
        console.log("Success loading data into database");
    })
    .catch(err => {
        console.log("Error loading data into database", err);
    });