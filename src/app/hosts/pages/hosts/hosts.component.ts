import { Component, OnInit } from '@angular/core';
import { EnvsService } from '../../../main/envs.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  envs = this.envsService.list;

  constructor(private envsService: EnvsService) { }

  ngOnInit(): void {
  }

}
