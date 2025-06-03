import { Stack, Button } from '@mui/material'
import HexagonIcon from '@mui/icons-material/Hexagon';

export const MuiButton = () => {
    return (
        <Stack spacing={4} direction={'row'}>
            <Button variant='text'> Text </Button>
            <Button variant='contained'> Contained </Button>
            <Button variant='outlined'> Outlined </Button>
            <Stack spacing={2} direction='row'>
            <Button variant='contained' color='secondary'> secondary </Button>
            <Button variant='contained' color='success'> success </Button>
            <Button variant='contained' color='warning'> warning </Button>
            <Button variant='contained' color='error'> error </Button>        
            </Stack>
            <Stack display='block' spacing={2} direction={'row'}>
            <Button variant='contained' size='small'> small </Button>
            <Button variant='contained' size='medium'> med </Button>
            <Button variant='contained' size='large'> large </Button>
            <Button size='small' startIcon={<HexagonIcon/>}></Button>
            </Stack>
        </Stack>
        
    )
}