import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ title, description, imageUrl, altText, ghLink, maxWidth }) {

  return (
    <Box
      bgcolor='white'
      maxWidth={maxWidth} 
      sx={{ 
        boxShadow: 7, 
        textAlign: 'center',
        margin: '2vh'
        }}
    >
      <Card sx={{ backgroundColor: 'transparent' }}>
        <CardMedia
          component="img"
          height="100%"
          image={imageUrl}
          alt={altText}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title} 
          </Typography>
          <Typography variant="body2" color='green'>
            {description}
          </Typography>
          <Button href={ghLink}>
            GitHub <GitHubIcon/>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectCard;