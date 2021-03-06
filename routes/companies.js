var express = require('express');
var router = express.Router();
var company = require('../controllers/companies.controller.js')
var passwordHash = require('password-hash');
var passport = require('passport')
var verifyToken = require('../helpers/verifyToken');
const multer = require('multer');


const upload = multer({
  storage: multer.memoryStorage(),
  // file size limitation in bytes
  limits: { fileSize: 52428800 },
});
router.put('/:id/changePassword',company.changePassword)
//register company
router.post('/auth/register',company.register)
//login company
router.post('/auth/login', passport.authenticate('company-login'),company.login)
//accepting message
router.put('/:id/:acceptedMessagesId/acceptMessage',company.acceptMessage)
//rejecting message
router.put('/:id/:acceptedMessagesId/rejectMessage',company.rejectMessage)
//edit company profile
router.put('/:id',company.editProfile)
// upload profile image
router.post('/upload/editProfile/:randomImageKey', upload.single('filePic'), company.uploadImageEditProfile)
//creating buy request
router.put('/:id/buyRequest', company.checkCorporate, company.createBuyRequest)
// upload image item buy request
router.post('/upload/RequestItem/:randomImageKey', upload.single('itemPic'), company.uploadImageItem)
//creating sell request
router.put('/:id/sellRequest',company.checkUkm,multer({ dest: './uploads/' }).single('uploads'),company.createSellRequest)
//changing request status
router.put('/:companyId/:requestId',company.changeReqStatus)
//creating letter
router.put('/:id/:otherId/:requestId/message',company.createLetter)
//search requests
router.get('/:id/searchRequest',company.showRequest)
//search company by category
router.get('/:id/searchByCategory',company.showByCategories)
//show one company details
router.get('/:id',company.showOne)
//show all company
router.get('/',company.showAll)
//delete all company
router.delete('/',company.deleteAll)
// reset password
router.post('/resetPassword',company.resetPassword)
//change password
router.put('/:id/changePassword',company.changePassword)


module.exports = router;
