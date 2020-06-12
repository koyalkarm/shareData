import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  Message = "Parent to Child";
  msg:string;
  serviceMsg: string;
  constructor(private sharedService: SharedService) { }



  receiveMessage($event) {
    this.msg = $event
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.serviceMsg = message)
  }

}
