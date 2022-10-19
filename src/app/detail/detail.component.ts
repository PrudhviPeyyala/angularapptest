import { Component, OnInit } from '@angular/core';
import { DateserviceService } from '../dateservice.service';
import { TesService } from '../tes.service';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  today :any;
  users:User[] = [];

  constructor(private dateservice:DateserviceService,private testservice:TesService) { 
    this.today=this.dateservice.gettodaysdate();
  }

  ngOnInit(): void {
    // this.dateservice.printsomedummymessage();
   
  }

  displayusers(event:any){
    this.testservice.getAllUsers().subscribe(user=>{
      this.users = user;
    });
  }
  

}
