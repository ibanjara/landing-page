import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const PrinterModel = () => {
  const rendererRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Verifica si ya existe un renderizador
    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      
      // Obtén las dimensiones del div printer-model
      const printerModelElement = document.getElementById('printer-model');
      const width = printerModelElement.clientWidth;
      const height = printerModelElement.clientHeight;

      renderer.setSize(400, 400);

      // Asegúrate de que el elemento exista antes de intentar adjuntar el renderizador
      if (printerModelElement) {
        printerModelElement.appendChild(renderer.domElement);
      }

      // Guarda el renderizador en useRef para futuras referencias
      rendererRef.current = renderer;
    }

    // Configuración del cubo con un material transparente y bordes blancos
    const cubeSize = 2; // Tamaño del cubo
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    
    // Usa MeshToonMaterial para obtener bordes
    const material = new THREE.MeshToonMaterial({
      color: 0xffffff, // Color interno
      transparent: true,
      opacity: 0.5,
      edgeColor: new THREE.Color(0xffffff), // Color de los bordes
      linewidth: 2, // Ancho de los bordes
    });

    const cube = new THREE.Mesh(geometry, material);

    // Centra el cubo en el escenario
    cube.position.set(0, 0, 0);

    scene.add(cube);

    // Configuración de la cámara y la luz
    camera.position.z = 5;
    const light = new THREE.PointLight(0xffffff, 1, 100); // Ajusta la intensidad de la luz
    light.position.set(0, 0, 10);
    scene.add(light);

    // Función de animación
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Usa el renderizador almacenado en useRef
      rendererRef.current.render(scene, camera);
    }

    animate();

    // Limpiar al desmontar el componente
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose(); // Limpia los recursos del renderizador
      }
    };
  }, []);

  return <div className="flex self-center"id="printer-model" />;
};

export default PrinterModel;
