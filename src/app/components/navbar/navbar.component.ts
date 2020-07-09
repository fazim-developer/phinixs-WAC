import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.tabbar li a').on('click', function(e) {

      e.preventDefault();
      
      let that = $(this),
          li = that.parent(),
          ul = li.parent();
      
      if(!ul.hasClass('move') && !li.hasClass('active')) {
          ul.children('li').removeClass('active');
      
          ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
          li.addClass('move');
          ul.addClass('move');
      
          setTimeout(() => {
              ul.removeClass('move');
              li.removeClass('move').addClass('active');
              ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
          }, 1200);
      }
      
      });      
  }



  menuHide(){
    var x = document.getElementById("navbarh");
    var y = document.getElementById("footbar");
    var a = document.getElementById("full_exit");
    var b = document.getElementById("full");
    var c = document.getElementById("myAlert2"); 
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.visibility = "unset";
      a.style.display = "none";
      b.style.display = "block";
      a.style.paddingTop = "0px"; //icon padding for better centering
      b.style.paddingTop = "0px";


    } else {
      x.style.display = "none";
      y.style.visibility = "hidden";
      a.style.display = "block";
      b.style.display = "none";
      c.style.display = "none";
      a.style.paddingTop = "0px"; //icon padding for better centering
      b.style.paddingTop = "0px";


    }
    

  }

  themeSwitch(){
    var x = document.getElementById("switch-theme");
    var a = document.getElementById("dark-mode");
    var b = document.getElementById("light-mode");

    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
      }, 1000)
  }
      if(x.style.display === "flex") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "block";
        a.style.paddingTop = "0px"; //icon padding for better centering
        b.style.paddingTop = "0px";

          trans()
          document.documentElement.setAttribute('data-theme', 'light')
      } else {
        x.style.display = "flex";
        a.style.display = "block";
        b.style.display = "none";
        a.style.paddingTop = "0px"; //icon padding for better centering
        b.style.paddingTop = "0px";
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
              }

  }
  

   showAlert(){
    if($("#myAlert").find("div#myAlert2").length==0){
      $("#myAlert").append("<div class='alert alert-success alert-dismissable' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Success! message sent successfully.</div>");
    }
    $("#myAlert").css("display", "");
  }

  hideAlert(){
    if($("#myAlert").find("div#myAlert2").length==0){
      $("#myAlert").append("<div class='alert alert-success alert-dismissable' id='myAlert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> Success! message sent successfully.</div>");
    }
    $("#myAlert").css("display", "none");
  }


}
