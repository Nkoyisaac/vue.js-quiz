let app = new Vue({
    el: "#app",
    methods: {
        next_quiz() {
            this.score_method()
            this.current_quiz++
            alert(this.score)
            if(this.score == 1) {
                alert(this.messages[0].message1)
            }
            if(this.score == 5){
                alert(this.messages[1].message2)
            } if(this.score == 20){
                alert(this.messages[2].message3)
            }
               
        },       
        prev_quiz() {
            this.current_quiz--
        },
        score_method() {
       if (this.current_selection == this.quizs[this.current_quiz].correctAnswer) {
           this.score++
       }
      
    }
},

    data:{ 
        message:"Welcome to the quiz",
        messages:[{message1:"humble beginning!"},
                  {message2:"you are the hero that we need!"},
                  {message3:"Congratulations!!! you ve made it"}
                ],
        score:0,
        current_selection:0,
        current_quiz: 0,
        quizs: [
        {title: 'test1', 
        Number: 1, 
        question: 'what is the largest living animal?',
        answers: ['elephant', ' blue whale', 'giraffe', 'buffalo'],
        correctAnswer: 'blue whale'},
        {title: 'test2',
         Number: 2, 
         question: 'Against which illness do you use insuline?',
         answers: ['high blood pressure', 'adiposity', 'diabetes', 'cardiac infection'],
         correctAnswer: 'diabetes'},
        {title: 'test3',
         Number: 3,
         question: 'what is the biggest city in USA according to the mass of metropolitan area?', 
         answers: ['Los Angeles', 'New york', 'chicago', 'san diego'],correctAnswer: 'New york' },
        {title: 'test4',
         Number: 4, 
         question: 'which word does the "e" in e-mail stand for?', answers: ['explain', 'electronic', 'execute', 'exact'],correctAnswer: 'electronic'},
        {title: 'test5', Number: 5, question: 'how much % of the world is covered with water?',answers: ['92%', '63%', '37%', '71%'],correctAnswer: '71%'},
        {title: 'test6', Number: 6, question: 'which is the longest river in the world?',answers: ['nil', 'congo', 'mississipi', 'amazon'],correctAnswer: 'amazon' },
        {title: 'test7', Number: 7, question: 'how many teeth does an adult human usualy have?',answers: ['12-16', '28-32', '16-24', '32-36'],correctAnswer: '28-32'},
        {title: 'test8', Number: 8, question: 'who developed the theory of evolution?',answers: ['Isaac Newton', 'Chareles Darwin', 'Pythagore', 'Davinci'],correctAnswer: 'boat' },
        {title: 'test9', Number: 9, question: 'which one of this animal is a fish?', answers: ['Shark', 'Whale', 'Dolphin', 'Seal'],correctAnswer: 'Shark'},
        {title: 'test10', Number: 10, question: 'which one of these numbers is without rest dividable through the numbers : 1,2,3,4,5,6?',answers: ['42', '40', '60', '128'],correctAnswer: '60'},
        {title: 'test11', Number: 11, question: 'teh trialthlon is made of which 3 disciplines?', answers: ['Running,jumping,cycling', 'Running,swimming,cycling', 'Jumping,cycling,swimming', 'Running,jumping,swimming'],correctAnswer: 'boat' },
        {title: 'test12', Number: 12, question: 'that is a question',answers: ['car', 'truck', 'bike', 'boat'],correctAnswer: 'boat' },
        {title: 'test13', Number: 13, question: 'what is the question', answers: ['car', 'truck', 'bike', 'boat'], correctAnswer: 'boat'},
        {title: 'test14', Number: 14, question: 'these are the questions', answers: ['car', 'truck', 'bike', 'boat'], correctAnswer: 'boat'},
        {title: 'test15', Number: 15, question: 'this is a question', answers: ['car', 'truck', 'bike', 'boat'],correctAnswer: 'boat'},
        {title: 'test16', Number: 16, question: 'this is a question',answers: ['car', 'truck', 'bike', 'boat'], correctAnswer: 'boat'},
        {title: 'test17', Number: 17, question: 'this is a question',answers: ['car', 'truck', 'bike', 'boat'],correctAnswer: 'bike'},
        {title: 'test18', Number: 18, question: 'this is a question', answers: ['car', 'truck', 'bike', 'boat'], correctAnswer: 'boat'},
        {title: 'test19', Number: 19, question: 'this is a question',answers: ['car', 'truck', 'bike', 'boat'], correctAnswer: 'truck'},
        {title: 'test20', Number: 20, question: 'this is a question', answers: ['car', 'truck', 'bike', 'boat'],correctAnswer: 'boat' }
        ]
        }
    
})
    