// function openDiv(evt){
//     var event = evt ? evt : window.event;
//     console.log(event.target.id)
//
//     var chatclickid = event.target.id;
//     // var aDiv = document.getElementById("pop");
//     var aDiv = document.getElementById("pop");
//     var bDiv = document.getElementById("chatpop");
//     if(chatclickid == 'indexpop'){
//         console.log('ddddddfdsfsd');
//         if(aDiv.style.display == "block"){
//             event.stopPropagation();
//             event.preventDefault();
//             console.log('block');
//             aDiv.style.display = "none";
//         }else if(aDiv.style.display == "none"){
//             event.stopPropagation();
//             event.preventDefault();
//             console.log('none');
//             aDiv.style.display = "block";
//         }
//     }else if(chatclickid == 'chattopdotimg'){
//         console.log('215464')
//         console.log(bDiv)
//         if(bDiv.style.display == "block"){
//             event.stopPropagation();
//             event.preventDefault();
//             console.log('block');
//             bDiv.style.display = "none";
//         }else if(bDiv.style.display == "none"){
//             event.stopPropagation();
//             event.preventDefault();
//             console.log('none');
//             bDiv.style.display = "block";
//         }
//     }else{
//         aDiv.style.display = "none";
//         bDiv.style.display = "none";
//     }
// }