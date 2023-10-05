import { DynamicModule, Module } from '@nestjs/common';
import {
  GoogleModuleAsyncOptions,
  GoogleModuleOptions,
} from './interface/google.interface';
import { GoogleCoreModule } from './google-core.module';

@Module({})
export class GoogleModule {
  static register(options: GoogleModuleOptions): DynamicModule {
    return {
      module: GoogleModule,
      imports: [GoogleCoreModule.register(options)],
    };
  }

  static forRootAsync(options: GoogleModuleAsyncOptions): DynamicModule {
    return {
      module: GoogleModule,
      imports: [GoogleCoreModule.forRootAsync(options)],
    };
  }
}
