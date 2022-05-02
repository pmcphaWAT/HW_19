// USE TO CHECK IF JQUERY IS LOADED
// $(document).ready(function(){
//     alert('document ready');
// });

$(document).ready(function () {
    //this function gets the class that is passed into the scrollLocation funct.
    $('li').click(function () {
        var acceptableInput = false;
        var className = '.' + $(this).attr('class');
        if (className == '.skills') {
            className = '.heading';
            acceptableInput = true;
        }
        else if (className == '.work') {
            className = '.myWork'
            acceptableInput = true;
        }
        if (acceptableInput) {
            scrollLocation(className);
        }
    });


    //eventually change so that it downloads the resume page right away
    $('button').click(function(){
        var className = '.' + $(this).attr('class');
        if (className == '.resume-button') {
            window.open('files/resume.pdf','_blank');
        }
        else if (className == '.hosted-button') {
            window.open('files/hosted.pdf','_blank');
        }
        else if (className == '.humane-society-button') {
            window.open('files/humane-society.pdf','_blank');
        }
        else if (className == '.pine-island-button') {
            window.open('files/pine-island.pdf','_blank');
        }
        if (acceptableInput) {
            scrollLocation(className);
        }
    })
});

//function to scroll to nav location)
function scrollLocation(className) {
    $('html, body').animate({
        scrollTop: $(className).offset().top
    }, 1000);
    return false;
}

