import { Injectable } from "@nestjs/common";
import CaregiverRepositoy from "./caregiver.repository";
import Caregiver from "./caregiver.entity";

export class BulkUpdateArg { 
    userId: number
    caregiver: Caregiver 
};

@Injectable()
export default class CaregiverService {
    constructor(private readonly repo: CaregiverRepositoy) {}

    public findAll = async () => {
        return this.repo.findAll();
    }

    public update = async (userId: number, caregiver: Caregiver) => {
        return this.repo.update(userId, caregiver);
    }

    public bulkUpdate = async (args: BulkUpdateArg[]) => {
        return Promise.all(args.map(({ userId, caregiver }) => this.update(userId, caregiver)));
    }
}