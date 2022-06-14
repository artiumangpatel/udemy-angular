import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  secretpassword=false;
  log:any[] = [];

  allowNewServer=false;
 serverCreationStatus="server was not created!";
 serverName='';
 serverCreated=false;
 servers=['test1','test2'];
  constructor() {
    setTimeout(()=>{
    this.allowNewServer = true;
    this.secretpassword = true;
     },1000); }

  ngOnInit(): void {
  }

  onToggaleDetail(){
    this.secretpassword=!this.secretpassword;
    this.log.push(this.log.length + 1 );
  }

  onServerCreate(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="server was created!    "+this.serverName;
  }
  onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }
}

