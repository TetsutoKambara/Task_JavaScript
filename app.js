// －－－－－－－－－－－－－－－－－－
// main
// －－－－－－－－－－－－－－－－－－
// 実行
CountUp();

// －－－－－－－－－－－－－－－－－－
// func
// －－－－－－－－－－－－－－－－－－
// カウントします。
function CountUp() {

  const MaxNum = 50;  //50まで

  for(let i = 1; i <= MaxNum; i++){

    // 10カウント毎に「今 [カウント] 回ループしました。」とコンソールに出力する。 例）カウントが10の場合：今10回ループしました。
    // →iが10で割れる数
    if(CanDivide10(i) == true){
      console.log("今[" + i + "]回ループしました。")
    }

    // 4で割れる数の場合は「4で割れる数です。[カウント]」とコンソールに出力する。
    if (CanDivide4(i) == true){
      console.log("4で割れる数です。[" + i + "]")
    }

  }
  // カウントが50になったらアラートで「50回カウントが終わりました。」と出力する。
  alert("50回カウントが終わりました。")
}

// 10で割り切れる？
function CanDivide10(currentNum){
  if (currentNum%10 == 0){
    return true;
  }else{
    return false;
  }
}

// 4で割り切れる？
function CanDivide4(currentNum){
  if (currentNum%4 == 0){
    return true;
  }else{
    return false;
  }
}



