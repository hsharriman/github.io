
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;
  console.log(typeof(newSentence));
  newSentence = [...newSentence];
  for (let n=0; n<newSentence.length; n++) {
    let i = newSentence[n];
    if (i === "A" || i === "a") {
      newSentence[n] = "<span style='color: purple;'>"+ i + "</span>";
    }
    if (i === "E" || i === "e") {
      newSentence[n] = "<span style='color: orange;'>"+ i + "</span>";
    }
    if (i === "I" || i === "i") {
      newSentence[n] = "<span style='color: green;'>"+ i + "</span>";
    }
    if (i === "O" || i === "o") {
      newSentence[n] = "<span style='color: blue;'>"+ i + "</span>";
    }
    if (i === "U" || i === "u") {
      newSentence[n] = "<span style='color: red;'>"+ i + "</span>";
    }
  }
  newSentence = newSentence.join("");
  console.log(newSentence);
  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;

  newSentence = newSentence.toUpperCase();

  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;

  let frag = "<span style='font-size:40px; color:blue;'>";
  newSentence = frag.concat(newSentence, "</span>");


  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
