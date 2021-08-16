import { Component } from '@angular/core';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data:Array<any>

  name:String = '';
  result:String = '';

  constructor(private JSONPlaceholder: JSONPlaceholderService, private http:HttpClient){
    this.data = new Array<any>()
  }

  getDataFromAPI() {
     this.JSONPlaceholder.getData().subscribe((data)=>{
       console.log(data);
       this.data = data;
     })
  }

  

  PostData(){
      let url = "https://jsonplaceholder.typicode.com/posts";

      this.http.post(url, {
        name:this.name
      }).toPromise().then((data: any)=>{
        console.log(data);
        console.log(JSON.stringify(data));
        this.result = JSON.stringify(data.name);
      });
  }

}
