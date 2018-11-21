import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-conclusao',
  templateUrl: './conclusao.component.html',
  styleUrls: ['./conclusao.component.css']
})
export class ConclusaoComponent implements OnInit {

  
  public conclusion

public images;
  constructor(private service:ResourcesService) { }

  ngOnInit() {

    this.conclusion = this.service.services.conclusion


    this.images = this.conclusion.images

  }

  img(src){

  		return this.service.src(src);

  }

}
