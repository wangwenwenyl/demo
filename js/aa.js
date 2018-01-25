/*['1a','2b','3c'].forEach(e=>console.log(parseInt(e)));
console.log(['1a','2b','3c'].map(parseInt))*/



let arr=[4,5,1,2,7,6,3];
let toString={
	/*利用sort进行排序*/
	systemSort:function(arr){
		return arr.sort(function(a,b){
			return a-b;
		})
	},
	/*冒泡排序*/
	bubbleSort:function(arr){
		let len=arr.length,tem;
		for(let i=0;i<len-1;i++){
			for(let j=0;j<len-1-i;j++){
				if(arr[j]>arr[j+1]){
					temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
		return arr;
	}
}

let arr1=[8,9,6,7,4,5,1,2,3];

/*递归方法*/
function fib(n){
	if(n<=2){
		return 1;
	}else{
		let callee=arguments.callee;
		return callee(n-1)+callee(n-2);
	}
}

/*用循环*/

function fib2(n){
	if(n<2){
		return 1;
	}else{
		let f1=1,f2=1,fn=0;
		
	}
}

/*用setTimeout实现setInterver的效果*/
var  num=1;
var img=setTimeout(function(){
		num++;
		console.log(num);
		if(num>5){
			clearTimeout(img);
		}
		var t=setTimeout(arguments.callee,1000);
},1000);




