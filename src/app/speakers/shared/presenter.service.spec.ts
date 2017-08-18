import { PresenterService } from './presenter.service'
import { IPresenter } from '../presenter.model'
import { Observable } from 'rxjs/Rx'

describe('PresenterService', () => {
  let presenterService: PresenterService,
    mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'get'])
    presenterService = new PresenterService(mockHttp);
  });

  
  describe('getAllSpeakers', () => {

     it('should return correct count', () => {
     var speakers = [{ id: 2, presenter: "John Papa", description: "babab", address: 'blabla'},
                    { id: 3, presenter: "Peter Bacon Darwin2", description: "babab", address: 'blabla'}]

      mockHttp.get.and.returnValue(Observable.of(speakers));

      presenterService.getAll2();
      expect(speakers.length).toBe(2);
      //expect(mockHttp.get).toHaveBeenCalledWith('/api/speakers');
     })
  })
 
  describe('GetSessions', () => {

    it('should call http.get with the right URL', () => {

      var sessions = [{ id: 6, voters: ["john"], name:"John Papa"},
      { id: 10, voters: ["john"], name : "vvv Papa"}]

      mockHttp.get.and.returnValue(Observable.of(sessions));

      presenterService.getSessions("John");

      expect(mockHttp.get).toHaveBeenCalledWith('/api/sessions/searchbyspeaker?search=John');
    })

   })
})