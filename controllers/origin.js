const Origin = require('../models').Origin;

module.exports = {
    list(req, res) {
        return Origin.findAll({

        })
            .then((result) => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(400).send(err);
            });
    }
}