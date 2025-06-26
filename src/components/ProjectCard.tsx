// src/components/ProjectCard.tsx
import { Card, CardContent, CardMedia, Typography, Button, Chip, Stack } from '@mui/material';
import { common } from '@mui/material/colors';

type ProjectProps = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
};

export default function ProjectCard({ title, year, description, tags, image, link, github }: ProjectProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" color={common.black}>{`${title} (${year})`}</Typography>
        <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        sx={{ my: 2 }}>
            {tags.map((tag, i) => (
            <Chip
                key={i}
                label={tag}
                size="small"
                variant="outlined"
                color={'error'}
                sx={{
                    borderRadius: '16px',
                    fontSize: '0.8rem',
                }}
            />
            ))}
        </Stack>
        <Typography variant="body2" color={common.black}>{description}</Typography>
        {link && (<Button size="small" href={link} target="_blank" sx={{ mt: 1 }}>View</Button>)}
        {github && (<Button size="small" href={github} target="_blank" sx={{ mt: 1 }}>Github</Button>)}
      </CardContent>
    </Card>
  );
}
