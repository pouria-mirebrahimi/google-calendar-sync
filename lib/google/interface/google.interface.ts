import { ModuleMetadata } from '@nestjs/common/interfaces';

export interface GoogleModuleOptions {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  scopes: string | string[];
}

export interface GoogleModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => GoogleModuleOptions | Promise<GoogleModuleOptions>;
  inject: any[];
}
