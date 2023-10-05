import { google } from 'googleapis';
import { OAuth2Client, Credentials } from 'google-auth-library';
import { Inject, Injectable } from '@nestjs/common';
import { GOOGLE_OPTIONS } from '../constant/google.constant';
import { GoogleModuleOptions } from '../interface/google.interface';

@Injectable()
export class GoogleService {
  private auth: OAuth2Client;
  private scopes: string | string[];

  constructor(@Inject(GOOGLE_OPTIONS) options: GoogleModuleOptions) {
    this.auth = new google.auth.OAuth2(
      options.clientId,
      options.clientSecret,
      options.redirectUrl,
    );

    this.scopes = options.scopes;
  }

  public generateAuthUrl(
    access_type: string | undefined,
    include_granted_scopes: boolean,
    prompt: string,
  ): string {
    const authUrl = this.auth.generateAuthUrl({
      access_type,
      scope: this.scopes,
      include_granted_scopes,
      prompt,
    });

    return authUrl;
  }

  public async getToken(authorizationCode: string): Promise<Credentials> {
    const res = await this.auth.getToken(authorizationCode);
    return res?.tokens;
  }
}
