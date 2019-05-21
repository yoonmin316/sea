function random(){
  var name = document.getElementById('nm');
  var age = document.getElementById('ag');
  var marine = ['오징어', '상어', '거북이', '고래', '멸치'];
  var total = marine.length;
  var num = Math.floor(Math.random()*total);
  var result = name.value+'님에게 맞는 동물은 '+marine[num]+' 입니다.';
  if(name.value === '허준수'||name.value === '준수'||name.value === '정준수'){
    num = 0;
    result = name.value+'님에게 맞는 동물은 '+marine[num]+' 입니다.';
    location.href = marine[num]+'.html?to='+result;
  }
  else{
  location.href = marine[num]+'.html?to='+result;
 }
}
function main(){
  var name = document.getElementById('nm');
  var age = document.getElementById('ag');
  if(name.value !== ''){
    random();
  }
  else{
    alert('이름을 입력해주세요');
  }
}
