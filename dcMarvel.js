console.log('things linked correctly')
let index = 0;
//const answers = {}
let score = 0;
//below are the questions in an object
const questions = [
  {
    question: " How many children does Batman have? (not adopted)",
    a: "One",
    b: "Two",
    c: "Zero",
    correctAnswer: 'Two',
},
{
    question: " How does Cyclopses beam blast work?",
    a: "He is a solar battery mush like Superman and focuses the solar energy into his eyes to create the beam.",
    b: "He has the ability to change the kinetic energy of the photons in his sight to redirect them to what he is looking at",
    c: "His eyes are a portal to another dimension and its energy coming from that dimension.",
    correctAnswer: 'His eyes are a portal to another dimension and its energy coming from that dimension.',
},
{
    question: " True or False, Wonder Woman's creator was into bondage which is why she has a rope that makes men tell the truth and wears shackles on her wrists.",
    a: "True",
    b: "False",
    c: "I've noticed but never put much thought into it.",
    correctAnswer: 'True',
},
{
    question: " In Watchmen (1986) how was Ozymandias stopped?",
    a: "Dr. Manhatten kills him",
    b: "He comes to his sences that killing thousands to save millions is not the way to do things",
    c: "He isnt stopped because he set his plans into motion 35 minutes ago",
    correctAnswer: 'He isnt stopped because he set his plans into motion 35 minutes ago',
},
{
    question: " What two things does the 'S' on Supermans chest stand for?",
    a: "Savior, it is the Kents family crest",
    b: "Brave, Super",
    c: "It is an insignia of the house of El, Hope",
    correctAnswer: 'It is an insignia of the house of El, Hope',
},
{
    question: " Who is an omega level mutant?",
    a: "Wolverine",
    b: "Colossus",
    c: "Iceman",
    correctAnswer: 'Iceman',
},
{
    question: " Which age Superman is strongest?",
    a: "Bronze",
    b: "Silver",
    c: "Modern",
    correctAnswer: 'Silver',
},
{
    question: " What is the name of Beta Ray Bill's hammer?",
    a: "Stormbreaker",
    b: "Leetha of the 7th House of K",
    c: "Gungnir",
    correctAnswer: 'Stormbreaker',
},
{
    question: " In order who used the name The Flash?",
    a: "Barry Allen, Al Simmons, Guy Gardner",
    b: "Jason Todd, Wally West, Terry Mcginnis",
    c: "Jay Garrick, Barry Allen, Wally West",
    correctAnswer: 'Jay Garrick, Barry Allen, Wally West',
},
{
    question: " Why is Lobo the last Czarnian?",
    a: "They all died when the planet exploded",
    b: "They are an ancient race long gone",
    c: "Lobo killed them all so he can be unique",
    correctAnswer: 'Lobo killed them all so he can be unique',
  },
];
const renderQuestion = () => {
  let currentQuestion = questions[index];
  let q = document.querySelector('#question');
  let a = document.querySelector('#one');
  let b = document.querySelector('#two');
  let c = document.querySelector('#three');
  q.innerHTML = currentQuestion.question;
  a.innerHTML = currentQuestion.a;
  b.innerHTML = currentQuestion.b;
  c.innerHTML = currentQuestion.c;
}
renderQuestion();
const nextQuestion = () => {
  index++;
  renderQuestion();
}
//reset quiz
const resetQuiz = () => {
  score = 0;
  index = 0;
  console.log(score);
  renderQuestion();
}
let reset = document.querySelector('#reset');
reset.addEventListener('click', event => resetQuiz())

let answer = document.querySelector('.answers');
    answer.addEventListener('click', event => {
      if (event.target.innerHTML == questions[index].correctAnswer) {
        let newScore = score += 1
        let total = document.querySelector(".score")
        total.innerHTML = `Score: ${newScore}`
      }
   console.log(score)
   nextQuestion()
 })
 let total = document.querySelector('.score')
    total.innerHTML = `Score: ${score}`
