import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'calculator',
	templateUrl: './calculator.html',
	styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit{
	public operation;
	public errorMessage;

	constructor(
	){}

	ngOnInit(){
			this.operation = {
				"number_1":"",
				"number_2":"",
				"operator":"",
				"result":""
			};
	}

	onSubmit(){
		if(this.operation.operator == "Sum"){
		this.operation.result = this.operation.number_1 + this.operation.number_2;
		}

		if(this.operation.operator == "Subtraction"){
		this.operation.result = this.operation.number_1 - this.operation.number_2;
		}

		if(this.operation.operator == "Multiplication"){
		this.operation.result = this.operation.number_1 * this.operation.number_2;
		}

		if(this.operation.operator == "Division"){
		this.operation.result = this.operation.number_1 / this.operation.number_2;
		}
	}

	onReset(){
	this.operation = {
				"number_1":"",
				"number_2":"",
				"operator":"",
				"result":""
			};
	}
 }
