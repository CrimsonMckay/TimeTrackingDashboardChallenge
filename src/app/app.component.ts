import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackCardComponent } from './track-card/track-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrackCardComponent, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TimeTrackingDashboardChallenge';
}
