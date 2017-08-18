import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { IPresenter } from '../presenter.model'
import { ISession } from '../../events/shared/event.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class PresenterService {
  
  constructor(private http: Http) {}

  getAll():Observable<IPresenter[]> {
    let subject = new Subject<IPresenter[]>();
    setTimeout(() => {subject.next(PRESENTERS); subject.complete(); }, 100);   
    return subject;
  }

  getAll1(): Observable<IPresenter[]> {
    let subject = new Subject<IPresenter[]>();
    setTimeout(() => {subject.next(PRESENTERS); subject.complete(); }, 100); 
      return subject.map((response: any) => {
        return <IPresenter[]>response;
    })
  }

  getAll2(): Observable<IPresenter[]> {
    return this.http.get("/api/speakers")
    .map((response: Response) => {
        let resp = response;
        return resp.json();
    }).catch(this.handleError);
  }


  getSpeaker(name:string): IPresenter {
     return PRESENTERS.find(x => x.presenter.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

  getSpeakers(name:string): IPresenter[] {
     return PRESENTERS.filter(x => x.presenter.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }
  
  getSessions(name:string) : Observable<ISession[]> {
    return this.http.get("/api/sessions/searchbyspeaker?search=" + name)
    .map((response: Response) => {
        let resp = response;
        return resp.json();
    }).catch(this.handleError);
  }

  addSpeaker(presenter: IPresenter) {
      PRESENTERS.concat(presenter);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

  const PRESENTERS: IPresenter[] = [
      { id: 1, presenter: 'Peter Bacon Darwin', description: 'babab', address: 'blabla'},
      { id: 2, presenter: "John Papa", description: "babab", address: 'blabla'},
      { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla'},
      { id: 4, presenter: "Peter Bacon Darwin3", description: "babab", address: 'blabla'},
      { id: 5, presenter: "Peter Bacon Darwin4", description: "babab", address: 'blabla'},
      { id: 6, presenter: "Peter Bacon Darwin5", description: "babab", address: 'blabla'},
  ]