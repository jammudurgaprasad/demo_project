//firstroute.js
const {Router} = require('express');
const { saveUser } = require('../controller/userController');
const router = Router();

router.post("/",saveUser)

module.exports = router;