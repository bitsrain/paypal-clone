const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { User } = require('../models'); // Assuming your User model is in a separate file

// Configure the local strategy for passport
passport.use(
  'login',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });

      // If user not found or password doesn't match, return error
      if (!user || !await user.comparePassword(password)) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      // If user found and password matches, return the user
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Configure the signup strategy for passport
passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        // Check if the email is already taken
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return done(null, false, { message: 'Email already taken' });
        }

        const {
          full_name,
          gender,
          address_line_1,
          city,
          state,
          date_of_birth,
        } = req.body;

        // Create a new user
        const newUser = new User({
          email,
          password,
          full_name,
          address_line_1,
          city,
          state,
          date_of_birth,
          gender,
        });
        await newUser.save();

        // Return the newly created user
        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Create JWT strategy
passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.id);
      } catch (error) {
        done(error);
      }
    }
  )
);

// Serialize user into session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// Deserialize user from session
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

