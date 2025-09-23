import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TIMELINE } from '../timeline/timeline.data';
import { TimelineEvent } from '../timeline/timeline.model';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'achievement' | 'timeline';
  metadata?: any;
}

interface ChatbotPersonality {
  name: string;
  description: string;
  traits: string[];
  responses: {
    greetings: string[];
    aboutMdgs: string[];
    timeline: string[];
    personality: string[];
    competitions: string[];
    education: string[];
    achievements: string[];
    projects: string[];
    skills: string[];
    contact: string[];
    default: string[];
  };
}

interface ConversationContext {
  lastTopic: string;
  mentionedYears: number[];
  mentionedCompetitions: string[];
  userInterests: string[];
  conversationHistory: string[];
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('messagesContainer', { static: false }) messagesContainer!: ElementRef;
  @ViewChild('messageInput', { static: false }) messageInput!: ElementRef;

  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isTyping: boolean = false;
  messageId: number = 0;
  isOpen: boolean = false;
  isListening: boolean = false;
  recognition: any = null;
  context: ConversationContext = {
    lastTopic: '',
    mentionedYears: [],
    mentionedCompetitions: [],
    userInterests: [],
    conversationHistory: []
  };
  private typingTimeout: any = null;

  personality: ChatbotPersonality = {
    name: "Mdg's Only Friend",
    description: "Your intelligent AI companion who knows everything about Mdg",
    traits: ["funny", "smart", "passionate", "a little autistic (the good kind!)"],
    responses: {
      greetings: [
        "Hey there! I'm Mdg's Only Friend! 👋 What would you like to know about this amazing human?",
        "Hello! Ready to dive into the fascinating world of Mdg? I know all the juicy details! 😄",
        "Hi! I'm here to spill the tea about Mdg. What's your burning question? ☕",
        "Greetings! I'm the AI that knows Mdg better than he knows himself. Ask away! 🤖",
        "Welcome! I'm your guide to everything Mdg. From his epic wins to his quirky personality - I've got the inside scoop! 🎯"
      ],
      aboutMdgs: [
        "Mdg is this incredible human who's basically a competitive programming legend! Born in Fes, Morocco in 2003, he's been crushing it in competitions since 2019.",
        "Oh, Mdg? He's the kind of person who makes you question your life choices. Started competitive programming at 16 and became MOI champion by 18. No big deal, right? 😅",
        "Mdg is a competitive programming prodigy from Morocco! He's won like, ALL the national competitions and even represented Morocco at IOI. The guy's basically a walking algorithm encyclopedia.",
        "Picture this: a passionate, slightly autistic (the good kind!) genius who turned his love for problem-solving into a career. That's Mdg in a nutshell! 🧠",
        "Mdg is a 21-year-old competitive programming phenom from Morocco who's been dominating contests since 2019. He's the perfect blend of genius, humor, and that special neurodivergent superpower! ⚡"
      ],
      timeline: [
        "Mdg's journey is WILD! Started with MOI 2019, became champion in 2021, then went on to dominate every competition in Morocco. The timeline is basically a highlight reel of victories!",
        "His timeline reads like a success story: from first contest in 2019 to MOI champion, IOI participant, Codeforces Master, and now head of MOI Scientific Committee. Plot twist: he's still in university!",
        "The timeline shows an incredible progression: high school competitions → CPGE → EMI engineering school → international recognition. It's like watching a speedrun of academic and competitive excellence!",
        "From a curious kid in Fes to a competitive programming legend and math olympiad medalist - Mdg's timeline is proof that passion and hard work pay off! 🏆",
        "2019: First MOI attempt → 2021: MOI Champion → 2024: IOI participant → 2025: Head of MOI Scientific Committee. His timeline is literally a masterclass in competitive programming success! 📈"
      ],
      personality: [
        "Mdg is this amazing combination of genius and goofball! He's funny, smart, passionate, and yes, a little autistic (but the good kind that makes you awesome at problem-solving). He gets genuinely excited about algorithms and can make you laugh while explaining complex concepts.",
        "Picture someone who's incredibly intelligent but also the type to make dad jokes about binary trees. He's humble, approachable, and has that special neurodivergent superpower - the ability to hyperfocus on problems until they're solved. It's like having a laser beam for a brain!",
        "Mdg is passionate about everything he touches - competitive programming, mentoring students, organizing competitions. But here's the thing: he's also surprisingly funny and has this great self-aware humor about his own quirks. He'll joke about being 'slightly autistic' while simultaneously solving problems that would make most people's heads explode.",
        "He's the perfect blend of genius and goofiness. Smart enough to crack impossible algorithms, but also the kind of person who would celebrate a victory with a terrible programming pun. The good kind of autistic - the kind that makes you uniquely awesome at what you do! 🧠✨",
        "Mdg has that perfect neurodivergent superpower: hyperfocus that turns complex problems into solved puzzles. Plus, he's hilarious, humble, and genuinely excited about helping others learn. The kind of person who makes you want to be better! 🌟"
      ],
      competitions: [
        "Oh boy, where do I start? MOI champion 2021, multiple JNJD wins, Codeforces Master, AUI Compete winner, and like 10+ national competition titles. The guy's basically a walking trophy case at this point! 🏆",
        "Mdg has won every major programming contest in Morocco: MOI, JNJD, CodeIT, Game of Code, AMPC, IT-HOLIC... I think he's running out of competitions to dominate! It's like he's collecting achievements like Pokemon cards.",
        "His competition journey is absolutely wild: from being a nervous 15-year-old at his first MOI semi-final to becoming a Codeforces Master and representing Morocco internationally. He made competitive programming look like a walk in the park!",
        "The competition highlights are endless: MOI 2021 champion (with that dramatic last-minute clutch), IOI participant, multiple national titles, and now he's even organizing competitions as head of MOI Scientific Committee. Talk about going from player to game master! 🎮",
        "Mdg's trophy cabinet is overflowing! MOI 2021 champion, IOI participant, Codeforces Master, multiple JNJD wins, AUI Compete champion... He's basically the competitive programming equivalent of a walking achievement unlocked! 🎯"
      ],
      education: [
        "Mdg's educational journey is impressive: CPGE Moulay Driss (MPSI then MP*), now at EMI (Mohammadia School of Engineers) studying Computer Engineering. He's basically been in the most prestigious programs Morocco has to offer!",
        "From CPGE to EMI - he's been through the most rigorous academic programs in Morocco. And somehow managed to excel in both academics AND competitions simultaneously. How does he do it?",
        "His education path shows his dedication: CPGE Moulay Driss (the intensive prep program), then EMI (the most prestigious engineering school in Morocco). Plus, he's been mentoring others throughout his journey!",
        "Mdg's academic journey is a masterclass in balancing excellence: CPGE MPSI/MP*, then EMI Computer Engineering, all while dominating competitions and helping others. The guy's a multitasking legend!",
        "CPGE Moulay Driss (MPSI/MP*) → EMI Computer Engineering. He's been through Morocco's most challenging academic programs while simultaneously crushing competitions. The definition of academic and competitive excellence! 🎓"
      ],
      achievements: [
        "Mdg's achievements are absolutely mind-blowing! MOI 2021 champion, IOI participant, Codeforces Master, multiple national competition wins, and now head of MOI Scientific Committee. He's basically a walking success story! 🏆",
        "From his first MOI attempt in 2019 to becoming champion in 2021, then representing Morocco at IOI - Mdg's achievements read like a competitive programming legend's resume!",
        "Mdg has achieved more by age 21 than most people do in a lifetime: MOI champion, IOI participant, Codeforces Master, multiple national titles, and now he's organizing competitions for others. Talk about paying it forward! 🌟",
        "His achievement list is incredible: MOI 2021 champion, IOI participant, Codeforces Master, AUI Compete winner, multiple JNJD victories, and now head of MOI Scientific Committee. The guy's a competitive programming machine! ⚡"
      ],
      projects: [
        "Mdg is always working on cool projects! From organizing competitions as head of MOI Scientific Committee to mentoring students and creating educational content. He's constantly giving back to the community! 🚀",
        "His current projects include leading the MOI Scientific Committee, mentoring aspiring competitive programmers, and continuing his studies at EMI. He's the perfect example of someone who balances personal growth with community service!",
        "Mdg's projects range from academic excellence at EMI to organizing national competitions and mentoring the next generation of programmers. He's building a legacy that goes beyond just winning contests! 💡",
        "From competitive programming to community building, Mdg's projects show his commitment to both personal growth and helping others succeed. He's creating a positive impact in the Moroccan programming community! 🌱"
      ],
      skills: [
        "Mdg's skills are off the charts! Advanced algorithms, data structures, competitive programming, problem-solving, mentoring, and leadership. He's basically a Swiss Army knife of programming talents! 🛠️",
        "His technical skills include mastery of C++, Python, advanced algorithms, data structures, and competitive programming techniques. Plus, he's an amazing mentor and communicator!",
        "Mdg combines technical excellence with soft skills: advanced programming, algorithm design, teaching, leadership, and that special ability to make complex concepts accessible to others! 🎯",
        "From technical mastery in competitive programming to leadership skills as head of MOI Scientific Committee, Mdg has developed a well-rounded skill set that makes him a true asset to the community! ⚡"
      ],
      contact: [
        "Want to connect with Mdg? He's always open to discussing competitive programming, mentoring opportunities, or just having a chat about algorithms! He's surprisingly approachable for someone so accomplished! 💬",
        "Mdg is very active in the competitive programming community and loves connecting with fellow programmers. Whether you're a beginner or expert, he's always happy to share knowledge and experiences!",
        "Looking to reach out to Mdg? He's passionate about mentoring and helping others grow in competitive programming. Don't hesitate to connect - he's incredibly supportive and encouraging! 🤝",
        "Mdg is always excited to meet new people in the programming community! Whether you want to discuss algorithms, seek mentorship, or just chat about competitive programming, he's very approachable! 🌟"
      ],
      default: [
        "Hmm, that's an interesting question! I might not have the exact answer, but I can tell you that Mdg is always up to something amazing. Want to ask about his competitions or personality instead?",
        "I'm not sure about that specific detail, but I do know Mdg is constantly working on cool projects and helping others. Maybe ask me about his timeline or achievements?",
        "That's a tough one! Mdg is such a complex person with so many interests. How about we talk about his competitive programming journey or his personality traits instead?",
        "I don't have that info handy, but I can tell you Mdg is the kind of person who would find a way to make any topic interesting! Want to explore his timeline or ask about his competitions?",
        "That's a great question! While I might not have that specific detail, I can tell you Mdg is always learning and growing. How about we explore his achievements or personality instead? 🤔"
      ]
    }
  };

