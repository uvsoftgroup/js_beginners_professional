/*
initializing a class defination with constructor method
*/
class Basic{
constructor(copyOne,copyTwo,copyThree,copyFour,copyFive,copySix,copySeven,copyEight) {
 this.copyOne=copyOne;
 this.copyTwo=copyTwo;
 this.copyThree=copyThree;
 this.copyFour=copyFour;
 this.copyFive=copyFive;
 this.copySix=copySix;
 this.copySeven=copySeven;
 this.copyEight=copyEight;
 }
}
/*
Extended class defination form base class
*/
class CodeGeneratorCustom extends Basic {
  constructor(copyOne,copyTwo,copyThree,copyFour,copyFive,copySix,copySeven,copyEight,copyNine){
  super(copyOne,copyTwo,copyThree,copyFour,copyFive,copySix,copySeven,copyEight)
  this.copyNine=copyNine;
  }
}

/*
initializing a constrcutor function   
*/
function CodeGeneratorGui(copyOne,copyTwo,copyThree,copyFour,copyFive,copySix,copySeven,copyEight){
 this.copyOne=copyOne;
 this.copyTwo=copyTwo;
 this.copyThree=copyThree;
 this.copyFour=copyFour;
 this.copyFive=copyFive;
 this.copySix=copySix;
 this.copySeven=copySeven;
 this.copyEight=copyEight;


}

function codeGeneratorDynamic(linkSize,link,codeIdDynamic) {
      var links = '';
	  var baseUrl='';
      var form = document.getElementById('generator-form');
        event.preventDefault();
        var result = document.getElementById('linkgeneratedIdDynamic');
        for (i = 0; i < linkSize; i++) {
		var url= link +'/'+ form.codeIdStatic.value;
            links += link +'/'+i+form.codeIdDynamic.value;
			
        }
        result.innerHTML = links;
       
}



function codeGeneratorStatic(codeIdStatic) {
      var links = '';
	  var baseUrl='';
	  var link ='www.ski-roller.de/product';
      var form = document.getElementById('generator-form');
        event.preventDefault();
        var result = document.getElementById('linkgeneratedIdStatic');
        for (i = 0; i <8; i++) {
		
		var url= link +'/'+ form.codeIdStatic.value;
            links += link +'/'+ form.codeIdDynamic.value;
        }
        result.innerHTML = links;
        
}

function codeGeneratorStatic2(codeIdStatic) {
      var links = '';
	  var baseUrl='';
	  var link ='www.ski-roller.de/product';
      var form = document.getElementById('generator-form');
        event.preventDefault();
        var result = document.getElementById('linkgeneratedIdStatic');
        for (i = 1; i <8; i++) {
		links = document.getElementById('copy'+i).value;
		document.getElementById('input'+i).value=links;
		
        }
        
}