import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef,  OnChanges, DoCheck, AfterContentInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ObservableServiceService } from 'src/app/core/services/observable-service.service';
import {UserComponent} from 'src/app/feature/components/dashboard/user/user.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit {
  sahil = 'I am Sahil and my new name is Sudo'
  date = new Date()
  myProperty:any = 'this write in script';
  message : string = "";
  value: string = "valueChange"
  @ViewChild(UserComponent) child!: UserComponent;

  currentItem : any = 0;
  @Output() parentComponent:EventEmitter<any> = new EventEmitter();

  @ViewChild(UserComponent)
 public counterComponent!: UserComponent;
  viewData!: number;
 seconds() { return 0; }


  constructor(private service : ObservableServiceService, private cd : ChangeDetectorRef) { 
    console.log("constructor Called")
    this.value = "value on constructor"
  }


  ngOnChanges() {
    debugger
    console.log("ngOnChanges called")
    // console.log(changes)

  }
  onChange(data :any ){
    debugger
    this.value = "valueChange"
    // if(abc){
    //   alert('Success')
    // }else{
    //   alert('Error')
    // }

  }
  
  
ngDoCheck(): void {
  console.log("ngDoCheck called")
}


  ngOnInit(): void {
    console.log("ngOnInit called")
  }

ngAfterContentInit(): void {
  console.log("ngAfterContentInit called")
}



  ngAfterViewInit(): void{
    this.message = this.child.childData;
    this.cd.detectChanges(); 
    console.log(this.child.childData)

    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () =>this.counterComponent.seconds, 0);
    }
    start() { 
      console.log('start',this.counterComponent, "jgjghj")
      this.counterComponent.start(); 
     this.viewData = this.counterComponent.seconds 

    }
    stop() { 
      console.log('start',this.counterComponent.stop())

      this.counterComponent.stop(); 0}


  sendData(){
    
    const data = {
      Name : "Sahil",
      Age : "24",

    }
  //  let item  = {name : 'Sahil', age : 36}
  //  this.parentComponent.emit(item);
  this.service.dummyData.next(data);
  }
  
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  valueChange(){
    this.value = "valueChangeafterclick"
  }

  a = "sahil"
  b(){
    this.currentItem = 123;
   return this.a = "punia"
  }

}

