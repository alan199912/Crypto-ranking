import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptoService } from 'src/app/services/crypto.service';
import { Crypto } from '../../models/crypto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  crypto: Array<Crypto> = new Array<Crypto>(); //* with $ mean Observable
  error! : string;

  constructor(private _crypto: CryptoService, private router: Router) {

    // ? thi other way to do
    //// this.crypto$ = this._crypto.getCrypto();

    //// this.crypto$.subscribe( (data) => {
    ////   this.crypto = data.data.coins;
    ////   console.log(this.crypto);
    //// });

  }

  ngOnInit(): void {
    this._crypto.getCryptos().subscribe( (data: any) => {
      for (const item of data.data.coins) {
        this.crypto.push(item)
        console.log(this.crypto)
      }
    });
    // * catch the error
    this._crypto.getCryptos().toPromise()
    .catch(error => {
      this.error = error;
      console.log(this.error);
    });
  }

  verCrypto(uuid: string) {
    this.router.navigateByUrl(`/crypto/${uuid}`)
  }

}
