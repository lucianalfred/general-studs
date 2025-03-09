import {HttpClient} from  '@angular/common/http'
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  httpClient = inject(HttpClient);

  products: any[] = [];
  ngOnInit(){
    this.httpClient.get<any>('api/products').subscribe((products)=>{
        this.products = products;
    })
  }
}
