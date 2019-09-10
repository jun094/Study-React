//단위수 측정
var len = s.length;
var rank;
if (len / 2 == 0) {
  rank = len / 2;
} else {
  len--;
  rank = len / 2;
}


function solution(s) {
  var char=0;
  var len = s.length;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      len--;
    }
  }
  var answer = len;

  return answer;
}

console.log(solution('aabbaccc'));
2a2ba3c
