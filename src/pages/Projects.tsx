import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/ProjectCard';
import { projects } from "../data/ProjectsData.json"



export default function Projects() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
            {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} {...({} as any)}>
            <ProjectCard {...project} />
            </Grid>
            ))}
      </Grid>
    </Container>
  );
}