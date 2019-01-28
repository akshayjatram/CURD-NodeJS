var BizLogic = require('./biz.controller');

module.exports = function(router) {
    router.post('/create', BizLogic.createFin);
    router.get('/get', BizLogic.getFinAll);
    router.get('/get/:name', BizLogic.getFin);
    router.put('/update/:id', BizLogic.updateFin);
}
