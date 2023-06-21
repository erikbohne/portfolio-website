import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToSettings = () => {
        handleClose();
        navigate('/personalinfo');
    };

    return (
        <Box 
            display='flex' 
            justifyContent='space-between' 
            p={2}
        >
            {/* SEARCH BAR */}
            <Box 
                display='flex' 
                sx={{
                  }}
            >
                <Typography>
                    Hei på deg!
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display='flex'>
                <IconButton onClick={goToSettings}>
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={handleClick}>
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default NavBar;