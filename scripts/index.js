//DOM 요소 생성 함수

const domAdd = () => {
    console.log('domAdd');

    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id = "bt1";
    btn1.className = "btc";

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id = "bt2";
    btn2.className = "btc";

    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id = "bt3";
    btn3.className = "btc";

    document.getElementById("content").append(btn3);
}

//DOM 요소 접근 함수

const domRead = () => {

    const btc = document.querySelectorAll(".btc");
    console.log(btc);

    //for 순회
    console.log("**for**");
    for(let i=0; i<btc.length; i++){      //변수 2종류 : let(바뀜), const(안바뀜)
        console.log(btc[i]);
    }

    //for ... in 순회
    console.log("**for...in**");
    for(let k in btc) {
        console.log(btc[k]);
    }

    //foreach 순회 : index 제어 할 수 있음
    console.log("**foreach**");
    btc.forEach((item, k) => console.log(item, k));

    //★ for ... of ★ : 중간에 브레이크 걸 수 있음
    console.log("**for...of**");
    for(let [k,item] of btc.entries()) {
        console.log(k, item.innerHTML);
        if(k==1) break;
    }

};


//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {
    //DOM 컨텐츠가 로드가 되고 나면, 함수 내 내용 실행 (콜백)

    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();

});
    

    




//document.getElementById("idh1").innerHTML = "K-Digital";
//Element요소 중 id가 idh1인걸 찾아서, HTML 안에 있는 내용을 "K-Digital"으로 바꿈   










//alert("안녕하세요");    alert : 메시지 창을 띄워줌
