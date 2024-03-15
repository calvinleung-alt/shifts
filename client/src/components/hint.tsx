import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Hint() {
    return (
        <Box mb={1} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AccessTimeFilledIcon color='warning'/>
            <Typography variant='subtitle2'>
                indicates held shifts with less than 24 hours response time
            </Typography>
        </Box>
    )
}