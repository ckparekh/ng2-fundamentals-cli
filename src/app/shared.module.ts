import { NgModule }      from '@angular/core'
import { 
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index'

@NgModule({
  imports: [
       ],
  declarations: [ 
    SimpleModalComponent,
    ModalTriggerDirective
    ],
  providers: [
  ],
  exports:[
    SimpleModalComponent,
    ModalTriggerDirective
  ]
})
export class SharedModule { }
