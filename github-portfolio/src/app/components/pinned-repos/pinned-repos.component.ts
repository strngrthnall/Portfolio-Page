import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-pinned-repos',
  templateUrl: './pinned-repos.component.html',
  styleUrls: ['./pinned-repos.component.sass']
})
export class PinnedReposComponent implements OnInit {
  response:any

  constructor(private gitHubService: GithubService) {

  }

  ngOnInit(): void {
    this.getPromisse()
  }

  async getPromisse() {
    for(let i = 0; i <= 4; i++) {
      this.response = await this.gitHubService.request(i)
      console.log(this.response)
    }
  }
}
