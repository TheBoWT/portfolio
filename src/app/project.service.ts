import { Injectable } from '@angular/core';

interface Project{
  id:number,
  name:string,
  text:string,
  techs:string[],
  images:string[],
  urls: [{ gitHub: string, liveDemo: string }]
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
projects:Project[] = [
  {
    id: 1,
    name: 'E-Com',
    text: `This Web App make use of the Firebase services for some of its functionalities. 
          This include retrieving products from the database/firestore, 
          as well as signing in and signing up users. This Web App is similar, 
          in terms of functionality, 
          to any other E-Commerce website, where the user browser through different kind of products, 
          add the desired product to a shopping cart (stored in LocalStorage), 
          view the cart items, remove or change its quantity, get the total amount then checkout. 
          On the check out, the user will need to sign-in or sign-up to proceed to payment.`,
    images: [
      'assets/shopping1.png',
      'assets/shopping2.png',
      'assets/shopping3.png',
      'assets/shopping4.png'
    ],
    techs:['Firebase', 'Angular', 'Bootstrap', 'CSS', 'HTML'],
    urls: [
      { 
        gitHub: 'https://github.com/TheBoWT/ecomm.git',
        liveDemo: 'https://ecomm.abdionline.com' 
      }]
  },
  {
    id: 2,
    name: 'Hotel',
    text:`Beautiful Hotel...`,
    images: [
      'assets/hotel1.png', 
      'assets/hotel2.png',
      'assets/hotel3.png',
      'assets/hotel4.png'
    ],
    techs:[ 'HTML', 'CSS'],
    urls: [
      { 
        gitHub: 'https://github.com/TheBoWT/hotel.git',
        liveDemo: 'https://hotel.abdionline.com' 
      }]
  },
  {
    id: 3,
    name: 'Weather',
    text:`This app utilizes the OpenWeatherMap API to display the weather forecast.
          The forecast will be based on the user's current location. User needs to give permission to have access to their location information.
          The App is divided into two section: Today and Future. Today will show the current forecast and for up to 24 hours data, with 3-hour step.
          The Future section, will allow the user to know ahead of time what to expect for next 5 days.`,
    images:[
      'assets/weather1.png',
      'assets/weather2.png' 
    ],
    techs:['API', 'Angular', 'CSS', 'HTML'],
    urls: [
      { 
        gitHub: 'https://github.com/TheBoWT/5dayforcast.git',
        liveDemo: 'https://weather.abdionline.com' 
      }]
  },
  {
    id: 4,
    name: 'Quiz',
    text:`This app is simple. It displays a button with the text of "Start Quiz" in the center of the page.
    Once clicked, a count down from 5 to 1 begins. The Quiz consists of 10 randomly displayed questions with four possible answers.
    The user need to select an answer before he/she is being moved on to the next question.
    By the end of the quiz. The user will then be
    able to view the "Result", which, once clicked, will change to "Play Again"`,
    images: [
      'assets/quiz1.png', 
      'assets/quiz2.png',
      'assets/quiz3.png'
    ],
    techs:[ 'Angular', 'CSS', 'HTML'],
    urls: [
      { 
        gitHub: 'https://github.com/TheBoWT/quizapp.git',
        liveDemo: 'https://quiz.abdionline.com' 
      }]
  },
 

];
  constructor() { }

  getProjects(){
    return this.projects;
  }
  getProject(id:number){
    return this.projects.find(project=> project.id === id);
  }
}
