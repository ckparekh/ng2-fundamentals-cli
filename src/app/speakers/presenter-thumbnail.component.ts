import { Component, OnInit, Input } from '@angular/core'
import { IPresenter } from './index'

@Component({
    selector: 'presenter-thumbnail',
    template:`
    <div [routerLink]="['/speakers', presenter.presenter]" class="well hoverwell thumbnail">
        <div>
            {{presenter?.presenter}}
        </div> 
        <div>
            {{presenter?.description}}
        </div>
    </div>
    `
})

export class PresenterThumbnailComponent{
    @Input() presenter: IPresenter
}