import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adjustment-form',
  templateUrl: './adjustment-form.component.html',
  styleUrls: ['./adjustment-form.component.css']
})
export class AdjustmentFormComponent implements OnInit {

  constructor() { }

  itemsSelected:boolean=false;
  items:any=[
    {
      "itemName":"Trousers",
      "price":600
    },
    {
      "itemName":"Suits",
      "price":3500
    },
    {
      "itemName":"Kaftan",
      "price":1500
    }
  ];
  totalItems:number=0;
  totalPrice:number=0;
  selectedItems:any=[];

  addItem(form:NgForm){
    let selectedItem:any = {
      "item":form.value.itemtype,
      "quantity":form.value.itemquantity
    }

    console.log(selectedItem);
    this.selectedItems.push(selectedItem.item);
    this.totalItems = this.totalItems + form.value.itemquantity;
    // this.totalPrice = this.totalPrice + (form.value.itemprice * form.value.itemquantity);
    this.itemsSelected = true;
  }

  placeOrder(form:NgForm){

  }

  ngOnInit() {
  }

}
