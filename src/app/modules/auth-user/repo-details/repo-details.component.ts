import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Repo } from './../../../models/gitRepo.model';
import { Store } from '@ngrx/store';
import * as fromStore from './../../../store';
import { RepoState } from './../../../store/reducers/repo.reducer';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  repo$: Observable<Repo>;

  constructor(
    private store: Store<RepoState>,
    private location: Location
  ) { }

  ngOnInit() {
    this.repo$ = this.store.select<any>(fromStore.getSelectedRepo);
  }

  goToRepo({ html_url }): void {
    window.open(html_url, '_blank');
  }

}
