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

  crypto!: any;

  constructor(private _crypto: CryptoService,  private _aRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._crypto.getCrypto(this._aRoute.snapshot.params.uuid).subscribe( (crypto: any) => {
        this.crypto = crypto.data.coin;
      });

  }


}
