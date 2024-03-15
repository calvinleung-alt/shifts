'use client'

import { CareGiver } from "@/types/care-giver";
import fetcher from "@/utils/fetcher";
import { useEffect, useState } from "react";

export default function useCareGivers() {
    const [data, setData] = useState<CareGiver[]>([]);

    const fetchCaregivers = async () => {
        try {
            const res = await fetcher(`api/caregivers`);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const update = async (userId: number, caregiver: CareGiver) => {
        try {
            const res = await fetcher(`api/caregivers/${userId}`, {
                method: 'PUT',
                body: JSON.stringify(caregiver),
            });
            return res.json();
        } catch (error) {
            console.log(error);
        }
    }

    const bulkUpdate = async (args: { userId: number, caregiver: CareGiver }[]) => {
        try {
            const res = await fetcher(`api/caregivers/bulk-update`, {
                method: 'PUT',
                body: JSON.stringify(args),
            });
            return res.json();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCaregivers();
    }, []);

    return { data, update, fetchCaregivers, bulkUpdate }
}