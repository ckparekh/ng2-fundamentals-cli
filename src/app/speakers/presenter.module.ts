import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { presenterRoutes } from './presenter.routes'
import { PresentersListComponent } from './presenter-list.component'
import { PresenterThumbnailComponent } from './presenter-thumbnail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresenterService, 
  PresenterListResolver, 
  SpeakerDetailsComponent,
  SpeakerSessionsComponent,
  CreateSpeakerComponent} from './index'
import { SharedModule } from '../shared.module'
import { JQ_TOKEN } from '../common/index'

declare let jQuery : Object;

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      ReactiveFormsModule,
      RouterModule.forChild(presenterRoutes) ],
  declarations: [
    PresentersListComponent,
    PresenterThumbnailComponent,
    SpeakerDetailsComponent,
    SpeakerSessionsComponent,
    CreateSpeakerComponent
  ],
  providers: [
    PresenterListResolver
    //{ provide: JQ_TOKEN, useValue: jQuery },
  ]
})

export class PresenterModule { }
