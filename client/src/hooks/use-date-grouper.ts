import { CareGiver } from "@/types/care-giver";
import { groupBy } from "lodash";
import moment from "moment";

export default function useDateGrouper() {
    const groupCareGivers = <T extends CareGiver>(caregivers: T[], iteratee: 'month' | 'year' | 'day'): { date: Date, caregivers: T[] }[] => {
        const grouped = groupBy(caregivers.map(dat => {
            const date = moment(dat.startedAt);
            return {
                ...dat,
                date: date.toDate(),
                year: date.year(),
                month: date.month(),
                day: date.date()
            };
        }), iteratee);
      
        const keys = Object.keys(grouped);

        keys.sort((a, b) => parseInt(a) < parseInt(b) ? -1 : 1);
      
        return keys.map(key => {
            const caregivers = grouped[key];
            if (caregivers.length === 0){
                return {
                    date: new Date(),
                    caregivers
                }
            } 
            return {
                date: caregivers[0].date,
                caregivers
            }
        });
    }

    return { groupCareGivers };
}