import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { CareGiver } from '@/types/care-giver';
import moment from 'moment';

export default function CountDown({ caregiver }: { caregiver: CareGiver }) {
    const startedAt = moment(caregiver.startedAt);
    const now = moment();

    const hours = {
        value: startedAt.diff(now, 'hours'),
        suffix: 'hrs'
    };
    const minutes = {
        value: startedAt.diff(now, 'minutes'),
        suffix: 'mins'
    };

    const countDountNotes = [hours, minutes].filter(t => t.value > 0).map(t => `${t.value}${t.suffix}`).join('');    

    if (hours.value > 24 || !countDountNotes) {
        return null
    }

    return (
        <Box mb={1} sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px', 
            px: '4px', 
            py: '2px', 
            borderRadius: '.45rem', 
            backgroundColor: (theme) => theme.palette.warning.light
        }}>
            <AccessTimeFilledIcon color='warning' fontSize='small'/>
            <Typography variant='caption' sx={{ fontSize: '.7rem' }}>
                Release in {countDountNotes}
            </Typography>
        </Box>
    )
}