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
            camera.position.z = 1000;

            // Cube
            const geometry = new THREE.BoxGeometry(400, 200, 400);
            const texture = new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg');
            const material = new THREE.MeshBasicMaterial({ map: texture });
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

            // Rotate the cube
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;

            // Render the scene
            renderer.render(scene, camera);
        }

        // Handle window resize
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Event listeners
        window.addEventListener('resize', handleResize, false);

        // Start the application
        init();
        animate();
    </script>
</body>

</html>







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
        let scene, camera, renderer, plane;

        // Initialize the scene
        function init() {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;

            // Plane
            const geometry = new THREE.PlaneGeometry(800, 800, 1, 1); // Ajusta las dimensiones y la resolución
            const texture = new THREE.TextureLoader().load('./2.jpeg', './2.jpeg'); // Reemplaza 'path-to-your-image.jpg' con la ruta de tu imagen JPEG
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }); // Ajusta la propiedad side
            plane = new THREE.Mesh(geometry, material);
            scene.add(plane);

            // Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);
        }

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Rotate the plane
            plane.rotation.x += 0.005;
            plane.rotation.y += 0.005;

            // Render the scene
            renderer.render(scene, camera);
        }

        // Handle window resize
        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Event listeners
        window.addEventListener('resize', handleResize, false);

        // Start the application
        init();
        animate();
    </script>
</body>

</html>










Para convertir la imagen en un cubo en lugar de un plano, puedes usar la geometría THREE.BoxGeometry en lugar de THREE.PlaneGeometry. Aquí hay una versión modificada del código que realiza este cambio:  En este código, he reemplazado THREE.PlaneGeometry con THREE.BoxGeometry para crear un cubo. Además, he ajustado las dimensiones del cubo según tu preferencia. El material de la textura y las demás configuraciones siguen siendo las mismas que en el ejemplo anterior. Asegúrate de reemplazar la ruta de la imagen JPEG con la tuya.