import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

export interface ITest {
  id?: number;
  testName: string;
  pointsPossible: number;
  pointsReceived: number;
  percentage: number;
  grade: string;
}
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  tests: Array<ITest> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.tests = await this.loadTests();
  }
  async loadTests() {
    let tests = JSON.parse(localStorage.getItem('tests'));
    if (tests && tests.length > 0) {
      //tests = tests;
    }
    else {
      tests = await this.loadTestsFromJson();
    }
    console.log('this.tests from Ngonit...', this.tests);
    this.tests = tests;
    return tests;

  }
  async loadTestsFromJson(){
    const tests = await this.http.get('assets/tests.json').toPromise();
    return tests.json();
  )
}
addTest(){
  const test: ITest = {
    id: null,
    testName: null,
    pointsPossible: null,
    pointsReceived: null,
    percentage: null,
    grade: null
  };
  this.tests.unshift(test);
  localStorage.setItem('tests', JSON.stringify(this.tests));
}
deleteTest(index: number){
  this.tests.splice(index, 1);
  this.saveToLocalStorage();
}

saveToLocalStorage(){
  localStorage.setItem('tests', JSON.stringify(this.tests));
}
computeGrade(){
  console.log('from Compute Grade...');
  this.computeGrade();
}
}
calculate() {
  for (let i = 0; i < this.tests.length; i++){
    console.log ('1--->', i, 'this.tests[i]', this.tests[i]);
  }
}

}
