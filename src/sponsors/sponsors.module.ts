import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service.js';
import { SponsorsController } from './sponsors.controller.js';

@Module({
  controllers: [SponsorsController],
  providers: [SponsorsService],
})
export class SponsorsModule {}
