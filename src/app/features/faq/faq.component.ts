import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Competitions' | 'Organizations' | 'Terms' | 'Education';
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    // Competitions
    {
      question: 'What is Competitive Programming?',
      answer: 'Competitive programming is a sport-like activity where individuals or teams solve algorithmic problems under strict time constraints. It emphasizes problem-solving, efficiency, and mastery of data structures and algorithms.',
      category: 'Competitions'
    },
    {
      question: 'What is MOI (Moroccan Olympiad in Informatics)?',
      answer: 'The Moroccan Olympiad in Informatics (MOI) is the national competition for pre-university students, mirroring the format of the International Olympiad in Informatics (IOI). It includes 5-hour contests with challenging algorithmic problems and serves as the qualifier for Morocco’s IOI team.',
      category: 'Competitions'
    },
    {
      question: 'What is IOI (International Olympiad in Informatics)?',
      answer: 'The IOI is one of the most prestigious global programming contests for pre-university students. Held annually in different countries, it spans two days of 5-hour contests, requiring advanced algorithmic thinking and precise coding.',
      category: 'Competitions'
    },
    {
      question: 'What is Codeforces?',
      answer: 'Codeforces is a popular online platform for competitive programming. It regularly hosts contests and offers a wide range of algorithmic problems, helping programmers practice and improve their skills. The platform also features a rating system, similar to chess rankings, which tracks performance in contests and reflects a participant’s skill level within the global community.',
      category: 'Competitions'
    },
    {
      question: 'What is JNJD (National Journey for Young Developers)?',
      answer: 'JNJD is Morocco’s oldest programming contest, organized by INPT. It follows the ICPC format with team-based problem-solving and welcomes students from primary school through university.',
      category: 'Competitions'
    },
    {
      question: 'What is ICPC (International Collegiate Programming Contest)?',
      answer: 'The International Collegiate Programming Contest (ICPC) is one of the world’s most prestigious competitive programming competitions. It brings together university students in teams of three to solve challenging algorithmic and mathematical problems under time pressure. The contest emphasizes teamwork, problem-solving, and coding efficiency. Performance is ranked on a global scale, and progressing through regional contests to the world finals is considered a major achievement in competitive programming.',
      category: 'Competitions'
    },
    {
      question: 'What is AUI Compete?',
      answer: 'AUI Compete is a national contest hosted by Al Akhawayn University for outstanding high school students. It includes competitive programming as one track and awards scholarships to top performers.',
      category: 'Competitions'
    },
    {
      question: 'What is CodeIT?',
      answer: 'CodeIT is a programming contest hosted by EHTP, Casablanca, following the ICPC-style rules, mixed teams are allowed.',
      category: 'Competitions'
    },
    {
      question: 'What is Game of Code?',
      answer: 'Game Of Code (GOC) is a programming contest hosted by INSEA, Rabat, following the ICPC-style rules, mixed teams are allowed.',
      category: 'Competitions'
    },
    {
      question: 'What is AMPC?',
      answer: 'Art & Metier Programing Contest (AMPC) is a programming contest hosted by ENSAM Meknes, following the ICPC-style rules, mixed teams are allowed.',
      category: 'Competitions'
    },
    {
      question: 'What is IT-HOLIC?',
      answer: 'IT-HOLIC is a programming contest hosted by ENSIAS, Rabat, following the ICPC-style rules, mixed teams are NOT allowed.',
      category: 'Competitions'
    },
    {
      question: 'What is CodEMI?',
      answer: 'CodEMI is the main event of IT AcadEMI, the IT club of EMI, Rabat. It features ICPC-style contests with mixed teams.',
      category: 'Competitions'
    },
    {
      question: 'What is MCPC (Moroccan Collegiate Programming Contest)?',
      answer: 'MCPC is Morocco’s national university-level programming contest and the official pathway for teams to qualify for the ICPC.',
      category: 'Competitions'
    },
    {
      question: 'What is MMC (Math & Maroc Competition)?',
      answer: 'MMC is Morocco’s premier national mathematics competition for university students. It mirrors problem-solving styles from programming contests and selects students for the IMC.',
      category: 'Competitions'
    },
    {
      question: 'What is IMC (International Mathematics Competition)?',
      answer: 'The International Mathematics Competition (IMC) for University Students is an annual contest that brings together undergraduates from around the world to solve advanced mathematics problems. It covers areas such as algebra, analysis, geometry, and combinatorics, challenging participants to apply creativity and deep problem-solving skills. The IMC is highly regarded in the academic community and provides a platform for talented students to demonstrate their mathematical abilities on an international stage.',
      category: 'Competitions'
    },

    // Organizations
    {
      question: 'What is 1337?',
      answer: '1337 is a Moroccan coding school (part of the 42 network) that applies a peer-to-peer, project-based learning approach. Its campuses are located in Khouribga and Rabat.',
      category: 'Organizations'
    },
    {
      question: 'What is INPT (National Institute of Posts and Telecommunications)?',
      answer: 'INPT (Institut National des Postes et Télécommunications) is a top Moroccan engineering school specializing in IT and telecommunications.',
      category: 'Organizations'
    },
    {
      question: 'What is EMI (Mohammadia School of Engineers)?',
      answer: 'EMI (École Mohammadia d’Ingénieurs) is widely regarded as the most prestigious engineering school in Morocco. Admission is through the national CPGE entrance exam, with placements determined by rank. The school follows a military-style discipline and schedule that emphasize rigor and responsibility.',
      category: 'Organizations'
    },
    {
      question: 'What is EHTP (Hassania School of Public Works)?',
      answer: 'EHTP (École Hassania des Travaux Publics) is a leading Moroccan engineering school focused on civil engineering and public works.',
      category: 'Organizations'
    },
    {
      question: 'What is ENSAM Meknes (National School of Arts and Crafts)?',
      answer: 'ENSAM Meknes is a Moroccan engineering school specializing in mechanical and industrial engineering.',
      category: 'Organizations'
    },
    {
      question: 'What is ENSIAS (National School of Computer Science and Systems Analysis)?',
      answer: 'ENSIAS Rabat specializes in computer science and IT systems.',
      category: 'Organizations'
    },
    {
      question: 'What is ESI (School of Information Sciences)?',
      answer: 'ESI is a Moroccan institution focusing on information science and computer science programs, and participates in joint programming initiatives.',
      category: 'Organizations'
    },
    {
      question: 'What is INSEA (National Institute of Statistics and Applied Economics)?',
      answer: 'INSEA specializes in statistics, economics, and applied mathematics.',
      category: 'Organizations'
    },
    {
      question: 'What is UM6P (Mohammed VI Polytechnic University)?',
      answer: 'UM6P (Mohammed VI Polytechnic University) is a Moroccan institution of higher education and research focused on training, applied research, and innovation in areas such as sustainable development, agriculture, industry, and technology.',
      category: 'Organizations'
    },
    {
      question: 'What is Al Akhawayn University?',
      answer: 'Al Akhawayn University (AUI) is a Moroccan university in Ifrane that follows an American-style liberal arts system, offering programs in engineering, business, social sciences, and humanities.',
      category: 'Organizations'
    },

    // Terms
    {
      question: 'What does "ICPC-style" mean?',
      answer: 'ICPC-style competitions involve 3-person teams sharing one computer, solving algorithmic problems over 5 hours, with a scoring system based on correct submissions and penalties.',
      category: 'Terms'
    },
    {
      question: 'What does "IOI-style" mean?',
      answer: 'IOI-style competitions are individual contests where each participant solves algorithmic problems over 4–5 hours, using a single computer, with scoring based on partial and full solutions of each problem.',
      category: 'Terms'
    },
    {
      question: 'What is a "Problemsetter"?',
      answer: 'A problem setter is the person who designs a contest task: they create the core idea and constraints, write the statement and official solution, and prepare (or supervise) comprehensive test data to ensure correctness and calibrated difficulty.',
      category: 'Terms'
    },
    {
      question: 'What is a "Scientific Committee"?',
      answer: 'A Scientific Committee manages the academic side of contests, including problem selection, judging systems, and fairness oversight.',
      category: 'Terms'
    },
    {
      question: 'What is "Math&Maroc"?',
      answer: 'Math&Maroc is an educational association in Morocco that promotes mathematics through competitions like MMC and MTYM.',
      category: 'Terms'
    },
    {
      question: 'What is "IT AcadEMI"?',
      answer: 'IT AcadEMI is EMI’s IT student club.',
      category: 'Terms'
    },

    // Education
    {
      question: 'What is CPGE (Classes Préparatoires aux Grandes Écoles)?',
      answer: 'CPGE (Classes Préparatoires aux Grandes Écoles) are two-year intensive preparatory programs in France and other Francophone countries that prepare students for competitive entrance exams to top engineering and business schools, with specialized tracks such as mathematics, physics, engineering, and economics.',
      category: 'Education'
    },
    {
      question: 'What is MPSI?',
      answer: 'MPSI is the first-year CPGE track focusing on advanced mathematics, physics, and introductory engineering sciences. It leads to the MP specialization.',
      category: 'Education'
    },
    {
      question: 'What is MP*?',
      answer: 'MP* is the elite second-year CPGE stream in mathematics and physics, intended for the highest-achieving students, with advanced theory and challenging exams.',
      category: 'Education'
    },
    {
      question: 'What is GI (Computer Engineering) in EMI?',
      answer: 'GI is the Computer Engineering track at EMI, covering software engineering, networks, algorithms, and AI/ML foundations.',
      category: 'Education'
    }
  ];

  selectedCategory: string = 'All';
  categories = ['All', 'Competitions', 'Organizations', 'Terms', 'Education'];

  get filteredItems(): FAQItem[] {
    if (this.selectedCategory === 'All') {
      return this.faqItems;
    }
    return this.faqItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
