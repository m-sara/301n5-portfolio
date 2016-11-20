'use strict';

var projects = [];
var projectView = {}

function Project(proj) {
  this.title = proj.title;
  this.category = proj.category;
  this.year = proj.year;
  this.language = proj.language;
  this.description = proj.description;
  this.url = proj.url;
  this.preview = proj.preview;
}

projectView.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).show();
  });
  $('.nav-menu .tab:first').click();
};

projectView.handleMainNav();
