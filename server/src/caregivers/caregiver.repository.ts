import { Injectable } from "@nestjs/common";
import Caregiver from "./caregiver.entity";
import { data } from "./caregiver.data";

@Injectable()
export default class CaregiverRepositoy {
    private caregivers: Caregiver[];

    constructor() {
        this.caregivers = data.map((dat) => Object.assign(new Caregiver(), dat));
    }

    public findAll = async () => {
        return this.caregivers;
    }

    public update = async (userId: number, caregiver: Caregiver) => {
        const idx = this.caregivers.findIndex((cg) => (
            cg.userId === userId 
            && cg.startedAt === caregiver.startedAt
            && cg.endedAt === caregiver.endedAt
        ));
        if (idx === -1) {
            throw new Error('caregiver not found')
        }
        this.caregivers[idx] = Object.assign(this.caregivers[idx], caregiver);
        return this.caregivers[idx];
    }
}