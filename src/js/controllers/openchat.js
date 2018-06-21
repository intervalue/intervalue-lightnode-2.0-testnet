// function openchatDiv(evt){
//     var event = evt ? evt : window.event;
//     // console.log(event.target.id)
//
//     var chatclickid = event.target.id;
//     var aDiv = document.getElementById("chatpop");
//     if(chatclickid == 'chattopdotimg'){
//         // console.log('ddddddfdsfsd');
//         if(aDiv.style.display == "block"){
//             event.stopPropagation();
//             event.preventDefault();
//             // console.log('block');
//             aDiv.style.display = "none";
//         }else if(aDiv.style.display == "none"){
//             event.stopPropagation();
//             event.preventDefault();
//             // console.log('none');
//             aDiv.style.display = "block";
//         }
//     }else{
//         // console.log('yincang')
//         aDiv.style.display = "none";
//     }
// }