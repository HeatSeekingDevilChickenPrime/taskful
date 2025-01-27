const cookieController = {};

cookieController.setUserCookie = (req, res, next) => {
    //save the cookie here
    if(res.locals.alreadyCreated === true || res.locals.incorrectPassword === true){
        return next();
    }
    res.cookie('userId', res.locals.userId, { httpOnly: true})
    next();
}

module.exports = cookieController;