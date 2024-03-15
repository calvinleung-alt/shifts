'use client'

import Paper from '@mui/material/Paper';
import useDateGrouper from '@/hooks/use-date-grouper';
import CaregiverListSection, { CaregiverListSectionProps } from './care-giver-list-section';
import CaregiverListHeader from './care-giver-list-header';
import { CareGiverState } from '@/types/care-giver';

type CaregiverListProps = CaregiverListSectionProps & {
    onBulkConfirm: (caregivers: CareGiverState[]) => Promise<void>,
};

const CaregiverList = ({ date, caregivers, onChange, onConfirm, onDecline, onBulkConfirm }: CaregiverListProps) => {
    const { groupCareGivers } = useDateGrouper();
    const pendingCaregivers = caregivers.filter(caregiver => caregiver.status === 'PENDING');
    const checkedAll = pendingCaregivers.length > 0 && pendingCaregivers.every(caregiver => caregiver.checked);
    const checkedNone = pendingCaregivers.length === 0 || pendingCaregivers.every(caregiver => !caregiver.checked);

    const bulkConfirm = async () => {
        onBulkConfirm(pendingCaregivers.filter(caregiver => caregiver.checked));
    };

    const toggleSelectAll = (checked: boolean) => {
        pendingCaregivers.forEach(caregiver => {
            onChange({ ...caregiver, checked });
        })
    };

    return (
        <Paper 
            elevation={1} 
            sx={{ 
                display: 'flex', 
                flexShrink: 0, 
                width: '560px', 
                flexDirection: 'column',
                border: (theme) => `1px solid ${theme.palette.info.dark}`
            }}
        >
            <CaregiverListHeader
                checked={checkedAll} 
                checkboxDisabled={pendingCaregivers.length === 0}
                buttonDisabled={checkedNone}
                onChange={toggleSelectAll}
                date={date} 
                count={caregivers.length}
                onConfirm={bulkConfirm}
            />
            {groupCareGivers(caregivers, 'day').map(({ date, caregivers }) => (
                <CaregiverListSection
                    date={date}
                    caregivers={caregivers}
                    onChange={onChange}
                    onConfirm={onConfirm}
                    onDecline={onDecline}
                />
            ))}
        </Paper>
    )
}

export default CaregiverList