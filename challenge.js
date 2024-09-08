// التحدي الاول
var text = Hi;
if (text.length < 3) {
    console.log("النص قصير جدًا");
  } else {
    console.log("السلسلة النصية معكوسة");
    console.log(text.split('').reverse().join(''));
  }

  var text = Hello;
if (text.length < 3) {
    console.log("النص قصير جدًا");
  } else {
    console.log("السلسلة النصية معكوسة");
    console.log(text.split('').reverse().join(''));
  }

  
//   التحدي الثاني

var sentence = "اهلا بك في اكاديمية طويق";
var word = "طويق";

if (sentence.includes(word)) {
    console.log("الكلمة موجودة");
  } else {
    console.log("الكلمة غير موجودة");
  }

  var sentence = "اليوم الجو مشمس";
var word = "ممطر";

if (sentence.includes(word)) {
    console.log("الكلمة موجودة");
  } else {
    console.log("الكلمة غير موجودة");
  }


//   التحدي الثالث
var sentence3 = "اليوم الجو مشمس";
var word3 = "ممطر";
if (sentence3.startsWith(word3)) {
    console.log("نعم، تبدأ بهذه الكلمة");
  } else {
    console.log("لا، لا تبدأ بهذه الكلمة");
  }
  var word2 = "ممطر";

  if (sentence3.startsWith(word2)) {
    console.log("نعم، تبدأ بهذه الكلمة");
  } else {
    console.log("لا، لا تبدأ بهذه الكلمة");
  }

//   التحدي الرابع

var text2 = Hello;
var text3 = HI;

    if (text2.length > 10) {
      let uppercasedText = text.toUpperCase();
      console.log(uppercasedText);
    } else {
      console.log("النص قصير جدًا");
    }
    if (text3.length > 10) {
        let uppercasedText = text.toUpperCase();
        console.log(uppercasedText);
      } else {
        console.log("النص قصير جدًا");
      }
  