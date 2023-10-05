import {
  DynamicModule,
  Global,
  Inject,
  Module,
  OnModuleDestroy,
} from '@nestjs/common';
import {
  GoogleModuleAsyncOptions,
  GoogleModuleOptions,
} from './interface/google.interface';
import { GoogleService } from './service/google.service';
import { GOOGLE_OPTIONS } from './constant/google.constant';
import { googleAuth } from './provider/google.provider';

@Global()
@Module({
  providers: [GoogleService],
  exports: [GoogleService],
})
export class GoogleCoreModule implements OnModuleDestroy {
  constructor(
    @Inject(GOOGLE_OPTIONS)
    private readonly options: GoogleModuleOptions | GoogleModuleOptions[],
  ) {}

  static register(options: GoogleModuleOptions): DynamicModule {
    return {
      module: GoogleCoreModule,
      providers: [
        {
          provide: GOOGLE_OPTIONS,
          useValue: options,
        },
        GoogleService,
      ],
      exports: [GoogleService],
    };
  }

  static forRootAsync(options: GoogleModuleAsyncOptions): DynamicModule {
    return {
      module: GoogleCoreModule,
      imports: options.imports,
      providers: [googleAuth(options)],
      exports: [GoogleService],
    };
  }

  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
}
