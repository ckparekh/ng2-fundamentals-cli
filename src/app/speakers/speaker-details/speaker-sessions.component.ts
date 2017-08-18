import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../events/shared/index';
import { AuthService } from '../../user/auth.service'
import { PresenterService, IPresenter } from '../index'

@Component({
  selector: 'speaker-sessions',
  templateUrl: './speaker-sessions.component.html'
  
})
export class SpeakerSessionsComponent implements OnChanges {
  
  @Input() presenter: string
  visibleSessions: ISession[] = []

  constructor(private auth: AuthService, private PresenterService: PresenterService) {}

  ngOnChanges() {
    this.PresenterService.getSessions(this.presenter).subscribe(x => {
        this.visibleSessions = x
    });

  }
}