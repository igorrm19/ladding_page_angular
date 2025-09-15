//ng g s serves/newsLatter criar serve

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface newsLatterResponse{
  mensagem: String
}

@Injectable({
  providedIn: 'root'
})
export class NewsLatterService {
  private endepointURL = "http://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) {}

  sendData(nome: String, email: String): Observable<newsLatterResponse>{
      const data = { nome, email };

      return this.http.post<newsLatterResponse>(this.endepointURL, data);
    }
}
