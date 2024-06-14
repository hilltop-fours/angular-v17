import { Component, WritableSignal, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './for-list.component.html',
  styleUrl: './for-list.component.scss'
})
export class ForListComponent {

  search: WritableSignal<string> = signal('')

  readonly users: WritableSignal<User[]> = signal([
    {
      "id": "66661958923303bf6107dc33",
      "firstName": "Maribel",
      "lastName": "Hernandez"
    },
    {
      "id": "66661958a64101aaa62e7f68",
      "firstName": "Perry",
      "lastName": "Mcintosh"
    },
    {
      "id": "666619585582790a1167e5d6",
      "firstName": "Landry",
      "lastName": "Kane"
    },
    {
      "id": "66661958ebc151c99790f9e8",
      "firstName": "Russell",
      "lastName": "Carpenter"
    },
    {
      "id": "666619586a8aab7ad95786ec",
      "firstName": "Rosalind",
      "lastName": "Valencia"
    },
    {
      "id": "666619584d99744f0556ffaa",
      "firstName": "Cook",
      "lastName": "Haley"
    }
  ])

  // query = computed(() => this.search + '')

  // searchResult = computed(() => {
  //   this.users().filter(({ firstName }) => {
  //     firstName.startsWith(this.query())
  //   })
  // });

  update(e: Event) {
    this.search.set((e.target as HTMLInputElement).value)
  }

  readonly filterUsers = computed(() => {
    return this.users().filter(x => x.firstName.includes(this.search()))
  })
}

interface User {
  id: string
  firstName: string
  lastName: string
}