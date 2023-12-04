
function helpBox() {
    var popup = document.getElementById("helpPopup");
    popup.classList.toggle("show");
}



const tamilPronouns = {
    I:"Naan",
    You:"Niingal",
    formalyou:"Nii",
}

const tamilNouns = {
    water:"thanni",
    elephant:"annai",
    fruit:"pazham",
    house:"viidu",
}

const tamilVerbSuffix = {
    naan:"en",
    niingal:"iingal",
    nii:"e",
}

const tamilWeakVerbs = {
    go:"poo",
    come:"vaa",
    walk:"nada",
    eat:"sappidu",
    drink:"kudi",
}

const tamilStrongVerbs = {
    study:"padi",
    drink:"kudi",
    laugh:"siri",
    take:"edu",
    give:"kodu",
    
}

const tamilWeakVerbTenseSuffix = {
    present:"r",
    past:"n",
    future:"v",
}

const tamilStrongVerbTenseSuffix = {
    presnt:"kkur",
    past:"chch/thth",
    future:"pp",
}

function pronounGen(){
    var randomNumber = Math.random();
    var pronounKeyArray  = Object.keys(tamilPronouns);
    var pronounIndex  = Math.floor(randomNumber * pronounKeyArray.length);
    var randomPronounKey = pronounKeyArray[pronounIndex];
    var randomPronounValue  = tamilPronouns[randomPronounKey];
    return randomPronounValue
}

function nounGen(){
    var randomNounNumber = Math.random();
    var nounKeyArray = Object.keys(tamilNouns);
    var nounIndex = Math.floor(randomNounNumber * nounKeyArray.length);
    var randomNounKey = nounKeyArray[nounIndex];
    var randomNounValue = tamilNouns[randomNounKey]
    return randomNounValue
}

function verbGen(verbDict){
    var randomVerbNumber = Math.random();
    var verbKeyArray = Object.keys(verbDict);
    var verbIndex = Math.floor(randomVerbNumber* verbKeyArray.length);
    var randomVerbKey = verbKeyArray[verbIndex];
    var randomVerbValue = verbDict[randomVerbKey];
    return randomVerbValue;
}

function verbDictFunc(){
    var randomVerbNum = Math.random();
    var verbDecider = Math.floor(randomVerbNum * 2);
    if (verbDecider === 0){
        var verbDict = tamilWeakVerbs;
        return verbDict
    } 
    else if(verbDecider=== 1){
        var verbDict = tamilStrongVerbs;
        return verbDict
    }
}

function tamilTenseSuffixGen(verbDict){
    switch(verbDict) {
        case tamilWeakVerbs:
            var randomWeakVerbNumber = Math.random();
            var weakSuffixKeyArray = Object.keys(tamilWeakVerbTenseSuffix);
            var weakSuffixIndex = Math.floor(randomWeakVerbNumber* weakSuffixKeyArray.length);
            var randomWeakSuffixKey = weakSuffixKeyArray[weakSuffixIndex];
            var SuffixValue = tamilWeakVerbTenseSuffix[randomWeakSuffixKey];
            return SuffixValue
            // Code to execute if expression matches value1
            case tamilStrongVerbs:
                var randomStrongVerbNumber = Math.random();
                var strongSuffixKeyArray = Object.keys(tamilStrongVerbTenseSuffix);
                var strongSuffixIndex = Math.floor(randomStrongVerbNumber* strongSuffixKeyArray.length);
                var randomStrongSuffixKey = strongSuffixKeyArray[strongSuffixIndex];
                var SuffixValue = tamilStrongVerbTenseSuffix[randomStrongSuffixKey];
                return SuffixValue
                // Code to execute if expression matches value2
                // Add more cases as needed
                default:
                    console.log(verbDict);
                    // Code to execute if none of the cases match the expression
                }
            }
            function tamilVerbSuffixGen(randomPronounValue){
                var lowerPronoun = randomPronounValue.toLowerCase();
                var verbSuffix = tamilVerbSuffix[lowerPronoun];
                return verbSuffix
            }
            
            
            var randomPronoun = pronounGen();
            var randomNoun = nounGen();
            var output = verbDictFunc();
            var randomVerb = verbGen(output);
            var randomTenseSuffix = tamilTenseSuffixGen(output);
            var randomVerbSuffix = tamilVerbSuffixGen(randomPronoun);
            
            function sentenceGenerator(pronoun,verb,noun,verbSuffix,tenseSuffix){
                var pronounElements = document.getElementsByClassName("sentence");
                for (var i = 0; i < pronounElements.length; i++) {
                pronounElements[i].innerHTML = randomPronoun + " " + randomNoun + " " + randomVerb + " " + randomTenseSuffix + " " + randomVerbSuffix;
                }
            }
