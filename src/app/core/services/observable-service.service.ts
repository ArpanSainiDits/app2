import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {
  dummyData : BehaviorSubject<any>;
  constructor() {
    
    this.dummyData = new BehaviorSubject<any>({});
   }
   
}
