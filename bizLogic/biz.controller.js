var bizLogic = require('./biz.dao');

exports.createFin = function (req, res, next) {
    var fin = {
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        dateOfOpening: req.body.dateOfOpening,
        weight: req.body.weight
    };

    bizLogic.create(fin, function(err, fin) {
        if(err) {
			console.log(err);
            res.json({
                error : err
            })
        }
        res.json({
            message : "Finance created successfully"
        })
    })
}

exports.getFinAll = function(req, res, next) {
    bizLogic.get({}, function(err, fin) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            fin: fin
        })
    })
}

exports.getFin = function(req, res, next) {
    bizLogic.get({name: req.params.name}, function(err, fin) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            fin: fin
        })
    })
}

exports.updateFin = function(req, res, next) {
    var fin = {
        name: req.body.name || "",
        description: req.body.description || "",
        amount: req.body.amount || "",
        dateOfOpening: req.body.dateOfOpening || "",
        weight: req.body.weight || ""
    };
    bizLogic.update({_id: req.params.id}, fin, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Financial updated successfully"
        })
    })
}



exports.removeFin = function(req, res, next) {
    bizLogic.delete({_id: req.params.id}, function(err, fin) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Finance deleted successfully"
        })
    })
}
