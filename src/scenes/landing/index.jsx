import { useState, useEffect } from "react"
import { Grid, Box, Button, Typography } from "@mui/material"
import ProjectCard from "../../components/ProjectCard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LandingPage = () => {
    const toRotate = ["Gründer and CEO", "Machine Learning Engineer", "Fullstack Developer", "Master Student", "Firefighter"];
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const period = 200;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(delta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(500);
        }
    };

    useEffect(() => {
        let ticker = setInterval(tick, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta]);

    return (
        <Box id="home" mt={10} sx={{ maxWidth: '100vw', overflowX: 'hidden', p: 2, position: 'relative' }}>
            <Box 
                component="video"
                autoPlay
                muted
                loop
                src={`${process.env.PUBLIC_URL}/background.mp4`} 
                alt="Header"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            />
            <Grid
             container 
             spacing={2} 
             alignItems="flex-start" 
             justifyContent='left'
             style={{ height: '90vh', marginTop: '30px', marginLeft: '10%' }}
            >
                <Grid item xs={12} sm={10} md={8} lg={6} bgcolor='rgba(256,256,256,0.5)' p={4} borderRadius='10px'>
                    <Typography variant="subtitle1" gutterBottom>Welcome to the portfolio of Erik Nymo Bohne</Typography>
                    <Typography variant="h3" fontWeight='bold' component="div">I'm Erik</Typography>
                    <Typography variant="h3" fontWeight='bold' component="div"><span className="wrap">{text}</span></Typography>
                    <Typography variant="h6" gutterBottom>
                      Fullstack developer studying Msc in Cybernetics and Robotics @ NTNU Trondheim.
                    </Typography>
                    <Button variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />} onClick={() => window.location.href = "mailto:eriknbohne@gmail.com"}>
                      Let's connect!
                    </Button>
                </Grid>
            </Grid>
            <Box
              display='flex'
              justifyContent='center'
              alignContent='center'
            >
              <ProjectCard 
                title='Betting AI' 
                description='Creating a Betting AI to beat the bookies having a ROI of 324% over 3 months. Uses deep learing and neural networks to offer daily tips from 35 of the biggest leagues in Europe, both men and women.'
                imageUrl={`${process.env.PUBLIC_URL}/vanirodds.png`}
                altText='Image to represent Vanir Odds homesite'
                ghLink='https://github.com/erikbohne/bettingAI'
                maxWidth='30%'
              />
              <ProjectCard 
                title='Doctor AI' 
                description='Together with a group of students in Cogito NTNU, we created a computer vision model to diagnose pneumnia based on x-ray images. We built and engineered our own convolutional neural network (CNN), and also used a pre-trained CNN from PyTorch. Both models achieved 92% accuracy in evalutaion runs.'
                imageUrl={`${process.env.PUBLIC_URL}/vanirodds.png`}
                altText='Image to represent Doctor AI project'
                ghLink='https://github.com/CogitoNTNU/Doctor-AI'
                maxWidth='30%'
              />
              <ProjectCard 
                title='Doctor AI' 
                description='Together with a group of students in Cogito NTNU, we created a computer vision model to diagnose pneumnia based on x-ray images. We built and engineered our own convolutional neural network (CNN), and also used a pre-trained CNN from PyTorch. Both models achieved 92% accuracy in evalutaion runs.'
                imageUrl={`${process.env.PUBLIC_URL}/vanirodds.png`}
                altText='Image to represent Doctor AI project'
                ghLink='https://github.com/CogitoNTNU/Doctor-AI'
                maxWidth='30%'
              />
            </Box>
        </Box>
    )
}

export default LandingPage;
