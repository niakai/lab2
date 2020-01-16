$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
    $("a.thumbnail").click(projecctClick);
}

function projectClick(e) {
	//prevent the page from reloading
	e.preventDefault();
	//In a.n event handler, $(this) refers to the object that triggered the event
	$(this).css("background-color" , "#7fff00");
}
