module.exports = {
  siteMetadata: {
    fullName: 'Sanjiv Krishnasamy',
    profession: 'Frontend Developer',
    birthDate: '1994-05-23',
    currentLocation: 'Berlin, Germany',
    about: `Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Collaborative team player with excellent
technical abilities offering 3+ years of related experience. Background in developing web and mobile based user-friendly products.`,
    education: [
      {
        where: 'Technische Universität Berlin',
        from: 'Oct 2017',
        to: 'Aug 2019',
        location: 'Berlin, Germany',
        position: 'Masters in Computer Science',
        details: `Cloud Computing Enterprise Computing
Web Technology Internet of Service`,
        link: 'https://www.tu-berlin.de/menue/home/'
      },
      {
        where: 'Kumaraguru College of Technology',
        from: 'Aug 2011',
        to: 'Apr 2015',
        location: 'Coimbatore, India',
        position: 'Bachelor in Computer Science and Engineering',
        details: `82%`,
        link: 'https://www.kct.ac.in/'
      }
    ],
    experience: [
      {
        where: 'Zenjob',
        from: 'Sept 2019',
        to: 'Present',
        location: 'Berlin, Germany',
        position: 'Frontend Developer',
        details: `TODO`,
        link: 'https://www.zenjob.de/'
      },
      {
        where: 'Dojomadness',
        from: 'Feb 2019',
        to: 'July 2019',
        location: 'Berlin, Germany',
        position: 'Frontend Developer (Part-time)',
        details: `Working as a part-time student job responsible for front-end development of
game analysis web application specific to the game DOTA 2 using AngularJS.
Responsible for front-end development of Product landing sites along with
payment gateway - Gatsby/React/GraphQL/Webpack/Jest`,
        link: 'https://dojomadness.com/'
      },
      {
        where: 'Free2Move',
        from: 'Oct 2018',
        to: 'Jan 2019',
        location: 'Berlin, Germany',
        position: 'Backend Nodejs Developer (Part-time)',
        details: `As a part-time role, my responsibility includes RESTful API development and
database communication - NodeJS/Express/MongoDB/Kibana.
Implemented and maintained recurring jobs to create, notify and store
customer status change in the system`,
        link: 'https://de.free2move.com/'
      },
      {
        where: 'Soliton Technologies',
        from: 'Dec 2014',
        to: 'Aug 2017',
        location: 'Bangalore, India',
        position: 'Fullstack Developer',
        details: `Started as an Intern for the first 5 months. Deployed as an Onsite engineer at
Texas Instrument for 2 years. Development of web-enabled UI framework for Hardware boards using
HTML5, CSS3, AngularJS, NodeJS and Node-webkit. Worked from a scratch in both server and client side, learning code management, software life cycle and methodologies in a fast-paced
environment.
Implemented Hardware communication add-on using NodeJS.
Worked with JIRA/Jenkins/Sass/D3Js/Protractor`,
        link: 'https://www.solitontech.com/'
      }
    ],
    skills: [
      {
        name: 'Javascript',
        stars: 5
      },
      {
        name: 'HTML5 / CSS3',
        stars: 5
      },
      {
        name: 'Python',
        stars: 4
      },
      {
        name: 'React',
        stars: 5
      },
      {
        name: 'Angular',
        stars: 4
      },
      {
        name: 'NodeJS',
        stars: 4
      },
      {
        name: 'GraphQL',
        stars: 4
      },
      {
        name: 'Typescript',
        stars: 5
      },
      {
        name: 'ExpressJS',
        stars: 3
      },
      {
        name: 'MongoDB',
        stars: 5
      },
      {
        name: 'MySQL',
        stars: 3
      },
      {
        name: 'Jest',
        stars: 5
      },
      {
        name: 'Mocha',
        stars: 3
      },
      {
        name: 'Git',
        stars: 5
      },
      {
        name: 'Webpack',
        stars: 5
      },
      {
        name: 'Netlify / Heroku',
        stars: 5
      },
      {
        name: 'JIRA / Asana',
        stars: 5
      },
      {
        name: 'D3 / ChartJS',
        stars: 3
      }
    ],
    contact: {
      mail: 'sanjiv436.k@gmail.com',
      github: 'https://github.com/sanjivkrish',
      linkedin: 'www.linkedin.com/in/sanjivkrishnasamy'
    }
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/letter-s.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
