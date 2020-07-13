const protestController = require("../controllers/ProtestController.js");
const express = require("express");
const router = express.Router();

////////////////////////////////////////// Basic CRUD Operations ////////////////////////////////////////

router.post(
    "/create",
    protestController.create
);

router.get(
    "/getAll",
    protestController.getAll
);

router.get(
    "/get/:id",
    protestController.get
);

router.put(
    "/update/:id",
    protestController.update
);

router.delete(
    "/delete/:id",
    protestController.delete
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;

/* TODO:
        - Add new functions as needed beyond just basic CRUD functions
        - Make sure the params are working
        - Learn how to not let random users retieve these routes and add their own information.
            - I'm not sure if this is an actual issue but ask/look around.
*/