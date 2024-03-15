import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ value, onChange }: { value?: string, onChange: (search: string) => void }) {
    return (
        <Box display={'flex'} alignItems={'center'} width={'560px'}>
            <Typography variant='subtitle1' mr={3}>Caregiver Name</Typography>
            <TextField 
                sx={{ flex: 1 }} 
                name='search' 
                placeholder='Search'
                value={value}
                onChange={(ev) => onChange(ev.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    )
}