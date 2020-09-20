module.exports.insert = function(application, req, resp){
  var data = req.body;
  console.log(data);
  var connection = application.config.dbConnection;
  var userDAO = new application.api.DAO.userDAO(connection);

  userDAO.insert(req, resp);
}

module.exports.listAll = function(application, req, resp){
  var data = req.body
  var connection = application.config.dbConnection;
  var userDAO = new application.api.DAO.userDAO(connection);

  userDAO.listAll(req, resp);
}

module.exports.update = function(application, req, resp){
  console.log(req.body)
  resp.send('update okay');
  userDAO.update(req, resp);
}

module.exports.find = function(application, req, resp){
  var connection = application.config.dbConnection;
  var userDAO = new application.api.DAO.userDAO(connection);
  console.log(req.body)

  userDAO.find(req, resp);
}

module.exports.delete = function(application, req, resp){
  console.log(req.body)
  resp.send('delete okay');
  userDAO.delete(req, resp);
}