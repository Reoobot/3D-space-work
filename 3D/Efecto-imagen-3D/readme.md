<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de carga de modelo en Three.js</title>
    <style>
        body { margin: 0; }
    </style>
</head>
<body>
    <script type="module">
        import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
        import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

        // Crear la escena
        const escena = new THREE.Scene();
        escena.background = new THREE.Color(0xeeeeee);

        // Crear la cámara
        const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camara.position.z = 5;

        // Crear el renderizador
        const renderizador = new THREE.WebGLRenderer();
        renderizador.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderizador.domElement);

        // Crear una luz
        const luz = new THREE.DirectionalLight(0xffffff, 1);
        luz.position.set(5, 5, 5).normalize();
        escena.add(luz);

        // Cargar el modelo glTF
        const loader = new GLTFLoader();
        const loader2 = new GLTFLoader();

        let modelo;
        let modelo2;

        loader.load('eclipse.glb', function (gltf) {
            // Añadir el modelo a la escena
            modelo = gltf.scene;
            escena.add(modelo);

            // Animación
            const animar = function () {
                requestAnimationFrame(animar);

                // Rotar el primer modelo
                if (modelo) {
                    modelo.rotation.x += 0.001;
                    modelo.rotation.y += 0.001;
                }

                // Rotar el segundo modelo
                if (modelo2) {
                    modelo2.rotation.y += 0.002;  // Ajusta la velocidad y dirección según sea necesario
                }

                renderizador.render(escena, camara);
            };

            // Iniciar la animación
            animar();
        }, undefined, function (error) {
            console.error(error);
        });

        loader2.load('rotacion.glb', function (gltf2) {
            modelo2 = gltf2.scene;

            // Configurar la posición, escala, etc., según sea necesario
            modelo2.position.x = 2;  // Ejemplo: ajusta la posición en el eje X
            modelo2.rotation.y = Math.PI;  // Ejemplo: rota el modelo 180 grados en el eje Y

            escena.add(modelo2);
        }, undefined, function (error) {
            console.error(error);
        });

    </script>
</body>
</html>
