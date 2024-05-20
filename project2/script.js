
window.onload= ()=>{
    main();
}


function main(){
    const output= document.getElementById('output');
    const btn= document.getElementById('change-btn');

    btn.addEventListener('click',function(){

        const bgColor= generateRGBcolor();
        output.value = bgColor;
        console.log(bgColor);

    })



}



function generateRGBcolor(){
    red=Math.floor(Math.random()*255);
    blue=Math.floor(Math.random()*255);
    green=Math.floor(Math.random()*255);

    return "rgb('${red}','${blue}','${green}')"
}