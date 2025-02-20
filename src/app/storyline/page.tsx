import { ReactNode } from 'react';
import { SiTypescript, SiExpress, SiDotnet } from 'react-icons/si';
import { FaReact, FaNodeJs, FaDocker, FaUnity, FaAws } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

export default function Storyline() {
    return (
        <main className="m-20">
            <div className="flex flex-col gap-y-10">
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </main>
    );
}

const Project = ({ project }: { project: ProjectData }) => {
    const { name, duration, description, story, tech } = project;

    return (
        <div className="flex flex-col gap-y-2">
            <div className="uppercase">
                {name}, <span className="text-gray-500">{duration}</span>
            </div>
            <div>{description}</div>
            <div className="flex gap-x-3 my-2">
                {tech.map((tech) => icons[tech] ?? tech)}
            </div>
            <div className="">{story}</div>
        </div>
    );
};

interface ProjectData {
    name: string;
    duration: string;
    position: string;
    description: string;
    tech: string[];
    story: string;
}

const iconSize = 56;
const icons: {
    [key: string]: ReactNode;
} = {
    CSharp: <TbBrandCSharp size={iconSize} />,
    Typescript: <SiTypescript className="text-blue-500" size={iconSize} />,
    React: <FaReact className="text-sky-400" size={iconSize} />,
    Nextjs: <RiNextjsFill size={iconSize} />,
    Nodejs: <FaNodeJs className="text-emerald-600" size={iconSize} />,
    Express: <SiExpress size={iconSize} />,
    MongoDB: <DiMongodb className="text-green-600" size={iconSize} />,
    Docker: <FaDocker className="text-sky-600" size={iconSize} />,
    Unity: <FaUnity size={iconSize} />,
    Git: <FaGitAlt className="text-red-600" size={iconSize} />,
    AWS: <FaAws className="text-amber-600" size={iconSize} />,
    Dotnet: <SiDotnet size={iconSize} />,
    SqlServer: <DiMsqlServer size={iconSize} />,
    Azure: <VscAzure className="text-sky-600" size={iconSize} />,
};

const projects: ProjectData[] = [
    {
        duration: '2023 - 2025',
        position: 'Developer',
        name: 'Loopus',
        description: 'Multi-platform app, website and server',
        tech: [
            'CSharp',
            'Unity',
            'Typescript',
            'React',
            'Nextjs',
            'Nodejs',
            'Express',
            'MongoDB',
            'Docker',
            'Git',
            'AWS',
        ],
        story: `Reluctantly I accepted the challenge of developing an mobile application, as I've never developed mobile apps before,
                trying to bridge the gap by using React Native. As the requirements grew to all platforms, real-time audio rendering, 
                real-time graphic rendering I first moved to prototyping on the web, to Rust and Tauri, to finally arive
                at Unity, keeping the Node.js server hosted on AWS. I implemented everything from the email and third party authentication to analytics, including
                an andoird, iOS and desktop platform, website and servers hosted on AWS.
                I used the following AWS services: Elastic Beanstalk, SES, ALB, EC2, S3, ECR, WAF, Route 53, Cloud Watch.`,
    },
    {
        duration: '2021 - 2022',
        position: 'Developer',
        name: 'The Inquisition',
        description: 'Unity game',
        tech: ['CSharp', 'Unity'],
        story: `I was given a chance to reconnect and work with friends and former colleagues from Eipix Entertainment
        and work together on a game that we would imagine together. As these were friends and colleagues who I've had
        success with before and valued them greatly as people and professionals, I jumped on the opportunity.`,
    },
    {
        duration: '2021 Feb - 2021 Aug',
        position: 'Developer',
        name: 'SuSy',
        description: 'Web application and server',
        tech: [
            'Typescript',
            'React',
            'Nextjs',
            'Nodejs',
            'Express',
            'MongoDB',
            'AWS',
        ],
        story: `I was hired by efiport GmbH to lead and develop an application that would help with
        correspondence between students and their mentors. For my short stint, together with my team
        we managed to migrate the codebase from JavaScript to TypeScript, introduced code standards,
        unit testing, automated builds, documentation, production incident debriefing, pair
        programming and more. We used Agile and Lean management approaches to focus on flow.`,
    },
    {
        duration: '2019 - 2020',
        position: 'Team Lead',
        name: 'Matrix - Knab',
        description: 'Banking, enterprise platform',
        tech: ['CSharp', 'Dotnet', 'SqlServer', 'Azure'],
        story: `At the time I took over team leadership, the goal of Knab was to update the platform
        to the latest version. The gap was more then a year, so there was some serios work to be done.
        From the Levi9 side, three teams coordinated to prepare the giant update. The update was delivered
        successfully and on time.`,
    },
    {
        duration: '2017 - 2019',
        position: 'Team Lead',
        name: 'Matrix - Van Lanschot Kempen',
        description: 'Banking, enterprise platform',
        tech: ['CSharp', 'Dotnet', 'SqlServer', 'Azure'],
        story: `Upon ariving at Levi9 I was almost immediatly assigned to the project for Five Degrees,
        for their client Van Lanschot. We developed web services, integrations and customized the web
        application. We also stabilized the SCRUM cycle, delivering the commitment,
        improved user stories, added acceptance criteria, and automated builds using azure devops.`,
    },
];
