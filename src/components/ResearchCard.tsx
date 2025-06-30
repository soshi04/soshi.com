import { Typography, Link, Paper } from '@mui/material';

interface ResearchCardProps {
  title: string;
  url: string;
  description: string;
}

const ResearchCard = ({ title, url, description }: ResearchCardProps) => (
  <Paper elevation={2} sx={{ p: 2, borderRadius: 3, mb: 1 }}>
    <Typography variant="h6" fontWeight={700}>
      <Link href={url} target="_blank" rel="noopener noreferrer" underline="hover" color="primary">
        {title}
      </Link>
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>
      {description}
    </Typography>
  </Paper>
);

export default ResearchCard; 