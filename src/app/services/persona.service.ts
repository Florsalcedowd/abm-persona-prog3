import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  miUrl = 'http://localhost:9000/api/v1/personas/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.miUrl);
  }

  getAllPaged(page: string, size: string): Observable<any> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<any>(`${this.miUrl}paged`, {params});
  }

  getOne(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.miUrl + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.miUrl + id);
  }

  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.miUrl, persona);
  }

  put(id: number, persona: Persona) {
    return this.http.put<Persona>(this.miUrl + id, persona);
  }
}