  ngOnInit(): void {
    this.initializeVoiceRecognition();
    this.loadConversationHistory();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    if (this.recognition) {
      this.recognition.stop();
    }
  }

  openChat(): void {
    this.isOpen = true;
    if (this.messages.length === 0) {
      this.addBotMessage(this.getRandomResponse('greetings'));
    }
    setTimeout(() => this.focusInput(), 100);
  }

  closeChat(): void {
    this.isOpen = false;
    this.saveConversationHistory();
  }

  private focusInput(): void {
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
  }

  private initializeVoiceRecognition(): void {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.currentMessage = transcript;
        this.sendMessage();
      };

      this.recognition.onerror = (event: any) => {
        console.log('Speech recognition error:', event.error);
        this.isListening = false;
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };
    }
  }

  private loadConversationHistory(): void {
    const saved = localStorage.getItem('chatbot-conversation');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        this.messages = data.messages || [];
        this.context = data.context || this.context;
        this.messageId = data.messageId || 0;
      } catch (e) {
        console.log('Failed to load conversation history');
      }
    }
  }

  private saveConversationHistory(): void {
    const data = {
      messages: this.messages.slice(-20), // Keep last 20 messages
      context: this.context,
      messageId: this.messageId
    };
    localStorage.setItem('chatbot-conversation', JSON.stringify(data));
  }

  sendMessage(): void {
    if (!this.currentMessage.trim()) return;

    this.addUserMessage(this.currentMessage);
    const userInput = this.currentMessage.toLowerCase();
    this.updateContext(userInput);
    this.currentMessage = '';

    // Simulate typing delay with realistic variation
    this.isTyping = true;
    const delay = 800 + Math.random() * 1500;
    
    this.typingTimeout = setTimeout(() => {
      this.isTyping = false;
      const response = this.generateResponse(userInput);
      this.addBotMessage(response);
      this.scrollToBottom();
    }, delay);
  }

  startVoiceInput(): void {
    if (this.recognition && !this.isListening) {
      this.isListening = true;
      this.recognition.start();
    }
  }

  stopVoiceInput(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  private updateContext(userInput: string): void {
    this.context.conversationHistory.push(userInput);
    if (this.context.conversationHistory.length > 10) {
      this.context.conversationHistory = this.context.conversationHistory.slice(-10);
    }

    // Extract years mentioned
    const yearMatches = userInput.match(/\b(20\d{2})\b/g);
    if (yearMatches) {
      yearMatches.forEach(year => {
        if (!this.context.mentionedYears.includes(parseInt(year))) {
          this.context.mentionedYears.push(parseInt(year));
        }
      });
    }

    // Extract competitions mentioned
    const competitions = ['moi', 'ioi', 'codeforces', 'jnjd', 'codeit', 'game of code', 'ampc', 'it-holic', 'codemi', 'mmc', 'imc', 'aui compete'];
    competitions.forEach(comp => {
      if (userInput.includes(comp) && !this.context.mentionedCompetitions.includes(comp)) {
        this.context.mentionedCompetitions.push(comp);
      }
    });

    // Extract interests
    const interestKeywords = ['programming', 'algorithms', 'competitions', 'education', 'personality', 'achievements', 'projects', 'skills'];
    interestKeywords.forEach(interest => {
      if (userInput.includes(interest) && !this.context.userInterests.includes(interest)) {
        this.context.userInterests.push(interest);
      }
    });
  }

  private addUserMessage(text: string): void {
    this.messages.push({
      id: this.messageId++,
      text,
      isUser: true,
      timestamp: new Date()
    });
  }

  private addBotMessage(text: string): void {
    this.messages.push({
      id: this.messageId++,
      text,
      isUser: false,
      timestamp: new Date()
    });
  }

  private generateResponse(userInput: string): string {
    const input = userInput.toLowerCase().trim();
    
    // Check for greetings
    if (this.containsAny(input, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'what\'s up'])) {
      return this.getContextualGreeting();
    }

    // Check for specific questions about Mdg
    if (this.containsAny(input, ['who is mdg', 'tell me about mdg', 'what is mdg', 'about mdg', 'who are you', 'what do you know about mdg', 'describe mdg'])) {
      return this.getRandomResponse('aboutMdgs');
    }

    // Check for timeline questions
    if (this.containsAny(input, ['timeline', 'journey', 'story', 'career', 'path', 'history', 'background', 'life story', 'what happened', 'when did', 'how did he start'])) {
      return this.getRandomResponse('timeline');
    }

    // Check for personality questions
    if (this.containsAny(input, ['personality', 'character', 'traits', 'like', 'kind of person', 'autistic', 'funny', 'smart', 'passionate', 'what is he like', 'how is he', 'describe his personality'])) {
      return this.getRandomResponse('personality');
    }

    // Check for competition questions
    if (this.containsAny(input, ['competition', 'contest', 'win', 'achievement', 'trophy', 'medal', 'moi', 'ioi', 'codeforces', 'jnjd', 'codeit', 'game of code', 'ampc', 'it-holic', 'codemi', 'mmc', 'imc', 'what did he win', 'victories', 'successes'])) {
      return this.getRandomResponse('competitions');
    }

    // Check for education questions
    if (this.containsAny(input, ['education', 'school', 'university', 'cpge', 'emi', 'study', 'degree', 'academic', 'where did he study', 'what did he study', 'college', 'university'])) {
      return this.getRandomResponse('education');
    }

    // Check for achievements questions
    if (this.containsAny(input, ['achievements', 'accomplishments', 'what has he done', 'major wins', 'biggest wins', 'notable achievements'])) {
      return this.getRandomResponse('achievements');
    }

    // Check for projects questions
    if (this.containsAny(input, ['projects', 'work', 'what is he working on', 'current projects', 'side projects', 'initiatives'])) {
      return this.getRandomResponse('projects');
    }

    // Check for skills questions
    if (this.containsAny(input, ['skills', 'abilities', 'what can he do', 'technical skills', 'programming languages', 'expertise'])) {
      return this.getRandomResponse('skills');
    }

    // Check for contact questions
    if (this.containsAny(input, ['contact', 'reach out', 'get in touch', 'connect', 'how to contact', 'email', 'social media'])) {
      return this.getRandomResponse('contact');
    }

    // Check for specific timeline events with better matching
    const timelineResponse = this.getTimelineResponse(input);
    if (timelineResponse) {
      return timelineResponse;
    }

    // Check for specific achievements or facts
    const achievementResponse = this.getAchievementResponse(input);
    if (achievementResponse) {
      return achievementResponse;
    }

    // Check for questions about specific years
    const yearResponse = this.getYearResponse(input);
    if (yearResponse) {
      return yearResponse;
    }

    // Check for contextual responses based on conversation history
    const contextualResponse = this.getContextualResponse(input);
    if (contextualResponse) {
      return contextualResponse;
    }

    // Default response with context awareness
    return this.getContextualDefaultResponse();
  }

  private getContextualGreeting(): string {
    const greetings = this.personality.responses.greetings;
    if (this.context.conversationHistory.length > 0) {
      return "Hey again! Ready to continue our chat about Mdg? What else would you like to know? 😊";
    }
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  private getContextualResponse(input: string): string | null {
    // If user is asking follow-up questions about a topic
    if (this.context.lastTopic) {
      if (this.containsAny(input, ['more', 'tell me more', 'what else', 'anything else', 'other', 'additional'])) {
        return this.getFollowUpResponse(this.context.lastTopic);
      }
    }

    // If user is asking about something they mentioned before
    if (this.context.mentionedYears.length > 0 && this.containsAny(input, ['that year', 'then', 'during that time'])) {
      const year = this.context.mentionedYears[this.context.mentionedYears.length - 1];
      return this.getYearResponse(`in ${year}`);
    }

    return null;
  }

  private getFollowUpResponse(topic: string): string {
    const followUps: { [key: string]: string[] } = {
      competitions: [
        "Want to know more about his competition strategy? Mdg is known for his calm approach under pressure and his ability to think clearly even in the most intense moments!",
        "His competition journey is full of interesting stories! Like that time he solved a problem in the last 5 minutes of MOI 2021 and became champion!",
        "Mdg doesn't just compete - he also helps organize competitions now as head of MOI Scientific Committee. Talk about giving back to the community!"
      ],
      personality: [
        "What's really cool about Mdg's personality is how he combines serious technical skills with a great sense of humor. He can make anyone laugh while explaining complex algorithms!",
        "His neurodivergent traits actually give him superpowers in competitive programming - that hyperfocus ability is like having a laser beam for a brain!",
        "Mdg is incredibly humble despite all his achievements. He's always willing to help others learn and grow in competitive programming."
      ],
      education: [
        "His educational path shows incredible dedication - from CPGE to EMI while simultaneously dominating competitions. It's like he has superhuman time management skills!",
        "What's impressive is how he balances rigorous academics with competitive programming. Most people would struggle with just one of those!",
        "Mdg's education journey proves that you can excel in both academics and competitions if you're passionate and organized enough."
      ]
    };

    const responses = followUps[topic] || this.personality.responses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private getContextualDefaultResponse(): string {
    const defaults = this.personality.responses.default;
    
    // If user has shown interest in specific topics, suggest related ones
    if (this.context.userInterests.length > 0) {
      const interest = this.context.userInterests[this.context.userInterests.length - 1];
      const suggestions: { [key: string]: string } = {
        programming: "Since you're interested in programming, you might want to ask about Mdg's technical skills or his approach to problem-solving!",
        competitions: "Given your interest in competitions, I could tell you more about Mdg's biggest wins or his competition strategy!",
        education: "If you're curious about education, I can share more about Mdg's academic journey from CPGE to EMI!",
        personality: "Since you're interested in personality, I could tell you more about what makes Mdg unique and how his traits help him succeed!"
      };
      
      if (suggestions[interest]) {
        return suggestions[interest];
      }
    }

    return defaults[Math.floor(Math.random() * defaults.length)];
  }

  private getTimelineResponse(userInput: string): string | null {
    const events = TIMELINE;
    
    // Check for specific years
    const yearMatch = userInput.match(/(\d{4})/);
    if (yearMatch) {
      const year = parseInt(yearMatch[1]);
      const yearEvents = events.filter(e => new Date(e.date).getFullYear() === year);
      if (yearEvents.length > 0) {
        const event = yearEvents[0];
        return `In ${year}, Mdg ${event.title.toLowerCase()}. ${event.shortDescription || event.description?.substring(0, 100) + '...' || 'It was a significant year in his journey!'}`;
      }
    }

    // Check for specific competitions with better matching
    const competitionKeywords = ['moi', 'ioi', 'codeforces', 'jnjd', 'codeit', 'game of code', 'ampc', 'it-holic', 'codemi', 'mmc', 'imc', 'aui compete'];
    for (const keyword of competitionKeywords) {
      if (userInput.includes(keyword)) {
        const event = events.find(e => 
          e.title.toLowerCase().includes(keyword) || 
          e.tags?.some(tag => tag.toString().toLowerCase().includes(keyword))
        );
        if (event) {
          return `Ah, ${event.title}! ${event.shortDescription || event.description?.substring(0, 150) + '...' || 'That was a memorable event in Mdg\'s journey!'}`;
        }
      }
    }

    return null;
  }

  private getAchievementResponse(userInput: string): string | null {
    const events = TIMELINE;
    
    // Check for specific achievements
    if (this.containsAny(userInput, ['champion', 'winner', 'first place', 'gold', 'silver', 'bronze', 'medal'])) {
      const achievements = events.filter(e => 
        e.title.toLowerCase().includes('champion') || 
        e.title.toLowerCase().includes('winner') ||
        e.title.toLowerCase().includes('first') ||
        e.golden === true ||
        e.diamond === true
      );
      
      if (achievements.length > 0) {
        const achievement = achievements[0];
        return `Mdg has achieved so much! One highlight is ${achievement.title} in ${new Date(achievement.date).getFullYear()}. ${achievement.shortDescription || achievement.description?.substring(0, 120) + '...' || 'Pretty impressive, right?'}`;
      }
    }

    // Check for Codeforces achievements
    if (this.containsAny(userInput, ['master', 'candidate master', 'rating', 'codeforces rank'])) {
      const codeforcesEvents = events.filter(e => e.title.toLowerCase().includes('codeforces'));
      if (codeforcesEvents.length > 0) {
        const event = codeforcesEvents[0];
        return `Mdg reached ${event.title} on Codeforces! ${event.shortDescription || event.description?.substring(0, 120) + '...' || 'That\'s a huge achievement in competitive programming!'}`;
      }
    }

    return null;
  }

  private getYearResponse(userInput: string): string | null {
    const events = TIMELINE;
    
    // Check for decade questions
    if (this.containsAny(userInput, ['2019', '2020', '2021', '2022', '2023', '2024', '2025'])) {
      const yearMatch = userInput.match(/(\d{4})/);
      if (yearMatch) {
        const year = parseInt(yearMatch[1]);
        const yearEvents = events.filter(e => new Date(e.date).getFullYear() === year);
        
        if (yearEvents.length > 0) {
          const majorEvent = yearEvents.find(e => e.golden || e.diamond) || yearEvents[0];
          const eventCount = yearEvents.length;
          
          return `In ${year}, Mdg had ${eventCount} major event${eventCount > 1 ? 's' : ''}! The standout was ${majorEvent.title}. ${majorEvent.shortDescription || majorEvent.description?.substring(0, 100) + '...' || 'It was quite a year for him!'}`;
        }
      }
    }

    return null;
  }

  private containsAny(text: string, keywords: string[]): boolean {
    return keywords.some(keyword => text.includes(keyword));
  }

  private getRandomResponse(category: keyof ChatbotPersonality['responses']): string {
    const responses = this.personality.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  clearChat(): void {
    this.messages = [];
    this.context = {
      lastTopic: '',
      mentionedYears: [],
      mentionedCompetitions: [],
      userInterests: [],
      conversationHistory: []
    };
    this.addBotMessage(this.getRandomResponse('greetings'));
    this.saveConversationHistory();
  }

  getSuggestions(): string[] {
    const baseSuggestions = [
      "What's Mdg's personality like?",
      "Tell me about his biggest wins",
      "What's his competitive programming story?",
      "How did he become MOI champion?",
      "What makes him unique?",
      "Tell me about his education journey",
      "What's his funniest achievement?",
      "How did he get into programming?"
    ];

    // Add contextual suggestions based on conversation history
    const contextualSuggestions: string[] = [];
    
    if (this.context.mentionedYears.length > 0) {
      const year = this.context.mentionedYears[this.context.mentionedYears.length - 1];
      contextualSuggestions.push(`What else happened in ${year}?`);
    }

    if (this.context.mentionedCompetitions.length > 0) {
      const comp = this.context.mentionedCompetitions[this.context.mentionedCompetitions.length - 1];
      contextualSuggestions.push(`Tell me more about ${comp.toUpperCase()}`);
    }

    if (this.context.userInterests.includes('programming')) {
      contextualSuggestions.push("What programming languages does he know?");
    }

    if (this.context.userInterests.includes('competitions')) {
      contextualSuggestions.push("What's his competition strategy?");
    }

    // Return a mix of base and contextual suggestions
    return [...contextualSuggestions, ...baseSuggestions].slice(0, 8);
  }

  askSuggestion(suggestion: string): void {
    this.currentMessage = suggestion;
    this.sendMessage();
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }, 100);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  getMessageType(message: ChatMessage): string {
    if (message.type) {
      return message.type;
    }
    return 'text';
  }

  isVoiceSupported(): boolean {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  getTypingIndicatorText(): string {
    const texts = [
      "Mdg's Only Friend is thinking...",
      "Analyzing Mdg's amazing journey...",
      "Processing your question...",
      "Gathering the best response...",
      "Thinking about Mdg's achievements..."
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  }
}
