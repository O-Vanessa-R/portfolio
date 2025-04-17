import { JSX } from 'react';
import {
    SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiVuedotjs,
    SiTailwindcss, SiChakraui, SiVite, SiNodedotjs, SiExpress,
    SiNestjs, SiPhp, SiMysql, SiPostgresql, SiMongodb, SiPrisma, SiGraphql,
    SiJsonwebtokens, SiDocker, SiJest, SiGithub, SiSlack, SiConfluence,
    SiJirasoftware, SiAmazonwebservices, SiAmazons3
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbApi } from 'react-icons/tb';
import { FaServer } from 'react-icons/fa';

export const frontEndSkills: { name: string; icon: JSX.ElementType }[] = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'SASS/SCSS', icon: SiSass },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Vue.js', icon: SiVuedotjs },
    { name: 'React Native', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Chakra UI', icon: SiChakraui },
    { name: 'Vite', icon: SiVite },
];

export const backEndSkills = [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'PHP', icon: SiPhp },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'JWT', icon: SiJsonwebtokens },
    { name: 'API REST', icon: TbApi },
];

export const cloudSkills = [
    { name: 'AWS', icon: SiAmazonwebservices },
    { name: 'Serverless', icon: FaServer },
    { name: 'S3', icon: SiAmazons3 },
    { name: 'Lambda', icon: SiAmazonwebservices },
    { name: 'Step Functions', icon: SiAmazonwebservices },
    { name: 'EventBridge', icon: SiAmazonwebservices },
    { name: 'API Gateway', icon: SiAmazonwebservices },
    { name: 'CloudFormation', icon: SiAmazonwebservices },
    { name: 'CodePipeline', icon: SiAmazonwebservices },
];

export const toolsSkills = [
    { name: 'VSCode', icon: VscVscode },
    { name: 'Docker', icon: SiDocker },
    { name: 'Jest', icon: SiJest },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Slack', icon: SiSlack },
    { name: 'Confluence', icon: SiConfluence },
    { name: 'Jira', icon: SiJirasoftware },
];
