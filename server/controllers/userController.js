const { User } = require('../sequelize/models/index');

const userController = {};

userController.login = async (req, res, next) => {
    try {
        const [user, created] = await User.findOrCreate({
            where: { googleid: req.body.userId },
            defaults: { googleid: req.body.userId, familyid: 1}
        });
        res.locals.googleId = req.body.userId;
        res.locals.userId = user.dataValues.id;
        res.locals.userInfo = user.dataValues;
    }catch (err) {
        //handle error response from create
        return next({
            log: 'Middleware error. usercontroller.login',
            message: { err: 'An err occurred' },
        });
    }
    return next();
}

userController.localLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { googleid: req.body.userId }
            //req.body ONLY contains email(userId) && password(passwordId)
                //User.findOne will search through database table to see if the userId exists, IF it does it assigns ALL the info of the row to user;
                    //user now contains the entire nested object user: { datavalues: { id, googleid, familyid, password }} 
        });
        console.log("hello user",user);
            if(req.body.passwordId === user.dataValues.password){
                res.locals.userId = user.dataValues.id
            }
            else {
                res.locals.incorrectPassword = true;
            }
            return next();
    }catch (err) {
        //handle error response from create
        return next({
            log: 'Middleware error. usercontroller.login',
            message: { err: 'An err occurred' },
        });
    }
}



userController.register = async (req, res, next) => {
    try {
        // created will be false if we found it in the database
        // created will be true if we need to create it 
        const [user, created] = await User.findOrCreate({
            where: { googleid: req.body.userId },
            defaults: { googleid: req.body.userId, password: req.body.passwordId, familyid: 1}
        });
        // res.locals.googleId = req.body.userId;
        // console.log(created);
        if (!created){
            res.locals.alreadyCreated = true;
        }

        res.locals.userId = user.dataValues.id
        return next();
    }catch (err) {
        //handle error response from create
        return next({
            log: 'Middleware error. usercontroller.register',
            message: { err: 'An err occurred' },
        });
    }
}


userController.checkCookie = async (req, res, next) => {
    try {
        const userId = await User.findOne({ where: { id: req.cookies.userId }})
        res.locals.userInfo = userId.dataValues;
    }catch (err) {
        return next({
            log: 'Middleware error. userController.checkCookie',
            message: { err: 'An err occurred' },
        });
    }
    return next();
}

module.exports = userController;