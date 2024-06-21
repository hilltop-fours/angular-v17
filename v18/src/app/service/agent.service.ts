import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../interface/agent';
import { IAgentService } from '../interface/agent-service';

@Injectable({
  providedIn: 'root'
})
export class AgentService implements IAgentService {

  private readonly http = inject(HttpClient);

  url = 'http://localhost:3000/agent';

  getAgents(id: number): Observable<Agent[]> {
    console.log(`id: ${id}`)
    return this.http.get<Agent[]>(`${this.url}/monitor/${id}`);
  }
}
