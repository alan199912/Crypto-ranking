import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {

  crypto: Observable<Crypto> | undefined;

  constructor(private _crypto: CryptoService,  private _aRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // console.log(this._aRoute.params._value.uuid)
    this._crypto.getCrypto(this._aRoute.params._value.uuid) //? this error i dont know to fix but it's work
      .subscribe( (data: any) => {
        this.crypto =  data.data.coin;
        // console.log(this.crypto.links)
      })

  }


}
