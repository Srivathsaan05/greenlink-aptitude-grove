
export interface Question {
  id: string;
  topicId: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const questions: Question[] = [
  // Logical Reasoning
  {
    id: 'lr-1',
    topicId: 'logical-reasoning',
    text: 'If all cats are animals, and some animals are wild, which of the following statements must be true?',
    options: [
      'All cats are wild',
      'Some cats are wild',
      'No cats are wild',
      'None of the above'
    ],
    correctAnswer: 3,
    explanation: 'From the given premises, we cannot determine whether cats are wild or not. While all cats are animals, we only know that some animals are wild, but we don\'t know which ones.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-2',
    topicId: 'logical-reasoning',
    text: 'In a row of children, Arya is 7th from the left and Bran is 9th from the right. If they interchange their positions, Arya becomes 11th from the left. How many children are there in the row?',
    options: [
      '17',
      '18',
      '19',
      '20'
    ],
    correctAnswer: 2,
    explanation: 'Initially, Arya is at position 7 from left. After interchange, Arya is at position 11 from left. This means Bran was initially at position 11 from left. Given that Bran is 9th from right, total number = 11 + 9 - 1 = 19.',
    difficulty: 'Medium'
  },
  
  // Quantitative Aptitude
  {
    id: 'qa-1',
    topicId: 'quantitative-aptitude',
    text: 'The average of 5 consecutive numbers is 15. What is the largest of these numbers?',
    options: [
      '13',
      '15',
      '17',
      '19'
    ],
    correctAnswer: 2,
    explanation: 'If the average of 5 consecutive numbers is 15, then the middle number is 15. The sequence is 13, 14, 15, 16, 17. So the largest number is 17.',
    difficulty: 'Easy'
  },
  {
    id: 'qa-2',
    topicId: 'quantitative-aptitude',
    text: 'A train travels at a speed of 60 km/h. How long will it take to travel 240 km?',
    options: [
      '3 hours',
      '4 hours',
      '5 hours',
      '6 hours'
    ],
    correctAnswer: 1,
    explanation: 'Time = Distance / Speed = 240 km / 60 km/h = 4 hours',
    difficulty: 'Easy'
  },
  
  // HCF and LCM
  {
    id: 'hcf-1',
    topicId: 'hcf-lcm',
    text: 'What is the HCF of 48 and 60?',
    options: [
      '6',
      '12',
      '24',
      '36'
    ],
    correctAnswer: 1,
    explanation: 'Prime factorization of 48 = 2^4 × 3. Prime factorization of 60 = 2^2 × 3 × 5. The common factors are 2^2 × 3 = 12.',
    difficulty: 'Easy'
  },
  {
    id: 'hcf-2',
    topicId: 'hcf-lcm',
    text: 'The LCM of two numbers is 120 and their HCF is 10. If one of the numbers is 40, what is the other number?',
    options: [
      '30',
      '60',
      '80',
      '120'
    ],
    correctAnswer: 0,
    explanation: 'For two numbers a and b, a × b = HCF × LCM. So, 40 × other number = 10 × 120 = 1200. Therefore, other number = 1200 ÷ 40 = 30.',
    difficulty: 'Medium'
  },
  
  // Averages
  {
    id: 'avg-1',
    topicId: 'averages',
    text: 'The average of 10 numbers is 15. If one more number is included, the average becomes 16. What is the new number?',
    options: [
      '25',
      '26',
      '27',
      '28'
    ],
    correctAnswer: 1,
    explanation: 'Sum of 10 numbers = 10 × 15 = 150. For average to be 16 with 11 numbers, sum = 11 × 16 = 176. Therefore, the new number = 176 - 150 = 26.',
    difficulty: 'Medium'
  },
  
  // Percentages
  {
    id: 'pct-1',
    topicId: 'percentages',
    text: 'If the price of a product increases by 20% and then decreases by 20%, what is the net percentage change?',
    options: [
      '0% (no change)',
      '4% decrease',
      '4% increase',
      '40% decrease'
    ],
    correctAnswer: 1,
    explanation: 'Let\'s assume the initial price is $100. After 20% increase, it becomes $120. After 20% decrease from $120, it becomes $120 × 0.8 = $96. So the net change is -$4, which is a 4% decrease from the original price.',
    difficulty: 'Medium'
  },
  
  // Profit and Loss
  {
    id: 'pl-1',
    topicId: 'profit-loss',
    text: 'A shopkeeper sells an article at a profit of 20%. If the cost price is $250, what is the selling price?',
    options: [
      '$280',
      '$300',
      '$320',
      '$350'
    ],
    correctAnswer: 1,
    explanation: 'Selling Price = Cost Price + Profit = $250 + 20% of $250 = $250 + $50 = $300',
    difficulty: 'Easy'
  },
  
  // Ratios and Proportions
  {
    id: 'ratio-1',
    topicId: 'ratio-proportions',
    text: 'If the ratio of boys to girls in a class is a class is 5:4, and there are 45 students in total, how many girls are there?',
    options: [
      '20',
      '25',
      '27',
      '20'
    ],
    correctAnswer: 0,
    explanation: 'Let\'s denote the number of boys as 5x and girls as 4x. So, 5x + 4x = 45, which gives 9x = 45, therefore x = 5. Number of girls = 4x = 4 × 5 = 20.',
    difficulty: 'Easy'
  },
  
  // Syllabus
  {
    id: 'syl-1',
    topicId: 'syllabus-overview',
    text: 'Which of the following topics is typically NOT included in a quantitative aptitude test?',
    options: [
      'Percentages',
      'Time and Distance',
      'Literature',
      'Data Interpretation'
    ],
    correctAnswer: 2,
    explanation: 'Literature is not a part of quantitative aptitude tests. Quantitative aptitude tests focus on mathematical concepts and numerical problem-solving abilities.',
    difficulty: 'Easy'
  },
  
  // Verbal Ability
  {
    id: 'va-1',
    topicId: 'verbal-ability',
    text: 'Choose the word that is most nearly OPPOSITE in meaning to "BENEVOLENT".',
    options: [
      'Charitable',
      'Malevolent',
      'Generous',
      'Beneficial'
    ],
    correctAnswer: 1,
    explanation: 'Benevolent means "well-meaning and kindly." Its opposite is "malevolent," which means "having or showing a wish to do evil to others."',
    difficulty: 'Medium'
  }
];

export const getQuestionsByTopic = (topicId: string): Question[] => {
  return questions.filter(question => question.topicId === topicId);
};

export const getQuestionById = (id: string): Question | undefined => {
  return questions.find(question => question.id === id);
};
