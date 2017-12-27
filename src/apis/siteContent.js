export function getServicePage() {
  return {
    classname: 'services-page',
    titleLarge: 'Services',
    titleSmall: 'Service',
    titleLargeClass: 'Service',
    titleSmallClass: 'Service',
    followText: 'Service',
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.',
  };
}

export function getServices() {
  return {
    services: [
      {
        key: 1,
        image: '',
        title: '',
        type: 'develop',
        content: 'HTML, PHP, JS (React), CSS, SCSS',
      },
      {
        key: 2,
        image: '',
        title: '',
        type: 'design',
        content: 'Brand Development',
      },
      {
        key: 3,
        image: '',
        title: '',
        type: 'design',
        content: 'ROI Centered UX Design',
      },
      {
        key: 4,
        image: '',
        title: '',
        type: 'design',
        content: 'Wireframing and Interactive Prototyping',
      },
      {
        key: 5,
        image: '',
        title: '',
        type: 'design develop',
        content: 'Project Managment',
      },
      {
        key: 6,
        image: '',
        title: '',
        type: 'develop',
        content: 'User Testing For Optimization.',
      },
      {
        key: 7,
        image: '',
        title: '',
        type: 'design',
        content: 'High-Level UI Design',
      },
      {
        key: 8,
        image: '',
        title: '',
        type: 'develop',
        content: 'Advanced Ad Tech Knowledge',
      },
      {
        key: 9,
        image: '',
        title: '',
        type: 'design develop',
        content: 'Facebook & Adwords Certified (2016)',
      },
      {
        key: 10,
        image: '',
        title: '',
        type: 'develop',
        content: 'Agile Product Development',
      },
    ],
    content: [
      {
        heading: '',
        text: '',
      },
    ],
  };
}

export function getContact() {
  return [
    {
      type: 'chat',
      titleSmall: 'Start A Conversation',
      titleLarge: 'Contact',
      followText: 'Let\'s Work Together',
      heading: '',
      subHeading: '',
      email: 'cody@withdesign.ca',
      location: 'Kelowna, BC, Canada',
      content: [
        {
          key: 1,
          heading: 'Get In Touch!',
          text: 'Feel free reach out to me to arrange a time to talk and see more of my work.',
        },
      ],
    },
  ];
}

export function getHome() {
  return {
    sections: [
      {
        key: 'about',
        titleLarge: 'About',
        titleSmall: 'Designer, Developer, Entrepreneur',
        followText: 'Adout Cody Reeves',
        classname: 'about',
        aboutText: 'I specialize in designing, developing and testing digital products & ecommerce businesses — from creating ROI centered UX designs, crafting the high-level UI and writing the code to bring the project to life, all while optimizing for the best outcome of the project. Currently I am the Lead designer at Strawhouse, and owner of With Design head office in Kelowna, Canada.',
        aboutQuote: 'I have 5+ years of experience, working on a wide variety of projects from designing CPG products & sales funnels to designing & developing SaaS products.',
      },
      {
        key: 'services',
        titleLarge: 'Skills',
        titleSmall: 'Flexible abilities from desiging brands, to ecommerce page optimization, to product design',
        titleSmallClass: 'bump-up',
        followText: ' Skills I Can Provide',
        classname: 'services',
      },
      {
        key: 'cases',
        titleLarge: 'Cases',
        titleSmall: 'Opportunities I have had to positively impact people on a broad scale.',
        titleSmallClass: 'bump-up',
        followText: 'Project worked on.',
        classname: 'sample-portfolio',
      },
    ],
    samples: [
      {
        key: '1',
        imageUrl: 'tasties/tasties-cover.png',
        imagePlacement: 'left',
        titleLarge: 'Tasties Kitchen',
        titleSmall: 'Branding & Web Dev.',
        strong: 'Tools:',
        span: 'Adobe CC, SCSS, PHP, JS, Wordpress, Woocommerce',
        text: 'THE PROJECT DETAILS: Branding & web development for Tasties Kitchen. Tasties is a food service that creates seasonally inspired meals using locally sourced ingredients and devivers the meal to your door.',
        link: '/cases#tasties',
      },
      {
        key: '2',
        imageUrl: './hmv/cover.png',
        imagePlacement: 'right',
        titleLarge: 'H.M.V. Snow Removal',
        titleSmall: 'Web Design',
        strong: 'Tools:',
        span: 'Adobe CC, CSS, JS, HTML',
        text: 'THE PROJECT DETAILS: Branding & web development for High Mountain Vantures Snow Rmoval.',
        link: '/cases#mountain',
      },
      {
        key: '3',
        imageUrl: 'probiotic/cover-2.png',
        imagePlacement: 'left',
        titleLarge: 'Probiotic MD',
        titleSmall: 'Branding & Web Dev.',
        strong: 'Tools:',
        span: 'Adobe CC, SCSS, PHP, JS',
        text: 'THE PROJECT DETAILS: Branding & web development for Probiotic MD. Work including logo, stationary, labels for the product, and to create a sales funnel.',
        link: '/cases#probiotic',
      },
    ],
    banner: {
      heading: 'Cody Reeves',
      subHeading: 'Digital Design & Development',
    },
    about: {
      text: 'ts you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now',
      quote: 'ts you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use',
    },
  };
}
