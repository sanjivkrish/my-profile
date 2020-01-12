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
        details: 'hello',
        link: 'https://www.tu-berlin.de/menue/home/'
      },
      {
        where: 'Kumaraguru College of Technology',
        from: 'Aug 2011',
        to: 'Apr 2015',
        location: 'Coimbatore, India',
        position: 'Bachelor in Computer Science and Engineering',
        details: 'hello',
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
        details: 'hello',
        link: 'https://www.zenjob.de/'
      },
      {
        where: 'Dojomadness',
        from: 'Feb 2019',
        to: 'July 2019',
        location: 'Berlin, Germany',
        position: 'Frontend Developer (Part-time)',
        details: 'hello',
        link: 'https://dojomadness.com/'
      },
      {
        where: 'Free2Move',
        from: 'Oct 2018',
        to: 'Jan 2019',
        location: 'Berlin, Germany',
        position: 'Backend Nodejs Developer (Part-time)',
        details: 'hello',
        link: 'https://de.free2move.com/'
      },
      {
        where: 'Soliton Technologies',
        from: 'Dec 2014',
        to: 'Aug 2017',
        location: 'Bangalore, India',
        position: 'Fullstack Developer',
        details: 'hello',
        link: 'https://www.solitontech.com/'
      }
    ]
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
