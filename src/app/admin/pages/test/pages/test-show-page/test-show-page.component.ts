import { Component } from '@angular/core';
import { IPart } from '../../interfaces/IPart';
import { PartServiceService } from '../../partService.service';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-show-page',
  templateUrl: './test-show-page.component.html',
  styleUrl: './test-show-page.component.css'
})
export class TestShowPageComponent { 
  public partsList!: IPart[];
  public test!: ITest;
  
  
  public constructor(private partservice : PartServiceService,
    private testService : TestServiceService,
    private route : ActivatedRoute){}

  ngOnInit(){
    const testId: number = +this.route.snapshot.paramMap.get('testId')!;
    this.partservice.getAllDatos(testId).then(
      part => this.partsList = part
    )
  }
}