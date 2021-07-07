$(document).ready(()=>{
    $('.newgame').click(()=>{
        console.log('newgame')
        //call Api function
        callAPI()
    })
})


function callAPI(){
    //call api and make question as callback
    console.log('about to call')
    $.get('https://opentdb.com/api.php?amount=10&type=multiple', makeQuestion)
}

function makeQuestion(data){
    console.log('about to make question')

    //add for loop to create all questions
    let question = data['results'][0]
    const box = `
    <div>
        <p> ${question.question}</P>
        <p> ${question.correct_answer}</P>        
        <p> ${question.incorrect_answers[0]}</P>
        <p> ${question.incorrect_answers[1]}</P>
        <p> ${question.incorrect_answers[2]}</P>
    </div>`

    $(".question").show('slow').append(box)

}