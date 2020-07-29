//과정명 : 스마트 하이브리드앱 콘텐츠 개발
/*  아래 항목을 기재하세요
 *  훈련생 성명 :
 *  
 */
initPage(1);

										//page portfolio section Color Setting
//****************************************************************************************************************************************
// 1. 시작 
	let colorRand = [{bg:"BlanchedAlmond",fg:"black"},{bg:"BlueViolet",fg:"white"},
						{bg:"Crimson",fg:"white"},{bg:"CadetBlue",fg:"white"},{bg:"FireBrick",fg:"white"},{bg:"LemonChiffon",fg:"black"}];
	let fds = document.getElementsByTagName("fieldset");
	let oldNum;
	for(let i=0;i<fds.length;i++){
		let ranNum;
		while(true){
			ranNum = randomColor();
			if(ranNum!=oldNum){
				oldNum=ranNum;
				break;
			}			
		}	
		fds[i].style="background:"+colorRand[ranNum].bg+";color:"+colorRand[ranNum].fg;
		fds[i].children[1].style.color=colorRand[ranNum].fg;
		let parentColor="";
		if(colorRand[ranNum].fg=="white"){
			parentColor="black";
		}else{
			parentColor="LightGrey";
		}
		fds[i].parentElement.style="background:"+parentColor;
	}
	function randomColor(){
		let resNum = parseInt(Math.random()*(colorRand.length));
		return resNum;
	}
// 1. 끝
/* 1. 시작 ~ 1. 끝 까지의 코드 내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 *  
 * 
 * 
 * 
 * 
 */
	
										//footer layout setting part
//****************************************************************************************************************************************	
// 2. 시작
	footerLayout();
	function footerLayout(){
		let footer = document.querySelector("footer");
		footer.style="position:fixed;top:"+(window.innerHeight-footer.offsetHeight)+"px";	
	}
// 2. 끝
/* 2. 시작 ~ 2. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * 
 * 
 * 
 * 
 */

										//event Listener part
//****************************************************************************************************************************************	
// 3. 시작
	window.addEventListener("resize",footerLayout);
	let fntSel = document.getElementById("fntSel");
	fntSel.addEventListener("change",function(e){
		console.log("chg event trigger!!!!");
		console.log("chg value confirm:"+this.value);
		initPage(this.value);
		footerLayout();	
	});
//3. 끝
/* 3. 시작 ~ 3. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * 
 * 
 * 
 * 
 */
	
										//preview, member mouse envent register
//****************************************************************************************************************************************	
// 4. 시작	
	let prevs = document.querySelectorAll(".prev");
	let pmems = document.querySelectorAll(".pmem");
	prevs.forEach(function(item,index){
		item.addEventListener("mousedown",viewsibring,false);
		item.addEventListener("mouseup",hidesibring,false);
		pmems[index].addEventListener("mousedown",viewsibring,false);
		pmems[index].addEventListener("mouseup",hidesibring,false);
	});
	function viewsibring(e){
		this.nextSibling.style.display="block"
		this.nextSibling.style.left=(e.pageX+10)+"px";		
	}
	function hidesibring(){
		this.nextSibling.style.display="none";
	}
//4. 끝
/* 4. 시작 ~ 4. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * 
 * 
 * 
 * 
 */
	
					//etc function part
function initPage(totalFntSize){//totalFntSize: 수치 변경으로 전체 폰트 및 em 태그 사이즈 변경
	let body = document.getElementsByTagName("body")[0];
	body.style.fontSize=totalFntSize+"em";
}
