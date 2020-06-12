import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  serviceMsg:string;
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.serviceMsg = message)
  }
  newMessage() {
    this.sharedService.nextMessage("Second Message");
  }

}
