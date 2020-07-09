import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var $mediaElements = $('.tagelement');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');
    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});

    
  }
  searchApp() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
    }

    

}
