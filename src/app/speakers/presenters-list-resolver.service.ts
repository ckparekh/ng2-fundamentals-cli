import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PresenterService } from './index'

@Injectable()
export class PresenterListResolver implements Resolve<any> {
  constructor(private presenterService:PresenterService) {}
  resolve() {
    return this.presenterService.getAll().map(presenters => presenters)
  }
}
