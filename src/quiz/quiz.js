const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);

    const answers = {
        weapon: formData.get('weapons')
    };
    
    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);
     
});


// route to reselts page
