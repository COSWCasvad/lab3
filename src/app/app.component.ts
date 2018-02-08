import{Component}from'@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private navForm:FormGroup
  
  constructor(private modalService:NgbModal){

  }

  search(modalSearch){
     this.modalService.open(modalSearch);
  }

}
