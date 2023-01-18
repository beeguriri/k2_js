//주사위 버튼 누르면 랜덤이미지 생성
const showDice = () => {

    const n = Math.floor(Math.random() * 6) +1  //6미만의 숫자가 나옴
    const s1 = document.querySelector("#s1")    //id가 s1인 영역 선택

    s1.innerHTML = `<img src="./images/${n}.png">`    //id가 s1인 영역의 내용을 image로 대치
                                                      //`${n}`의미 다시 확인필요
    console.log(n);
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

//선택한 숫자와 주사위의 결과 확인
const result = () => {

    const n1 = form1.num.value; //선택한 숫자
    const n2 = n;               //랜덤으로 생성된 주사위 숫자(1~6):

    if(n1==n2) s3.innerHTML = `<img src="./images/o.png">`;
    else s3.innerHTML = `<img src="./images/x.png">`;

};

//DOM 로드가 된 후 보일 화면 제어
//none : 안보임, block : 보임
document.addEventListener("DOMContentLoaded", () => {

    show("none", "block", "none", "block", "none");

    showDice();

    result();



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





