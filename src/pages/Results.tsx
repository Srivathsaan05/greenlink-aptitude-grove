
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useProgress } from '@/contexts/ProgressContext';
import { topics, getTopicById } from '@/data/topics';
import { 
  BarChart2, 
  Trophy, 
  Calendar, 
  RefreshCw, 
  BookOpen,
  CheckCircle,
  XCircle,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

const Results = () => {
  const navigate = useNavigate();
  const { progress, overallAccuracy, resetTopicProgress } = useProgress();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get topics with progress
  const topicsWithProgress = Object.keys(progress).map(topicId => {
    const topic = getTopicById(topicId);
    const topicProgress = progress[topicId];
    
    if (!topic) return null;
    
    return {
      id: topicId,
      title: topic.title,
      icon: topic.icon,
      category: topic.category,
      questionsAttempted: topicProgress.questionsAttempted,
      correctAnswers: topicProgress.correctAnswers,
      lastAttemptedAt: topicProgress.lastAttemptedAt ? new Date(topicProgress.lastAttemptedAt) : undefined,
      accuracy: topicProgress.questionsAttempted > 0 
        ? (topicProgress.correctAnswers / topicProgress.questionsAttempted) * 100 
        : 0
    };
  }).filter(Boolean);
  
  // Sort topics by last attempted date (most recent first)
  const sortedTopics = [...topicsWithProgress].sort((a, b) => {
    if (!a?.lastAttemptedAt) return 1;
    if (!b?.lastAttemptedAt) return -1;
    return b.lastAttemptedAt.getTime() - a.lastAttemptedAt.getTime();
  });
  
  // Prepare data for charts
  const totalQuestionsAttempted = Object.values(progress).reduce(
    (sum, topicProgress) => sum + topicProgress.questionsAttempted, 0
  );
  
  const totalCorrectAnswers = Object.values(progress).reduce(
    (sum, topicProgress) => sum + topicProgress.correctAnswers, 0
  );
  
  const pieChartData = [
    { name: 'Correct', value: totalCorrectAnswers },
    { name: 'Incorrect', value: totalQuestionsAttempted - totalCorrectAnswers }
  ];
  
  const barChartData = topicsWithProgress.map(topic => ({
    name: topic?.title || '',
    correct: topic?.correctAnswers || 0,
    incorrect: (topic?.questionsAttempted || 0) - (topic?.correctAnswers || 0)
  }));
  
  const handleResetAllProgress = () => {
    Object.keys(progress).forEach(topicId => {
      resetTopicProgress(topicId);
    });
    
    toast({
      title: "All Progress Reset",
      description: "Your progress has been reset for all topics.",
    });
  };
  
  const COLORS = ['#22c55e', '#ef4444'];

  // Check if there's any progress data
  const hasProgress = Object.keys(progress).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="page-container pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">Your Progress</h1>
              <p className="text-slate-600 dark:text-slate-300">
                Track your performance and improvement across all aptitude topics.
              </p>
            </div>
            
            {hasProgress && (
              <Button 
                variant="outline" 
                onClick={handleResetAllProgress}
                className="mt-4 md:mt-0"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset All Progress
              </Button>
            )}
          </motion.div>
          
          {hasProgress ? (
            <>
              <Tabs 
                defaultValue="overview" 
                onValueChange={setActiveTab}
                className="space-y-8"
              >
                <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
                  <TabsTrigger value="overview">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="topics">
                    <BookOpen className="mr-2 h-4 w-4" />
                    By Topic
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-8">
                  {/* Overview stats */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Overall Accuracy</CardDescription>
                        <CardTitle className="text-3xl">{overallAccuracy.toFixed(0)}%</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-slate-500">
                          {totalCorrectAnswers} correct out of {totalQuestionsAttempted} questions
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Topics Attempted</CardDescription>
                        <CardTitle className="text-3xl">{topicsWithProgress.length}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-slate-500">
                          {topics.length - topicsWithProgress.length} topics remaining
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Total Questions</CardDescription>
                        <CardTitle className="text-3xl">{totalQuestionsAttempted}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-slate-500">
                          Across all attempted topics
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  {/* Charts */}
                  <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Accuracy Breakdown</CardTitle>
                        <CardDescription>
                          Distribution of correct and incorrect answers
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieChartData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                              {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance by Topic</CardTitle>
                        <CardDescription>
                          Correct vs incorrect answers for each topic
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={barChartData}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <XAxis type="number" />
                            <YAxis 
                              dataKey="name" 
                              type="category" 
                              width={100}
                              tick={{ fontSize: 12 }}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="correct" stackId="a" fill="#22c55e" name="Correct" />
                            <Bar dataKey="incorrect" stackId="a" fill="#ef4444" name="Incorrect" />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  {/* Recent activity */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                              Your recently attempted topics
                            </CardDescription>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveTab('topics')}
                          >
                            View All
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {sortedTopics.slice(0, 5).map((topic) => (
                            <div 
                              key={topic?.id} 
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="text-2xl">{topic?.icon}</div>
                                <div>
                                  <div className="font-medium">{topic?.title}</div>
                                  <div className="text-sm text-slate-500">
                                    {topic?.lastAttemptedAt?.toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <div className="font-medium">{topic?.accuracy.toFixed(0)}%</div>
                                  <div className="text-sm text-slate-500">
                                    {topic?.correctAnswers}/{topic?.questionsAttempted}
                                  </div>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => navigate(`/topics/${topic?.id}`)}
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="topics">
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {sortedTopics.map((topic) => (
                      <Card key={topic?.id}>
                        <CardHeader className="pb-2">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{topic?.icon}</div>
                              <div>
                                <CardTitle>{topic?.title}</CardTitle>
                                <CardDescription>{topic?.category}</CardDescription>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div>
                                <div className="text-sm text-slate-500">Last attempt</div>
                                <div className="font-medium">
                                  {topic?.lastAttemptedAt?.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => navigate(`/topics/${topic?.id}`)}
                              >
                                Practice Again
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-full">
                                <Trophy className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <div className="text-sm text-slate-500">Accuracy</div>
                                <div className="font-medium">{topic?.accuracy.toFixed(0)}%</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                                <CheckCircle className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-sm text-slate-500">Correct</div>
                                <div className="font-medium">{topic?.correctAnswers} answers</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-full">
                                <XCircle className="h-5 w-5 text-red-600" />
                              </div>
                              <div>
                                <div className="text-sm text-slate-500">Incorrect</div>
                                <div className="font-medium">
                                  {(topic?.questionsAttempted || 0) - (topic?.correctAnswers || 0)} answers
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${topic?.accuracy || 0}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center p-4 mb-4 rounded-full bg-slate-100 dark:bg-slate-800">
                <BarChart2 className="h-10 w-10 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No progress data yet</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
                Start practicing with our aptitude topics to track your performance and improvement.
              </p>
              <Button onClick={() => navigate('/topics')}>
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Topics
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
