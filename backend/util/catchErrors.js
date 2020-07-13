const { NotFoundError, InvalidIdError } = require("./exceptions.js");

module.exports = catchErrors = async (res, f) => {
    try {
        const result = await f();
        res.send({ ok: true, data: result });
    } catch (e) {
        if (e instanceof NotFoundError) {
            res.status(e.httpErrorCode).send({ ok: false, error: e.message });
        } else if (e instanceof InvalidIdError) {
            res.status(e.httpErrorCode).send({ ok: false, error: e.message });
        } else {
            res.status(400).send({ ok: false, error: e.message });
        }
    }
};

/* TODO:
    - If you add custom exceptions in another file and import them in, make sure to update them here.
*/