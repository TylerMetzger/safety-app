const protestDAO = require("../daos/ProtestDAO.js");
const catchErrors = require("../util/catchErrors.js");

////////////////////////////////////////// Basic CRUD Operations ////////////////////////////////////////

exports.create = async (req, res) => {
    catchErrors(res, async () => {
        return protestDAO.create(req.body);
    });
};

exports.getAll = async (req, res) => {
    catchErrors(res, async () => {
        return protestDAO.getAll();
    });
};

exports.get = async (req, res) => {
    catchErrors(res, async () => {
        return protestDAO.get(req.params.id);
    });
};

exports.update = async (req, res) => {
    catchErrors(res, async () => {
        return protestDAO.update(req.params.id, req.body);
    });
};

exports.delete = async (req, res) => {
    catchErrors(res, async () => {
        return protestDAO.delete(req.params.id);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* TODO:
        - Add new functions as needed beyond just basic CRUD functions
        - Make sure the params are working
        - Understand how this will fit into frontend APIs and Google Maps API
            - Getting a protest will come from clicking a marker usually
*/