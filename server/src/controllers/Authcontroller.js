const AuthService = require("../services/AuthService");

class Authcontroller {
  static registerUser = async (req, res) => {
   const res_obj = await AuthService.registerUser(req.body);
   res.status(200).send(res_obj);
  }

}

module.exports = Authcontroller;