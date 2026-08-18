function changeMessage() {
  var img = document.getElementById("sample-ing");
  if (img) {
    img.src = "bbb.png";
    console.log("자바 스크립트 로그를 찍을 수 있습니다.");
  } else {
    console.error("이미지 찾을 수 없ㅇ므.");
  }
}
