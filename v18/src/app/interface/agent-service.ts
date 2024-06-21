import { Observable } from "rxjs";
import { Agent } from "./agent";

export interface IAgentService {

    getAgents(id: number): Observable<Agent[]>
}
