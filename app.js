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

// projectView.populateFilters = function() {
//   $('project').not('.template').each(function() {
//     var authorName, category, optionTag;
//     authorName = $(this).find('address a').text();
//     optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
//     $('#author-filter').append(optionTag);
//     category = $(this).attr('data-category');
//     optionTag = '<option value="' + category + '">' + category + '</option>';
//     if ($('#category-filter option[value="' + category + '"]').length === 0) {
//       $('#category-filter').append(optionTag);
//     }
//   });
// };

// projectView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('project').hide();
//       $(`project[data-category="${ $(this).val() }"]`).fadeIn(500);
//     } else {
//       $('project').not('.template').show();
//     }
//
//     $('#author-filter').val('');
//   });
// };



////////////////////////////////////////////////////////

projectView.handleMainNav();
