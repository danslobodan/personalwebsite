import passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from '../models/user';

passport.use(
    new OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:5000/auth/google/callback',
        },
        async (token, tokenSecret, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = User.build({
                        googleId: profile.id,
                    });
                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);
