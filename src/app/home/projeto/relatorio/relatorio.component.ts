import { Component, OnInit } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

declare var jsPDF: any;

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  exportCsv(){
    var data = [
      {
        name: "Test 1",
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
    ]
   let csv = new Angular5Csv(data, 'My Report');

  }

  exportPdf(){
    var columns = [
      {title: "ID", dataKey: "id"},
      {title: "Name", dataKey: "name"}, 
      {title: "Country", dataKey: "country"}, 
      ];
    var rows = [
      {"id": 1, "name": "Shaw", "country": "Tanzania"},
      {"id": 2, "name": "Nelson", "country": "Kazakhstan"},
      {"id": 3, "name": "Garcia", "country": "Madagascar"}
    ];

      var doc = new jsPDF('p', 'pt');
      doc.autoTable(columns, rows);
      doc.save("table.pdf");
  }
}
