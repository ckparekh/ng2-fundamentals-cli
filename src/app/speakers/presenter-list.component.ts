import { Component, OnInit } from '@angular/core'
import { PresenterService } from './shared/presenter.service'
import { ActivatedRoute } from '@angular/router'
import { IPresenter } from './index'

@Component({
  template: `
    <div>
    <h1>Presenters</h1>
    <div class="row">
      <form id="searchFormSpeaker" (ngSubmit)="searchSpeakers(searchTerm)">
        <div class="col-md-5 form-group">
          <input [(ngModel)]="searchTerm" name="searchTerm" type="text" class="form-control" placeholder="Search Speakers" >
        </div>
        <button class="btn btn-default" modal-trigger="searchSpeakers">
          Search
        </button>
      </form>
    </div>
    <hr/>
    <div class="row">
      <div *ngFor="let pr of presenters" class="col-md-5">
        <presenter-thumbnail [presenter]="pr"></presenter-thumbnail>
      </div>
    </div> 
    <simple-modal closeOnBodyClick="true" elementId="searchSpeakers" title="Matching Speakers">
    <div class="list-group">
      <a class="list-group-item" *ngFor="let pr of presenters" 
      [routerLink]="['/speakers', pr.presenter]">{{pr.presenter}}</a>
    </div>
    </simple-modal> 
  `,
  styles: [`
    #searchFormSpeaker {margin-right:100px; } 
    @media (max-width: 1200px) {#searchFormSpeaker {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class PresentersListComponent implements OnInit {
  
presenters : IPresenter[];
searchTerm : string

    constructor(
    private presenterService: PresenterService,
    private route: ActivatedRoute
    ) { }  

  ngOnInit() {
    this.presenterService.getAll1().subscribe(x => {
      this.presenters = x}
    );
    //this.presenters = this.route.snapshot.data['presenters']
  }

  searchSpeakers()
  {
    this.presenters = this.presenterService.getSpeakers(this.searchTerm);
  }

}