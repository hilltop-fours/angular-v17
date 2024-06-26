import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agent } from '../interface/agent';
import { IAgentService } from '../interface/agent-service';

@Injectable({
  providedIn: 'root'
})
export class AgentMockService implements IAgentService {

  getAgents(): Observable<Agent[]> {
    return of(this.agents)
  }

  // 2024-06-01T00:00:00

  private readonly agents = [
    {
      "id": "8ff5a6f4-6231-4220-a59a-0899c95f4efc",
      "firstName": "Gloria",
      "lastName": "Hallyburton",
      "conversations": [
        {
          "fullName": "Raimund Hodgen",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Ora Bownas",
          "state": 2,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Sile Jeannel",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Milo Maraga",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "a3eb4697-f41f-46b2-a1f1-cd8424fdc366",
      "firstName": "Elnar",
      "lastName": "Priestley",
      "conversations": [
        {
          "fullName": "Cord Archley",
          "state": 2,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Jorey Maleham",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Rolph MacKaile",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        },
        {
          "fullName": "Duane MacRinn",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        }
      ]
    },
    {
      "id": "0b6dfd27-3cb8-4afa-b1cd-2c53b7c3a409",
      "firstName": "Maynard",
      "lastName": "Stennett",
      "conversations": []
    },
    {
      "id": "ef8b068f-94e0-42df-a5ea-df800ea47851",
      "firstName": "Alric",
      "lastName": "Warrick",
      "conversations": [
        {
          "fullName": "Teodora Cockling",
          "state": 2,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "cd6c97bb-3c47-484e-aa7e-92276036ab82",
      "firstName": "Angelita",
      "lastName": "Angless",
      "conversations": [
        {
          "fullName": "Sadye Gotmann",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Bartram Stirgess",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Lilly Andrick",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "5541a714-8f0c-494a-b17e-2e1fd35420b4",
      "firstName": "Penelopa",
      "lastName": "Fibbens",
      "conversations": [
        {
          "fullName": "Drusi Beeching",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Millicent Fullegar",
          "state": 1,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Palm McAlester",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Roderic Bold",
          "state": 2,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "8efaccc8-38f7-4914-ac46-740578a74119",
      "firstName": "Isahella",
      "lastName": "McClenaghan",
      "conversations": [
        {
          "fullName": "Eloise Danelut",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Boony Morriss",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Costa Dyshart",
          "state": 2,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Wanids Venturoli",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Temp Penelli",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        }
      ]
    },
    {
      "id": "c03193a3-e07c-4ea8-bc29-7ffa5ad78ffb",
      "firstName": "Arabel",
      "lastName": "Battman",
      "conversations": [
        {
          "fullName": "Elva Buckie",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "daa7c5af-ea07-4027-b8e4-270b7ed397da",
      "firstName": "Cord",
      "lastName": "Pulfer",
      "conversations": [
        {
          "fullName": "Inessa Vesty",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        }
      ]
    },
    {
      "id": "335a97c1-6014-40dd-b849-ccb55028f54d",
      "firstName": "Cort",
      "lastName": "Mycock",
      "conversations": [
        {
          "fullName": "Nappy Gaenor",
          "state": 1,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        },
        {
          "fullName": "Cchaddie Rumbellow",
          "state": 2,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        }
      ]
    },
    {
      "id": "e173f3fc-6025-4199-98c9-e695e43ab2ba",
      "firstName": "Amelina",
      "lastName": "Vaissiere",
      "conversations": [
        {
          "fullName": "Annadiane Bartosch",
          "state": 1,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-21T19:28:00",
          "senderWasOwner": true
        },
        {
          "fullName": "Reina Bowdler",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        },
        {
          "fullName": "Whit Alywen",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        }
      ]
    },
    {
      "id": "9e0eceb3-9ec6-4214-9d14-5401cf9b90cd",
      "firstName": "Cori",
      "lastName": "Ryley",
      "conversations": [
        {
          "fullName": "Janette Trowle",
          "state": 2,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Luciano Rival",
          "state": 1,
          "answerState": 2,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Gaby Lantaff",
          "state": 1,
          "answerState": 0,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": false
        },
        {
          "fullName": "Alane Vitte",
          "state": 1,
          "answerState": 1,
          "lastUpdatedDateTime": "2024-06-01T08:28:00",
          "senderWasOwner": true
        }
      ]
    }
  ]

}