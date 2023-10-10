import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Octokit, App } from 'octokit'
import { GithubData } from '../models/githubData';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  octokit: any = new Octokit({ auth: environment.token })
  response: any = ''
  dataArray: GithubData = {
    name: '',
    url: '',
    description: '',
    lastUpdate: ''
  }

  constructor() {  }

  async request(i: number) {
    this.response = await this.octokit.request("GET /users/{user}/repos", {
      user: environment.username
    });
    return this.dataArray = {
      name: this.response.data[i].name,
      url: this.response.data[i].html_url,
      description: this.response.data[i].description,
      lastUpdate: this.response.data[i].pushed_at

    }
  }
}
