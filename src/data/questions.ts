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
  // Logical Reasoning - 25 questions
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
  {
    id: 'lr-3',
    topicId: 'logical-reasoning',
    text: 'If "FRIEND" is coded as "HUMJTK", then how will "CANDLE" be coded?',
    options: [
      'EDRGHT',
      'DCQIJG',
      'DCOFMF',
      'ESJFME'
    ],
    correctAnswer: 1,
    explanation: 'In the code, each letter is replaced by the letter that comes two positions after it in the alphabet. So, C→E, A→C, N→P, D→F, L→N, E→G',
    difficulty: 'Medium'
  },
  {
    id: 'lr-4',
    topicId: 'logical-reasoning',
    text: 'Which number would replace the question mark in the series: 3, 6, 11, 18, 27, ?',
    options: [
      '36',
      '38',
      '40',
      '42'
    ],
    correctAnswer: 2,
    explanation: 'The pattern is +3, +5, +7, +9, +11. So the next number would be 27 + 13 = 40.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-5',
    topicId: 'logical-reasoning',
    text: 'If in a certain code, "TERMINAL" is written as "SDQNHMBK", then how is "CREDIT" written in that code?',
    options: [
      'BQCEHSF',
      'DSFCJU',
      'DSFIJU',
      'BQFEHS'
    ],
    correctAnswer: 1,
    explanation: 'In this code, each letter is replaced by the previous letter in the alphabet, and then it\'s reversed. So CREDIT becomes BSFEHSF.',
    difficulty: 'Hard'
  },
  {
    id: 'lr-6',
    topicId: 'logical-reasoning',
    text: 'Five friends are sitting in a row. P is to the left of Q but on the right of R. S is on the right of Q but on the left of T. Who is sitting in the middle?',
    options: [
      'P',
      'Q',
      'R',
      'S'
    ],
    correctAnswer: 1,
    explanation: 'The arrangement is R, P, Q, S, T from left to right. So Q is in the middle.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-7',
    topicId: 'logical-reasoning',
    text: 'In a certain code, "MONKEY" is written as "XDJMNL". How will "TIGER" be written in that code?',
    options: [
      'QDFHS',
      'SHFDT',
      'SDFHS',
      'QDHFS'
    ],
    correctAnswer: 0,
    explanation: 'Each letter is moved 3 places backward in the alphabet. So T→Q, I→F, G→D, E→B, R→O. Thus, TIGER becomes QDFHO.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-8',
    topicId: 'logical-reasoning',
    text: 'If "PAPER" is coded as "SCTGW", how will "PENCIL" be coded?',
    options: [
      'SGPEMP',
      'RGPEKN',
      'SFPDJM',
      'RGPELN'
    ],
    correctAnswer: 2,
    explanation: 'Each letter is replaced by the letter three positions ahead in the alphabet. So P→S, E→H, N→Q, C→F, I→L, L→O. Thus, PENCIL becomes SHQFLO.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-9',
    topicId: 'logical-reasoning',
    text: 'Which of the following diagrams best represents the relationship between Mammals, Dogs, and Pets?',
    options: [
      'Three separate circles',
      'Circle "Dogs" inside circle "Mammals", with circle "Pets" overlapping both',
      'Circle "Dogs" inside both circles "Mammals" and "Pets"',
      'Circle "Dogs" inside circle "Mammals", with circle "Pets" completely separate'
    ],
    correctAnswer: 1,
    explanation: 'All dogs are mammals (Dogs is a subset of Mammals). However, not all dogs are pets, and not all pets are dogs or mammals. So, the circle "Dogs" is inside "Mammals", and "Pets" overlaps with both.',
    difficulty: 'Easy'
  },
  {
    id: 'lr-10',
    topicId: 'logical-reasoning',
    text: 'If A + B means A is the mother of B; A - B means A is the brother of B; A × B means A is the father of B and A ÷ B means A is the sister of B; then which of the following shows that P is the maternal uncle of Q?',
    options: [
      'P - M + Q',
      'P - M × Q',
      'P ÷ M + Q',
      'M + Q - P'
    ],
    correctAnswer: 0,
    explanation: 'P - M means P is the brother of M. M + Q means M is the mother of Q. So, P is the brother of the mother of Q, which means P is the maternal uncle of Q.',
    difficulty: 'Hard'
  },
  {
    id: 'lr-11',
    topicId: 'logical-reasoning',
    text: 'What comes next in the series: J, F, M, A, M, J, J, ?',
    options: [
      'A',
      'S',
      'O',
      'D'
    ],
    correctAnswer: 0,
    explanation: 'These are the first letters of the months: January, February, March, April, May, June, July, August, ...',
    difficulty: 'Easy'
  },
  {
    id: 'lr-12',
    topicId: 'logical-reasoning',
    text: 'In a row of students, Rahul is 15th from the left and Rohan is 15th from the right. If they interchange their positions, Rahul becomes 25th from the left. How many students are there in the row?',
    options: [
      '39',
      '40',
      '41',
      '42'
    ],
    correctAnswer: 0,
    explanation: 'After interchange, Rahul is 25th from left. Originally he was 15th from left. So Rohan was 25th from left. Given Rohan is 15th from right, total students = 25 + 15 - 1 = 39.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-13',
    topicId: 'logical-reasoning',
    text: 'If South-East becomes North, North-East becomes West, and so on, what will North become?',
    options: [
      'South-West',
      'North-West',
      'South-East',
      'South'
    ],
    correctAnswer: 3,
    explanation: 'Each direction is rotated 135° clockwise. So North rotated 135° clockwise becomes South.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-14',
    topicId: 'logical-reasoning',
    text: 'If "ROBUST" is coded as "QNATRS", how is "DIVINE" coded?',
    options: [
      'CHUHMD',
      'CJWJMF',
      'EJWJOD',
      'CHWHMF'
    ],
    correctAnswer: 1,
    explanation: 'The code shifts each letter one place backward in the alphabet. So D→C, I→H, V→U, I→H, N→M, E→D.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-15',
    topicId: 'logical-reasoning',
    text: 'In the sequence 3, 6, 11, 18, what comes next?',
    options: [
      '25',
      '27',
      '29',
      '31'
    ],
    correctAnswer: 1,
    explanation: 'The sequence follows the pattern of adding consecutive odd numbers. 3 + 3 = 6, 6 + 5 = 11, 11 + 7 = 18, 18 + 9 = 27.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-16',
    topicId: 'logical-reasoning',
    text: 'Which of the following has the same relationship as Book : Pages?',
    options: [
      'Pencil : Lead',
      'Building : Rooms',
      'Wood : Tree',
      'Author : Publisher'
    ],
    correctAnswer: 1,
    explanation: 'A book consists of pages, similarly, a building consists of rooms.',
    difficulty: 'Easy'
  },
  {
    id: 'lr-17',
    topicId: 'logical-reasoning',
    text: 'If in a certain code "MATHEMATICS" is written as "LZSGDLZSHBR", how would "CHEMISTRY" be written?',
    options: [
      'BIDLJTUSZ',
      'BGDLHRUSQ',
      'BGDLHRSQX',
      'BIDNHTUSZ'
    ],
    correctAnswer: 2,
    explanation: 'Each letter is replaced by the letter that comes before it in the alphabet. So C→B, H→G, E→D, etc.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-18',
    topicId: 'logical-reasoning',
    text: 'Pointing to a photograph, a man said, "This man\'s son is my son\'s uncle." How is the man in the photograph related to the speaker?',
    options: [
      'Brother',
      'Father',
      'Grandfather',
      'Uncle'
    ],
    correctAnswer: 1,
    explanation: 'If the man\'s son is the uncle of the speaker\'s son, then the man\'s son must be the speaker\'s brother. Therefore, the man in the photograph is the speaker\'s father.',
    difficulty: 'Hard'
  },
  {
    id: 'lr-19',
    topicId: 'logical-reasoning',
    text: 'What comes next in the series: 1, 3, 6, 10, 15, ?',
    options: [
      '18',
      '21',
      '24',
      '30'
    ],
    correctAnswer: 1,
    explanation: 'This is a triangular number sequence. Each number is the sum of its position. So the 6th number would be 1+2+3+4+5+6 = 21.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-20',
    topicId: 'logical-reasoning',
    text: 'If GIVE is coded as 5137 and BAT is coded as 924, how is GATE coded?',
    options: [
      '5247',
      '5427',
      '5724',
      '5147'
    ],
    correctAnswer: 0,
    explanation: 'G=5, I=1, V=3, E=7, B=9, A=2, T=4. So GATE would be 5247.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-21',
    topicId: 'logical-reasoning',
    text: 'A statement followed by two conclusions is given. Choose the conclusion(s) that logically follow(s) from the statement.\nStatement: All pens are books. Some books are pencils.\nConclusions:\nI. Some pens are pencils.\nII. Some pencils are books.',
    options: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Both conclusions I and II follow',
      'Neither conclusion I nor II follows'
    ],
    correctAnswer: 1,
    explanation: 'From "Some books are pencils", we can conclude that "Some pencils are books" (conclusion II). However, we cannot deduce that "Some pens are pencils" (conclusion I) because there might not be any overlap between pens and pencils.',
    difficulty: 'Hard'
  },
  {
    id: 'lr-22',
    topicId: 'logical-reasoning',
    text: 'If "+-" means "divided by", "×÷" means "added to", "÷×" means "subtracted from", and "-+" means "multiplied by", then what is the value of 60 +- 12 ×÷ 4 -+ 3?',
    options: [
      '5',
      '17',
      '19',
      '24'
    ],
    correctAnswer: 3,
    explanation: 'Using the given operations: 60 +- 12 ×÷ 4 -+ 3 = 60 ÷ 12 + 4 × 3 = 5 + 12 = 17',
    difficulty: 'Hard'
  },
  {
    id: 'lr-23',
    topicId: 'logical-reasoning',
    text: 'What comes next in the series? 3, 12, 48, 192, __',
    options: [
      '576',
      '768',
      '384',
      '960'
    ],
    correctAnswer: 1,
    explanation: 'Each term is multiplied by 4 to get the next term. So, 192 × 4 = 768.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-24',
    topicId: 'logical-reasoning',
    text: 'If in a certain language, MADRAS is coded as NBESBT, how is BOMBAY coded in that language?',
    options: [
      'CPNCBZ',
      'CPNCBX',
      'DPNCBZ',
      'CPOCBZ'
    ],
    correctAnswer: 0,
    explanation: 'Each letter is replaced by the next letter in the alphabet. So B→C, O→P, M→N, B→C, A→B, Y→Z.',
    difficulty: 'Medium'
  },
  {
    id: 'lr-25',
    topicId: 'logical-reasoning',
    text: 'In a class of 60 students, 25 play cricket, 20 play football, and 25 play both cricket and tennis. If 10 students play all three games, how many students play exactly one game?',
    options: [
      '15',
      '20',
      '25',
      '30'
    ],
    correctAnswer: 1,
    explanation: 'Let\'s use the formula n(A∪B∪C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(A∩C) + n(A∩B∩C). Given that 25 play cricket, 20 play football, 25 play both cricket and tennis, and 10 play all three. We can calculate the number playing exactly one game.',
    difficulty: 'Hard'
  },
  
  // Quantitative Aptitude - 25 questions
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
  {
    id: 'qa-3',
    topicId: 'quantitative-aptitude',
    text: 'If 12 men can complete a work in 10 days, how many men are required to complete the same work in 8 days?',
    options: [
      '14',
      '15',
      '16',
      '18'
    ],
    correctAnswer: 1,
    explanation: 'Using the formula M1 × D1 = M2 × D2, we get 12 × 10 = M2 × 8, which gives M2 = 15.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-4',
    topicId: 'quantitative-aptitude',
    text: 'A boat goes 20 km upstream and 20 km downstream in 5 hours. It goes 30 km upstream and 30 km downstream in 7 hours. Find the speed of the boat in still water.',
    options: [
      '10 km/h',
      '12 km/h',
      '15 km/h',
      '20 km/h'
    ],
    correctAnswer: 0,
    explanation: 'Let the speed of the boat in still water be x km/h and the speed of the stream be y km/h. Then, 20/(x-y) + 20/(x+y) = 5 and 30/(x-y) + 30/(x+y) = 7. Solving these equations, we get x = 10 km/h.',
    difficulty: 'Hard'
  },
  {
    id: 'qa-5',
    topicId: 'quantitative-aptitude',
    text: 'The difference between simple interest and compound interest on a sum of money at 10% per annum for 2 years is Rs.16. Find the sum.',
    options: [
      'Rs.1,600',
      'Rs.1,500',
      'Rs.1,400',
      'Rs.1,300'
    ],
    correctAnswer: 0,
    explanation: 'Difference = P × (r/100)² = 16, where P is the principal and r is the rate. So, P × (10/100)² = 16, which gives P = 1,600.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-6',
    topicId: 'quantitative-aptitude',
    text: 'A car covers a distance of 816 km in 12 hours. What is the speed of the car in m/s?',
    options: [
      '17 m/s',
      '18 m/s',
      '19 m/s',
      '20 m/s'
    ],
    correctAnswer: 1,
    explanation: 'Speed = 816 km / 12 h = 68 km/h = 68 × 5/18 m/s = 18.89 m/s ≈ 19 m/s.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-7',
    topicId: 'quantitative-aptitude',
    text: 'What is the area of a circle with a radius of 7 cm?',
    options: [
      '154 cm²',
      '144 cm²',
      '134 cm²',
      '124 cm²'
    ],
    correctAnswer: 0,
    explanation: 'Area of a circle = πr² = π(7²) = 49π ≈ 49 × 22/7 = 154 cm²',
    difficulty: 'Easy'
  },
  {
    id: 'qa-8',
    topicId: 'quantitative-aptitude',
    text: 'A shopkeeper sells an item for Rs. 2400 and makes a profit of 20%. What is the cost price of the item?',
    options: [
      'Rs. 1800',
      'Rs. 2000',
      'Rs. 2200',
      'Rs. 2300'
    ],
    correctAnswer: 1,
    explanation: 'Selling Price = Cost Price + Profit. Profit = 20% of Cost Price. So, 2400 = Cost Price + 0.2 × Cost Price = 1.2 × Cost Price. Therefore, Cost Price = 2400 / 1.2 = Rs. 2000.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-9',
    topicId: 'quantitative-aptitude',
    text: 'If the ratio of boys to girls in a class is 5:3 and there are 24 girls, how many boys are there?',
    options: [
      '30',
      '35',
      '40',
      '45'
    ],
    correctAnswer: 2,
    explanation: 'Let the number of boys be 5x and the number of girls be 3x. Given 3x = 24, so x = 8. Therefore, the number of boys = 5x = 5 × 8 = 40.',
    difficulty: 'Easy'
  },
  {
    id: 'qa-10',
    topicId: 'quantitative-aptitude',
    text: 'A man can row 7.5 km/h in still water and he finds that it takes him twice as long to row upstream as to row downstream the same distance. Find the rate of the stream.',
    options: [
      '2 km/h',
      '2.5 km/h',
      '3 km/h',
      '3.5 km/h'
    ],
    correctAnswer: 1,
    explanation: 'Let the speed of the stream be x km/h. Speed downstream = (7.5 + x) km/h and speed upstream = (7.5 - x) km/h. Given that time taken to row upstream is twice the time taken to row downstream, we have (7.5 + x) = 2(7.5 - x). Solving for x, we get x = 2.5 km/h.',
    difficulty: 'Hard'
  },
  {
    id: 'qa-11',
    topicId: 'quantitative-aptitude',
    text: 'What is the value of (0.2)² + (0.03)² + (0.004)²?',
    options: [
      '0.040916',
      '0.040906',
      '0.040016',
      '0.040006'
    ],
    correctAnswer: 0,
    explanation: '(0.2)² = 0.04, (0.03)² = 0.0009, (0.004)² = 0.000016. Adding these, we get 0.04 + 0.0009 + 0.000016 = 0.040916.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-12',
    topicId: 'quantitative-aptitude',
    text: 'A sum of money is to be divided among A, B and C in the ratio 2:3:5. If A gets Rs. 1600, how much will C get?',
    options: [
      'Rs. 2400',
      'Rs. 4000',
      'Rs. 4800',
      'Rs. 8000'
    ],
    correctAnswer: 2,
    explanation: 'Let the shares of A, B, and C be 2x, 3x, and 5x respectively. Given 2x = 1600, so x = 800. Therefore, C\'s share = 5x = 5 × 800 = Rs. 4000.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-13',
    topicId: 'quantitative-aptitude',
    text: 'By selling a watch for Rs. 495, a shopkeeper incurs a loss of 10%. What is the cost price of the watch?',
    options: [
      'Rs. 545',
      'Rs. 550',
      'Rs. 600',
      'Rs. 650'
    ],
    correctAnswer: 1,
    explanation: 'Selling Price = Cost Price - Loss. Loss = 10% of Cost Price. So, 495 = Cost Price - 0.1 × Cost Price = 0.9 × Cost Price. Therefore, Cost Price = 495 / 0.9 = Rs. 550.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-14',
    topicId: 'quantitative-aptitude',
    text: 'A and B can do a piece of work in 12 days. B and C can do it in 15 days. C and A can do it in 20 days. How long will A alone take to do the work?',
    options: [
      '20 days',
      '30 days',
      '40 days',
      '50 days'
    ],
    correctAnswer: 1,
    explanation: 'Let A, B, and C\'s one day\'s work be a, b, and c respectively. Then, a + b = 1/12, b + c = 1/15, c + a = 1/20. Adding these, we get 2(a + b + c) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. So, a + b + c = 1/10. Therefore, a = (a + b + c) - (b + c) = 1/10 - 1/15 = (3 - 2)/30 = 1/30. Thus, A alone can do the work in 30 days.',
    difficulty: 'Hard'
  },
  {
    id: 'qa-15',
    topicId: 'quantitative-aptitude',
    text: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
    options: [
      '45 km/hr',
      '50 km/hr',
      '54 km/hr',
      '55 km/hr'
    ],
    correctAnswer: 1,
    explanation: 'Let the speed of the train be x km/hr. Relative speed = (x - 5) km/hr = (x - 5) × 5/18 m/s. Distance = 125 m. Time = 10 seconds. So, (x - 5) × 5/18 = 125/10 = 12.5. Therefore, x - 5 = 12.5 × 18/5 = 45. Thus, x = 50 km/hr.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-16',
    topicId: 'quantitative-aptitude',
    text: 'If A = x% of y and B = y% of x, then which of the following is true?',
    options: [
      'A is smaller than B',
      'A is greater than B',
      'Relationship between A and B cannot be determined',
      'None of these'
    ],
    correctAnswer: 3,
    explanation: 'A = (x/100) × y = xy/100. B = (y/100) × x = xy/100. Therefore, A = B.',
    difficulty: 'Easy'
  },
  {
    id: 'qa-17',
    topicId: 'quantitative-aptitude',
    text: 'Two trains are moving in opposite directions at 60 km/hr and 90 km/hr respectively. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
    options: [
      '36',
      '45',
      '48',
      '49'
    ],
    correctAnswer: 2,
    explanation: 'Relative speed = (60 + 90) km/hr = 150 km/hr = 150 × 5/18 m/s = 125/3 m/s. Total distance = (1.10 + 0.9) km = 2 km = 2000 m. Time = Distance / Speed = 2000 / (125/3) = 2000 × 3 / 125 = 48 seconds.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-18',
    topicId: 'quantitative-aptitude',
    text: 'A can do a piece of work in 4 days; B can do it in 5 days; and C can do it in 10 days. How long will they take to do it together?',
    options: [
      '20/11 days',
      '40/11 days',
      '60/11 days',
      '80/11 days'
    ],
    correctAnswer: 0,
    explanation: 'A\'s one day\'s work = 1/4, B\'s one day\'s work = 1/5, C\'s one day\'s work = 1/10. (A + B + C)\'s one day\'s work = 1/4 + 1/5 + 1/10 = (5 + 4 + 2)/20 = 11/20. Therefore, they will take 20/11 days to do the work together.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-19',
    topicId: 'quantitative-aptitude',
    text: 'If log₂ x + log₂ 4 = 4, then x is:',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 3,
    explanation: 'log₂ x + log₂ 4 = log₂ (4x) = 4. So, 4x = 2⁴ = 16. Therefore, x = 16/4 = 4.',
    difficulty: 'Medium'
  },
  {
    id: 'qa-20',
    topicId: 'quantitative-aptitude',
    text: 'The cost of fencing a circular field at the rate of Rs. 24 per meter is Rs. 5280. The area of the field is:',
    options: [
      '1750 m²',
      '1950 m²',
      '5544 m²',
      'None of these'
    ],
    correctAnswer: 2,
    explanation: 'Cost of fencing = Rs. 5280. Rate of fencing = Rs. 24 per meter. So, the circumference of the field = 5280/24 = 220 m. Let the radius of the field be r. Then, 2πr = 220. So, r = 220 / (2π) = 220 / (2 × 22
