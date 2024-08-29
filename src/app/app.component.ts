import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackCardComponent } from './track-card/track-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TrackList } from './profile-card/track-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrackCardComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackList: TrackList[] = [
    {
      activity: 'Work',
      activityTime: '32hrs',
      lastWeekTime: '36hrs',
      backgroundImage: '/assets/icon-work.svg',
      color: 'hsl(15, 100%, 70%)',
    },
    {
      activity: 'Play',
      activityTime: '12hrs',
      lastWeekTime: '2hrs',
      backgroundImage: '/assets/icon-play.svg',
      color: 'hsl(195, 74%, 62%)',
    },
    {
      activity: 'Study',
      activityTime: '32hrs',
      lastWeekTime: '36hrs',
      backgroundImage: '/assets/icon-study.svg',
      color: 'hsl(348, 100%, 68%)',
    },
    {
      activity: 'Excercise',
      activityTime: '10hrs',
      lastWeekTime: '8hrs',
      backgroundImage: '/assets/icon-exercise.svg',
      color: 'hsl(145, 58%, 55%)',
    },
    {
      activity: 'Social',
      activityTime: '4hrs',
      lastWeekTime: '7hrs',
      backgroundImage: '/assets/icon-social.svg',
      color: 'hsl(264, 64%, 52%)',
    },
    {
      activity: 'Self Care',
      activityTime: '3hrs',
      lastWeekTime: '4hrs',
      backgroundImage: '/assets/icon-self-care.svg',
      color: 'hsl(43, 84%, 65%)',
    },
  ];
}
