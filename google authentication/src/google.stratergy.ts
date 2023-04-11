import { Injectable } from '@nestjs/common';
import{Strategy, VerifyCallback} from 'passport-google-oauth20';

import{ PassportStrategy } from '@nestjs/passport';


@Injectable()
export class GoogleStrategy extends PassportStrategy (Strategy,'google'){

    constructor(){
        super({
            clientID:'649155157487-pjsurq4phsnicp0etq1k405otqim2r9o.apps.googleusercontent.com',
            clientSecret:'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',
            callbackURL:"http://localhost:5000/auth/google/callback",
            scope:['email','profile']

        });
    }
async validate(accessToken:string, refreshToken:string, profile:any,done:
    VerifyCallback):Promise<any> {
        const {name,emails,photos} = profile
        const user  = {
            email:emails[0].value,
            firstName:name.givenName,
            lastName:name.familyName,
            picture:photos[0].value,
            accessToken  
        }
        done(null, user)


    }
}