import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { restaurantModel } from 'src/app/restaurant.model';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-restaurant-login',
  templateUrl: './restaurant-login.component.html',
  styleUrls: ['./restaurant-login.component.css']
})
export class RestaurantLoginComponent {

  formValue!: FormGroup;
  restraurantModelObj: restaurantModel = new restaurantModel;
  allData: any = [''];


  constructor(
    private formBuilder: FormBuilder,
    private dataApiService: DataApiService,
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],
      place: [''],
    });

    this.getAllData();

  }


  // subscribing our data
  addResto() {
    this.restraurantModelObj.name = this.formValue.value.name;
    this.restraurantModelObj.email = this.formValue.value.email;
    this.restraurantModelObj.mobile = this.formValue.value.mobile;
    this.restraurantModelObj.address = this.formValue.value.address;
    this.restraurantModelObj.service = this.formValue.value.service;
    this.restraurantModelObj.place = this.formValue.value.place;

    this.dataApiService.postRestaurantData(this.restraurantModelObj).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("Restaurant Record Added Successfully");
        this.formValue.reset();
        this.getAllData();
      },
      error: (error) => {
        console.log(error)
      }
    });

  }
  
  getAllData() {
    this.dataApiService.getRestaurantData(this.formValue).subscribe(res => {
      this.allData = res;
    })
  }

  getDeleteData(data:any){
    this.dataApiService.deleteRestaurantData(data.id).subscribe((res =>{
      alert("Restaurant Record Deleted Successfully");
      this.getAllData();
    }))
  }

  onEdit(data:any){
    this.restraurantModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['service'].setValue(data.service);
    this.formValue.controls['place'].setValue(data.place);
  }

  updateResto(){
    this.restraurantModelObj.name = this.formValue.value.name;
    this.restraurantModelObj.email = this.formValue.value.email;
    this.restraurantModelObj.mobile = this.formValue.value.mobile;
    this.restraurantModelObj.address = this.formValue.value.address;
    this.restraurantModelObj.service = this.formValue.value.service;
    this.restraurantModelObj.place = this.formValue.value.place;

    this.dataApiService.updateRestaurantData(this.restraurantModelObj,this.restraurantModelObj.id).subscribe(res =>{
      alert('Restaurant Details Updated Successfully');
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData();
    });
  }
}
