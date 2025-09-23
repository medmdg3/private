import { TimelineEvent } from './timeline.model';

export const TIMELINE: TimelineEvent[] = [
  {
    date: '2003-08-15',
    title: 'The Beginning',
    subtitle: 'Fes, Morocco',
    description:
      'On August 15, 2003, I made my grand entrance into this world in Fes, Morocco. \n\nIf you want to go further back in time, you\'ll need to consult some history books... or maybe trace things back to the Big Bang. Your call, but I\'m pretty sure the dinosaurs weren\'t doing competitive programming, unless...\n\nP.S. Yes, that\'s me standing on the tree like some kind of tiny autistic philosopher.',
    shortDescription: 'Born in Fes, Morocco. Probably already planning my first algorithm while in the womb. \n\nIf you want to go further back, you\'ll need a history book or cosmology degree. I\'m the tiny human on the tree.',
    tags: [],
    photos: [{ src: 'assets/young-me.jpg' , keepRatio:true}],
    diamond: true
  },
  {
    date: '2019-04-01',
    title: 'MOI 2019 Semi-final',
    subtitle: '1337 Khouribga',
    description:
      'April 2019: My first rodeo at the MOI semi-final in 1337 Khouribga! \n\nPicture this: a 15-year-old me, probably looking like I\'d never seen a computer before, walking into Morocco\'s biggest programming contest. The hospitality was incredible! They basically rolled out the red carpet for us nerds.\n\nI somehow managed to qualify for the final by the skin of my teeth. I mean, I was probably the last person to make it through, but hey, a win is a win! (My future self would be proud of this "barely scraping by" strategy, it becomes a recurring theme 😅)\n\nP.S. That selfie? Taken by our legendary coach Moncef Mhasni, who probably had more faith in me than I had in myself.',
    shortDescription: 'First big contest at 1337 Khouribga! Felt like a fish out of water but somehow qualified by a hair. \n\nCoach Moncef took that selfie - he had more faith in me than I did!',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: ['assets/moi-2019-first-camp.jpg', 'assets/moi-2019-first-camp-2.jpg']
  },
  {
    date: '2019-05-02',
    title: 'MOI 2019 Final',
    subtitle: 'Rabat – Ministry of National Education',
    description:
      'May 2019: The MOI final in Rabat - my first taste of the big leagues! \n\nSo there I was, at the Ministry of National Education (fancy, right?), probably the youngest person in the room and definitely the most nervous. The competition was brutal!! These guys were solving problems I didn\'t even know existed.\n\nI finished 7th, which sounds decent until you realize there were only like 20 people competing... But hey, the gap between me and the top dogs was so wide you could fit my intelligence in it (sorry, I had to). This was my "welcome to reality" moment, humbling, yes, but also the fuel that would drive me for years to come.\n\nOfficially concluded my 2019 season with a healthy dose of humility and a burning desire to get better!',
    shortDescription: 'MOI final in Rabat - finished 7th and got a reality check. The gap to the top was wider than the Atlantic! \n\nHumbling but motivating - exactly what I needed to fuel my competitive fire.',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: [{ src: 'assets/moi-2019-final.jpg', keepRatio: true }]
  },
  {
    date: '2020-08-22',
    title: 'MOI 2020 Final',
    subtitle: 'Online Edition – COVID Lockdown',
    description:
      'The 2020 season was quite different for many reasons. First, the lockdown moved the MOI final online. I was also no longer the youngest competitor, which meant more responsibility on my shoulders.\n\nDespite securing second place in all the earlier rounds, I slipped to fourth in the final. This experience showed me how, in competitive environments, simply defending your rank is already difficult, and progressing is even harder.\n\nCongratulations to Mohammed El Khatry for winning a bronze medal at the IOI that year—a proud moment for our community.',
    shortDescription: 'Lockdown moved the final online. I was no longer the youngest, so expectations felt different.\n\nI finished 4th after taking 2nd in earlier rounds. Holding a rank is hard; climbing is harder.\n\nCongrats to Mohammed El Khatry on his IOI bronze.',
    tags: ['MOI', 'Competitive Programming', 'National'],
    photos: [{ src: 'assets/moi-2020-finalists.jpg', keepRatio: true }]
  },
  {
    date: '2021-04-01',
    title: 'AUI Compete 2021',
    subtitle: 'Al Akhawayn University – Ifrane',
    description:
      'In April 2021, I participated in AUI Compete, a national competition organized by Al Akhawayn University in Ifrane for final-year high school students who excel in various categories. Competitive programming was one of them, attracting candidates from all across Morocco. After an online selection process, about 100 finalists qualified for the onsite final.\n\nThe contest was ICPC-style: a 3-hour competition with one contestant per team. For the first time, I managed to truly shine on the stage, becoming the very first winner of this competition and earning a 100% scholarship.\n\nDespite this victory, my focus remained firmly on my main goal—the Moroccan Olympiad in Informatics (MOI 2021) finals.\n\nP.S. I did not find any high quality photos, taking photos was not my thing.',
    shortDescription: 'AUI Compete gathered finalists from across Morocco. One contestant per team, 3 hours, ICPC-style.\n\nI won the first edition and received a full scholarship. My focus still stayed on the MOI 2021 finals.\n\nNo high-res photos; I didn\'t take many back then.',
    tags: ['Competitive Programming', 'AUI Compete', 'National'],
    photos: [
      { src: 'assets/aui-winner.jpg', keepRatio: true },
      { src: 'assets/aui-winner-2.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2021-05-16',
    title: 'MOI 2021 Final',
    subtitle: 'Rabat – MOI Finals',
    description:
      '2021: The year I became MOI champion and probably gave my parents a heart attack! 🏆\n\nThis season was absolutely WILD. Instead of one clear favorite, we had four absolute beasts going head-to-head. Picture a 5-hour IOI-style contest where every point mattered and the tension was thicker than my morning coffee.\n\nAnd then it happened..the most dramatic moment of my life. In the literal last minute, I submitted a solution worth 15 points. My heart was probably beating faster than a hummingbird\'s wings. When the results came out and I saw "1st place" next to my name, I think I blacked out for a solid 30 seconds.\n\nShout-out to the legends who made this victory meaningful: Ayman Riad Solh, Nabil Boudraa, and Aymane Moutei. You guys are the reason this win felt so special!',
    shortDescription: '2021: Became MOI champion in the most dramatic way possible - 15-point clutch in the last minute! \n\nFour-way battle royale that ended with me probably having a minor heart attack. Worth it!',
    tags: ['Competitive Programming', 'MOI', 'National'],
    photos: [{ src: 'assets/moi-champion.jpg', keepRatio: true }],
    diamond: true
  },
  {
    date: '2021-06-13',
    title: 'JNJD 2021',
    subtitle: 'INPT – National Journey for Young Developers',
    description:
      'A few weeks after MOI 2021, I took on the National Journey for Young Developers (JNJD), the oldest competitive programming contest in Morocco. Held at the National Institute of Posts and Telecommunications (INPT), it is open to students from primary school through university. The format was a 5-hour ICPC-style contest.\n\nThis victory felt different—I was competing directly against university students. Only two high school teams participated, yet we took first and second place, hinting at how intense that MOI was.\n\nHuge thanks to my teammates Aymane Riad Solh and Ahmed Aboulkacem!',
    shortDescription: 'The oldest programming contest in Morocco, hosted at INPT. Five hours, ICPC-style.\n\nWe were two high-school teams in a field of university students and still took first and second. It felt different.\n\nThanks to my teammates Aymane Riad Solh and Ahmed Aboulkacem.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2021.jpg', keepRatio: false },
      { src: 'assets/jnjd-2021-scoreboard.png', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2021-09-01',
    title: 'CPGE Moulay Driss – MPSI',
    subtitle: 'Fes – Preparatory Program',
    description:
      'On September 1, 2021, I joined CPGE Moulay Driss in Fes, enrolling in the MPSI track.\n\nCPGE is Morocco\'s two-year, intensive preparatory program for engineering school entrance exams—the main pathway into the country\'s top engineering schools.\n\nMPSI stands for Mathematics, Physics, and Engineering Science. It is the first-year track focused on advanced mathematics, theoretical physics, and introductory engineering science, and it leads specifically to the MP stream in the second year.\n\nI took this step after finishing high school (Mathematical Sciences track) with the Very Good honor.',
    shortDescription: 'Started CPGE Moulay Driss (MPSI). CPGE is Morocco\'s intensive two-year prep for engineering schools. MPSI covers advanced math, physics, and engineering science, leading to MP in year two.\n\nI enrolled after high school (Mathematical Sciences) with a Very Good honor.',
    tags: ['Education', 'CPGE'],
    photos: ['assets/cpge.jpeg']
  },
  {
    date: '2021-06-19',
    title: 'IOI 2021',
    subtitle: 'International University of Rabat (UIR) – Online, hosted by Singapore',
    description:
      'In June 2021, I represented Morocco at the International Olympiad in Informatics. Because the event was online (hosted by Singapore), we competed from the International University of Rabat (UIR). Across the two contest days, I struggled—torn between debugging and trying to architect solutions that were too complex. I wish I had not wasted the opportunity, but it taught me a key lesson: overestimating difficulty can be just as harmful as underestimating it.',
    shortDescription: 'Represented Morocco at IOI 2021 (online at UIR).',
    tags: ['Competitive Programming', 'IOI', 'International'],
    photos: [{ src: 'assets/ioi-2021.jpg', keepRatio: true },{ src: 'assets/ioi-2021-2.jpg', keepRatio: true }],
    golden: true
  },
  {
    date: '2021-06-26',
    title: 'MOI Scientific Committee – Problemsetter & Mentor',
    subtitle: 'Moroccan Olympiad in Informatics',
    description:
      'A day after IOI 2021 concluded, I joined the Scientific Committee of the Moroccan Olympiad in Informatics (MOI). This shift let me discover what happens behind the scenes and solve a different kind of challenge: instead of tackling well-defined problems, I now had to create them—making sure they were clear, just hard enough, and backed by tests that anticipate and catch wrong approaches. I also lectured candidates and helped them prepare and get better.',
    shortDescription: 'Joined MOI Scientific Committee; problemsetting and mentoring.',
    tags: ['MOI' , 'Mentoring', 'National'],
    photos: ['assets/moi-logo.JPG']
  },
  {
    date: '2022-05-16',
    title: 'JNJD 2022',
    subtitle: 'INPT – National Journey for Young Developers',
    description:
      'On May 16, 2022, we returned to JNJD at INPT—this time under the team name "Zelta." Teaming up with Ayman Riad Solh and Nabil Boudraa, we won the contest again—and did it in record time. The format was a 4-hour, ICPC-style competition, and our coordination and pace had clearly leveled up since 2021.',
    shortDescription: 'Back to JNJD at INPT as "Zelta" with Ayman Riad Solh and Nabil Boudraa. Four hours, ICPC-style. We won again and did it in record time.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2022-scoreboard.png', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2022-05-29',
    title: 'CodeIT 2022',
    subtitle: 'EHTP – Hassania School of Public Works',
    description:
      'On May 29, 2022, we competed in CodeIT at EHTP—a 4-hour, ICPC-style contest that allows mixed teams. Under the name "The Ballad of an Almost Retired Team" (me, Ayman Riad Solh, and Nabil Boudraa), we kept a calm pace, divided tasks cleanly, and worked through a focused set of algorithmic problems. We were the youngest team in the competition, yet we finished first—another timely boost to our momentum.',
    shortDescription: 'CodeIT at EHTP. Four hours, mixed teams allowed. "The Ballad of an Almost Retired Team" (me, Ayman Riad Solh, and Nabil Boudraa). Calm pace, clear splits, focused set of problems. Youngest team, first place.',
    tags: ['Competitive Programming', 'CodeIT', 'National'],
    photos: [
      { src: 'assets/codeit-2022.jpg', keepRatio: true },
      { src: 'assets/codeit-2022-2.png', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2022-09-01',
    title: 'CPGE Moulay Driss – MP*',
    subtitle: 'Fes – Advanced Mathematics–Physics',
    description:
      'On September 1, 2022, I entered my second year of the national preparatory program at CPGE Moulay Driss, joining the MP* section.\n\nMP* is the advanced track in Mathematics and Physics—the selective "star" section for top students. It runs at a faster pace with harder problem sets and deeper theory, aimed at the highest ranks in the engineering-school entrance exams. It is one of only three MP* classes in Morocco.',
    shortDescription: 'Second year at CPGE Moulay Driss in the MP* section, the selective "star" track. Faster pace, harder sheets and deeper theory aimed at the top ranks in the entrance exams. One of only three MP* classes in Morocco.',
    tags: ['Education', 'CPGE'],
    photos: ['assets/cpge.jpeg']
  },
  {
    date: '2023-03-04',
    title: 'Codeforces – Candidate Master',
    subtitle: 'Online Competitive Programming',
    description:'On March 4, 2023, I reached the Candidate Master rank on Codeforces.\n\nCodeforces is a global competitive programming platform that hosts frequent rated contests, offers a large problem archive, and maintains a public rating system. It is widely considered one of the strongest references in competitive programming, with millions of registered users and tens of thousands of participants in most rated rounds.\n\nThis comeback marked my return to the scene after being away from the community for a long time.\n\nP.S. My account is medmdg_3 (https://codeforces.com/profile/medmdg_3).',
    shortDescription: 'Reached Candidate Master on Codeforces. Frequent rated rounds, massive archive, and a tough rating system. This was my comeback after a long break.\n\nAccount: medmdg_3.',
    tags: ['Competitive Programming', 'Codeforces'],
    photos: [{ src: 'assets/codeforces-cm.JPG', keepRatio: true }],
    golden: true
  },
  {
    date: '2023-05-13',
    title: 'JNJD 2023',
    subtitle: 'INPT – National Journey for Young Developers',
    description:
      'On May 13, 2023, we won JNJD for the third time—this time with my teammates Ayman Riad Solh and Akram El Omrani. It was our third consecutive title, and for the first time since the competition was founded in 2006, a rule was triggered that prevented me and Ayman from participating in the next edition.',
    shortDescription: 'Third straight JNJD win, this time with Ayman Riad Solh and Akram El Omrani. A long-standing rule then kicked in and barred Ayman and me from the next edition.',
    tags: ['Competitive Programming', 'JNJD', 'National'],
    photos: [
      { src: 'assets/jnjd-2023.jpg', keepRatio: true },
      { src: 'assets/jnjd-2023-scoreboard.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2023-03-13',
    title: 'MOI 2023 Semi-final Camp — Camp Lead',
    subtitle: '1337 Khouribga',
    description:
      'On March 13, 2023, I was tasked with managing the MOI semi-final training camp at 1337 Khouribga by myself. The colleague assigned to share the role had a family emergency, so I was the only onsite staff, while others supported with online lectures.\n\nOver five days (with the contest on the last day), I looked after 15 contestants—the youngest was 12, and most were about two years younger than me (I was 19). I handled logistics, led training and lectures, and kept everything on schedule. The experience was fun and eye-opening, and yes—exhausting xD.\n\nP.S. In the last photo I am getting egged; it later became a tradition.',
    shortDescription: 'I ran the MOI semi-final camp at 1337 Khouribga solo. Five days, 15 students, lectures and logistics. Fun, eye-opening—and exhausting.\n\nYes, that\'s me getting egged in the last photo.',
    tags: ['MOI', 'Mentoring', 'Organization'],
    photos: [
      { src: 'assets/moi-2023-camp.jpg', keepRatio: true },
      { src: 'assets/moi-2023-camp-2.jpg', keepRatio: true },
      { src: 'assets/moi-2023-camp-egg.JPG', keepRatio: true }
    ]
  },
  {
    date: '2023-09-01',
    title: 'Mohammadia School of Engineers (EMI) — Computer Engineering (GI)',
    subtitle: 'Rabat – Engineering School',
    description:
      'On September 1, 2023, I joined the Mohammadia School of Engineers (EMI) in Rabat and chose the Computer Engineering option (GI).\n\nEMI is widely regarded as the most prestigious engineering school in Morocco. Admission is through the common national CPGE entrance exam, and placements are based on national rank. The school also follows a military-style discipline and schedule that emphasize rigor and responsibility.\n\nIn GI, we study a broad foundation across computer science and engineering: computer architecture, computer networks, compilers, algorithms & data structures, and AI/ML, etc.\n\nGraduation is expected around July 15, 2026.',
    shortDescription: 'Joined EMI (GI) in Rabat through the national CPGE entrance exam. Strong discipline and a broad CS/engineering curriculum: architecture, networks, compilers, algorithms & data structures, AI/ML. Expected graduation: around July 15, 2026.',
    tags: ['Education', 'EMI'],
    photos: ['assets/emi-logo.png']
  },
  {
    date: '2023-12-30',
    title: 'Codeforces — Master',
    subtitle: 'Online Competitive Programming',
    description:
      'On December 30, 2023, I reached the Master rank on Codeforces, becoming the third Moroccan to do so—after Nabil Boudraa and Ayman Riad Solh.\n\nThis achievement meant a lot to me. The joy and pride were on another level, capping years of contests, training, and steady progress.',
    shortDescription: 'Reached Master on Codeforces—third Moroccan after Nabil Boudraa and Ayman Riad Solh. Years of contests and steady training led to a day I won\'t forget.',
    tags: ['Competitive Programming', 'Codeforces'],
    photos: [{ src: 'assets/codeforces-master.JPG', keepRatio: true }],
    golden: true
  },
  {
    date: '2024-02-11',
    title: 'Game of Code 2024',
    subtitle: 'INSEA Rabat',
    description:
      'On February 11, 2024, at INSEA Rabat, we won Game of Code as "The WA is coming" (me, Ayman Riad Solh, and Mehdi Benkhadra).\n\nAfter this event, I decided to form teams primarily with classmates from my school. Sharing a team with the best helps me learn a lot—but competing against them is just as important for growth.',
    shortDescription: 'We won Game of Code at INSEA Rabat as "The WA is coming" (with Ayman Riad Solh and Mehdi Benkhadra). After this, I mostly teamed up with classmates—learning with them and competing against them both help.',
    tags: ['Competitive Programming', 'Game of Code', 'National'],
    photos: [
      { src: 'assets/goc-2024.jpg', keepRatio: false },
      { src: 'assets/goc-2024-scoreboard.webp', keepRatio: false }
    ],
    golden: true
  },
  {
    date: '2024-03-09',
    title: 'AMPC 2024',
    subtitle: 'ENSAM Meknes',
    description:
      'On March 9, 2024, we won AMPC at ENSAM Meknes—teaming up with my classmates Salma Mahdioui and El Mejbar Otmane.\n\nThe feeling was indescribable: it was my first win after deciding to compete with classmates from my own school. The first prize was 10,000 MAD (~$1,100), and it left me more than ready for the next challenge.',
    shortDescription: 'Won AMPC with my classmates Salma Mahdioui (Such an amazing person! and no she did not write this I did!)and El Mejbar Otmane. First prize: 10,000 MAD (~$1,100). First win after switching to school-based teams; it felt great.',
    tags: ['Competitive Programming', 'AMPC', 'National'],
    photos: [
      { src: 'assets/ampc-2024.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2024-05-18',
    title: 'CodeIT 2024',
    subtitle: 'EHTP – Casablanca',
    description:
      'On May 18, 2024, we won CodeIT at EHTP (Casablanca) as "emordnilap", a team with Assiar Ilyas and Bouziani Safae.\n\nThe contest was intense—two teams fully solved the problem set, and we finished on top. The first prize matched our previous win: 10,000 MAD (~$1,100).',
    shortDescription: 'Won CodeIT at EHTP as "emordnilap" with Assiar Ilyas and Bouziani Safae. Two teams solved everything; we topped the tie-break. Prize: 10,000 MAD (~$1,100).',
    tags: ['Competitive Programming', 'CodeIT', 'National'],
    photos: [
      { src: 'assets/codeit-2024.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2024-07-28',
    title: 'Math & Maroc Competition (MMC) 2024 — Silver Medal',
    subtitle: 'National Mathematics Contest',
    description:
      'Because of some complications, I never had the chance to compete in high-school math olympiads. In 2024, a new door opened: the Math & Maroc Competition (MMC). It was my first experience with math contests, and I quickly realized how similar they are to competitive programming—same problem-solving mindset, precision, and time pressure.\n\nI earned a silver medal and placed 19th out of 600+ contestants (200 finalists), which barely qualified me to vie for a spot at IMC 2025 (the top 23 advance).',
    shortDescription: 'My first math contest. The mindset felt familiar: precision, problem-solving, and time pressure. I earned silver and placed 19th out of 600+ (200 finalists), which barely qualified me to try for IMC 2025 selection.',
    tags: ['Mathematics', 'Math&Maroc', 'MMC', 'National'],
    photos: [
      { src: 'assets/mmc2024.jpg', keepRatio: true },
      { src: 'assets/mmc2024-2.heic', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2024-06-14',
    title: 'MOI 2024 Final Camp — Supervision & Selection',
    subtitle: '1337 Khouribga',
    description:
      'On June 14, 2024, I supervised the MOI final camp at 1337 Khouribga. The camp ran over two days: a reception day followed by the contest day.\n\nThis year, a new rating system I proposed was adopted to compute the final standings and select the IOI team. It combines contest performances with the dates of those contests to assign each contestant a score.\nIt was great to see both familiar faces and new ones.\n\nCongratulations to Ayman Riad Solh, Yassir Salama, Mohammed Cherki and Mahdi Benkhadra for making it to IOI!',
    shortDescription: 'Supervised the MOI final camp at 1337 Khouribga: a reception day followed by the contest day. We also adopted a rating system I proposed to combine performances and dates for IOI selection. Congrats to the 2024 IOI team!',
    tags: ['MOI', 'Organization'],
    photos: [
      { src: 'assets/moi-2024-camp.jpg', keepRatio: true },
      { src: 'assets/moi-2024-camp-2.jpg', keepRatio: false },
      { src: 'assets/moi-2024-camp-results.jpg', keepRatio: true }
    ]
  },
  {
    date: '2024-09-01',
    title: 'IOI 2024 — Deputy Leader',
    subtitle: 'Alexandria, Egypt',
    description:
      'I served as a deputy leader for the Moroccan team at the International Olympiad in Informatics (IOI) 2024 in Alexandria, Egypt. It was a joy to meet delegations from around the world, learn from their experiences, and—most importantly—accompany our students during a pivotal moment in their lives. My role focused on mentoring the team and attending General Assembly meetings.\n\nThat year, Morocco achieved the highest score in both the Arab and African regions, with Ayman earning the country\'s third bronze medal and Mahdi receiving Morocco\'s second Honourable Mention.',
    shortDescription: 'Deputy leader for Morocco at IOI 2024 in Alexandria. Mentored the team and joined General Assembly meetings. Morocco topped the Arab and African regions; Ayman earned bronze, Mahdi received an Honourable Mention.',
    tags: ['IOI', 'International', 'Mentoring'],
    photos: [
      { src: 'assets/ioi-2024.jpg', keepRatio: true },
      { src: 'assets/ioi-2024-pyramid.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2024-09-10',
    title: 'MOI — Head of Scientific Committee',
    subtitle: 'Moroccan Olympiad in Informatics',
    description:
      'After returning from IOI 2024, I became the new head of the MOI Scientific Committee. It was an honor—and it came with more responsibility. I now plan the season\'s key events, coordinate contests, and manage communication with different parties. I also oversee the problemsetting pipeline (authoring, testing, and validation) and help ensure fair selection and smooth organization across the year.',
    shortDescription: 'Became head of the MOI Scientific Committee. I plan the season, coordinate contests, handle communications, and oversee problemsetting from authoring to testing and validation.',
    tags: ['MOI', 'Leadership', 'Organization'],
    photos: [{src:'assets/moi-logo.JPG', keepRatio:true}],
    golden: true
  },
  {
    date: '2024-09-10',
    title: 'National Recognition — Ministry Visit',
    subtitle: 'Rabat — Ministry of Digital Transition and Administrative Reform',
    description:
      'On the same day, Morocco\'s Ministry of Digital Transition and Administrative Reform invited our IOI team and their families to the ministry headquarters in Rabat to congratulate us on the achievement. We were welcomed by Minister Ghita Mezzour, who encouraged us to keep pushing our skills, mentor younger students, and carry Morocco\'s colors in future competitions.\n\nIt\'s always nice to see the country recognize its talents.',
    shortDescription: 'Ministry of Digital Transition and Administrative Reform hosted our IOI team in Rabat. Minister Ghita Mezzour encouraged us to keep pushing, mentor younger students, and carry Morocco\'s colors.',
    tags: ['IOI', 'Leadership', 'National'],
    photos: [
      { src: 'assets/ministry-visit.jpg', keepRatio: true },
      { src: 'assets/ministry-visit-2.jpeg', keepRatio: true }
    ]
  },
  {
    date: '2024-09-25',
    title: 'IT AcadEMI — Club President',
    subtitle: 'EMI, Rabat — IT Club',
    description:
      'On September 25, 2024—following elections held in late May 2024—I was announced as the new president of IT AcadEMI, the IT club of our school.\n\nIt was a great honor to earn the community\'s trust, and a big responsibility to carry on my shoulders. Huge thanks to everyone who placed their trust in me and to everyone who helped me carry this responsibility!\n\nP.S. The first photo is of the executives of the club.',
    shortDescription: 'Announced as the new president of IT AcadEMI, following elections held in late May 2024. I\'m grateful for the trust and aware of the responsibility. Thanks to everyone who helped carry it.\n\nNote: the first photo shows the club\'s executive team.',
    tags: ['Leadership', 'IT AcadEMI', 'EMI'],
    photos: [{src:'assets/itacademi-executives.jpg',keepRatio:false},
      {src:'assets/itacademi-speech.JPG',keepRatio:true}
    ],
    golden: true
  },
  {
    date: '2025-01-30',
    title: 'MOI 2025 Quarter-finals — Camp Lead',
    subtitle: '1337 Rabat',
    description:
      'On January 30, 2025, I managed the MOI quarter-final camp at 1337 Rabat. The camp was a week long and followed a series of online selection rounds, and 35 students from across Morocco qualified to attend.\n\nIt ran for one week with focused lectures on algorithms and data structures, plus guided practice. The camp was a clear success—we saw a noticeable rise in average performance in the weeks that followed.\n\nAt the end, 17 candidates were selected to advance to the Semi-final.',
    shortDescription: 'Ran the MOI quarter-final camp at 1337 Rabat. One week, following online selections; 35 students attended from across Morocco. Lectures on algorithms, data structures, and guided practice. Seventeen advanced to the semi-final.',
    tags: ['MOI', 'Mentorship', 'Organization'],
    photos: [
      { src: 'assets/moi-qf-01.png', keepRatio: true },
      { src: 'assets/moi-qf-02.png', keepRatio: true },
      { src: 'assets/moi-qf-03.png', keepRatio: true },
      { src: 'assets/moi-qf-04.png', keepRatio: true }
    ]
  },
  {
    date: '2025-03-16',
    title: 'IT-HOLIC 2025 — 1st Place',
    subtitle: 'ENSIAS – Rabat (4th Edition)',
    description:
      'On March 16, 2025, at ENSIAS in Rabat, my team—Othmane EL BOUR, Salma Mahdioui, and I—won IT-HOLIC 2025, taking first place and the 13,000 MAD prize (~$1430).\n\nThis date is a true diamond on my timeline: it brought my tally of national competition titles to ten. The joy was indescribable—it is a day I will never forget.\n\n🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆 🏆',
    shortDescription: 'With Othmane EL BOUR and Salma Mahdioui we won IT-HOLIC 2025 at ENSIAS. Prize: 13,000 MAD (~$1,430). This one made it ten national titles—a day I won\'t forget.',
    tags: ['Competitive Programming', 'IT-HOLIC', 'National'],
    photos: [
      { src: 'assets/itholic-2025.jpg', keepRatio: true }
    ],
    diamond: true
  },
  {
    date: '2025-05-06',
    title: 'MOI 2025 Final — Camp Lead',
    subtitle: '1337 Rabat',
    description:
      'On May 6, 2025, we launched the MOI Final camp at 1337 Rabat. Thanks to an exceptional cohort, only one student was eliminated at the Semi-final, so 16 students advanced to the Final.\n\nLike the Quarter-finals, this was a one-week camp—but with a heavier focus on advanced data structures and algorithms, plus a lot more practice. The contest itself followed the IOI format across two days.\n\nAt the end, four students qualified for IOI 2025: Yassir Salama, Cherki Mohammed, Zakaria Abisourour, and Abdelhakim Lamnouar.\n\nCongratulations to them, and many thanks to 1337 Rabat for their support!',
    shortDescription: 'Launched the MOI Final camp at 1337 Rabat. One week focused on advanced data structures and algorithms with heavy practice; IOI format contest over two days. Four students qualified for IOI 2025.',
    tags: ['MOI', 'Mentorship'],
    photos: [
      { src: 'assets/moi-2025-03.jpg', keepRatio: false },
      { src: 'assets/moi-2025-02.jpg', keepRatio: false },
      { src: 'assets/moi-2025-01.jpg', keepRatio: true },
      { src: 'assets/moi-2025-04.jpg', keepRatio: true }
    ]
  },
  {
    date: '2025-04-12',
    title: 'CodEMI — First Edition',
    subtitle: 'ESI Rabat — in collaboration with Code.ESI',
    description:
      'On April 12, 2025, we launched the first edition of CodEMI—the flagship event of the IT AcadEMI club—hosted at ESI Rabat. Due to logistical complications, this inaugural edition was organized in collaboration with the Code.ESI club from ESI.\n\nCodEMI is a competitive programming contest: ICPC-style, mixed teams allowed, and a 4-hour round.\n\nDespite many challenges, the event was a success: 31 teams and around 100 contestants participated, supported by 25+ staff to ensure the competition ran smoothly. The journey was full of obstacles, but we overcame them together.',
    shortDescription: 'We launched CodEMI at ESI Rabat with Code.ESI. ICPC-style, mixed teams, 4 hours. 31 teams, ~100 contestants, and 25+ staff. Plenty of obstacles and a strong first edition.',
    tags: ['Organization', 'IT AcadEMI', 'CodEMI', 'Competitive Programming'],
    media: [
      { src: 'assets/codemi.mp4', keepRatio: true, isVideo: true },
      { src: 'assets/codemi-02.jpeg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2025-04-13',
    title: 'IMC 2025 — Morocco Team Selection (1st Place)',
    subtitle: 'online — Math&Maroc',
    description:
      'After a set of preparation rounds and two selection exams, I took first place in the Morocco selection—securing a spot at IMC 2025. I never expected this. I have always seen competitive programming as my field of expertise, but this result showed me that mathematics might be one too.\n\nHuge thanks to Math&Maroc for making this possible.',
    shortDescription: 'Placed first in Morocco\'s IMC selection after prep rounds and two exams—earned a spot at IMC 2025. I didn\'t expect it; maybe math is a second field for me.',
    tags: ['Mathematics', 'Math&Maroc', 'IMC', 'National'],
    photos: [
      { src: 'assets/imc2025-select.jpg', keepRatio: true },
      { src: 'assets/imc-select.jpg', keepRatio: true }
    ],
    golden: true
  },
  {
    date: '2025-07-24',
    title: 'Math & Maroc Competition (MMC) 2025 — Gold Medal',
    subtitle: 'National Mathematics Contest',
    description:
      'On July 24, 2025, I participated in the Math & Maroc Competition (MMC) for the second time and earned a gold medal. While the result itself is not very disappointing, I know I could have done better.\n\nP.S. I could not wait for the official photos, since the competition overlapped with IMC preparations.',
    shortDescription: 'Second time at MMC; this time I earned gold. I know I could have done better, but I\'m happy with the result. Couldn\'t wait for the official photos due to IMC prep overlap.',
    tags: ['Mathematics', 'Math&Maroc', 'MMC', 'National'],
    photos: [{ src: 'assets/mmc-2025-group.jpg', keepRatio: true },
     { src: 'assets/mmc-2025-scoreboard.jpg', keepRatio: true }],
    golden: true
  },
  {
    date: '2025-07-28',
    title: 'IMC 2025 — Silver Medal',
    subtitle: 'Sofia, Bulgaria',
    description:
      'If someone had told me a year earlier that I would participate in the International Mathematics Competition (IMC), I would have taken it as a joke. But on July 28, 2025, in Sofia, Bulgaria, it became reality.\n\nNot only did I take part—I earned a silver medal. I could not be more proud of myself, but also of the Moroccan delegation as a whole, as we all secured silver medals. Huge thanks to our coach Issam for defending our papers 😅.',
    shortDescription: 'A year earlier I would have laughed if you told me I\'d compete at IMC. In Sofia it became real—and I earned silver. The whole Moroccan delegation did too. Thanks to Issam for defending our papers.',
    tags: ['Mathematics', 'Math&Maroc', 'IMC', 'International'],
    photos: [
      { src: 'assets/imc-2025-medal.jpg', keepRatio: false },
      { src: 'assets/imc-2025-team.jpg', keepRatio: true }
    ],
    diamond: true
  },
  {
    date: '2025-09-19',
    title: 'MCPC 2025 — Upcoming',
    subtitle: 'UM6P – Rabat',
    description:
      'Between September 19 and 21, 2025, I will take part in the Moroccan Collegiate Programming Contest (MCPC), hosted at UM6P in Rabat.\n\nMorocco has not sent a team to the ICPC since 2021 due to regional issues. Now, in my final year of eligibility, I finally get my one and only chance to qualify.\n\nStay tuned!',
    shortDescription: 'Between 19 and 21 September 2025 I plan to compete in MCPC at UM6P in Rabat. Morocco hasn\'t sent a team to ICPC since 2021. This is my final year of eligibility and my one shot to qualify.',
    tags: ['Competitive Programming', 'MCPC', 'ICPC', 'Upcoming'],
    photos: [{ src: 'assets/mcpc-2025.jpeg', keepRatio: true }]
  }
];