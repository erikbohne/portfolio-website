import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {

    return (
        <Box 
            display='flex' 
            justifyContent='space-between' 
            p={2}
        >
            <Box display='flex'>
                <Typography>
                    Erik Nymo Bohne
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display='flex'>
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