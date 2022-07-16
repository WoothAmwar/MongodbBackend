var passport = require('passport');
// Store authentication strategies that we will make available
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/users');
// Support for sessions in passport
exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
