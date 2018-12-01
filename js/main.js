function loadQuestions() {
    var template = $('#question-template').html();

    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        question: "How many cats?"
    });

    console.log(rendered);

    $('#question-container').append(rendered);
}