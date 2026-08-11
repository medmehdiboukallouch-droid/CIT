/**
 * Single source of truth for the board / organizational chart.
 *
 * To change a photo: drop the new file into `public/images/team/` and point
 * `photo` at it here (or simply overwrite the existing file, keeping its name).
 */

export const executive = [
  {
    id: 'aamoum-ilyass',
    lastName: 'AAMOUM',
    firstName: 'Ilyass',
    role: "Club's Chairman",
    description: 'Leading the club with vision and strategic planning',
    photo: 'images/team/Ilyass.png',
    rank: 'chairman',
  },
  {
    id: 'sihami-imane',
    lastName: 'SIHAMI',
    firstName: 'Imane',
    role: 'Vice Chairman',
    description: 'Supporting leadership and member coordination',
    photo: 'images/team/Imane.png',
    rank: 'board',
  },
  {
    id: 'id-aissa-farid',
    lastName: 'ID AISSA',
    firstName: 'Farid',
    role: 'Treasurer',
    description: 'Managing financial operations and budget planning',
    photo: 'images/team/Farid.png',
    rank: 'board',
  },
  {
    id: 'lachguer-mouad',
    lastName: 'LACHGUER',
    firstName: 'Mouad',
    role: 'General Secretary',
    description: 'Administrative operations and documentation',
    photo: 'images/team/Mouad.png',
    rank: 'board',
  },
]

export const cellTeams = [
  {
    cell: 'Events Cell',
    slug: 'events',
    accent: 'amber',
    members: [
      {
        id: 'idlafqih-anas',
        lastName: 'IDLAFQIH',
        firstName: 'Anas',
        role: 'Events Cell Chief',
        photo: 'images/team/Anas.png',
      },
      {
        id: 'haroual-hafsa',
        lastName: 'HAROUAL',
        firstName: 'Hafsa',
        role: 'Co-chief',
        photo: 'images/team/Hafsa.png',
      },
      {
        id: 'faraj-diaeeddine',
        lastName: 'FARAJ',
        firstName: 'Diaeeddine',
        role: 'Co-chief',
        photo: 'images/team/Diaeeddine.png',
      },
    ],
  },
  {
    cell: 'Sponsorship Cell',
    slug: 'sponsorship',
    accent: 'violet',
    members: [
      {
        id: 'iblihi-maryam',
        lastName: 'IBLIHI',
        firstName: 'Maryam',
        role: 'Sponsorship Cell Chief',
        photo: 'images/team/Maryam.png',
      },
      {
        id: 'ghayati-douae',
        lastName: 'GHAYATI',
        firstName: 'Douae',
        role: 'Co-chief',
        photo: 'images/team/Douae.png',
      },
      {
        id: 'ait-jdid-nissrine',
        lastName: 'AIT JDID',
        firstName: 'Nissrine',
        role: 'Co-chief',
        photo: 'images/team/Nissrine.png',
      },
    ],
  },
  {
    cell: 'Technical Cell',
    slug: 'technical',
    accent: 'cyan',
    members: [
      {
        id: 'nait-khouya-najib',
        lastName: 'NAIT KHOUYA',
        firstName: 'Mohamed Najib',
        role: 'Technical Cell Chief',
        photo: 'images/team/Najib.png',
      },
      {
        id: 'chakrone-anas',
        lastName: 'CHAKRONE',
        firstName: 'Anas',
        role: 'Co-chief',
        photo: 'images/team/Chakrone.png',
      },
    ],
  },
  {
    cell: 'Media Cell',
    slug: 'media',
    accent: 'violet',
    members: [
      {
        id: 'bara-mouad',
        lastName: 'BARA',
        firstName: 'Mouad',
        role: 'Media Cell Chief',
        photo: 'images/team/Bara.png',
      },
      {
        id: 'elhaimar-morad',
        lastName: 'ELHAIMAR',
        firstName: 'Morad',
        role: 'Co-chief',
        photo: 'images/team/Morad.png',
      },
    ],
  },
  {
    cell: 'Web Cell',
    slug: 'web',
    accent: 'term',
    members: [
      {
        id: 'lamsaaf-yassine',
        lastName: 'LAMSAAF',
        firstName: 'Yassine',
        role: 'Web Cell Chief',
        photo: 'images/team/Yassine.png',
      },
      {
        id: 'raguig-amine',
        lastName: 'RAGUIG',
        firstName: 'Mohammed Amine',
        role: 'Co-Chief',
        photo: 'images/team/Amine.png',
      },
    ],
  },
  {
    cell: 'Algo Cell',
    slug: 'algo',
    accent: 'cyan',
    members: [
      {
        id: 'serji-asmae',
        lastName: 'SERJI',
        firstName: 'Asmae',
        role: 'Algorithm Cell Chief',
        photo: 'images/team/Asmae.png',
      },
      {
        id: 'fajoui-anass',
        lastName: 'FAJOUI',
        firstName: 'Anass',
        role: 'Co-Chief',
        photo: 'images/team/Fajoui.png',
      },
    ],
  },
  {
    cell: 'Security Cell',
    slug: 'security',
    accent: 'danger',
    members: [
      {
        id: 'akallal-issam',
        lastName: 'AKALLAL',
        firstName: 'Mohamed Issam',
        role: 'Security Cell Chief',
        photo: 'images/team/Issam.png',
      },
      {
        id: 'anaddam-mohamed',
        lastName: 'ANADDAM',
        firstName: 'Mohamed',
        role: 'Co-Chief',
        photo: 'images/team/Anaddam.png',
      },
    ],
  },
  {
    cell: 'Data Cell',
    slug: 'data',
    accent: 'term',
    members: [
      {
        id: 'ait-abdelouahab-mehdi',
        lastName: 'AIT ABDELOUAHAB',
        firstName: 'Mehdi',
        role: 'Data Cell Chief',
        photo: 'images/team/Mehdi.png',
      },
      {
        id: 'chahiri-abderrahmane',
        lastName: 'CHAHIRI',
        firstName: 'Abderrahmane',
        role: 'Co-Chief',
        photo: 'images/team/Abderrahmane.png',
      },
    ],
  },
  {
    cell: 'Devops Cell',
    slug: 'devops',
    accent: 'amber',
    members: [
      {
        id: 'el-mouden-abdelghafor',
        lastName: 'EL MOUDEN',
        firstName: 'Abdelghafor',
        role: 'DevOps Cell Chief',
        photo: 'images/team/Abdelghafor.png',
      },
      {
        id: 'ahorrar-omar',
        lastName: 'AHORRAR',
        firstName: 'Omar',
        role: 'Co-Chief',
        photo: 'images/team/Omar.png',
      },
    ],
  },
  {
    cell: 'Design Cell',
    slug: 'design',
    accent: 'violet',
    members: [
      {
        id: 'zizah-taha',
        lastName: 'ZIZAH',
        firstName: 'Taha',
        role: 'Design Cell Chief',
        photo: 'images/team/Taha.png',
      },
    ],
  },
]

export const teamStats = [
  { value: '50+', label: 'Active Members' },
  { value: '20+', label: 'Years Experience' },
  { value: '10', label: 'Specialized Cells' },
  { value: '100+', label: 'Projects Completed' },
]
