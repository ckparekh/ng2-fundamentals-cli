import { 
  PresentersListComponent,
  PresenterListResolver,
  SpeakerDetailsComponent,
  CreateSpeakerComponent
 } from './index'


export const presenterRoutes = [
  { path: 'list', component: PresentersListComponent},
  { path: 'new/:presenter', component: CreateSpeakerComponent},
  { path: 'new', component: CreateSpeakerComponent},
  { path: ':presenter', component: SpeakerDetailsComponent}
]