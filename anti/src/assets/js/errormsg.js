 var errorMsg = function (e) {
  switch(e.code)
  {
    case 690 :
      alert(e.msg);
      break
    default:
      console.log(e.msg);
  }
}
export {errorMsg}
