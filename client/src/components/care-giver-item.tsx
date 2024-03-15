'use client'

import { CareGiverState } from "@/types/care-giver"
import { Box, Button, Checkbox, Typography } from "@mui/material"
import moment from "moment"
import CountDown from "./count-down"
import Dot from "./dot"

const CaregiverItem = ({ 
    caregiver, 
    onChange,
    onConfirm,
    onDecline
}: { 
    caregiver?: CareGiverState, 
    onChange: (state: CareGiverState) => void,
    onConfirm: (state: CareGiverState) => Promise<void>,
    onDecline: (state: CareGiverState) => Promise<void>,
}) => {
    if (!caregiver) {
        return null;
    }

    const renderActionButtson = () => (
        <>
            <Button variant='outlined' color="error" onClick={() => onDecline(caregiver)}>Decline</Button>
            <Button variant='contained' onClick={() => onConfirm(caregiver)}>Confirm</Button>
        </>
    );

    const renderStatusButton = (status: string) => (
        <Button 
            variant='outlined' 
            disabled
            sx={(theme) => status === 'CONFIRMED' ? {
                '&:disabled': {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                    border: 'none'
                }
            } : {
                '&:disabled': {
                    backgroundColor: theme.palette.error.light,
                    color: theme.palette.error.main,
                    border: 'none'
                }
            }}
        >
            {status}
        </Button>
    );

    return (
        <Box display={'flex'} alignItems={'center'} px={2} py={1.5}>
            <Checkbox 
                sx={{ mr: 2, visibility: caregiver.status === 'PENDING' ? 'visible' : 'hidden' }}
                checked={caregiver.checked}
                onChange={(ev) => {
                    onChange({ ...caregiver, checked: ev.target.checked });
                }} 
            />
            <Box display={'flex'} flex={1} flexDirection={'column'} gap={1}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='body2'>
                        {`${moment(caregiver.startedAt).format('h:mma')}-${moment(caregiver.endedAt).format('h:mma')}`}
                    </Typography>
                    <CountDown caregiver={caregiver} />
                </Box>
                <Typography variant='body2'>{`${caregiver.userId} - ${caregiver.lastName} ${caregiver.firstName} ${caregiver.chiName}`}</Typography>
                <Box display={'flex'} alignItems={'center'}>
                    <Dot caregiver={caregiver} />
                    <Typography variant='body2' ml={'6px'}>
                        {caregiver.role}
                    </Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2} mt={1}>
                    {caregiver.status === 'PENDING' 
                        ? renderActionButtson() 
                        : renderStatusButton(caregiver.status)}
                </Box>
            </Box>
        </Box>
    )
}

export default CaregiverItem