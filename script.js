// function Page1(){
//     const page1 = document.getElementById("page1");

//     if(page1.style.display=="block"){
//         page1.style.display="none";
//     }else{
//         page1.style.display="block";
//     }
// }

// function Page2(){
//     const page2 = document.getElementById("page2");
//     const page3 = document.getElementById("page3");

//     if(page2.style.display=="block"){
//         page2.style.display="none";
//     }else{
//         page2.style.display="block";
//     }
// }

// function Page3(){
//     const page3 = document.getElementById("page3");

//     if(page3.style.display=="block"){
//         page3.style.display="none";
//     }else{
//         page3.style.display="block";
//     }
// }


function Pages(page){
    const page1=document.getElementById("page1");
    const page2=document.getElementById("page2");
    const page3=document.getElementById("page3");
    
    switch(page){
        case 1:
            page1.style.display="block";
            page2.style.display="none";
            page3.style.display="none";
            break;
        case 2:
            page1.style.display="none";
            page2.style.display="block";
            page3.style.display="none";
            break;
        case 3:
            page1.style.display="none";
            page2.style.display="none";
            page3.style.display="block";
            break;
    }
};