import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { SellerCategoryService } from '../services/seller-category.service';

import { CanDeactivateForm } from '../guards/can-Deactivate.guard';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IRegionCategory } from '../models/regionCategory.model';
import { ILoopTax } from '../models/loop-tax.model';
import { ISellerCategory } from '../models/seller-category.model';
import { ITax } from '../models';

// interface Lookup {
//   id: number;
//   name: string;
// }

// const mapLookup = (obj: any) => ({
//   id: obj.id,
//   name: obj.name,
// });

const nameValid = (control: AbstractControl): ValidationErrors | null => {
  const firstLetter = control.value.toString()[0];
 if( !!firstLetter && firstLetter !== firstLetter.toUpperCase()){
  return { nameValid: 'invalid name' }
 }

    return null;
};

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [
    `
      em {
        color: #e05c65;
        padding-left: 10px;
      }

      input.error,
      select.error,
      textarea.error {
        background-color: #e3c3c5;
      }
      .error+select {
        background-color: #e3c3c5;
      }
      :: -webkit-input-placeholder {
        color: #999;
      }
      :: -moz-placeholder {
        color: #999;
      }
      :: -ms-input-placeholder {
        color: #999;
      }
    `,
  ],
  providers: [

  ]
})
export class CreateSellerComponent implements OnInit,  CanDeactivateForm{
  categoryLookupCollection: Array<IRegionCategory> = [];
  taxesLoopCollection:ILoopTax[]|undefined;

  categories:ISellerCategory[]=[];

  selctedTax!:string;
  categorId!:string;

TaxesSelected:ITax[]|undefined=[]
newSellerForm!:FormGroup;

  mouseover:boolean=false
  isDirty:boolean=true

   get category(){
    return this.newSellerForm.get('category')
   }
   get taxes(){
    return this.newSellerForm.get('taxes')
   }
   get name(){
    return this.newSellerForm.get('name')
   }
get remarks(){
  return this.newSellerForm.get('remarks')
}

  constructor(private sellerCategoryService: SellerCategoryService, private route:Router, private fb:FormBuilder) {}

  onChangeCategory(event: Event) {
    const selectedEl= event.target as HTMLSelectElement;
    this.categorId=selectedEl.value
    if (this.categorId) {
this.newSellerForm.controls['taxes'].enable()
this.TaxesSelected=this.checktaxes(this.categories, +this.categorId)
this.taxesLoopCollection=this.TaxesSelected?.map((tax:ITax)=>({
  id:tax.id,
  name:tax.name
}))
  }
  else{
    this.newSellerForm.controls['taxes'].disable()
    this.taxesLoopCollection=[]
  }
}
private checktaxes(categories:ISellerCategory[],id:number){
  return categories.find((cat:ISellerCategory)=>cat.id===id)?.taxes
}
  saveSeller() {
    this.isDirty=false
    console.log(this.newSellerForm.value);
  }

  ngOnInit(): void {
    const categories = this.sellerCategoryService.getSellerCategories();
    this.populateCategoryLookupCollection(categories);

    this.initForm();
  }

  private initForm() {
   this.newSellerForm=this.fb.group({
    category:['',[Validators.required]],
    taxes:['',[Validators.required]],
    name:['',[Validators.required,nameValid,Validators.maxLength(30)]],
    remarks:['',[Validators.maxLength(100)]]
   })

  }




  private populateCategoryLookupCollection(categories: ISellerCategory[]): void {
    this.categoryLookupCollection = categories.map((c:IRegionCategory) => ({
      id:c.id,
      name:c.name
    }));
  }

  canDeactivate():Observable<boolean>|boolean{
    if(this.isDirty){
      return confirm('You have unsaved changes.Are you sure you want to leave this page.You will loose unsaved changes')
    }
    return true;
  }
  cancel(){
    this.route.navigate(['/games'])
  }
}
