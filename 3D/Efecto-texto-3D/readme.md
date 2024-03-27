<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Imagen en Three.js</title>
    <style>
        body { margin: 0; }
    </style>
</head>
<body>
    <script type="module">
        import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

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

        // Cargar la textura (reemplaza 'ruta/a/tu/imagen.jpg' con la ruta correcta de tu imagen)
        const textura = new THREE.TextureLoader().load('falexis.jpeg');

        // Crear el material del plano con la textura
        const materialDePlano = new THREE.MeshBasicMaterial({ map: textura });

        // Crear la geometría del plano
        const geometriaDePlano = new THREE.PlaneGeometry(2, 1);

        // Crear la malla del plano
        const mallaDePlano = new THREE.Mesh(geometriaDePlano, materialDePlano);
        escena.add(mallaDePlano);

        // Animación
        const animar = function () {
            requestAnimationFrame(animar);

            // Rotar el plano
            mallaDePlano.rotation.x += 0.01;
            mallaDePlano.rotation.y += 0.01;

            renderizador.render(escena, camara);
        };

        animar();
    </script>
</body>
</html>



















<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Texto en Three.js</title>
    <style>
        body { margin: 0; }
    </style>
</head>
<body>
    <script type="module">
        import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';

        // Función para cargar la fuente de manera asíncrona
        function loadFont(url) {
            return new Promise((resolve, reject) => {
                const fontLoader = new THREE.FontLoader();
                fontLoader.load(url, resolve, undefined, reject);
            });
        }

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

        // Cargar la fuente de manera asíncrona
        loadFont('optimer_bold.typeface.json')
            .then(font => {
                // Crear la geometría del texto
                const geometriaDeTexto = new THREE.TextGeometry('¡Hola, Freddy Alexis y Freddy David!', {
                    font: font,
                    size: 0.5,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                });

                // Crear el material del texto
                const materialDeTexto = new THREE.MeshBasicMaterial({ color: "#20214F" });

                // Crear la malla de texto
                const mallaDeTexto = new THREE.Mesh(geometriaDeTexto, materialDeTexto);
                escena.add(mallaDeTexto);

                // Animación
                const animar = function () {
                    requestAnimationFrame(animar);

                    // Rotar el texto
                    mallaDeTexto.rotation.x += 0.01;
                    mallaDeTexto.rotation.y += 0.01;

                    renderizador.render(escena, camara);
                };

                animar();
            })
            .catch(error => {
                console.error('Error al cargar la fuente:', error);
            });
    </script>
</body>
</html>

