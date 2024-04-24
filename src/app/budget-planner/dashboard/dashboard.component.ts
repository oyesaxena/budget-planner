import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TestComponent } from '../../test/test.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonUtilService } from '../common-util.service';
import { ColorChangeDirective } from '../../color-change.directive';
import { Store } from '@ngrx/store';
import { addtocart, removefromcart } from '../store/cart.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,ColorChangeDirective, SideNavComponent, CommonModule,TestComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';
  sendArr=[1,2,3,4,5,6,7,8];

  
  

  shape='circle';
  color='red';
  num=2;
  className='';
  selectingShape(){
    console.log(this.shape);
  }
  
  setClass(){
    this.className=this.service.getClassName(this.shape,this.color);
  }
  myForm!: FormGroup;
  ngOnInit(): void {
    this.setClass()
    this.myForm=new FormGroup({
      uname:new FormControl('name',Validators.required),
      email:new FormControl(''),
      readTerms:new FormControl(false)
    })
    
  }
  onSub(){
    this.myForm.patchValue({
      uname:'abhi',
      readTerms:true

    });
  }
  divideArr(e:any){
    this.sendArr=this.sendArr.filter((item)=>item%e===0)
  }
  //Expense
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';
 
  //Todo Trans
  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' }
  ];

  //Total
  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;
  constructor(public router: Router, private service : CommonUtilService,private store:Store<{cartCount:number}>) { }

  item:any={name:'a',id:1}
  addToCart(){
    this.store.dispatch(addtocart(this.item))
  }

  cart=this.store.select('cartCount')

  removeCart(){
        this.store.dispatch(removefromcart(this.item))

  }

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }
  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }
  
  //Calculate Total
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
