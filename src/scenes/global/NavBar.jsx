import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {

    return (
        <Box 
            display='flex' 
            justifyContent='space-between' 
            p={2}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1,
                bgcolor: '#222',
            }} 
        >
            <Box display='flex' ml='20vw'>
                <Typography fontWeight='bold' fontSize='2.5rem' color='#FF8200'>
                    ENB
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display='flex' mr='20vw'>
                <IconButton href='https://github.com/erikbohne'>
                    <GitHubIcon />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/erik-nymo-bohne-25868321a/'>
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default NavBar;