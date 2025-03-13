import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { TopicCard } from '@/components/TopicCard';
import { DeveloperInfo } from '@/components/DeveloperInfo';
import { topics, Topic, getAllCategories } from '@/data/topics';
import { 
  ChevronRight, 
  BarChart2, 
  BookOpen, 
  Brain, 
  Calculator 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();
  const [featuredCategory, setFeaturedCategory] = useState<string>('Quantitative Aptitude');
  const categories = getAllCategories();
  
  // Get featured topics based on selected category
  const featuredTopics = topics
    .filter(topic => topic.category === featuredCategory)
    .slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Master Your Aptitude Skills
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Enhance your logical reasoning, quantitative aptitude, and verbal skills with our 
              comprehensive practice platform designed for students and professionals.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/topics')}
                className="rounded-full bg-green-600 hover:bg-green-700 text-white"
              >
                Explore All Topics
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/results')}
                className="rounded-full border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                View My Progress
                <BarChart2 className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Topics */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Topics</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Start your aptitude journey with these carefully selected topics 
              designed to build your foundational skills.
            </p>
            
            {/* Category Tabs */}
            <Tabs 
              defaultValue={featuredCategory} 
              onValueChange={setFeaturedCategory}
              className="mt-8 max-w-md mx-auto"
            >
              <TabsList className="grid grid-cols-2 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category === 'Logical Reasoning' ? (
                      <Brain className="mr-2 h-4 w-4" />
                    ) : category === 'Quantitative Aptitude' ? (
                      <Calculator className="mr-2 h-4 w-4" />
                    ) : (
                      <BookOpen className="mr-2 h-4 w-4" />
                    )}
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {topics
                      .filter(topic => topic.category === category)
                      .slice(0, 3)
                      .map((topic) => (
                        <motion.div key={topic.id} variants={itemVariants}>
                          <TopicCard topic={topic} />
                        </motion.div>
                      ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
            
            <Button 
              onClick={() => navigate('/topics')}
              variant="outline" 
              className="mt-10"
            >
              View All Topics
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GreenLink?</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our platform is designed to help you succeed in aptitude tests with a focus on 
              comprehensive learning and practical problem-solving.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Comprehensive Coverage",
                description: "Access a wide range of topics from logical reasoning to quantitative aptitude, designed to cover all aspects of aptitude testing.",
                icon: BookOpen
              },
              {
                title: "Track Your Progress",
                description: "Monitor your performance with detailed analytics and insights to identify strengths and areas for improvement.",
                icon: BarChart2
              },
              {
                title: "Learn by Practice",
                description: "Enhance your skills through practical problem-solving with our extensive question bank and detailed explanations.",
                icon: Brain
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center"
              >
                <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-green-50 dark:bg-green-900/30">
                  <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Aptitude Skills?</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Start your journey to mastering aptitude tests with our carefully crafted curriculum 
            and personalized learning experience.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/topics')}
            className="rounded-full bg-green-600 hover:bg-green-700 text-white"
          >
            Start Learning Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      {/* Developer Info Section */}
      <DeveloperInfo />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-5 w-5 text-green-600" />
            <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              GreenLink
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} GreenLink Aptitude. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
