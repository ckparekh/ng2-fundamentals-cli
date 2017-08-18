import { Component, OnInit, Inject } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { PresenterService, IPresenter } from '../index'
//import { JQ_TOKEN } from '../../common/jQuery.service'
declare let $ : any;

@Component({
  templateUrl: './speaker-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height:100px; }
    a {cursor:pointer}
  `]
})
export class SpeakerDetailsComponent implements OnInit {
  presenter:IPresenter
  filterBy: string = 'all';
 
  constructor(private presenterService: PresenterService, private route: ActivatedRoute
    ) {

  }

    ngOnInit() {
        $('.modal-backdrop').remove();
        let name = this.route.snapshot.params['presenter']
        this.presenter = this.presenterService.getSpeaker(name);
       
    }

}