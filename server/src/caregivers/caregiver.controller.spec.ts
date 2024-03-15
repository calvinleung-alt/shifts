import { Test, TestingModule } from "@nestjs/testing"
import CaregiverController from "./caregiver.controller";
import { CaregiverModule } from "./caregiver.module";
import CaregiverService from "./caregiver.service";
import Caregiver from "./caregiver.entity";
import { randomInt } from "crypto";

describe('CaregiverController', () => {
    let app: TestingModule;
    let controller: CaregiverController;
    let svc: CaregiverService;
    let caregiver: Caregiver;
    let caregivers: Caregiver[];
    
    beforeAll(async () => {
        app = await Test.createTestingModule({
            imports: [CaregiverModule]
        }).compile();

        controller = app.get(CaregiverController);
        svc = app.get(CaregiverService);

        caregiver = new Caregiver();
        caregiver.userId = randomInt(100);

        caregivers = [caregiver];

        jest.spyOn(svc, 'findAll').mockResolvedValue(caregivers);
        jest.spyOn(svc, 'update').mockResolvedValue(caregivers[0]);
        jest.spyOn(svc, 'bulkUpdate').mockResolvedValue(caregivers);
    })


    describe('list', () => {
        it('should return list of caregivers', async () => {
            const rst = await controller.list();
            expect(rst).toEqual(caregivers);
        })
    })

    describe('update', () => {
        it('should return updated caregiver', async () => {
            const rst = await controller.update(caregiver.userId, caregiver);
            expect(rst).toEqual(caregiver);
        })
    })

    describe('bulkUpdate', () => {
        it('should return updated caregiver list', async () => {
            const rst = await controller.bulkUpdate(caregivers.map(caregiver => ({ userId: caregiver.userId, caregiver })));
            expect(rst).toEqual(caregivers);
        })
    })
})