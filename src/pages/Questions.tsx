
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { QuestionCard } from '@/components/QuestionCard';
import { getTopicById } from '@/data/topics';
import { getQuestionsByTopic } from '@/data/questions';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, Loader, RefreshCw, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Questions = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { getTopicProgress, resetTopicProgress } = useProgress();
  
  const topic = topicId ? getTopicById(topicId) : undefined;
  const questions = topicId ? getQuestionsByTopic(topicId) : [];
  
  const progress = topicId ? getTopicProgress(topicId) : { questionsAttempted: 0, correctAnswers: 0 };
  const accuracy = progress.questionsAttempted > 0 
    ? (progress.correctAnswers / progress.questionsAttempted) * 100 
    : 0;
  
  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [topicId]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      navigate(`/results`);
      toast({
        title: "Topic Completed",
        description: `You've completed the ${topic?.title} topic!`,
      });
    }
  };
  
  const handleResetProgress = () => {
    if (topicId) {
      resetTopicProgress(topicId);
      toast({
        title: "Progress Reset",
        description: `Your progress for ${topic?.title} has been reset.`,
      });
    }
  };

  if (!topic || questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="page-container pt-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Sorry, we couldn't find the topic you're looking for.
          </p>
          <Button onClick={() => navigate('/topics')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Topics
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="page-container pt-24">
        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader className="h-10 w-10 animate-spin text-green-600 mb-4" />
              <p className="text-lg font-medium">Loading questions...</p>
            </div>
          ) : (
            <>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/topics')}
                    className="mb-4"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Topics
                  </Button>
                  
                  {progress.questionsAttempted > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleResetProgress}
                      className="mb-4"
                    >
                      <RefreshCw className="mr-2 h-3 w-3" />
                      Reset Progress
                    </Button>
                  )}
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{topic.icon}</span>
                      <h1 className="text-2xl font-bold">{topic.title}</h1>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                      {topic.description}
                    </p>
                  </div>
                  
                  {progress.questionsAttempted > 0 && (
                    <div className="bg-white dark:bg-slate-800 shadow-sm rounded-lg p-2 text-center min-w-[100px]">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round(accuracy)}%
                      </div>
                      <div className="text-xs text-slate-500">Accuracy</div>
                    </div>
                  )}
                </div>
                
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-full h-2 mb-6">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm mb-8">
                  <span className="font-medium">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-slate-500">
                    {progress.questionsAttempted > 0 ? `${progress.correctAnswers}/${progress.questionsAttempted} Correct` : ''}
                  </span>
                </div>
              </motion.div>
              
              <QuestionCard
                question={questions[currentQuestionIndex]}
                onNext={handleNextQuestion}
                isLast={currentQuestionIndex === questions.length - 1}
              />
              
              {/* Topic Information */}
              <motion.div 
                className="mt-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  <h3 className="text-lg font-semibold">About this Topic</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  This topic covers essential concepts in {topic.title.toLowerCase()} to help you 
                  master aptitude tests and competitive exams.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 mb-1">Category</p>
                    <p className="font-medium">{topic.category}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Difficulty</p>
                    <p className="font-medium">{topic.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Total Questions</p>
                    <p className="font-medium">{questions.length}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Attempted</p>
                    <p className="font-medium">{progress.questionsAttempted} questions</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
