<!DOCTYPE html>
<html lang="en">

<head>
    <title>Three.js Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <style>
        body { margin: 0; }
    </style>
</head>

<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Set up variables
        let scene, camera, renderer, cube;

        // Initialize the scene
        function init() {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.set(0, 0, 0); // Posiciona la cámara en el centro del cubo

            // Cube
            const geometry = new THREE.BoxGeometry(800, 800, 800); // Ajusta las dimensiones del cubo
            const texture = new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg');
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }); // Ajusta la propiedad side
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
        }

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Rotar el cubo
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;

            // Renderizar la escena
            renderer.render(scene, camera);
        }

        // Manejar el cambio de tamaño de la ventana
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Agregar un manejador de eventos para el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize, false);

        // Iniciar la aplicación
        init();
        animate();
    </script>
</body>

</html>
