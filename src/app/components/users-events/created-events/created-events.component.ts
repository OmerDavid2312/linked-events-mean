import { FlashMessagesService } from 'angular2-flash-messages';
import { MyEventsService } from './../../../services/my-events.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventData } from './../../../models/Event';

@Component({
  selector: 'app-created-events',
  templateUrl: './created-events.component.html',
  styleUrls: ['./created-events.component.css']
})
export class CreatedEventsComponent implements OnInit {

  createdEvents:EventData[] = [];
  isFetched:boolean = false;
  constructor(private myeventSrv:MyEventsService,private spinner: NgxSpinnerService,private flashmessage:FlashMessagesService) { }

  ngOnInit() {
    this.isFetched=false;
    this.spinner.show();
    this.myeventSrv.getCreatedEvents().subscribe(createdEvents=>{

      this.createdEvents = createdEvents;
      this.isFetched = true;
      setTimeout(()=>{
        this.spinner.hide();

      },1000)

    },err=>{
      this.spinner.hide();
      this.isFetched = true;
      const error =  err.error.message || err.error.errors[0]['msg'];
      this.flashmessage.show(error,{cssClass:'alert-danger text-center font-weight-bold',timeout:4000});  
    })
  }

  delete(eventID:string){
    this.spinner.show();
    this.myeventSrv.deleteEventById(eventID).subscribe(res=>{
      this.flashmessage.show('Event successfully deleted',{cssClass:'alert-success text-center font-weight-bold',timeout:4000}); 
      //update the view
      this.myeventSrv.getCreatedEvents().subscribe(updated=>{
        this.createdEvents = updated;
        this.spinner.hide();
      },err=>{
        console.log(err);
        
        //if not found any events
        if(err.status == 404)
        {
          this.createdEvents = []; //reset the array
          this.spinner.hide();
          return;
        } 
        this.spinner.hide();
        const error =  err.error.message || err.error.errors[0]['msg'];
        this.flashmessage.show(error,{cssClass:'alert-danger text-center font-weight-bold',timeout:4000});
      })
    },err=>{
      this.spinner.hide();
      const error =  err.error.message || err.error.errors[0]['msg'];
      this.flashmessage.show(error,{cssClass:'alert-danger text-center font-weight-bold',timeout:4000}); 
    })

    
    

  }

}




