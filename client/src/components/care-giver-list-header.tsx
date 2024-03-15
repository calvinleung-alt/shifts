'use client'

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export type ListHeaderProps = { 
    date: Date, 
    count: number, 
    checked: boolean, 
    checkboxDisabled: boolean,
    buttonDisabled: boolean,
    onChange: (value: boolean) => void, 
    onConfirm: () => any,
};

const CaregiverListHeader = ({ date, count, checked, checkboxDisabled, buttonDisabled, onChange, onConfirm, }: ListHeaderProps) => {
    return (
        <Box px={1} py={2} display={'flex'} alignItems={'center'} sx={{ backgroundColor: (theme) => theme.palette.info.main }}>
            <Checkbox sx={{ mr: 2, }} disabled={checkboxDisabled} checked={checked} onChange={(ev) => onChange(ev.target.checked)} />
            <Typography variant={'subtitle1'} fontWeight={'bold'}>
                {moment(date).format('MMMM YYYY')}
                {count > 0 && (
                    <Typography variant={'subtitle1'} ml={2} component={'span'}>
                        {`(${count} held shifts)`}
                    </Typography>
                )}
            </Typography>
            <Button variant='contained' sx={{ ml: 'auto', mr: 1, borderRadius: 1, }} disabled={buttonDisabled} onClick={onConfirm}>Confirm</Button>
        </Box>
    )
}

export default CaregiverListHeader