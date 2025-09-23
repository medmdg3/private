import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TIMELINE } from '../timeline/timeline.data';
import { TimelineEvent } from '../timeline/timeline.model';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
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
    default: string[];
  };
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit {
  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isTyping: boolean = false;
  messageId: number = 0;
  isOpen: boolean = false;

  personality: ChatbotPersonality = {
    name: "Mdg's Only Friend",
    description: "Your friendly AI companion who knows everything about Mdg",
    traits: ["funny", "smart", "passionate", "a little autistic (the good kind!)"],
    responses: {
      greetings: [
        "Hey there! I'm Mdg's Only Friend! 👋 What would you like to know about this amazing human?",
        "Hello! Ready to dive into the fascinating world of Mdg? I know all the juicy details! 😄",
        "Hi! I'm here to spill the tea about Mdg. What's your burning question? ☕",
        "Greetings! I'm the AI that knows Mdg better than he knows himself. Ask away! 🤖"
      ],
      aboutMdgs: [
        "Mdg is this incredible human who's basically a competitive programming legend! Born in Fes, Morocco in 2003, he's been crushing it in competitions since 2019.",
        "Oh, Mdg? He's the kind of person who makes you question your life choices. Started competitive programming at 16 and became MOI champion by 18. No big deal, right? 😅",
        "Mdg is a competitive programming prodigy from Morocco! He's won like, ALL the national competitions and even represented Morocco at IOI. The guy's basically a walking algorithm encyclopedia.",
        "Picture this: a passionate, slightly autistic (the good kind!) genius who turned his love for problem-solving into a career. That's Mdg in a nutshell! 🧠"
      ],
      timeline: [
        "Mdg's journey is WILD! Started with MOI 2019, became champion in 2021, then went on to dominate every competition in Morocco. The timeline is basically a highlight reel of victories!",
        "His timeline reads like a success story: from first contest in 2019 to MOI champion, IOI participant, Codeforces Master, and now head of MOI Scientific Committee. Plot twist: he's still in university!",
        "The timeline shows an incredible progression: high school competitions → CPGE → EMI engineering school → international recognition. It's like watching a speedrun of academic and competitive excellence!",
        "From a curious kid in Fes to a competitive programming legend and math olympiad medalist - Mdg's timeline is proof that passion and hard work pay off! 🏆"
      ],
      personality: [
        "Mdg is this amazing combination of genius and goofball! He's funny, smart, passionate, and yes, a little autistic (but the good kind that makes you awesome at problem-solving). He gets genuinely excited about algorithms and can make you laugh while explaining complex concepts.",
        "Picture someone who's incredibly intelligent but also the type to make dad jokes about binary trees. He's humble, approachable, and has that special neurodivergent superpower - the ability to hyperfocus on problems until they're solved. It's like having a laser beam for a brain!",
        "Mdg is passionate about everything he touches - competitive programming, mentoring students, organizing competitions. But here's the thing: he's also surprisingly funny and has this great self-aware humor about his own quirks. He'll joke about being 'slightly autistic' while simultaneously solving problems that would make most people's heads explode.",
        "He's the perfect blend of genius and goofiness. Smart enough to crack impossible algorithms, but also the kind of person who would celebrate a victory with a terrible programming pun. The good kind of autistic - the kind that makes you uniquely awesome at what you do! 🧠✨"
      ],
      competitions: [
        "Oh boy, where do I start? MOI champion 2021, multiple JNJD wins, Codeforces Master, AUI Compete winner, and like 10+ national competition titles. The guy's basically a walking trophy case at this point! 🏆",
        "Mdg has won every major programming contest in Morocco: MOI, JNJD, CodeIT, Game of Code, AMPC, IT-HOLIC... I think he's running out of competitions to dominate! It's like he's collecting achievements like Pokemon cards.",
        "His competition journey is absolutely wild: from being a nervous 15-year-old at his first MOI semi-final to becoming a Codeforces Master and representing Morocco internationally. He made competitive programming look like a walk in the park!",
        "The competition highlights are endless: MOI 2021 champion (with that dramatic last-minute clutch), IOI participant, multiple national titles, and now he's even organizing competitions as head of MOI Scientific Committee. Talk about going from player to game master! 🎮"
      ],
      education: [
        "Mdg's educational journey is impressive: CPGE Moulay Driss (MPSI then MP*), now at EMI (Mohammadia School of Engineers) studying Computer Engineering. He's basically been in the most prestigious programs Morocco has to offer!",
        "From CPGE to EMI - he's been through the most rigorous academic programs in Morocco. And somehow managed to excel in both academics AND competitions simultaneously. How does he do it?",
        "His education path shows his dedication: CPGE Moulay Driss (the intensive prep program), then EMI (the most prestigious engineering school in Morocco). Plus, he's been mentoring others throughout his journey!",
        "Mdg's academic journey is a masterclass in balancing excellence: CPGE MPSI/MP*, then EMI Computer Engineering, all while dominating competitions and helping others. The guy's a multitasking legend!"
      ],
      default: [
        "Hmm, that's an interesting question! I might not have the exact answer, but I can tell you that Mdg is always up to something amazing. Want to ask about his competitions or personality instead?",
        "I'm not sure about that specific detail, but I do know Mdg is constantly working on cool projects and helping others. Maybe ask me about his timeline or achievements?",
        "That's a tough one! Mdg is such a complex person with so many interests. How about we talk about his competitive programming journey or his personality traits instead?",
        "I don't have that info handy, but I can tell you Mdg is the kind of person who would find a way to make any topic interesting! Want to explore his timeline or ask about his competitions?"
      ]
    }
  };

  ngOnInit(): void {
    // Don't add greeting message until modal is opened
  }

  openChat(): void {
    this.isOpen = true;
    if (this.messages.length === 0) {
      this.addBotMessage(this.getRandomResponse('greetings'));
    }
  }

  closeChat(): void {
    this.isOpen = false;
  }

  sendMessage(): void {
    if (!this.currentMessage.trim()) return;

    this.addUserMessage(this.currentMessage);
    const userInput = this.currentMessage.toLowerCase();
    this.currentMessage = '';

    // Simulate typing delay
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
      const response = this.generateResponse(userInput);
      this.addBotMessage(response);
    }, 1000 + Math.random() * 2000);
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
      return this.getRandomResponse('greetings');
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

    // Default response
    return this.getRandomResponse('default');
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
    this.addBotMessage(this.getRandomResponse('greetings'));
  }

  getSuggestions(): string[] {
    return [
      "What's Mdg's personality like?",
      "Tell me about his biggest wins",
      "What's his competitive programming story?",
      "How did he become MOI champion?",
      "What makes him unique?",
      "Tell me about his education journey",
      "What's his funniest achievement?",
      "How did he get into programming?"
    ];
  }

  askSuggestion(suggestion: string): void {
    this.currentMessage = suggestion;
    this.sendMessage();
  }

  scrollToBottom(): void {
    // This will be handled by the template
  }
}
