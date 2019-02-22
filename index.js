'use strict';

/*
We need to select one of the .thumbnails, copy its information,
and replace the information in the .hero class. Then we need
to update the page so it displays the selected image.
The images must also be accessable with the tab and enter keys.
*/

// First we should determine what happens when an image is selected
function selectImage(){
  $('.thumbnail').click(function(event){
    //event.stopPropagation();
    const thumbnailClone = $(this).find('img').clone();
    $('.hero img').replaceWith(thumbnailClone);
    console.log(thumbnailClone);
  });
}

$(selectImage);
