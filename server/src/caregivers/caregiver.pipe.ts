import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export default class BulkUpdateArgsPipe implements PipeTransform {
    transform(value: any, _: ArgumentMetadata) {
        return value.map(({ userId, caregiver }) => ({ 
            userId: parseInt(userId),
            caregiver: {
                ...caregiver,
                userId: parseInt(userId),
            }
        }));
    }
}