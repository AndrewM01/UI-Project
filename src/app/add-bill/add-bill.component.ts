import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss'],
})
export class AddBillComponent implements OnInit {
  constructor(private route: ActivatedRoute, private data: DataService) {}

  member: Product[] = [];
  memberObj: Product = {
    id: '',
    name: '',
    price: 0,
    dueDate: new Date(),
    type: '',
    isCheckedOut: false,
  };
  userID?: string | null;
  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.membershipForm = new FormGroup({
      name: new FormControl(null),
      price: new FormControl(null),
      dueDate: new FormControl(null),
      type: new FormControl('Electricity'),
    });
  }
  membershiptypes = ['Electricity', 'Water', 'Phone'];
  currentDate = new Date();
  submitted = false;
  membershipForm!: FormGroup;
  onSubmit() {
    this.submitted = true;
    this.memberObj.id = '';
    this.memberObj.name = this.membershipForm.value.name;
    this.memberObj.price = this.membershipForm.value.price;
    this.memberObj.dueDate = this.membershipForm.value.dueDate;
    this.memberObj.type = this.membershipForm.value.type;

    this.data.addProduct(this.memberObj, this.userID);
  }
}
