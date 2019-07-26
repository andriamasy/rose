import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { CourrierDepartService } from '../service/courrier-depart.service';
import { CourrierDepartModel } from '../model/courrierDepart';
import { MouseEvent } from '@agm/core';
import { NgbdModalBasic } from '../component/modal/modal.component';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator} from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { ExpediteurService } from '../service/expediteur.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import {MatSnackBar} from '@angular/material';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';



const max = 100;
const min = 0;

export interface Food {
	value: string;
	viewValue: string;
}

declare const google: any;

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {
	
	modal: NgbdModalBasic;
	loginForm: FormGroup;
	submitted = false;
	expediteur: any;
	animal: string;

	private _success = new Subject<string>();
	staticAlertClosed = false;
	successMessage: string;

	@ViewChild('map') mapRef: ElementRef;

	subtitle: string;
	displayedColumns: string[] = ['reference', 'cachet', 'dateDepot', 'dateRetrait', 'signature']
	dataSource: CourrierDepartModel

	@ViewChild(MatPaginator) paginator: MatPaginator;
	  public array: any;
	  public pageSize = 5;
	  public currentPage = 0;
	  public totalSize = 0;

	constructor(
		private courrierDepartService: CourrierDepartService,
		private modalService2: NgbModal,
		private formBuilder: FormBuilder,
		public 	dialog: MatDialog,
		private expediteurService: ExpediteurService,
		public snackBar: MatSnackBar
	) {
		this.subtitle = "This is some text within a card block."
		
	}

	public handlePage(e: any) {
		this.currentPage = e.pageIndex;
		this.pageSize = e.pageSize;
		this.iterator();
	  }
	
	  private iterator() {
		const end = (this.currentPage + 1) * this.pageSize;
		const start = this.currentPage * this.pageSize;
		const part = this.array.slice(start, end);
		this.dataSource = part;
	  }

	//initialiser page d'accueil
	ngOnInit() {
		this._success.subscribe(
			message =>{
				this.successMessage = message
				console.log(this.successMessage);
			} );
		this._success.debounceTime(5000).subscribe(() => {
			this.successMessage = null
			console.log(this.successMessage)
		});	

		this.courrierDepartService.getCourrierDepart().subscribe(
			res => {
				this.dataSource = res.data;
				this.array = res.data;
		          this.totalSize = this.array.length;
		          this.iterator();
			}, 
			error => {

			}
		);
		this.expediteurService.getExpediteurs().subscribe(
			res => {
				this.expediteur = res;
			}
		);

		this.loginForm = this.formBuilder.group({
			nom_object: ['', Validators.required],
			nom_destinateur: ['', Validators.required],
			expediteur: ['', Validators.required]
		});

		setTimeout(() => this.staticAlertClosed = true, 20000);
		

		
	}

	get f() { return this.loginForm.controls; }
	onSubmit() {
		this.submitted = true;
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
		  width: '400px',
		  data: this.expediteur
		});
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log('The dialog was closed');
		  this.openSnackBar();
		  this.animal = result;
		});
	  }

	  // alert 
	  public changeSuccessMessage() {
		this._success.next(`${new Date()} - Message successfully changed.`);
	  }

	  openSnackBar() {
		this.snackBar.openFromComponent(SnackBarComponent, {
		  duration: 3000,
		});
	  }


	  /***************************************************************************************** *
	  * ******************ce partie statistique *************************************************
	  ***************************************************************************************** */

	 public barChartOptions:any = {
		scaleShowVerticalLines: false,
		responsive: true
	  };
	  public barChartLabels:string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Julliet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	  public barChartType:string = 'bar';
	  public barChartLegend:boolean = true;
	 
	  
	  public barChartData:any[] = [
		{data: [65, 59, 80, 81, 56, 55, 40,0,0,0,0,0], label: 'Courrier Départ'},
		{data: [18, 48, 40, 19, 86, 27, 90,0,0,0,0,0], label: 'Courrier Arriver'}
	  ];
	 
	  // events
	  public chartClicked(e:any):void {
		console.log(e);
	  }
	 
	  public chartHovered(e:any):void {
		console.log(e);
	  }
	 
	  public randomize():void {
		// Only Change 3 values
		let data = [
		  Math.round(Math.random() * 100),
		  59,
		  80,
		  (Math.random() * 100),
		  56,
		  (Math.random() * 100),
		  40];
		let clone = JSON.parse(JSON.stringify(this.barChartData));
		clone[0].data = data;
		this.barChartData = clone;
		
		}
		

		// google map
		// google maps zoom level
		zoom: number = 8;
  
		// initial center position for the map
		lat: number = -21.45267 ;
		lng: number = 47.08569;
	
		clickedMarker(label: string, index: number) {
			console.log(`clicked the marker: ${label || index}`)
		}
		
		mapClicked($event: MouseEvent) {
			this.markers.push({
				lat: $event.coords.lat,
				lng: $event.coords.lng,
				draggable: true
			});
		}

		markerDragEnd(m: marker, $event: MouseEvent) {
			console.log('dragEnd', m, $event);
		}

		markers: marker[] = [
			{
				lat: 51.673858,
				lng: 7.815982,
				label: 'A',
				draggable: true
			},
			{
				lat: 51.373858,
				lng: 7.215982,
				label: 'B',
				draggable: false
			},
			{
				lat: 51.723858,
				lng: 7.895982,
				label: 'C',
				draggable: true
			}
		]


		// chart inline

		// lineChart
		public lineChartData:Array<any> = [
			[65, 59, 80, 81, 56, 55, 40],
			[28, 48, 40, 19, 86, 27, 90]
		];
		public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
		public lineChartType:string = 'line';
	
		

		
}



