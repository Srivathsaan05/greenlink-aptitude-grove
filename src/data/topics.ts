
export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionCount: number;
  category: 'Logical Reasoning' | 'Quantitative Aptitude' | 'Syllabus' | 'Other';
}

export const topics: Topic[] = [
  {
    id: 'logical-reasoning',
    title: 'Logical Reasoning',
    description: 'Develop critical thinking abilities and solve complex logical problems',
    icon: '🧠',
    difficulty: 'Medium',
    questionCount: 15,
    category: 'Logical Reasoning'
  },
  {
    id: 'quantitative-aptitude',
    title: 'Quantitative Aptitude',
    description: 'Master mathematical concepts and numerical problem-solving techniques',
    icon: '🔢',
    difficulty: 'Medium',
    questionCount: 25,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'hcf-lcm',
    title: 'HCF and LCM',
    description: 'Learn to calculate HCF and LCM efficiently for various applications',
    icon: '📊',
    difficulty: 'Easy',
    questionCount: 10,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'averages',
    title: 'Averages',
    description: 'Understand and apply the concept of averages in different scenarios',
    icon: '📈',
    difficulty: 'Easy',
    questionCount: 12,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'percentages',
    title: 'Percentages',
    description: 'Master calculation and application of percentages in various contexts',
    icon: '💯',
    difficulty: 'Easy',
    questionCount: 15,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'profit-loss',
    title: 'Profit and Loss',
    description: 'Analyze and solve problems related to profit, loss, and discounts',
    icon: '💰',
    difficulty: 'Medium',
    questionCount: 20,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'ratio-proportions',
    title: 'Ratios and Proportions',
    description: 'Understand the relationship between quantities through ratios and proportions',
    icon: '⚖️',
    difficulty: 'Medium',
    questionCount: 18,
    category: 'Quantitative Aptitude'
  },
  {
    id: 'syllabus-overview',
    title: 'Syllabus Overview',
    description: 'Get familiar with the aptitude test syllabus and preparation strategy',
    icon: '📝',
    difficulty: 'Easy',
    questionCount: 8,
    category: 'Syllabus'
  },
  {
    id: 'verbal-ability',
    title: 'Verbal Ability',
    description: 'Enhance vocabulary, grammar, and comprehension skills',
    icon: '📚',
    difficulty: 'Medium',
    questionCount: 20,
    category: 'Other'
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getTopicsByCategory = (category: Topic['category']) => {
  return topics.filter(topic => topic.category === category);
};

export const getAllCategories = (): Topic['category'][] => {
  return Array.from(new Set(topics.map(topic => topic.category)));
};
