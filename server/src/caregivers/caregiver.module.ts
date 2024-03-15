import { Module } from '@nestjs/common';
import CaregiverController from './caregiver.controller';
import CaregiverService from './caregiver.service';
import CaregiverRepositoy from './caregiver.repository';
import BulkUpdateArgsPipe from './caregiver.pipe';

@Module({
  imports: [],
  controllers: [CaregiverController],
  providers: [
    CaregiverService, 
    CaregiverRepositoy,
    BulkUpdateArgsPipe
],
})
export class CaregiverModule {}
