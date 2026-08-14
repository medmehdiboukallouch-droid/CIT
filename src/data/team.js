/**
 * Single source of truth for the board / organizational chart.
 *
 * To change a photo: drop the new file into `public/images/team/` and point
 * `photo` at it here (or simply overwrite the existing file, keeping its name).
 */

export const executive = [
  {
    id: 'ben-mesbah-yassine',
    lastName: 'BEN MESBAH',
    firstName: 'Yassine',
    role: "Club's Chairman",
    description: 'Leading the club with vision and strategic planning',
    photo: 'images/team/ben-mesbah-yassine.png',
    rank: 'chairman',
  },
  {
    id: 'faouzi-ilyas',
    lastName: 'FAOUZI',
    firstName: 'Ilyas',
    role: 'Vice Chairman — Internal Affairs',
    description: 'Managing internal coordination, team relations, and member engagement',
    photo: 'images/team/faouzi-ilyas.png',
    rank: 'board',
  },
  {
    id: 'guergari-mohamed',
    lastName: 'GUERGARI',
    firstName: 'Mohamed',
    role: 'Vice Chairman — External Affairs',
    description: 'Managing external partnerships and strategic collaborations',
    photo: 'images/team/guergari-mohamed.png',
    rank: 'board',
  },
  {
    id: 'regragui-walid',
    lastName: 'REGRAGUI',
    firstName: 'Walid',
    role: 'Treasurer',
    description: 'Managing financial operations and budget planning',
    photo: 'images/team/regragui-walid.jpg',
    rank: 'board',
  },
  {
    id: 'boukallouch-mehdi',
    lastName: 'BOUKALLOUCH',
    firstName: 'Mehdi',
    role: 'General Secretary',
    description: 'Administrative operations and documentation',
    photo: 'images/team/boukallouch-mehdi.png',
    rank: 'board',
  },
]

