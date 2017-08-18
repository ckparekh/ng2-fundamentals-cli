import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PresenterService, IPresenter } from '../index'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TOASTR_TOKEN, Toastr} from '../../common/toastr.service'


@Component({
  selector: 'create-speaker',
  templateUrl: './speaker.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `]  
})

export class CreateSpeakerComponent implements OnInit {
  @Output() saveNewSpeaker = new EventEmitter()
  @Output() cancelAddSpeaker = new EventEmitter()
  editMode:boolean = false
  speaker: IPresenter


  newSpeakerForm: FormGroup
  presenter: FormControl
  description: FormControl
  address: FormControl
  
  constructor(private PresenterService: PresenterService, private router: Router, 
    private aroute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  ngOnInit()
  {
    let name = this.aroute.snapshot.params['presenter']

    if (name){
        this.editMode = true
        this.speaker = this.PresenterService.getSpeaker(name)
    }
    else {
        this.speaker = {
            id : undefined,
            presenter: "",
            description: "",
            address: ""
        }
    }
        
    this.presenter = new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z].*')]);
    this.description = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]);
    this.address = new FormControl('', Validators.required);
    
    this.newSpeakerForm = new FormGroup({
      presenter: this.presenter,
      description: this.description,
      address: this.address,
    })
  }

  validatePresenter() {
    return this.presenter.valid || this.presenter.untouched
  }

  validateDescription() {
    return this.description.valid || this.description.untouched
  }

  validateAddress() {
    return this.address.valid || this.address.untouched
  }

  saveSpeaker(formValues)
  {
    if(this.newSpeakerForm.valid)
    {
            let newSpeaker:IPresenter = {
            id: undefined,
            presenter:formValues.presenter,
            description:formValues.description,
            address:formValues.address
            }
        this.PresenterService.addSpeaker(newSpeaker);
        if (this.editMode){
            this.router.navigate(['/speakers/' + this.speaker.presenter]) 
        }
        else{
            this.toastr.success('Profile Saved');
        }
        //this.saveNewSpeaker.emit(speaker);
    }
      
  }

  cancel()
  {
    //this.cancelAddSpeaker.emit();
    this.router.navigate(['/speakers/list']) 
  }
}