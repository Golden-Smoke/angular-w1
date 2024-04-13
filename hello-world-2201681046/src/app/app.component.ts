import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Student = {
  name: string,
  age: number,
  hobbies: string[],
  contentCreatorLink: string,
  channel: Channel,
  services: string[]
}

type Channel = {
  channelTitle: string,
  subs: number,
  totalViews: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Homework-1';
  student: Student = {
    name: "Plamen Georgiev",
    age:20,
    hobbies: [
      "Mountain Hiking",
      "Cooking",
      "Calisthetics",
      "Snowboarding"
    ],
    contentCreatorLink:"https://www.youtube.com/@programmingwithmosh",
    channel: {
      channelTitle:"Pako Rabani",
      subs:1,
      totalViews:10
    },
    services: [
      "Editing photos with Adobe Photoshop",
      "Editing videos with Adobe Premiere Pro",
      "Making web applications"
    ]
  }
}
