import { TimelineEvent } from './timeline.model';

export const TIMELINE: TimelineEvent[] = [
  {
    date: '2003-08-15',
    title: 'The Beginning',
    subtitle: 'Fes, Morocco',
    description:
      'Born in Fes, Morocco.\n\nIf you want to go further back than that, you\'ll need a biology book or maybe a cosmology timeline.\n\nI\'m the one standing on the tree.',
    tags: [],
    photos: [{ src: 'assets/young-me.jpg', initialSize: 2 }],
    diamond: true
  },
  {
    date: '2019-04-01',
    title: 'MOI 2019 Semi-final',
    subtitle: '1337 Khouribga',
    description:
      'First big contest: the MOI semi-final at 1337 Khouribga. The welcome was great, the round was fun, and I learned a lot.\n\nI qualified for the final by a hair.\n\nThe selfie was taken by our coach, Moncef Mhasni.',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: ['assets/moi-2019-first-camp.jpg', 'assets/moi-2019-first-camp-2.jpg']
  },
  {
    date: '2019-05-02',
    title: 'MOI 2019 Final',
    subtitle: 'Rabat, Ministry of National Education',
    description:
      'Final in Rabat at the ministry. I placed 7th. The gap to the top showed how much I still had to learn. Humbling, and a useful end to the 2019 season.',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: [{ src: 'assets/moi-2019-final.jpg', keepRatio: true, initialSize: 2 }]
  },
  {
    date: '2020-08-22',
    title: 'MOI 2020 Final',
    subtitle: 'Online edition (COVID lockdown)',
    description:
      'Lockdown moved the final online. I was no longer the youngest, so expectations felt different.\n\nI finished 4th after taking 2nd in earlier rounds. Holding a rank is hard; climbing is harder.\n\nCongrats to Mohammed El Khatry on his IOI bronze.',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: [{ src: 'assets/moi-2020-finalists.jpg', keepRatio: true, initialSize: 2 }]
  },
  {
    date: '2021-04-01',
    title: 'AUI Compete 2021',
    subtitle: 'Al Akhawayn University, Ifrane',
    description:
      'AUI Compete gathered finalists from across Morocco. One contestant per team, 3 hours, ICPC-style.\n\nI won the first edition and received a full scholarship. My focus still stayed on the MOI 2021 finals.\n\nNo high-res photos; I didn\'t take many back then.',
    tags: ['Competitive Programming', 'AUI Compete', 'National'],
    photos: [
      { src: 'assets/aui-winner.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/aui-winner-2.jpg', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2021-05-16',
    title: 'MOI 2021 Final',
    subtitle: 'Rabat, MOI Finals',
    description:
      'A wild season with four real contenders. IOI-style, 5 hours. In the last minute a 15-point submission made me MOI 2021 champion.\n\nShout-out to Ayman Riad Solh, Nabil Boudraa, and Aymane Moutei.',
    tags: ['Competitive Programming', 'MOI', 'National'],
    photos: [{ src: 'assets/moi-champion.jpg', keepRatio: true, initialSize: 2 }],
    diamond: true
  },
  {
    date: '2021-06-13',
    title: 'JNJD 2021',
    subtitle: 'INPT, National Journey for Young Developers',
    description:
      'The oldest programming contest in Morocco, hosted at INPT. Five hours, ICPC-style.\n\nWe were two high-school teams in a field of university students and still took first and second. It felt different.\n\nThanks to my teammates Aymane Riad Solh and Ahmed Aboulkacem.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2021.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/jnjd-2021-scoreboard.png', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2021-09-01',
    title: 'CPGE Moulay Driss, MPSI',
    subtitle: 'Fes, Preparatory Program',
    description:
      'Started CPGE Moulay Driss (MPSI). CPGE is Morocco\'s intensive two-year prep for engineering schools. MPSI covers advanced math, physics, and engineering science, leading to MP in year two.\n\nI enrolled after high school (Mathematical Sciences) with a Very Good honor.',
    tags: ['Education', 'CPGE'],
    photos: ['assets/cpge.jpeg']
  },
  {
    date: '2022-05-16',
    title: 'JNJD 2022',
    subtitle: 'INPT, National Journey for Young Developers',
    description:
      'Back to JNJD at INPT as "Zelta" with Ayman Riad Solh and Nabil Boudraa. Four hours, ICPC-style. We won again and did it in record time.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2022-scoreboard.png', keepRatio: true, initialSize: 2 }
    ],
    golden: true
  },
  {
    date: '2022-05-29',
    title: 'CodeIT 2022',
    subtitle: 'EHTP, Hassania School of Public Works',
    description:
      'CodeIT at EHTP. Four hours, mixed teams allowed. "The Ballad of an Almost Retired Team" (me, Ayman Riad Solh, and Nabil Boudraa). Calm pace, clear splits, focused set of problems. Youngest team, first place.',
    tags: ['Competitive Programming', 'CodeIT', 'National'],
    photos: [
      { src: 'assets/codeit-2022.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/codeit-2022-2.png', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2021-06-19',
    title: 'IOI 2021',
    subtitle: 'International University of Rabat (UIR), online (hosted by Singapore)',
    description:
      'Represented Morocco at the IOI. Because it was online, we competed from UIR in Rabat. Across the two days I overcomplicated designs and split time between debugging and re-architecting. A tough lesson: overestimating difficulty can be as damaging as underestimating it.',
    tags: ['Competitive Programming', 'IOI', 'International'],
    photos: [
      { src: 'assets/ioi-2021.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/ioi-2021-2.jpg', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2021-06-26',
    title: 'MOI Scientific Committee, Problemsetter & Mentor',
    subtitle: 'Moroccan Olympiad in Informatics',
    description:
      'Right after IOI 2021 I joined the MOI Scientific Committee. New role, new challenge: design problems, keep statements crisp, pick the right difficulty, and write tests that catch wrong ideas. I also lectured and mentored candidates.',
    tags: ['MOI', 'Mentoring', 'National'],
    photos: ['assets/moi-logo.JPG']
  },
  {
    date: '2022-09-01',
    title: 'CPGE Moulay Driss, MP*',
    subtitle: 'Fes, Advanced Mathematics-Physics',
    description:
      'Second year at CPGE Moulay Driss in the MP* section, the selective "star" track. Faster pace, harder sheets and deeper theory aimed at the top ranks in the entrance exams. One of only three MP* classes in Morocco.',
    tags: ['Education', 'CPGE'],
    photos: ['assets/cpge.jpeg']
  },
  {
    date: '2023-03-04',
    title: 'Codeforces, Candidate Master',
    subtitle: 'Online Competitive Programming',
    description:
      'Reached Candidate Master on Codeforces.\n\nThe platform runs frequent rated rounds and has a large problem archive. This marked my return after a long break.\n\nAccount: medmdg_3 (https://codeforces.com/profile/medmdg_3).',
    tags: ['Competitive Programming', 'Codeforces'],
    photos: [{ src: 'assets/codeforces-cm.JPG', keepRatio: true, initialSize: 2 }],
    golden: true
  },
  {
    date: '2023-05-13',
    title: 'JNJD 2023',
    subtitle: 'INPT, National Journey for Young Developers',
    description:
      'Third straight JNJD win, this time with Ayman Riad Solh and Akram El Omrani. A long-standing rule then kicked in and barred Ayman and me from the next edition.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2023.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/jnjd-2023-scoreboard.jpg', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2023-03-13',
    title: 'MOI 2023 Semi-final Camp (Camp Lead)',
    subtitle: '1337 Khouribga',
    description:
      'I ran the MOI semi-final training camp at 1337 Khouribga on my own due to a last-minute change. Others supported with online lectures.\n\nFive days, contest on the last day. Fifteen students; the youngest was twelve. I handled logistics, lectures and scheduling. Fun, eye-opening, and exhausting.\n\nIn the last photo I\'m getting egged; it later became a tradition.',
    tags: ['MOI', 'Mentoring', 'Organization'],
    photos: [
      { src: 'assets/moi-2023-camp.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-2023-camp-2.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-2023-camp-egg.JPG', keepRatio: true, initialSize: 0 }
    ]
  },
  {
    date: '2023-09-01',
    title: 'Mohammadia School of Engineers (EMI), Computer Engineering (GI)',
    subtitle: 'Rabat, Engineering School',
    description:
      'Joined EMI in Rabat and chose the Computer Engineering option (GI).\n\nAdmission comes through the national CPGE entrance exam, and placement follows rank. The school runs a strict schedule and emphasizes rigor and responsibility.\n\nGI covers computer architecture, networks, compilers, algorithms and data structures, and AI/ML. Expected graduation: around July 15, 2026.',
    tags: ['Education', 'EMI'],
    photos: ['assets/emi-logo.png']
  },
  {
    date: '2023-12-30',
    title: 'Codeforces, Master',
    subtitle: 'Online Competitive Programming',
    description:
      'Reached Master on Codeforces, becoming the third Moroccan to do so (after Nabil Boudraa and Ayman Riad Solh). Years of contests and training culminated in this. A very special day.',
    tags: ['Competitive Programming', 'Codeforces'],
    photos: [{ src: 'assets/codeforces-master.JPG', keepRatio: true, initialSize: 2 }],
    golden: true
  },
  {
    date: '2024-02-11',
    title: 'Game of Code 2024',
    subtitle: 'INSEA Rabat',
    description:
      'We won Game of Code at INSEA Rabat as "The WA is coming" (me, Ayman Riad Solh, and Mehdi Benkhadra). After this, I chose to form teams mostly with classmates. Teaming with the best teaches a lot; competing against them does too.',
    tags: ['Competitive Programming', 'Game of Code', 'National'],
    photos: [
      { src: 'assets/goc-2024.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/goc-2024-scoreboard.webp', keepRatio: false, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2024-03-09',
    title: 'AMPC 2024',
    subtitle: 'ENSAM Meknes',
    description:
      'Won AMPC with my classmates Salma Mahdioui and El Mejbar Otmane. First prize: 10,000 MAD (~$1,100). First win after switching to school-based teams; it felt great.',
    tags: ['Competitive Programming', 'AMPC', 'National'],
    photos: [
      { src: 'assets/ampc-2024.jpg', keepRatio: true, initialSize: 2 }
    ],
    golden: true
  },
  {
    date: '2024-05-18',
    title: 'CodeIT 2024',
    subtitle: 'EHTP, Casablanca',
    description:
      'Won CodeIT at EHTP as "emordnilap" with Assiar Ilyas and Bouziani Safae. Two teams solved the full set; we topped the tie-break. Prize: 10,000 MAD (~$1,100).',
    tags: ['Competitive Programming', 'CodeIT', 'National'],
    photos: [
      { src: 'assets/codeit-2024.jpg', keepRatio: true, initialSize: 2 }
    ],
    golden: true
  },
  {
    date: '2024-07-28',
    title: 'Math & Maroc Competition (MMC) 2024, Silver Medal',
    subtitle: 'National Mathematics Contest',
    description:
      'My first math contest. The mindset felt familiar: precision, problem-solving, and time pressure. I earned silver and placed 19th out of 600+ (200 finalists), which barely qualified me to try for IMC 2025 selection.',
    tags: ['Mathematics', 'Math&Maroc', 'MMC', 'National'],
    photos: [
      { src: 'assets/mmc2024.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/mmc2024-2.heic', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2024-06-14',
    title: 'MOI 2024 Final Camp, Supervision & Selection',
    subtitle: '1337 Khouribga',
    description:
      'Supervised the MOI final camp at 1337 Khouribga: a reception day followed by the contest day.\n\nWe also adopted a rating system I proposed to combine performances and dates into a score for IOI selection. It was great to see both familiar and new faces.\n\nCongratulations to Ayman Riad Solh, Yassir Salama, Mohammed Cherki and Mahdi Benkhadra on making the IOI team!',
    tags: ['MOI', 'Organization'],
    photos: [
      { src: 'assets/moi-2024-camp.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-2024-camp-2.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/moi-2024-camp-results.jpg', keepRatio: true, initialSize: 2 }
    ]
  },
  {
    date: '2024-09-01',
    title: 'IOI 2024, Deputy Leader',
    subtitle: 'Alexandria, Egypt',
    description:
      'Served as deputy leader for Morocco in Alexandria, Egypt. I mentored the team and attended General Assembly meetings. Meeting delegations from everywhere was a highlight.\n\nThat year Morocco led both the Arab and African regions. Ayman earned a bronze medal, and Mahdi received an Honourable Mention.',
    tags: ['IOI', 'International', 'Mentoring'],
    photos: [
      { src: 'assets/ioi-2024.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/ioi-2024-pyramid.jpg', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2024-09-10',
    title: 'MOI, Head of Scientific Committee',
    subtitle: 'Moroccan Olympiad in Informatics',
    description:
      'After IOI 2024 I became head of the MOI Scientific Committee. I plan the season, coordinate contests, manage communication, and oversee problemsetting from authoring to testing and validation.',
    tags: ['MOI', 'Leadership', 'Organization'],
    photos: [{ src: 'assets/moi-logo.JPG', keepRatio: true, initialSize: 0 }],
    golden: true
  },
  {
    date: '2024-09-10',
    title: 'National Recognition, Ministry Visit',
    subtitle: 'Rabat, Ministry of Digital Transition and Administrative Reform',
    description:
      'The Ministry of Digital Transition and Administrative Reform hosted our IOI team and families in Rabat to congratulate us. Minister Ghita Mezzour encouraged us to keep pushing our skills, mentor younger students, and carry Morocco\'s colors.\n\nIt\'s always nice to see the country recognize its talents.',
    tags: ['IOI', 'Leadership', 'National'],
    photos: [
      { src: 'assets/ministry-visit.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/ministry-visit-2.jpeg', keepRatio: true, initialSize: 1 }
    ]
  },
  {
    date: '2024-09-25',
    title: 'IT AcadEMI, Club President',
    subtitle: 'EMI, Rabat, IT Club',
    description:
      'Announced as the new president of IT AcadEMI, following elections held in late May 2024. I\'m grateful for the trust and aware of the responsibility. Thanks to everyone who helped carry it.\n\nNote: the first photo shows the club\'s executive team.',
    tags: ['Leadership', 'IT AcadEMI', 'EMI'],
    photos: [
      { src: 'assets/itacademi-executives.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/itacademi-speech.JPG', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2025-01-30',
    title: 'MOI 2025 Quarter-finals, Camp Lead',
    subtitle: '1337 Rabat',
    description:
      'Ran the MOI quarter-final camp at 1337 Rabat. One week, following a series of online selections; 35 students attended from across Morocco.\n\nLectures on algorithms and data structures plus guided practice. We saw a clear rise in average performance afterward.\n\nSeventeen candidates advanced to the semi-final.',
    tags: ['MOI', 'Mentorship', 'Organization'],
    photos: [
      { src: 'assets/moi-qf-01.png', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-qf-02.png', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-qf-03.png', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-qf-04.png', keepRatio: true, initialSize: 1 }
    ]
  },
  {
    date: '2025-03-16',
    title: 'IT-HOLIC 2025, 1st Place',
    subtitle: 'ENSIAS, Rabat (4th Edition)',
    description:
      'With Othmane EL BOUR and Salma Mahdioui we won IT-HOLIC 2025 at ENSIAS. Prize: 13,000 MAD (~$1,430).\n\nThis one is special: it was my tenth national title. A day I won\'t forget.',
    tags: ['Competitive Programming', 'IT-HOLIC', 'National'],
    photos: [
      { src: 'assets/itholic-2025.jpg', keepRatio: true, initialSize: 2 }
    ],
    diamond: true
  },
  {
    date: '2025-05-06',
    title: 'MOI 2025 Final, Camp Lead',
    subtitle: '1337 Rabat',
    description:
      'Launched the MOI Final camp at 1337 Rabat. Only one student was eliminated at the semi-final, so 16 advanced.\n\nA week focused on advanced data structures and algorithms plus lots of practice. The contest followed the IOI format over two days.\n\nFour students qualified for IOI 2025: Yassir Salama, Cherki Mohammed, Zakaria Abisourour, and Abdelhakim Lamnouar.\n\nThanks to 1337 Rabat for the support.',
    tags: ['MOI', 'Mentorship'],
    photos: [
      { src: 'assets/moi-2025-03.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/moi-2025-02.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/moi-2025-01.jpg', keepRatio: true, initialSize: 1 },
      { src: 'assets/moi-2025-04.jpg', keepRatio: true, initialSize: 1 }
    ]
  },
  {
    date: '2025-04-12',
    title: 'CodEMI, First Edition',
    subtitle: 'ESI Rabat, with Code.ESI',
    description:
      'We launched the first edition of CodEMI, the flagship event of IT AcadEMI, hosted at ESI Rabat and organized with Code.ESI.\n\nICPC-style, mixed teams allowed, 4 hours. Thirty-one teams and about 100 contestants took part, supported by 25+ staff. Plenty of obstacles, and a happy finish.',
    tags: ['Organization', 'IT AcadEMI', 'CodEMI', 'Competitive Programming'],
    media: [
      { src: 'assets/codemi.mp4', keepRatio: true, initialSize: 1, isVideo: true },
      { src: 'assets/codemi-02.jpeg', keepRatio: true, initialSize: 1 }
    ],
    golden: true
  },
  {
    date: '2025-04-13',
    title: 'IMC 2025, Morocco Team Selection (1st Place)',
    subtitle: 'Online, Math&Maroc',
    description:
      'After prep rounds and two selection exams I placed first in the Morocco selection and earned a spot at IMC 2025. I didn\'t expect it; I\'ve always treated competitive programming as my main field, but this suggested mathematics might be one too.\n\nHuge thanks to Math&Maroc for making this possible.',
    tags: ['Mathematics', 'Math&Maroc', 'IMC', 'National'],
    photos: [
      { src: 'assets/imc2025-select.jpg', keepRatio: true, initialSize: 2 },
      { src: 'assets/imc-select.jpg', keepRatio: true, initialSize: 2 }
    ],
    golden: true
  },
  {
    date: '2025-07-24',
    title: 'Math & Maroc Competition (MMC) 2025, Gold Medal',
    subtitle: 'National Mathematics Contest',
    description:
      'Second time at MMC; this time I earned gold. I know I could have done better, but I\'m happy with the result.\n\nI couldn\'t wait for the official photos because the contest overlapped with IMC prep.',
    tags: ['Mathematics', 'Math&Maroc', 'MMC', 'National'],
    photos: [
      { src: 'assets/mmc-2025-group.jpg', keepRatio: true, initialSize: 2 },
      { src: 'assets/mmc-2025-scoreboard.jpg', keepRatio: true, initialSize: 2 }
    ],
    golden: true
  },
  {
    date: '2025-07-28',
    title: 'IMC 2025, Silver Medal',
    subtitle: 'Sofia, Bulgaria',
    description:
      'A year earlier I would have laughed if you told me I\'d compete at IMC. In Sofia it became real.\n\nI earned a silver medal, and the whole Moroccan delegation did as well. Big thanks to our coach Issam for defending our papers.',
    tags: ['Mathematics', 'Math&Maroc', 'IMC', 'International'],
    photos: [
      { src: 'assets/imc-2025-medal.jpg', keepRatio: false, initialSize: 1 },
      { src: 'assets/imc-2025-team.jpg', keepRatio: true, initialSize: 1 }
    ],
    diamond: true
  },
  {
    date: '2025-09-19',
    title: 'MCPC 2025, Upcoming',
    subtitle: 'UM6P, Rabat',
    description:
      'Between 19 and 21 September 2025 I plan to compete in the Moroccan Collegiate Programming Contest (MCPC) at UM6P in Rabat.\n\nMorocco hasn\'t sent a team to ICPC since 2021 due to regional issues. This is my final year of eligibility and my one shot to qualify.\n\nStay tuned.',
    tags: ['Competitive Programming', 'MCPC', 'ICPC', 'Upcoming'],
    photos: [{ src: 'assets/mcpc-2025.jpeg', keepRatio: true, initialSize: 1 }]
  }
];
