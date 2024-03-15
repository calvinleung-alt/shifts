'use client'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CareGiverState } from '@/types/care-giver';
import CaregiverItem from './care-giver-item';
import { Divider } from '@mui/material';
import moment from 'moment';

export type CaregiverListSectionProps = { 
    date: Date, 
    caregivers: CareGiverState[],
    onChange: (state: CareGiverState) => void,
    onConfirm: (state: CareGiverState) => Promise<void>,
    onDecline: (state: CareGiverState) => Promise<void>,
}

const CaregiverListSection = ({ date, caregivers, onChange, onConfirm, onDecline }: CaregiverListSectionProps) => {
    return (
        <>
            <Box py={0.5} px={1} sx={{ backgroundColor: (theme) => theme.palette.info.light }}>
                <Typography variant='caption'>{moment(date).format('D MMMM')}</Typography>
            </Box>  
            {caregivers.map((caregiver, i) => {
                return (
                    <>
                        <CaregiverItem 
                            caregiver={caregiver} 
                            onChange={onChange} 
                            onConfirm={onConfirm}
                            onDecline={onDecline}
                        />
                        {i !== caregivers.length - 1 && <Divider/>}
                    </>
                )
            })}
        </>
    )
}

export default CaregiverListSection