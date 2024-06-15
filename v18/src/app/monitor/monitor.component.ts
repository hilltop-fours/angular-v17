import { Component, signal } from '@angular/core';
import { AwaitingResponseComponent } from '../component/awaiting-response/awaiting-response.component';
import { Agent } from '../interface/agent';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [AwaitingResponseComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {

  readonly customerAwaitingResponse = signal<Agent[]>([])
  readonly csrAwaitingResponse = signal<Agent[]>([])
}
