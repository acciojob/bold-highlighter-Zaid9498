function highlight() {
    const boldElements = document.querySelectorAll('strong');
    
    for (const element of boldElements) {
        element.style.color = 'green';
    }
}

function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    
    for (const element of boldElements) {
        element.style.color = 'black';
    }
}

