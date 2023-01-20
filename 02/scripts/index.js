//전역변수 선언 (주사위 굴릴때 랜덤생성된 숫자)
let n;

//주사위 버튼 누르면 랜덤이미지 생성
const showDice = () => {

    n = Math.floor(Math.random() * 6) +1         //6미만의 숫자가 나옴
    const s1 = document.querySelector("#s1")    //id가 s1인 영역 선택

    s1.innerHTML = `<img src="./images/${n}.png">`    //id가 s1인 영역의 내용을 image로 대치

    console.log(n);
    show("none", "block", "none", "none", "block");  //번호선택화면과 확인버튼

};

//요소 보이기 함수 : 인수로 전달
const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {

    const s1 = document.querySelector("#s1");   
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");   //주사위버튼
    const bt2 = document.querySelector("#bt2");   //확인버튼

    //맨 처음 화면 : 번호선택(#s2), 주사위선택만 (#bt1)
    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;

};

//선택한 숫자와 주사위 값의 결과가 같은지 확인
const showOK = () => {

    const radios = document.querySelectorAll("input[type=radio]");  //radio 버튼의 value 가져오기

    //사용자가 선택한 숫자 받아오기
    let usern;

    for(let r of radios){   
        if(r.checked){

            //usern = parseInt(r.value) 숫자로 이루어진 문자열을 숫자형 변환
            //자바에서는 자동으로 형변환 해주긴 함...
            usern = r.value;    
            break;
        }
    }

    //사용자가 선택한 숫자와 주사위의 값 비교
    console.log(n, usern);

/*  내가 짠코드
    if(n==usern){
        s3.innerHTML = `<img src="./images/o.png">`
    }else {
        s3.innerHTML = `<img src="./images/x.png">`
    } 
*/

//  교수님 코드
    let tag;                    //이미지를 태그로 받아서 처리
    //"==" : 숫자문자를 자동으로 숫자로 인식해서 비교 "===" : 데이터타입까지 비교함
    if (n==usern) tag = "o";   
    else tag = "x";

    document.querySelector("#s3").innerHTML = `<img src="./images/${tag}.png">`
    document.querySelector("form").reset(); //래디오버튼 선택 후 리셋   

    show("block", "none", "block", "block", "none");  //결과 확인 & 다시 주사위 선택할수있게 버튼 나오기

};

//DOM 로드가 된 후 보일 화면 제어
//none : 안보임, block : 보임
document.addEventListener("DOMContentLoaded", () => {

    show("none", "none", "none", "block", "none");  //맨 첫화면 주사위 선택만 보이게

});



/*     요소보이기 계속 반복되므로 fucntion으로 짬

//DOM 로드가 된 후 보일 화면 제어
document.addEventListener("DOMContentLoaded", () => {

    const s1 = document.querySelector("#s1");   
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");   //주사위버튼
    const bt2 = document.querySelector("#bt2");   //확인버튼

    //맨 처음 화면 : 번호선택(#s2), 주사위선택만 (#bt1)
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
    bt1.style.display = "block"
    bt2.style.display = "none"

    ...
    
}); */





