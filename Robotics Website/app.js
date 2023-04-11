const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    console.log(question);
    const btn = question.querySelector('.question-btn');
    console.log(btn);
    btn.addEventListener('click', function(){

        questions.forEach(function(items){
            if(items !== question){
                items.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})