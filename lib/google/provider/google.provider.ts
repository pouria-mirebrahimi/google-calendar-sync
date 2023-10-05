import { GOOGLE_OPTIONS } from '../constant/google.constant';
import { GoogleModuleAsyncOptions } from '../interface/google.interface';

export const googleAuth = (options: GoogleModuleAsyncOptions) => ({
  provide: GOOGLE_OPTIONS,
  useFactory: options.useFactory,
  inject: options.inject,
});
