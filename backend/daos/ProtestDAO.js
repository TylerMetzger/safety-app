const Protest = require("../models/Protest.js").Model;
const mongoose = require('mongoose');
const { NotFoundError, InvalidIdError } = require("../util/exceptions");

////////////////////////////////////////// Basic CRUD Operations ////////////////////////////////////////

exports.create = async (protestParams) => {
    return await new Protest(protestParams).save();
};

exports.getAll = async () => {
    return await Protest.find({}).exec();
};

exports.get = async (protestId) => {
    if (!(mongoose.Types.ObjectId.isValid(protestId))) throw new InvalidIdError();

    const protest = await Protest.findById(protestId);

    if (!protest) throw new NotFoundError();
    return protest;
};

exports.update = async (protestId, updatedData) => {
    if (!(mongoose.Types.ObjectId.isValid(protestId))) throw new InvalidIdError();

    const protest = await Protest.findOneAndUpdate({ _id: protestId }, updatedData, {
        upsert: true,
        useFindAndModify: false,
        new: true
    });

    if (!protest) throw new NotFoundError();
    return protest;
};

exports.delete = async (protestId) => {
    if (!(mongoose.Types.ObjectId.isValid(protestId))) throw new InvalidIdError();

    const protest = await Protest.findByIdAndDelete(protestId);

    if (!protest) return new NotFoundError();
    return protest;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* TODO:
        - Add new functions as needed beyond just basic CRUD functions
        - Possibly add errors on NotFound
*/