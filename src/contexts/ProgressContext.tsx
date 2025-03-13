
import React, { createContext, useState, useContext, useEffect } from 'react';

type TopicProgress = {
  [topicId: string]: {
    questionsAttempted: number;
    correctAnswers: number;
    lastAttemptedAt?: Date;
  };
};

interface ProgressContextType {
  progress: TopicProgress;
  updateProgress: (topicId: string, isCorrect: boolean) => void;
  getTopicProgress: (topicId: string) => { questionsAttempted: number; correctAnswers: number; lastAttemptedAt?: Date };
  resetTopicProgress: (topicId: string) => void;
  overallAccuracy: number;
}

const defaultProgress: TopicProgress = {};

const ProgressContext = createContext<ProgressContextType>({
  progress: defaultProgress,
  updateProgress: () => {},
  getTopicProgress: () => ({ questionsAttempted: 0, correctAnswers: 0 }),
  resetTopicProgress: () => {},
  overallAccuracy: 0,
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<TopicProgress>(() => {
    const saved = localStorage.getItem('greenlink-progress');
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  const [overallAccuracy, setOverallAccuracy] = useState(0);

  useEffect(() => {
    localStorage.setItem('greenlink-progress', JSON.stringify(progress));
    
    // Calculate overall accuracy
    let totalAttempted = 0;
    let totalCorrect = 0;
    
    Object.values(progress).forEach(topicProgress => {
      totalAttempted += topicProgress.questionsAttempted;
      totalCorrect += topicProgress.correctAnswers;
    });
    
    setOverallAccuracy(totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0);
  }, [progress]);

  const updateProgress = (topicId: string, isCorrect: boolean) => {
    setProgress(prev => {
      const currentTopicProgress = prev[topicId] || { questionsAttempted: 0, correctAnswers: 0 };
      
      return {
        ...prev,
        [topicId]: {
          questionsAttempted: currentTopicProgress.questionsAttempted + 1,
          correctAnswers: currentTopicProgress.correctAnswers + (isCorrect ? 1 : 0),
          lastAttemptedAt: new Date(),
        }
      };
    });
  };

  const getTopicProgress = (topicId: string) => {
    return progress[topicId] || { questionsAttempted: 0, correctAnswers: 0 };
  };

  const resetTopicProgress = (topicId: string) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[topicId];
      return newProgress;
    });
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      updateProgress, 
      getTopicProgress,
      resetTopicProgress,
      overallAccuracy
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
