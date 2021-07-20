const zona = document.querySelector(".zona-arrastre");

const changeStyle = (obj, color)=>{ // modificadora del objeto
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`;
}

// Para cargar fotos
/*
cargarArchivo = (ar)=>{
	const reader =  new FileReader();
	reader.readAsDataURL(ar);
	reader.addEventListener("load",e=>{
		let url = URL.createObjectURL(ar);
		let img = document.createElement("IMG");
		img.setAttribute("src",url);
		document.querySelector(".resultado").appendChild(img)
	})
}*/

cargarArchivo = (ar)=>{
	const reader =  new FileReader();
	reader.readAsArrayBuffer(ar);
	reader.addEventListener("load",e=>{
		let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
		let url = URL.createObjectURL(video);
		let img = document.createElement("VIDEO");
		img.setAttribute("src",url);
		document.querySelector(".resultado").appendChild(img);
		img.play()
	})
}

zona.addEventListener("dragover", e=>{ // para cuando entre el objeto
	e.preventDefault();
	changeStyle(e.srcElement, "#222");
})

zona.addEventListener("dragleave", e=>{ // para cuando se valla el objeto
	e.preventDefault();
	changeStyle(e.srcElement, "#888");
})

zona.addEventListener("drop", e=>{
	e.preventDefault();
	changeStyle(e.srcElement,"#888");
	cargarArchivo(e.dataTransfer.files[0]);
})

