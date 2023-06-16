import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../user";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList!: Observable<User[]>

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.personalList = this.adminService.getPersonalList()
  }
}
