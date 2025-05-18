import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.servce';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
