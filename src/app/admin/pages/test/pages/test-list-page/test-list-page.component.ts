import { Component } from '@angular/core';
import { ITest } from '../../interfaces/ITest';
import { TestServiceService } from '../../testService.service';

@Component({
  selector: 'app-test-list-page',
  templateUrl: './test-list-page.component.html',
  styleUrl: './test-list-page.component.css'
})
export class TestListPageComponent { 
  public testsList!: ITest[];
  public constructor(private testservice : TestServiceService){}
  ngOnInit(){
    this.testservice.getAllDatos().then(
      tests => this.testsList = tests
    )
  }
}