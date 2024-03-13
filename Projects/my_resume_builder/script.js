document.getElementById('colorSelect').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        var color = event.target.value;
        var elementsToChange = document.querySelectorAll('.box');
        elementsToChange.forEach(function(element) {
            element.style.backgroundColor = color;
            // element.style.color = color; // Set text color to the same as background color
        });
    }
});
