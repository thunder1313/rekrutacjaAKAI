function reverseNumber(num) {
    let ans = '';
    let flag = 0;
    if (num < 0) {
        flag = 1;
        num *= -1;
    }
    while (num !== 0) {
        ans += (num%10).toString();
        num = Math.floor(num / 10);
    }
    if (flag)
        return Number(ans*-1)
    return Number(ans);
  }
  
  console.log("1.", reverseNumber(-207));
  
  // 2. dodaj do siebie wszystkie wartości z tablicy, które są parzyste
  // dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
  const tab = [1, -2, 3, -4, 5, -6, 7, -8, 9];
  function addEven(array) {
    const sum = array.reduce((acc, num) => {
        return num%2 === 0 ? acc + num : acc;
    }, 0)
    return sum;
  }
  
  console.log("2.", addEven(tab));