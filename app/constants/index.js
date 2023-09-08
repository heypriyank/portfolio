import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    postgresql,
    rubyrails,
    graphql,
    netflix,
    solcheck,
    twitter,
    ledger,
    rapidoLogo,
    levEdLogo,
    apricLogo
  } from '../assets';
  
  const technologies = [
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Rails',
      icon: rubyrails,
    },
    {
      name: 'graphql',
      icon: graphql,
    },
    {
      name: 'postgresql',
      icon: postgresql,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'docker',
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: 'Product Engineer, SDE II',
      company_name: 'Rapido',
      icon: rapidoLogo,
      iconBg: '#ffffff',
      date: 'Aug 2022 - Jul 2023',
    },
    {
      title: 'SDE',
      company_name: 'Leverage Edu',
      icon: levEdLogo,
      iconBg: '#ffffff',
      date: 'Nov 2021 - Aug 2022',
    },
    {
      title: 'Software Developer',
      company_name: 'Apric',
      icon: apricLogo,
      iconBg: '#ffffff',
      date: 'Jul 2020 - Nov 2021',
    }
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'SOL Check',
      description: 'D-APP to check account balance of any Solana account',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'solana',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
        {
          name: 'web3.js',
          color: 'pink-text-gradient',
        },
      ],
      image: solcheck,
      repo: 'https://github.com/heypriyank/solcheck',
      demo: 'https://solcheck.vercel.app/',
    },
    {
      id: 'project-2',
      name: 'Movie Ratings',
      description:
        'A netflix clone which allows admins to add movies and rate them, while users can see them',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'next',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: netflix,
      repo: 'https://github.com/heypriyank/netflix',
      demo: 'https://netflix-pasnc3nxx-heypriyank.vercel.app/',
    },
    {
      id: 'project-3',
      name: 'Twitter Clone',
      description: 'Twitter like app, people can tweet, add friends and stuff',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: twitter,
      repo: 'https://github.com/heypriyank/Twitter-MERN-clone',
      demo: 'https://twitter-clone-880ac.web.app',
    },
    {
      id: 'project-4',
      name: 'Payments and Ledger',
      description: `A paytm like wallet app, can send someone virtual money and see ledger`,
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: ledger,
      repo: 'https://github.com/heypriyank/payment-app',
      demo: 'https://payments-app-bfef8.web.app',
    }
  ];
  
  export { technologies, experiences, projects };
  