export const cellTeams = [
  {
    cell: 'Sponsorship Cell',
    slug: 'sponsorship',
    accent: 'violet',
    members: [
      {
        id: 'achkaf-achraf',
        lastName: 'ACHKAF',
        firstName: 'Achraf',
        role: 'Sponsorship Cell Chief',
        description: 'Leading sponsorship strategy and building partnerships with companies',
        photo: 'images/team/achkaf-achraf.png',
      },
      {
        id: 'ibnelhabib-imane',
        lastName: 'IBNELHABIB',
        firstName: 'Imane',
        role: 'Co-Chief',
        description: 'Supporting sponsor outreach and managing partner relationships',
        photo: 'images/team/ibnelhabib-imane.jpg',
      },
    ],
  },
  {
    cell: 'External Communication & Relations',
    slug: 'external-relations',
    accent: 'amber',
    members: [
      {
        id: 'el-atouga-ayman',
        lastName: 'EL ATOUGA',
        firstName: 'Ayman',
        role: 'Cell Chief',
        description: 'Managing external communication, partnerships, and professional relations',
        photo: 'images/team/el-atouga-ayman.png',
      },
      {
        id: 'mohib-yahya',
        lastName: 'MOHIB',
        firstName: 'Yahya',
        role: 'Cell Chief',
        description: 'Managing external communication, partnerships, and professional relations',
        photo: 'images/team/mohib-yahya.png',
      },
    ],
  },
  {
    cell: 'Conference Cell',
    slug: 'conference',
    accent: 'cyan',
    members: [
      {
        id: 'mamouh-bilal',
        lastName: 'MAMOUH',
        firstName: 'Bilal',
        role: 'Conference Cell Chief',
        description:
          'Planning, coordinating, and managing conferences and guest speaker sessions',
        photo: 'images/team/mamouh-bilal.jpg',
      },
    ],
  },
  {
    cell: 'Technical Cell',
    slug: 'technical',
    accent: 'amber',
    members: [
      {
        id: 'ait-mellouk-abdelghafour',
        lastName: 'AIT MELLOUK',
        firstName: 'Abdelghafour',
        role: 'Technical Cell Chief',
        description: 'Leading the technical setup and logistics behind the club events',
        photo: 'images/team/ait-mellouk-abdelghafour.png',
      },
      {
        id: 'meziane-zayd',
        lastName: 'MEZIANE',
        firstName: 'Zayd',
        role: 'Co-Chief',
        description: 'Supporting technical operations and equipment management',
        photo: 'images/team/meziane-zayd.jpg',
      },
    ],
  },
  {
    cell: 'Algo Cell',
    slug: 'algo',
    accent: 'cyan',
    members: [
      {
        id: 'bejja-ilyas',
        lastName: 'BEJJA',
        firstName: 'Ilyas',
        role: 'Algorithm Cell Chief',
        description: 'Leading algorithmic training and competitive programming preparation',
        photo: 'images/team/bejja-ilyas.png',
      },
      {
        id: 'el-krouk-youssef',
        lastName: 'EL KROUK',
        firstName: 'Youssef',
        role: 'Co-Chief',
        description: 'Supporting problem-solving sessions and contest coaching',
        photo: 'images/team/el-krouk-youssef.png',
      },
    ],
  },
  {
    cell: 'Security Cell',
    slug: 'security',
    accent: 'danger',
    members: [
      {
        id: 'lidrissi-walid',
        lastName: 'LIDRISSI',
        firstName: 'Walid',
        role: 'Security Cell Chief',
        description: 'Leading cybersecurity training, CTF preparation and security awareness',
        photo: 'images/team/lidrissi-walid.png',
      },
      {
        id: 'el-houssaini-mohamed-taha',
        lastName: 'EL HOUSSAINI',
        firstName: 'Mohamed Taha',
        role: 'Co-Chief',
        description: 'Supporting penetration testing workshops and security challenges',
        photo: 'images/team/el-houssaini-mohamed-taha.png',
      },
    ],
  },
  {
    cell: 'Data Cell',
    slug: 'data',
    accent: 'term',
    members: [
      {
        id: 'sahabi-ahmed-reda',
        lastName: 'SAHABI',
        firstName: 'Ahmed Reda',
        role: 'Data Cell Chief',
        description: 'Leading data science, machine learning and analytics initiatives',
        photo: 'images/team/sahabi-ahmed-reda.jpg',
      },
      {
        id: 'atik-mohammed-haytham',
        lastName: 'ATIK',
        firstName: 'Mohammed Haytham',
        role: 'Co-Chief',
        description: 'Supporting data projects, workshops and visualization training',
        photo: 'images/team/atik-mohammed-haytham.jpg',
      },
    ],
  },
  {
    cell: 'Web Cell',
    slug: 'web',
    accent: 'term',
    members: [
      {
        id: 'amtout-oualid',
        lastName: 'AMTOUT',
        firstName: 'Oualid',
        role: 'Web Cell Chief',
        description: 'Leading web development projects and front-end and back-end training',
        photo: 'images/team/amtout-oualid.png',
      },
    ],
  },
  {
    cell: 'Devops Cell',
    slug: 'devops',
    accent: 'amber',
    members: [
      {
        id: 'tartor-yassine',
        lastName: 'TARTOR',
        firstName: 'Yassine',
        role: 'DevOps Cell Chief',
        description: 'Leading CI/CD, cloud infrastructure and automation initiatives',
        photo: 'images/team/tartor-yassine.jpg',
      },
      {
        id: 'el-gharbaoui-ibrahim',
        lastName: 'EL GHARBAOUI',
        firstName: 'Ibrahim',
        role: 'Co-Chief',
        description: 'Supporting containerization, deployment and monitoring workshops',
        photo: 'images/team/el-gharbaoui-ibrahim.png',
      },
    ],
  },
  {
    cell: 'Media Cell',
    slug: 'media',
    accent: 'violet',
    members: [
      {
        id: 'aoujil-hanane',
        lastName: 'AOUJIL',
        firstName: 'Hanane',
        role: 'Media Cell Chief',
        description: 'Leading media coverage, content creation and social media presence',
        photo: 'images/team/aoujil-hanane.png',
      },
      {
        id: 'el-idrissi-yassine',
        lastName: 'EL IDRISSI',
        firstName: 'Yassine',
        role: 'Co-Chief',
        description: 'Supporting photo, video and communication of club activities',
        photo: 'images/team/el-idrissi-yassine.jpg',
      },
    ],
  },
  {
    cell: 'Design Cell',
    slug: 'design',
    accent: 'violet',
    members: [
      {
        id: 'chafik-jawad',
        lastName: 'CHAFIK',
        firstName: 'Jawad',
        role: 'Design Cell Chief',
        description: 'Leading UI/UX design, branding and visual identity for the club',
        photo: 'images/team/chafik-jawad.png',
      },
    ],
  },
]

export const teamStats = [
  { value: '50+', label: 'Active Members' },
  { value: '20+', label: 'Years Experience' },
  { value: '11', label: 'Specialized Cells' },
  { value: '100+', label: 'Projects Completed' },
]
