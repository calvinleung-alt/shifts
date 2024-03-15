import { Body, Controller, Get, Param, ParseIntPipe, Put, UsePipes, } from "@nestjs/common";
import CaregiverService, { BulkUpdateArg } from "./caregiver.service";
import Caregiver from "./caregiver.entity";
import BulkUpdateArgsPipe from "./caregiver.pipe";

@Controller('/api/caregivers')
export default class CaregiverController {
    constructor(private readonly svc: CaregiverService) {}

    @Get('/')
    public async list() {
        return this.svc.findAll();
    }

    @Put('/bulk-update')
    @UsePipes(new BulkUpdateArgsPipe())
    public async bulkUpdate(@Body() args: BulkUpdateArg[]) {
        return this.svc.bulkUpdate(args);
    }

    @Put('/:userId')
    public async update(@Param('userId', ParseIntPipe) userId: number, @Body() caregiver: Caregiver) {
        return this.svc.update(userId, caregiver);
    }
}