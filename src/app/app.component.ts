import { Component } from '@angular/core';
import { ObservableServiceService } from './core/services/observable-service.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  name = "";
  abc: any;
  constructor(private service : ObservableServiceService){

  }
  ngOnInit(){
    this.service.dummyData.subscribe(data =>{
      console.log(data)
      this.abc = data

    })
  }


  parentComponent(data:any)
  {
    console.warn(data)
    this.name = data.name;  

  }
}
