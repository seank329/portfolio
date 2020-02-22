import quizApp from './images/quizApp.png';
import starWars from './images/starWars.png';
import petful from './images/petful.png';
import spacedRep from './images/spacedRep.png';

export default [

   {
       title: 'Quiz App',
       imageURL: quizApp,
       imageAlt:'Quiz App',
       description: `An application designed to test the user's knowledge of country capitals`,
       techList: 'HTML, CSS, JavaScript, jQuery',
       linkLive: 'https://seank329.github.io/',
       linkRepo: 'https://github.com/thinkful-ei-gecko/Sean-QuizAppSolo'
   },
   {
       title: 'Star Wars API Search',
       imageURL: starWars,
       imageAlt: 'Star Wars',
       description: `A front-end allowing users to search the Star Wars API (SWAPI)`,
       techList: 'HTML, CSS, JavaScript, ReactJS',
       linkLive: 'https://sean-star-wars-api.now.sh/',
       linkRepo:'https://github.com/thinkful-ei-heron/StarWars-Sean.git'
   },
   {
       title: 'Petful',
       imageURL: petful,
       imageAlt: 'Petful',
       description: `A mock website for an animal shelter allowing users to adopt animals. Queues mimic adoption process with it's "FIFO" business model.`,
       techList:'ReactJS, HTML, CSS, JavaScript, NodeJS, ExpressJS',
       linkLive: 'https://petful-client-sean-andrea.andreabender.now.sh/',
       linkRepo: 'https://github.com/thinkful-ei-heron/Petful-Server-Sean-Andrea, https://github.com/thinkful-ei-heron/Petful-Client-Sean-Andrea'
   },
   {
       title: 'German Language with Spaced Repetition',
       imageURL: spacedRep,
       imageAlt: 'Spaced Repetition',
       description: `Full-stack implementation of the spaced-repetition language learning technique mimicking flashcards. Utilizes linked-list data type.`,
       techList: 'ReactJS, CSS, JavaScript, NodeJS, ExpressJS, PostgreSQL',
       linkLive: 'https://spaced-repetition-client.rbannal.now.sh/register',
       linkRepo:'https://github.com/thinkful-ei-heron/spaced-repetition-api-alex-sean, https://github.com/thinkful-ei-heron/spaced-repetition-client-alex-sean'

   }


]