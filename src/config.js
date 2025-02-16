module.exports = {
  email: 'sumitpandey@myyahoo.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/5umitpandey',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/5umitpandey',
    },
    // {
    //   name: 'Hackerrank',
    //   url: 'https://www.hackerrank.com/sumi1pandey',
    // },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/5umitpandey/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/5umitpandey',
    },
    // {
    //   name: 'CodeChef',
    //   url: 'https://www.codechef.com/users/tetnf',
    // },
    // {
    //   name: 'GeeksForGeeks',
    //   url: 'https://www.geeksforgeeks.org/user/5umitpandey/',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
