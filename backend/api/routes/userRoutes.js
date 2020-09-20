const app = require("../../config/serverConfig");

module.exports = function(application){
    application.get('/users/', function(req, resp){
        application.api.controllers.userController.listAll(application, req, resp);
    });

    application.get('/user/:id', function(req, resp){
        application.api.controllers.userController.find(application, req, resp);
    });

    application.post('/register/', function(req, resp){
        application.api.controllers.userController.insert(application, req, resp);
    });

    application.put('/user/:id', function(req, resp){
        application.api.controllers.userController.update(application, req, resp);
    });

    application.delete('/user/:id', function(req, resp){
        application.api.controllers.userController.delete(application, req, resp);
    });

}