import passport from 'passport';
import { OAuth2Strategy } from 'passport-google-oauth';
import { User } from '../models/user';
import env from 'dotenv';
env.config();

// TODO: Migrate the passport setup here
