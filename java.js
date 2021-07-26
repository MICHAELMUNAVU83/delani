$(document).ready(function () {
    $('#des').hide()

    $('#dess').mouseenter(function () {
        $('#dess').hide()
    })

    $('#dess').mouseenter(function () {
        $('#des').show()
    })
    $('#des').mouseleave(function () {
        $('#des').hide()
    })
    $('#des').mouseleave(function () {
        $('#dess').show()
    })
    

    $('#dev').hide()

    $('#devv').mouseenter(function () {
        $('#devv').hide()
    })

    $('#devv').mouseenter(function () {
        $('#dev').show()
    })
    $('#dev').mouseleave(function () {
        $('#dev').hide()
    })
    $('#dev').mouseleave(function () {
        $('#devv').show()
    })
   



    $('#prd').hide()

    $('#prdd').mouseenter(function () {
        $('#prdd').hide()
    })

    $('#prdd').mouseenter(function () {
        $('#prd').show()
    })
    $('#prd').mouseleave(function () {
        $('#prd').hide()
    })
    $('#prd').mouseleave(function () {
        $('#prdd').show()
    })
    


        
    




   















})

function subbb(){


    let names = document.getElementById('jina').value 
    document.getElementById('jina').innerHTML= names


    let mail = document.getElementById('email').value 
    document.getElementById('email').innerHTML= mail

    alert(  'Hi ' + names + ' ' + 'we have received your message and  thank you for reaching out to us.' )

    
    
}

