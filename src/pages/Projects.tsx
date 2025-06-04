import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Leetcode Suggest",
    year: "2025",
    description: "A LeetCode problem tracking application that helps users monitor and manage their coding practice progress. The application provides features for tracking solved problems, viewing statistics, and getting AI-powered assistance on what to practice next.",
    tags: ["React", "TypeScript", "Firebase (Authentication & Database)", "OpenAI API", "Node.js", "GraphQL"],
    image: "/leetcode_suggest.JPG",
    link: "https://leetcode-suggest-and-track.vercel.app/",
    github: "https://github.com/soshi04/leetcode-suggest-and-track"
  },
  {
    title: "Proj 1",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et ipsa omnis quod ipsam, eius fugit doloribus, quas earum iste, tempore suscipit temporibus at atque dolor assumenda labore officiis delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et ipsa omnis quod ipsam, eius fugit doloribus, quas earum iste, tempore suscipit temporibus at atque dolor assumenda labore officiis delectus.",
    tags: ["Temporary", "Filler", "Tags", "Even longer filler", "Super longgggggg filler tag"],
    image: "/filler.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    github: "",
  },
  {
    title: "Proj 2",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et ipsa omnis quod ipsam, eius fugit doloribus, quas earum iste, tempore suscipit temporibus at atque dolor assumenda labore officiis delectus.",
    tags: ["Temporary", "Filler", "Tags", "Even longer filler", "Super longgggggg filler tag"],
    image: "/filler.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    github: "",
  },
  {
    title: "Proj 3",
    year: "2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et ipsa omnis quod ipsam, eius fugit doloribus, quas earum iste, tempore suscipit temporibus at atque dolor assumenda labore officiis delectus.",
    tags: ["Temporary", "Filler", "Tags", "Even longer filler", "Super longgggggg filler tag"],
    image: "/filler.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    github: "",
  },
  // Add more projects...
];

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