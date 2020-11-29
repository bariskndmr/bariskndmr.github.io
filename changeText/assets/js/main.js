const fonts = [
    {
        font : 'Arial, Helvetica, sans-serif'
    },
    {
        font : 'monospace'
    },
    {
        font : 'cursive'
    },
    {
        font : 'Times New Roman'
    },
    {
        font : 'fantasy'
    }
];
var fontCollection = fonts,
    fontColor = document.getElementById('fontColor'),
    inputRange = document.getElementById('fontSize'),
    mainText = document.getElementById('mainText'),
    fontSizeCount = document.getElementById('fontSizeCount'),
    selectedFont = document.getElementById('fontFamilyChoose');

fonts.forEach(function(index){
    console.log(index);
        option = document.createElement('option');
        option.value = index.font;
        option.text = index.font;
        selectedFont.appendChild(option);
})

selectedFont.addEventListener('change', function(e){
    mainText.style.fontFamily = selectedFont.value;
})

fontColor.addEventListener('keyup', function(e){ 
    if(e.key ==='Enter' || e.keyCode === 13){
        mainText.style.color = fontColor.value;
        fontColor.value='';
    }
})

inputRange.addEventListener('change',function(e){
    mainText.style.fontSize = inputRange.value +'px';
    fontSizeCount.innerHTML= inputRange.value +'px';
})
