
let resultado = document.querySelector("#resultado");
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    seleccionar(decodedText)
    console.log(`Scan result: ${decodedText}`, decodedResult);
    document.getElementById('resultado').innerHTML = `<button id="buttonModalScanning" onclick="abrirModal()">Abrir</button>`;
    
    //
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

html5QrcodeScanner.render(onScanSuccess);


cerrarModal();
// Seleccionar objeto 3d

function seleccionar(carrera){
  let modalTitle = document.querySelector('#modal__titulo');
  let contentInfo = document.querySelector('#info_Carrera');
  let figura3d = document.querySelector('#figura3d');
  let carreras = {
    DIE: "Desarrollo e Innovación Empresarial",
    MI:"Mantenimiento Industrial",
    MM:"Metal Mecánica",
    PA: "Procesos Alimentarios",
    TI:"Tecnologías de la Información",
    LI: "Logística Internacional",
    GDT: "Gestión y Desarrollo Turístico",
    G: "Gastronomia",
    ER: "Energías Renovables",
    EF: "Enfermeria",
    RE: "Rectoria",
    BI: "Biblioteca"
  }

  switch (carrera){
    
    case carreras.DIE:
      modalTitle.textContent = carreras.DIE;
      figura3d.poster = "../img/logos/GCH.png"
      figura3d.src = "../3dmodels/admin .glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/GCH.png'><br>Este profesionista cuenta con las competencias profesionales necesarias para su desempeño en el campo laboral,  dentro del ámbito, local, regional y nacional, en las áreas de sistemas de gestión de calidad, capital humano y capacitación"
      abrirModal();
      break
    case carreras.MI:
      modalTitle.textContent = carreras.MI;
      figura3d.poster = "../img/logos/MI.png"
      figura3d.src = "../3dmodels/mantenimiento.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/MI.png'><br>Este profesionista es competente para desarrollar conocimientos teóricos y prácticos enfocados a instalaciones eléctricas, electrónicas, neumáticas, hidráulicas, aire acondicionado e instalación de maquinaria en general";
      abrirModal();
      break
    case carreras.MM:
      modalTitle.textContent = carreras.MM;
      figura3d.poster = "../img/logos/MM.png"
      figura3d.src = "../3dmodels/v8_engine.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/MM.png'><br>Este profesionista es competente para desarrollar e innovar proyectos de Metal Mecánica, validando procesos en la manufactura de partes, componentes automotrices y la reingeniería de productos con los más altos estándares de calidad y normatividad.";
      abrirModal();
      break
    case carreras.PA:
      figura3d.poster = "../img/logos/PA.png"
      modalTitle.textContent = carreras.PA; 
      figura3d.src = "../3dmodels/procesos.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/PA.png'><br>Este profesionista es competente para desarrollar proyectos productivos en el área de procesamiento de alimentos, a través de procesos tecnológicos innovadores para la transformación de materia prima agroalimentaria.";
      abrirModal();
      break
    case carreras.TI:
      modalTitle.textContent = carreras.TI;
      figura3d.poster = "../img/logos/DGS.png"
      figura3d.src = "../3dmodels/nao.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/DGS.png'><br>Este profesionista es capaz de desarrollar proyectos informáticos y evaluar sistemas de tecnologías de la información para establecer acciones de mejora que impacten en el entorno regional, estatal y nacional, mediante el uso de nuevas tecnologías.";
      abrirModal();
      break
    case carreras.LI:
      modalTitle.textContent = carreras.LI;
      figura3d.poster = "../img/logos/LI.png"
      figura3d.src = "../3dmodels/logistica.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/LI.png'><br>Este profesionista es competente para estructurar planes de negocios de comercio internacional, a través de estudios y análisis técnicos para fortalecer el desarrollo de los socios comerciales y sus mercados, así como para desarrollar los procesos de importación y exportación de bienes y servicios de las organizaciones.";
      abrirModal();
      break
    case carreras.GDT:
      modalTitle.textContent = carreras.GDT;
      figura3d.poster = "../img/logos/GDT.png"
      figura3d.src = "../3dmodels/turismo/scene.gltf";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/GDT.png'><br>Este profesionista tiene los conocimientos y habilidades para diseñar y comercializar productos turísticos, administrar eficientemente los recursos a su cargo, implementar e innovar los procesos de servicio a fin de satisfacer las necesidades y expectativas de los turistas, optimizar los recursos para incrementar la rentabilidad de la empresa para contribuir al desarrollo sustentable y económico de la región.";
      abrirModal();
      break
    case carreras.G:
      modalTitle.textContent = carreras.G;
      figura3d.poster = "../img/logos/GAS.png"
      figura3d.src = "../3dmodels/gastro/scene.gltf";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/GAS.png'><br>Este profesionista es competente y cuenta con conocimientos y habilidades necesarios para dirigir e innovar los procesos operativos y administrativos del área de alimentos y bebidas, ya sea en el sector público, privado o  social, así como cualquier organización que requiera la prestación del servicio de alimentación, todo esto con los más altos estándares de calidad e higiene.";
      abrirModal();
      break
    case carreras.ER:
      modalTitle.textContent = carreras.ER;
      figura3d.poster = "../img/logos/ER.png"
      figura3d.src = "../3dmodels/energias.glb";
      contentInfo.innerHTML = "<img style='height: 50px; display:block;' src='../img/logos/ER.png'><br>Este profesionista es competente para contribuir al desarrollo sustentable y al uso racional y eficiente de la energía; mediante la realización de proyectos y estudios especializados en sistemas de generación fotovoltaica, eólica y biocombustibles, y ahorro de la energía de los recursos naturales del entorno."
      abrirModal();
      break
    case carreras.EF:
      modalTitle.textContent = carreras.EF;
      figura3d.src = "../3dmodels/enfermeria.glb";
      abrirModal();
      break
    case carreras.RE:
      modalTitle.textContent = carreras.RE;
      figura3d.src = "../3dmodels/Logo UTCGG.glb";
      abrirModal();
      break
    case carreras.BI:
      modalTitle.textContent = carreras.BI;
      figura3d.src = "../3dmodels/biblioteca.glb";
      abrirModal();
      break
    default:
      alert("No se encontro el recurso de esté QR");
      document.getElementById('resultado').style.display = "none"
  }
}

// Abrir y cerrar modal

function cerrarModal(){
    document.querySelector('#modal').style.display = "none"
}
function abrirModal(){
    document.querySelector('#modal').style.display = "flex"

}
