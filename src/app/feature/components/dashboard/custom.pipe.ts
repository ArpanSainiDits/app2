import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any){
    console.log(value);
    return value + "  Bro you are speaking Truth."
  }
  
}

@Pipe({
  name: 'punia'
})
export class PuniaPipe implements PipeTransform {

  transform(value: any){
    console.log(value);
    return value + "  Ohh nice "
  }
  
}
