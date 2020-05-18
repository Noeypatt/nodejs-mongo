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
                error: 'Created Wrong'
            })
        }
        res.json({
            message: 'Created Successfully'
        })
    })
}

exports.read = function (req, res) {
    Cats.find()
        .exec((err, cats) => {
            if (err) {
                return res.json({
                    error: 'Not found'
                })
            }
            res.send(cats)
        })
}

exports.update = function (req, res) {

    const name = req.params.name

    Cats.findOneAndUpdate({ name: name },
        { $set: req.body },
        function (err, cats) {
            if (err) {
                res.json({
                    error: 'Not found'
                })
                console.log(err);
            }
            else {
                res.json({
                    message: `Updated Successfully`
                })
            }
        }
    )
}

exports.remove = function (req, res) {
    const name = req.params.name

    Cats.findOneAndRemove({ name: name },
        function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    message: `Delete Successfully`
                })
            }
        })

}