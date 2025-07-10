import { Box, Stack, Typography, Link, Paper } from '@mui/material';
import ResearchCard from '../components/ResearchCard';
import researchData from '../data/InterestingResearch.json';
import powerpointsData from '../data/AigtPowerpoints.json';

function Extras() {
  return (
    <Box sx={{ px: { xs: 1, sm: 3, md: 6 }, py: 4, pb: 10 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={6}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Interesting Research Box */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            minWidth: { xs: 'auto', md: 320 },
            minHeight: 400,
            borderRadius: 6,
            border: '5px solid',
            borderColor: 'darkgray',
            background: '#fff',
            flex: 1,
            mb: { xs: 4, md: 0 },
            mr: { xs: 0, md: 2 },
          }}
        >
          <Typography variant="h5" fontWeight={900} gutterBottom sx={{ fontFamily: 'inherit', mb: 3 }}>
            INTERESTING RESEARCH
          </Typography>
          <Stack spacing={2}>
            {researchData.research.map((item, idx) => (
              <ResearchCard key={idx} title={item.title} url={item.url} description={item.description} />
            ))}
          </Stack>
        </Paper>

        {/* AIGT Education Box */}
        <Paper
          elevation={4}
          sx={{
            p: 4,
            minWidth: { xs: 'auto', md: 320 },
            minHeight: 400,
            borderRadius: 6,
            border: '5px solid',
            borderColor: 'darkgray',
            background: '#fff',
            flex: 1,
            ml: { xs: 0, md: 2 },
          }}
        >
          <Typography variant="h5" fontWeight={900} gutterBottom sx={{ fontFamily: 'inherit', mb: 3 }}>
            AIGT EDUCATION
          </Typography>
          <Stack spacing={2}>
            {powerpointsData.powerpoints.map((ppt, idx) => (
              <Link
                key={idx}
                href={ppt.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ fontSize: 20, fontWeight: 500, color: '#2196f3' }}
              >
                {ppt.label}
              </Link>
            ))}
            <Typography>Reworking lectures, more to come... </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export default Extras;