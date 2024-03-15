import { CareGiver } from "@/types/care-giver";
import { Box } from "@mui/material"

const colorMapping: Record<string, string> = {
    PWH: '#D8A581',
    ST: '#0ABAB5',
    EN: '#E08DB3'
};

const Dot = ({ caregiver }: { caregiver: CareGiver }) => {
    return (
        <Box sx={{ backgroundColor: colorMapping[caregiver?.role] || '#0ABAB5' }} width={'8px'} height={'8px'} borderRadius={'100%'} />
    )
}

export default Dot