var mongoose = require('mongoose');
var bizsSchema = require('./biz.model');

bizsSchema.statics = {
    create : function(data, cb) {
        var biz = new this(data);
        biz.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var bizModel = mongoose.model('BizLogic', bizsSchema);
module.exports = bizModel;
