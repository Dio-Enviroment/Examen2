import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model/student.model';

const baseUrl = 'http://localhost:8081/api/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { 
    console.log('El servicio Http esta funcionando…');
  }

  
  getAll(): Observable<Student[]> {
     return this.http.get<Student[]>(baseUrl);
  }

  get(id: any): Observable<Student> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }






  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  findByEmail(email: any,pass: any): Observable<Student[]> {
     return this.http.get<Student[]>(`${baseUrl}?email=${email}&pass=${pass}`);
  }
}
