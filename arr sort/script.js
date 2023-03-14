function descendingOrder(n){
    let nArr = String(n).split('');
    
    function compare(a, b) {
      if (a < b) return 1;
      if (a == b) return 0;
      if (a > b) return -1;
    };
    let nString = nArr.sort(compare);
    return Number(nString.join(''));
  }