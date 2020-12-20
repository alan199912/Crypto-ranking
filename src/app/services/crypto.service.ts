import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// model
import { Crypto } from '../models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  readonly URL_API = 'https://api.coinranking.com/v2';

  constructor(private http: HttpClient) {
  }

  getCryptos(): Observable<Crypto> {
    return this.http.get<Crypto>(`${this.URL_API}/coins`);
  }

  getCrypto(uuid: any): Observable<Crypto> {
    return this.http.get<Crypto>(`${this.URL_API}/coin/${uuid}`);
  }

}
