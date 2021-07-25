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


    let maill = document.getElementById('emaill').value 
    document.getElementById('emaill').innerHTML= maill

    

    if(names= ' ' ){
        alert('Kindly enter your name')
    }else{

        alert(  'Hi ' + names + ' ' + 'we have received your message thank you.' )
    }
    
}

