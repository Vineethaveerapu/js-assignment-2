const services = [
  {
    id: 'wedding',
    title: 'Wedding Planning',
    image: '/images/wedding.jpg',
    description:
      'Make your special day perfect with our comprehensive wedding planning services. From venue selection to the last dance, we handle every detail.',
    features: [
      'Venue Selection',
      'Catering Coordination',
      'Decor & Theme Design',
      'Timeline Management',
    ],
    slug: 'wedding-planning',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    image: '/images/corporate.jpg',
    description:
      'Professional event planning for conferences, seminars, team building, corporate celebrations and product launches.',
    features: [
      'Conference Planning',
      'Team Building Events',
      'Award Ceremonies',
      'Product Launches',
    ],
    slug: 'corporate-events',
  },
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    image: '/images/birthday.jpg',
    description:
      'Create memorable birthday celebrations for all ages with our creative and fun party planning services.',
    features: [
      'Theme Development',
      'Entertainment Booking',
      'Cake & Catering',
      'Decoration Setup',
    ],
    slug: 'birthday-celebrations',
  },
];

const aboutSubPages = [
  {
    id: 'personal',
    title: 'Personal Events',
    slug: 'personal-events',
    description:
      'We are a team of event planners who are dedicated to making your special occasions memorable.',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    slug: 'corporate-events',
    description:
      'We are a team of event planners who are dedicated to making your special occasions memorable.',
  },
];

const pageData = {
  services: {
    title: 'Our Services',
    tagline: 'Comprehensive Event Planning Solutions',
    description:
      'Discover our range of professional event planning services designed to make your special occasions memorable.',
  },
  about: {
    title: 'About Us',
    description: `With over a decade of experience in event planning, we've built our
          reputation on turning dreams into reality. Our passionate team of
          event planners brings creativity, precision, and dedication to every
          event we organize.`,
  },
};

export { services, aboutSubPages, pageData };
