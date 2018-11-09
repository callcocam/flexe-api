/**
 * Componente de edição de #MODULO#.
 *
 * @author Cludio Campos <contato@sigasmart.com.br>
 * @since 0.0.1
 */

/*#import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/shared/resources.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'call-#MODULO#-create',
  templateUrl: './#MODULO#-create.component.html',
  styleUrls: ['./#MODULO#-create.component.css']
})
export class #MODULO_CAP#CreateComponent implements OnInit {

  formGroup: FormGroup


  constructor(public notificationService: NotificationService,
    private activateRoute: ActivatedRoute,
    private service: ResourcesService,
    private alert: SnotifyService) { }

  ngOnInit() {

    this.formGroup = new FormGroup({

      id: new FormControl(''),

      name: new FormControl('', {

        validators: [Validators.required]

	  }),
	  
	  //Aqui vai os outros campos 
	  
      created_at: new FormControl('', {

        validators: [Validators.required]

      }),

      updated_at: new FormControl('', {

        validators: [Validators.required]

      })

    }, { validators: [], updateOn: 'blur' })

  }

  onSubmit(value) {

	this.service.path = '/#MODULO#';
	
    this.service.post(value).subscribe(response => {

      this.alert.success(response.error)

    },
      error => {

        this.alert.error(`ERROR: ${error.error}!`)
        
      })
  }

}}#*/
