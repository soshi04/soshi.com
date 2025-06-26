import {
    Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function About() {
    
    return(
        <Stack direction="row" spacing={4}
        sx={{
            justifyContent:'center',
            alignItems:'center',
            mr:10,
            ml:10,
            mt:5

        }}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography component="span">Interesting Research</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='subtitle2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Commodi perspiciatis exercitationem ipsam beatae aliquid qui similique ducimus numquam 
                    dolor quod iusto iste amet dignissimos atque, dicta at quidem eligendi optio.
                    </Typography>                    
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography component="span">AIGT Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='subtitle2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Commodi perspiciatis exercitationem ipsam beatae aliquid qui similique ducimus numquam 
                    dolor quod iusto iste amet dignissimos atque, dicta at quidem eligendi optio.
                    </Typography>                    
                </AccordionDetails>
            </Accordion>
        </Stack>
    )}

export default About