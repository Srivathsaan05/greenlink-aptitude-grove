
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Topic } from '@/data/topics';
import { useProgress } from '@/contexts/ProgressContext';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TopicCardProps {
  topic: Topic;
  className?: string;
}

export function TopicCard({ topic, className }: TopicCardProps) {
  const { getTopicProgress } = useProgress();
  const progress = getTopicProgress(topic.id);
  
  const completionPercentage = topic.questionCount > 0 
    ? Math.min(100, (progress.questionsAttempted / topic.questionCount) * 100) 
    : 0;
  
  const accuracy = progress.questionsAttempted > 0 
    ? (progress.correctAnswers / progress.questionsAttempted) * 100 
    : 0;

  // Format the last attempted date if it exists
  const lastAttempted = progress.lastAttemptedAt 
    ? new Date(progress.lastAttemptedAt).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      }) 
    : null;

  return (
    <Link to={`/topics/${topic.id}`}>
      <Card className={cn(
        "overflow-hidden card-hover h-full transition-all duration-300 border dark:border-slate-800", 
        className
      )}>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div className="space-y-1.5">
              <div className="text-xl font-semibold">{topic.title}</div>
              <div className="flex items-center space-x-2">
                <Badge variant={topic.difficulty === 'Easy' ? 'outline' : topic.difficulty === 'Medium' ? 'secondary' : 'default'}>
                  {topic.difficulty}
                </Badge>
                <Badge variant="outline" className="bg-slate-50 dark:bg-slate-900">
                  {topic.category}
                </Badge>
              </div>
            </div>
            <div className="text-3xl">
              {topic.icon}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{topic.description}</p>
        </CardContent>
        <CardFooter className="p-4 border-t bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-start space-y-2">
          {progress.questionsAttempted > 0 ? (
            <>
              <div className="w-full">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{Math.round(completionPercentage)}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                  <div
                    className="bg-green-500 h-1.5 rounded-full"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                  <span>{accuracy.toFixed(0)}% accuracy</span>
                </div>
                {lastAttempted && (
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{lastAttempted}</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
              <BookOpen className="h-4 w-4 mr-2 text-green-500" />
              <span>{topic.questionCount} questions</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
