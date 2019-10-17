import { Project } from './../models/project';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css']
})
export class ProjectViewComponent implements OnInit
 {

  p_data:Project
  constructor(private prjservice:ProjectService)
   {
     console.log(prjservice.id);
     
    this.prjservice.getData(prjservice.id)
    .pipe(first())
    .subscribe(data=>{
      this.p_data=data
      console.log(this.p_data);
      
    },error =>{
      //alert message;
    });
    
    
    }

  ngOnInit() 
  {
    

    
  }

  
}
