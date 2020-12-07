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

  //// crypto: Crypto = new Crypto();

  crypto: Observable<Crypto> | undefined; //* with $ mean Observable
  //// crypto: any;

  constructor(private _crypto: CryptoService, private router: Router) {

    // ? thi other way to do
    //// this.crypto$ = this._crypto.getCrypto();

    //// this.crypto$.subscribe( (data) => {
    ////   this.crypto = data.data.coins;
    ////   console.log(this.crypto);
    //// });

  }

  ngOnInit(): void {
    this._crypto.getCryptos()
      .subscribe( (data: any) => {
        this.crypto = data.data.coins;
        console.log(this.crypto)
      })
  }

  verCrypto(uuid: any) {
    console.log(uuid);
    this.router.navigateByUrl(`/crypto/${uuid}`)
  }

}
