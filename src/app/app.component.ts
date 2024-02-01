import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(){
    this.title$.subscribe(this.setTitle)
    //this.changeTitle(this.setTitle);
    //this.onComplete().then(this.setTitle);
  }
  private setTitle = () =>{
    const timestamp = new Date().getMilliseconds();
    this.title = `new Title ${timestamp}`
  }

  title$ = new Observable(observable =>{
    setInterval(()=>{
      observable.next();
    },2000);
  })

  private changeTitle(callback: {():void;(): void;}){
    setInterval(()=>{
      callback();
    },2000);
  }
  private onComplete(){
    return new Promise<void>((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },2000);
    });
  }
}
