const router = require('express').Router()
const {validateLogInfo,validateRegInfo} = require('../middleware/user.middware.js')
const {registerNewUser,loginUser} = require('../controllers/user.controller.js')

router.post('/auth/register',validateRegInfo,registerNewUser)
router.post('/auth/login',validateLogInfo,loginUser)

module.exports = router