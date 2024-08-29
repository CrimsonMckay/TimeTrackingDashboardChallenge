import { Component, Input } from '@angular/core';
import { TrackList } from '../profile-card/track-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-card.component.html',
  styleUrl: './track-card.component.css',
})
export class TrackCardComponent {
  @Input() tracker!: TrackList;
}
