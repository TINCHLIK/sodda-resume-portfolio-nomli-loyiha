import { AssignmentOutlined, Facebook, GitHub, Language, LinkedIn, Twitter, WebOutlined, YouTube } from "@material-ui/icons";

export default{
    name:'TINCHLIK TINCHLIK',
    title:'Full Stack MERN Developer',

    birthday: '04th November 1995',
    email:"Example@gmail.com",
    address:"Tashkent",
    phone:"+99899 123 45 67",

    socials:{
        Facebook:{
            link:"https://www.facebook.com",
            text:"TINCHLIK_FACEBOOK",
            icon:<Facebook/>,
        },
        Twitter:{
            link:"https://www.twitter.com",
            text:"TINCHLIK_TWITTER",
            icon:<Twitter/>,
        },
        LinkedIn:{
            link:"https://www.linkedin.com",
            text:"TINCHLIK_LINKEDIN",
            icon:<LinkedIn/>,
        },
        Github:{
            link:"https://www.github.com",
            text:"TINCHLIK_GITHUB",
            icon:<GitHub/>,
        },
    },
    about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    experiences:[
        {
            title:'Work 1',
            date:'2021-Present',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title:'Work 2',
            date:'2017-2021',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title:'Work 3',
            date:'2012-2015',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ],

    educations:[
        {
            title:'Education 1',
            date:'2018-Present',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title:'Education 2',
            date:'2014-2015',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title:'Education 3',
            date:'Aug 2016-Sep 2018',
            description:'birinchi matn: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ],
    services:[
        {
            title:'Web development',
            description:'I have a been a bades web developer for 10 years',
            icon:<WebOutlined/>,
        },
        {
            title:'Branding Identity',
            description:'We will make you a brand that is catchy and leaves a trace.',
            icon:<AssignmentOutlined/>,
        },
        {
            title:'Illustrator',
            description:'I have been working on illustrator for 10 years.',
            icon:<WebOutlined/>,
        },
    ],
    skills:[
        {
            title:'FRONT-END',
            description:[
                "ReactJS",
                "JavaScript",
                "TypeScript",
                "Bootstrap",
                "Material UI",
            ],
        },
        {
            title:'BACK-END',
            description:['NodeJS',
                        'Java',
                        'Python',
                        'Solidity'
                        ],
        },
        {
            title:'DATABASES',
            description:[
                            'Firebase',
                            'Ms SQL Server',
                            'MySQL',
                            'MongoDB'
                        ],
        },
        {
            title:'SOURCE CONTROL',
            description:[
                            'Git',
                            'GitHub',
                            'SCRUM/Agile'
                        ],
        },
    ],
    projects:[
        {
            tag:'React',
            image:'https://avatars.mds.yandex.net/i?id=2a00000179fc88bfeb71762732540df200bc-3674583-images-thumbs&n=13',
            title:'React Project 1',
            caption:'THIS IS REACT CAPTION-1',
            description:'This is my description. Please fillit in',
            links:[
                {link:'https://www.google.com',icon:<YouTube/>},
                {link:'https://www.google.com',icon:<GitHub/>},
                {link:'https://www.google.com',icon:<Language/>},
            ],
        },

          {
            tag:'React',
            image:'https://cdn.pixabay.com/photo/2021/04/11/17/14/logo-6170363_1280.jpg',
            title:'React Project 2',
            caption:'THIS IS REACT CAPTION-2',
            description:'This is my description. Please fillit in',
            links:[
                {link:'https://www.google.com',icon:<YouTube/>},
                {link:'https://www.google.com',icon:<GitHub/>},
                {link:'https://www.google.com',icon:<Language/>},
            ],
        },
          {
            tag:'Python',
            image:'https://yt3.ggpht.com/a/AATXAJzMysm0JjnWG3uwAmSNw5K_2SYxoST0KnivJ3p0=s900-c-k-c0xffffffff-no-rj-mo',
            title:'Python Project 1',
            caption:'THIS IS PYTHON CAPTION-1',
            description:'This is my description. Please fillit in',
            links:[
                {link:'https://www.google.com',icon:<YouTube/>},
                {link:'https://www.google.com',icon:<GitHub/>},
                {link:'https://www.google.com',icon:<Language/>},
            ],
        },
          {
            tag:'Java',
            image:'https://im0-tub-ru.yandex.net/i?id=263d65900c660127e992ab7fc9657773&ref=rim&n=33&w=266&h=150',
            title:'Java Project 1',
            caption:'THIS IS JAVA CAPTION-1',
            description:'This is my description. Please fillit in',
            links:[
                {link:'https://www.google.com',icon:<YouTube/>},
                {link:'https://www.google.com',icon:<GitHub/>},
                {link:'https://www.google.com',icon:<Language/>},
            ],
        },
    ]

};

