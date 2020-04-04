import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-skill-select',
  templateUrl: './skill-select.component.html',
  styleUrls: ['./skill-select.component.scss']
})
export class SkillSelectComponent implements OnInit {


  @Output() changeEmitter: EventEmitter<any[]> = new EventEmitter();

  s: any = "-1";
  selected: any[] = [];
  options: any[] = [];
  all: any[] = [];
  

  constructor(private rs: HttpService) { }

  ngOnInit() {
    this.rs.getAll("vjestine")
      .subscribe(data => {
        this.options = data;
        this.all = data;
      },
      err => {

      });
  }

  setSelected(skills){
    setTimeout(() => {
      if(skills == "" || skills == null)
        return;
      skills = skills.split(",");
      this.options = JSON.parse(JSON.stringify(this.all));
      this.selected = [];
      for(var i=0; i<skills.length; i++){
        var skill = this.all.find(s => s.id.toString() == skills[i]);
        this.selected.push(JSON.parse(JSON.stringify(skill)));
        this.options = this.options.filter(op => op.id != skill.id);
      }
    }, 150);
  }

  remove(skill){
    this.options.push(JSON.parse(JSON.stringify(skill)));
    this.selected = this.selected.filter(sel => sel.id != skill.id);
    this.s = "-1";
    this.changeEmitter.emit(this.getSelected());
  }

  change(){
    if(this.s != "-1"){
      this.selected.push(JSON.parse(JSON.stringify(this.s)));
      this.options = this.options.filter(op => op.id != this.s.id);
      this.s = "-1";
      this.changeEmitter.emit(this.getSelected());
    }
  }

  getSelected(){
    return this.selected.map(s => s.id);
  }

  getSelectedSkills(){
    return this.selected;
  }

}
