export interface BlogPost {
  id: string;
  date: Date;
  title: string;
  description: string;
  content: string;
  readingTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
   {
        id: '1',
        date: new Date('2025-06-11'),
        title: 'Old Man and the Sea',
        description: 'My thoughts about this classic book by Ernest Hemmingway',
        content: ` This book was sensational.
        `,
        readingTime: 2,
        tags: ['Books', 'Life'],
      }, 
      {
    id: '2',
    date: new Date('2025-05-31'),
    title: 'May Recap',
    description: 'Building in React, Leetcode-Suggest development and last month in Rochester :(',
    content: ` 
### Portfolio Website

Having really nothing to do for the summer I decided it would be the perfect time to create something new to showcase myself.
The obvious first step was to learn react so I could build a personal website to showcase my past and current projects as well as a place to write about the summer (aka this blog).
Learning React and Typescript in general was not too difficult honestly and having AI to explain problems definately made things a lot easier. I learned about structuring fullstack projects
and while this website is all front-end (at least at the time of me writing this) I would also go on to learn basic backend development since I would need a database for my first project. I wasn't really sure
on where to begin learning React + Typescript but like everything new in tech, I knew the simpliest way was to just read about it. I went to the [React docs](https://react.dev/learn) and literally just went through it. Everything
I read I implimented on a simple project (which you can probably view on my Github if its public under 'first-proj') and that was how I began working on this very website. I knew from the beginnning that
I wanted to focus this summer on ML projects, specifically projects in NLP and computer vision since those feilds are the most interesting to me. So learning all website stuff was just a stepping stone. I just 
needed to learn how to make this so I could put stuff out on here. At first (and even now) styling everything is actually so tedious because I dont care enough to actually learn it but all the other React stuff
was pretty interesting. I picked up on making components and pages pretty quick as well as local routing. For me the most fun part of react was probably figuring out passing props between components and using hooks
from both React and MUI. With hooks in particular, for some reason it took me so long to figure out how to make the lightmode/darkmode part of this site and then also passing the state of the site to the words so that
the white text words wouldnt disappear when the mode was set to light. I deployed the site with vercel since you can have like 200 projects on there. Doing the styling with CSS files was terrible and soon I started using Material-UI and it was life changing. The styling was so much nicer with all the 
components already there and the custimizations that I wanted to do was simple enough to figure out. I would highly reccomend using MUI for styling, I haven't even used it that much and there is so much more I want to get around to doing with it.

---
### First Project
Funny I say that I want to do more with styling but this project has literally zero styling (at least when I'm writing this). After getting the projects tab working on the website it was time to actually put something up on there. I had been doing a decent bit of leetcode
recently because I got cooked by leetcode questions for an ML role interview :/ so fair enough. Even though leetcode is basically useless now since you can just get the interview cheat things or whatever I had been doing it just to boost general problem solving and coding skills.
It became pretty fun and so I decided to make a super simple GPT wrapper type of project on leetcode to get experience making one even though its like the most meme'd on type of project you could possibly do. The first challenge with this project was figuring out how to use the Leetcode
API to get the stats of a user profile. I dont know how much the reader will care about this but Leetcode's API is in GraphQL and there was also no public documentation so to figure out how to make requests I had to find the query's myself and keep testing which was interesting. After getting
the users data from Leetcode the goal was to send that data to a prompt-trained gpt4.0 and get reccomendations on what to focus on next based on what the user has already done, tell the user why they should focus on the new skill, and resources so they could get started learning the new skill.
This was simple enough and I set-up the "backend" for API calls to OpenAI and Leetcode. I could host all of these on vercel functions too which was really nice. Everything was working fine but that was before I realized that each time someone used my site it would charge me and when my friends 'tested' it
they just spammed it so that wasn't good. I decided to set up a sign in system so I could track users and limit them to only 3 lookups a day so I wouldn't be financally ruined by my friends. Setting up the login was honestly not that bad through Firebase because you can just set up the authentication on the console and
then the coding part was chill. Firebase also allows you to have a database with your project so I could store the amount of times a certain user would call lookups. There were some difficulties I had with setting up Firebase and I did kind of rush through it so in later projects thats definitely something I want to work
more with.

---
### May
While I did get some stuff done this month, it was mostly foundational. In these coming months I want to learn a lot more about NLP and Computer Vision to the point where I can actually create and deploy projects that I find interesting and am actually passionate about, not just stepping stones.
This was my final month of living in my hometown Rochester, MN. My family is moving soon to Atlanta so that is pretty time consuming for me right now. Also, literally right at the start of May, I dislocated my shoulder while doing indoor climbing so thats also been super annoying. I've been pretty into climbing this year and now I wont be able to climb basically all summer.
On the bright side, this month I spent time with my family and hometown friends a good bit as well since I do not know when I will go back to see them (hopefuly winter break or something) and that was nice. We are going to leave June 6th and drive to Atlanta so thats all for now.
    `,
    readingTime: 4,
    tags: ['Technology', 'Development', 'Life'],
  },

  // HOW TO ADD NEW POSTS {
  //id: '3', // Make sure this is unique
  //date: new Date('2024-03-15'), // The date you want to show
  //title: 'Your New Blog Post Title',
  //description: 'A short summary of your blog post.',
  //content: 'Your full blog post content here...',
  //readingTime: 5, // Estimated reading time in minutes
  //tags: ['Your', 'Tags', 'Here'],
  //}

]; 