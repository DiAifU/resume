import itskills from '../../static/it_skills.svg';

export default [
  {
    title: 'WORK EXPERIENCES',
    icon: 'briefcase',
    content: [
      {
        title: 'Web Engineer Intern - Team Manager',
        subtitle: 'MoneyGoat LLC, New-York | February - September 2018',
        content: [
          '- Developed a social network (Frontend and Backend) using cutting-edge web technologies (NodeJS, ReactJS, Semantic UI and Neo4J)',
          '- Managed a team of two people',
          '- Trained future employees at the end of my internship'
        ],
      },
      {
        title: 'Software Engineer Intern',
        subtitle: 'Fraunhofer IPK, Berlin | July - December 2017',
        content: [
          '- Created a database made of computer activities of engineers',
          '- Processed this database to predict the current activity of engineers using Machine Learning algorithms'
        ],
      },
    ],
  },
  {
    title: 'HACKATONS',
    icon: 'slack',
    content: [
      {
        title: 'Fhacktory Hackaton',
        subtitle: 'Winner of Hackaton | October 2016',
        content: 'We built, during a 36 hours competition, a wireless rolling robot controlled by moving your hand over two different sensors to control its speed and its direction.'
      },
      {
        title: 'Solutec Hackaton',
        subtitle: 'Second place of Hackaton | June 2016',
        content: 'We developed, during a 24 hours competition, a software able to analyze a video stream from a street camera and report the amount and location of available parking places in a mobile application.'
      },
    ]
  },
  {
    title: 'EDUCATION',
    icon: 'book',
    content: [
      {
        title: 'CPE Lyon Engineering School  -  Master degree',
        subtitle: 'Class of 2020 | 3.7 GPA',
        content: [
          'Department: Robotics',
          'Software Development - Embedded Systems - Unix Architecture - Analog and Digital Electronics - Network Architectures - Analytical and Algebraic Mathematics'
        ]
      },
      {
        title: 'Classes Préparatoires CPE Lyon',
        subtitle: 'Class of 2015',
        content: 'Two years of higher education in mathematics and physics, in preparation for entry to engineering school CPE Lyon, at Lycée Les Chartreux'
      },
    ]
  },
  {
    title: 'IT Skills',
    icon: 'computer',
    content:
      {
        image: { src: itskills, floated: 'left', size: 'medium', className: 'it_skills_img' },
        content: [
          'C#, Python, Unix, C, NodeJS, ReactJS, ROS',
          '\0',
          'Java, Objective-C, Matlab, C++, CSS3',
          '\0',
          'PHP, SQL, Assembly',
        ]
      }
  },

];
