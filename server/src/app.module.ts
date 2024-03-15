import { Module } from '@nestjs/common';
import { CaregiverModule } from './caregivers/caregiver.module';

@Module({
  imports: [CaregiverModule],
})
export class AppModule {}
