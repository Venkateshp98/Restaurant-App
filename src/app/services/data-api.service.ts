import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  url = 'http://localhost:3000/posts';

  constructor(private http:HttpClient) { }

  //post method...
  postRestaurantData(data :any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res
    }));
  }

  // Get Method....
  getRestaurantData(data:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res;
    }));
  }

  //Update Method...
  updateRestaurantData(data:any,id:number){
    return this.http.put<any>('http://localhost:3000/posts/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  };

  //Delete method...
  deleteRestaurantData(id:number){
    return this.http.delete<any>('http://localhost:3000/posts/'+id).pipe(map((res:any)=>{
      return res;
    }))
  };
}
