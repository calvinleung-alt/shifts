import Box from '@mui/material/Box';

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            {children}
        </Box>
    )
}