
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Question } from '@/data/questions';
import { useProgress } from '@/contexts/ProgressContext';
import { 
  AlertCircle, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  isLast: boolean;
  showProgress?: boolean;
}

export function QuestionCard({ question, onNext, isLast, showProgress = true }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { updateProgress } = useProgress();
  
  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  }, [question.id]);
  
  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Select an answer",
        description: "Please select an answer before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setIsSubmitted(true);
    updateProgress(question.topicId, correct);
    
    toast({
      title: correct ? "Correct!" : "Incorrect",
      description: correct 
        ? "Well done! You got it right." 
        : "Don't worry, keep learning and try again.",
      variant: correct ? "default" : "destructive",
    });
  };
  
  const handleOptionSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden animate-scale-in border dark:border-slate-800 shadow-md">
      <CardHeader className="p-6 border-b bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
            {question.text}
          </CardTitle>
          <Badge variant={question.difficulty === 'Easy' ? 'outline' : question.difficulty === 'Medium' ? 'secondary' : 'default'}>
            {question.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <RadioGroup value={selectedAnswer?.toString()} className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center space-x-2 rounded-lg border p-4 transition-all cursor-pointer",
                isSubmitted && index === question.correctAnswer && "border-green-500 bg-green-50 dark:bg-green-950/20",
                isSubmitted && selectedAnswer === index && index !== question.correctAnswer && "border-red-500 bg-red-50 dark:bg-red-950/20",
                !isSubmitted && "hover:border-green-200 dark:hover:border-green-800 hover:bg-slate-50 dark:hover:bg-slate-900/50"
              )}
              onClick={() => handleOptionSelect(index)}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                disabled={isSubmitted}
                className={cn(
                  isSubmitted && index === question.correctAnswer && "text-green-500 border-green-500",
                  isSubmitted && selectedAnswer === index && index !== question.correctAnswer && "text-red-500 border-red-500"
                )}
              />
              <label
                htmlFor={`option-${index}`}
                className="flex-1 text-base cursor-pointer"
              >
                {option}
              </label>
              {isSubmitted && index === question.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {isSubmitted && selectedAnswer === index && index !== question.correctAnswer && (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>

        {isSubmitted && (
          <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border animate-fade-in">
            <h4 className="font-semibold mb-2 flex items-center">
              <span className="mr-2">Explanation</span>
              {isCorrect ? (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-800">
                  Correct
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-800">
                  Incorrect
                </Badge>
              )}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">{question.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 border-t bg-slate-50/50 dark:bg-slate-900/50 flex justify-between">
        {!isSubmitted ? (
          <Button onClick={handleSubmit} disabled={selectedAnswer === null} className="w-full">
            Submit Answer
          </Button>
        ) : (
          <Button onClick={onNext} variant="default" className="w-full flex items-center justify-center">
            {isLast ? "Finish" : "Next Question"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
