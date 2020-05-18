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

exports.read = function (req, res) {
    Cats.find()
        .exec((err, cats) => {
            if (err) {
                return res.json({
                    error: 'Cats not found'
                })
            }
            res.send(cats)
        })

}

exports.update = function (req, res) {

    const name = req.params.name

    console.log(name);
    Cats.findOneAndUpdate(name,
        { $set: req.body },
        function (err, cats) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    message: `User updated`
                })
            }
        }
    )

}