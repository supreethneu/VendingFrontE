import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ProductService } from '../services/product.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-admin-add-item',
  templateUrl: './admin-add-item.component.html',
  styleUrls: ['./admin-add-item.component.css']
})
export class AdminAddItemComponent implements OnInit {

  imageURL='';
  ItemForm:FormGroup;
  percentDone: any = 0;


  constructor(private formBuilder: FormBuilder, private service: ProductService) {

    this.ItemForm = this.formBuilder.group({
      prodimage: [null],
      prodname: [''],
      prodcost: [''],
      prodinfo: [''],
    })

  }

  ngOnInit(): void {
  }

  showPreview(event:any) {
    
    const file = event.target.files[0];
    this.ItemForm.patchValue({
      prodimage: file
    });

    // File Preview
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
  }
  submit() {
    this.service.addItem(
      this.ItemForm.value.prodimage,
      this.ItemForm.value.prodname,
      this.ItemForm.value.prodcost,
      this.ItemForm.value.prodinfo,
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
       
        case HttpEventType.Response:
          console.log('Product added', event.body);
          this.percentDone = false;
          
      }
})}}
