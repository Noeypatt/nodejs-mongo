const Cats = require('../model/db')

exports.create = function (req, res) {
    let cat = new Cats(
        {
            name: req.body.name,
            age: req.body.age,
            owner: req.body.owner,

        }
    );

    cat.save(function (err) {
        if (err) {
            return res.json({
                error: 'Cat Created Wrong'
            })
        }
        res.json({
            message: 'Cat Created successfully'
        })
    })
}