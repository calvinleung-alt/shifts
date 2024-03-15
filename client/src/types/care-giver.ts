export type CareGiver = {
    startedAt: string,
    endedAt: string,
    status: string,
    userId: number,
    chiName: string,
    lastName: string,
    firstName: string,
    role: string
}

export type CareGiverState = CareGiver & { 
    checked: boolean
};

export type CareGiverStateMapping = Record<string, CareGiverState>;