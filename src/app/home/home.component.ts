import { DOCUMENT } from '@angular/common';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateserviceService } from '../dateservice.service';
import { TesService } from '../tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form:FormGroup;

  name:string = "prudhvi";

  passport ="";

  surname="";

  checkstatus=true;

  document:any;

  mobiles:string[]=['vivo','redmi','samsung','iphone'];  //size = 4 , lastindex -3 , 0


  laptops=['HP','Lenovo','DELL','MAC'];

  data = "Hello World";


  todayDate:any;

  bankBalance=355366;

  performance = 4;



  constructor(@Inject(DOCUMENT) document:Document,private dateservice:DateserviceService
  ,private peff:TesService,private formBuilder:FormBuilder) { 
    this.document = document;

    this.todayDate=this.dateservice.gettodaysdate();

    this.peff.print();

    this.form = this.formBuilder.group({
      first:['',Validators.required],
      last:['',Validators.required]
    });
  }

  ngOnInit(): void {  //whenever you want load data/pop-up on component loading
    // alert("this is calling from ngOnInit");
    // this.dateservice.printsomedummymessage();
  }

  print(event:any){
    // alert(this.surname);
    alert(this.document.getElementById('secondname').value);
  }

  changeddata(event:any){
     alert('changed laptopname');
  }


  onsubmit(data:any){
    if(data.email==""){
      alert('please enter email');
    }else{
      alert(data.email);
    }
    if(data.password==""){
      alert('please enter password');
    }else{
      alert(data.password);
    }
  }

  submit(){
    if(this.form.valid){
      console.log(this.form);
      alert(this.form.value.first);
      alert(this.form.value.last);
    }
  }

  
   firstNonRepeatedCharacter(event:any) {
    var string = 'aabcbd';
      for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
          // return c;
          alert(c);
        }
      }
      return null;
    }

}
