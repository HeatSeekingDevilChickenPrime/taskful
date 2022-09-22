const express = require('express');
const choresController = require('../controllers/familyController');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

router.post('/login', userController.login, cookieController.setUserCookie, (req, res) => {
    res.status(200).json(res.locals.userInfo)
});


router.post('/localLogin', userController.localLogin, cookieController.setUserCookie, (req,res) => {
    if(res.locals.incorrectPassword) {
        res.status(200).json({message: 'Incorrect Login'});
    } else {
        res.status(200).json({successMessage:'Success!'})
    }
})

router.post('/register', userController.register, cookieController.setUserCookie, (req, res) => {
    if (res.locals.alreadyCreated) {
        // console.log(res.locals.alreadyCreated);
        res.status(200).json({message: 'User Already Exists'});
    } else {
    res.status(200).json({successMessage:'Success!'});
    }
});


router.get('/home', userController.checkCookie, (req, res) => {
    res.status(200).json(res.locals.userInfo)
});

// router.get('/:id', choresController.getChores, (req, res) => {
//     // console.log('histories', res.locals.histories)
//     res.status(200).json(res.locals.histories)
// });

// router.post('/:id', choresController.addChore, (req, res) => {
//     res.status(200).json([{"success": "success"}])
// });

// router.delete('/:id', choresController.deleteChore, (req, res) => {
//     res.status(200).json([{"success": "success"}])
// });


module.exports = router;