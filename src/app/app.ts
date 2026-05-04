import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Forum } from './components/forum/forum';
import { AiAssistant } from './components/ai-assistant/ai-assistant';
import { Contact } from './components/contact/contact';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    Hero,
    About,
    Experience,
    Projects,
    Forum,
    AiAssistant,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}