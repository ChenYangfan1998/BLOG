// const { User } = require('../models');
// const config = require('../config/config');
// const fs = require('fs');

module.exports = {
  // async register (req, res) {
  //   try {
  //     if (!/[A-Z][a-zA-Z0-9]{7}/.exec(req.body.password)) {
  //       res.status(400).send({
  //         error: '密码必须按照如下格式：以一个大写字母开头，长度不小于8位。'
  //       });
  //     }
  //
  //     const user = await User.create(req.body);
  //     const userJson = user.toJSON();
  //     res.send({
  //       user: userJson,
  //       token: jwtSignUser(userJson)
  //     });
  //   } catch (e) {
  //     res.status(400).send({
  //       error: '这个用户名已经被使用了。'
  //     });
  //   }
  // }
};
