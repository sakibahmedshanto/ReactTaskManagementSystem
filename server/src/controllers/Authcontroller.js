const AuthService = require("../services/AuthService");
const CathAsync = require("../utils/CatchAsync");

class Authcontroller {
  static registerUser = CathAsync(async (req, res) => {
   const res_obj = await AuthService.registerUser(req.body);
   res.status(200).send(res_obj);

  })

}

module.exports = Authcontroller;