import passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from '../models/user';
import env from 'dotenv';
env.config();

declare global {
    namespace Express {
        interface User {
            id: string;
        }
    }
}

passport.use(
    new OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:5000/api/auth/google/callback',
        },
        async (token, tokenSecret, profile, done) => {
            console.log('google response', profile.id, profile.displayName);
            try {
                if (!profile || !profile.id) {
                    return done(null, false, {
                        message: 'You need to authenticate with Google.',
                    });
                }

                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = User.build({
                        googleId: profile.id,
                    });
                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    console.log('serialize', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log('deserialize', id);
    try {
        const user = (await User.findById(id)) as Express.User;
        if (!user) {
            return done(null, false);
        }

        done(null, user);
    } catch (error) {
        done(error);
    }
});

export { passport };
