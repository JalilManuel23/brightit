const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    // Match Email's User
    const user = await User.findOne({
        email: email
    });
    
    if (!user) {
        console.log('no usuario');
        return done(null, false);
    } else {
        // Match Password's User
        const match = await user.matchPassword(password);
        if (match) {
            console.log('bien');
            return done(null, user);
        } else {
            console.log('mal');
            return done(null, false);
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});