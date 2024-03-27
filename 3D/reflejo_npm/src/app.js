



let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, BoxGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE;

let scene, camera, renderer;
let texturePaths = [
    '/2derecho.jpeg',
    '/1izquierdo.jpeg',
    '/3arriba.jpeg',
    '/4suelo.jpeg',
    '/6atras.jpeg',
    '/5frente.jpeg',

];

function init() {
    // Scene
    scene = new Scene();

    // Camera
    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 300);

    // Renderer
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Luz
    const light = new AmbientLight('white');
    scene.add(light);

    // Fondo de la escena
    loadTextures(texturePaths, function (textures) {
        // Cubo principal
        // const materials = textures.map(texture => new MeshLambertMaterial({ map: texture }));
        // const cubeGeometry = new BoxGeometry(100, 100, 100);
        // const cube = new Mesh(cubeGeometry, materials);
        // scene.add(cube);

        // Cubo para el fondo con las mismas imágenes (cubo más grande)
        const backgroundMaterials = textures.map(texture => new MeshLambertMaterial({ map: texture, side: THREE.BackSide }));
        const backgroundCubeGeometry = new BoxGeometry(1000, 1000, 1000); // Tamaño del cubo aumentado
        const backgroundCube = new Mesh(backgroundCubeGeometry, backgroundMaterials);
        scene.add(backgroundCube);

        // Controles de órbita
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true;
        controls.enablePan = true;

        // Anima la escena
        animate();
    });
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function loadTextures(paths, callback) {
    const textureLoader = new TextureLoader();
    const loadedTextures = [];
    let loadedCount = 0;

    paths.forEach((path, index) => {
        textureLoader.load(path, function (texture) {
            loadedTextures[index] = texture;
            loadedCount++;

            if (loadedCount === paths.length) {
                callback(loadedTextures);
            }
        });
    });
}

init();



// ...




















// let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, BoxGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE;

// let scene, camera, renderer;
// let texturePaths = [
//     '/CUBO.jpeg', // Reemplaza con la ruta de tu primera imagen local
//     '/2.jpeg',
//     'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
//     'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
//     'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
//     'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
// ]

// function init() {
//     // Scene
//     scene = new Scene();

//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.set(0, 0, 300);

//     // Renderer
//     renderer = new WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Luz
//     const light = new AmbientLight('white');
//     scene.add(light);

//     // Fondo de la escena
//     loadTextures(texturePaths, function (textures) {
//         // Cubo con dos imágenes
//         const materials = textures.map(texture => new MeshLambertMaterial({ map: texture }));
//         const cubeGeometry = new BoxGeometry(100, 100, 100);
//         const cube = new Mesh(cubeGeometry, materials);
//         scene.add(cube);

//         // Controles de órbita
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableZoom = true;
//         controls.enablePan = true;

//         // Anima la escena
//         animate();
//     });
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function loadTextures(paths, callback) {
//     const textureLoader = new TextureLoader();
//     const loadedTextures = [];
//     let loadedCount = 0;

//     paths.forEach((path, index) => {
//         textureLoader.load(path, function (texture) {
//             loadedTextures[index] = texture;
//             loadedCount++;

//             if (loadedCount === paths.length) {
//                 callback(loadedTextures);
//             }
//         });
//     });
// }

// init();








// let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, BoxGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE;

// let scene, camera, renderer;
// let texturePath = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'; // Reemplaza con la ruta de tu imagen local

// function init() {
//     // Scene
//     scene = new Scene();

//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     // Ajusta la posición inicial de la cámara
//     camera.position.set(0, 0, 300);

//     // Renderer
//     renderer = new WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Luz
//     const light = new AmbientLight('white');
//     scene.add(light);

//     // Fondo de la escena
//     loadTexture(texturePath, function (texture) {
//         scene.background = texture;
//     });

//     // Cubo invertido
//     loadTexture(texturePath, function (texture) {
//         const geometry = new BoxGeometry(100, 100, 100);
//         const cubeMaterial = new MeshLambertMaterial({ map: texture });
//         const cubeMesh = new Mesh(geometry, cubeMaterial);
//         scene.add(cubeMesh);
    
//         // Controles de órbita
//         const controls = new OrbitControls(camera, renderer.domElement);
//         // Habilita el movimiento para permitir que la cámara se desplace fuera del cubo
//         controls.enableZoom = true;
//         controls.enablePan = true;
    
//         // Anima la escena
//         animate();
//     });
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function loadTexture(path, callback) {
//     let textureLoader = new TextureLoader();
//     textureLoader.load(path, function (texture) {
//         callback(texture);
//     });
// }

// init();



// cubi
// let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, BoxGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE;

// let scene, camera, renderer;
// let texturePath = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'; // Reemplaza con la ruta de tu imagen local

// function init() {
//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.set(0, 0, 1000);

//     // Scene
//     scene = new Scene();

//     // Renderer
//     renderer = new WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Luz
//     const light = new AmbientLight('white');
//     scene.add(light);

//     // Fondo de la escena
//     loadTexture(texturePath, function (texture) {
//         scene.background = texture;
//     });

//     // Cubo
//     loadTexture(texturePath, function (texture) {
//         const geometry = new BoxGeometry(400, 400, 400);
//         const cubeMaterial = new MeshLambertMaterial({ map: texture });
//         const cubeMesh = new Mesh(geometry, cubeMaterial);
//         scene.add(cubeMesh);
//     });

//     // Controls
//     new OrbitControls(camera, renderer.domElement);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function loadTexture(path, callback) {
//     let textureLoader = new TextureLoader();
//     textureLoader.load(path, function (texture) {
//         callback(texture);
//     });
// }

// init();
// animate();



// esfera y cubo

// let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, BoxGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls, SphereGeometry } = THREE;

// let scene, camera, renderer;
// let texturePath = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'; // Reemplaza con la ruta de tu imagen local

// function init() {
//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.set(0, 0, 1000);

//     // Scene
//     scene = new Scene();

//     // Renderer
//     renderer = new WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Luz
//     const light = new AmbientLight('white');
//     scene.add(light);

//     // Fondo de la escena
//     loadTexture(texturePath, function (texture) {
//         scene.background = texture;
//     });

//     // Esfera
//     loadTexture(texturePath, function (texture) {
//         const geometry = new SphereGeometry(400, 32, 32);
//         const sphereMaterial = new MeshLambertMaterial({ map: texture });
//         const sphereMesh = new Mesh(geometry, sphereMaterial);
//         scene.add(sphereMesh);
//         sphereMesh.position.x = -600;
//     });

//     // Cubo
//     loadTexture(texturePath, function (texture) {
//         const geometry = new BoxGeometry(400, 400, 400);
//         const cubeMaterial = new MeshLambertMaterial({ map: texture });
//         const cubeMesh = new Mesh(geometry, cubeMaterial);
//         scene.add(cubeMesh);
//         cubeMesh.position.x = 600;
//     });

//     // Controls
//     new OrbitControls(camera, renderer.domElement);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// function loadTexture(path, callback) {
//     let textureLoader = new TextureLoader();
//     textureLoader.load(path, function (texture) {
//         callback(texture);
//     });
// }

// init();
// animate();




















// let { PerspectiveCamera, Scene, WebGLRenderer, TextureLoader, IcosahedronGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE;

// let textureUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'; // Reemplaza con la URL de tu imagen

// let scene, camera, renderer;

// function init() {

//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.set(0, 0, 1000);

//     // Scene
//     scene = new Scene();

//     // Renderer
//     renderer = new WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Textura
//     let textureLoader = new TextureLoader();
//     let texture = textureLoader.load(textureUrl);

//     // Material esférico con textura
//     const geometry = new IcosahedronGeometry(400, 10);
//     const sphereMaterial = new MeshLambertMaterial({ map: texture });
//     const sphereMesh = new Mesh(geometry, sphereMaterial);
//     scene.add(sphereMesh);

//     // Controls
//     new OrbitControls(camera, renderer.domElement);

//     // Luz
//     const light = new AmbientLight('white');
//     scene.add(light);

// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// init();
// animate();






















// let { PerspectiveCamera, Scene, WebGLRenderer, CubeTextureLoader, IcosahedronGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE

// let textures = [
//     'https://assets.codepen.io/911796/px.jpeg',
//     'https://assets.codepen.io/911796/nx.jpeg',
//     'https://assets.codepen.io/911796/py.jpeg',
//     'https://assets.codepen.io/911796/ny.jpeg',
//     'https://assets.codepen.io/911796/pz.jpeg',
//     'https://assets.codepen.io/911796/nz.jpeg'
// ];

// // let textures = [
// //     'https://assets.codepen.io/911796/px_demo.jpg',
// //     'https://assets.codepen.io/911796/nx_demo.jpg',
// //     'https://assets.codepen.io/911796/py_demo.jpg',
// //     'https://assets.codepen.io/911796/ny_demo.jpg',
// //     'https://assets.codepen.io/911796/pz_demo.jpg',
// //     'https://assets.codepen.io/911796/nz_demo.jpg'
// // ]

// let scene, camera, renderer

// function init() {

//     // Camera
//     camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000)
//     camera.position.set(0, 0, 1000)

//     // Scene
//     scene = new Scene()

//     // Renderer
//     renderer = new WebGLRenderer()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     document.body.appendChild(renderer.domElement)

//     // Textures cube
//     let cubeLoader = new CubeTextureLoader()
//     let cubeTexture = cubeLoader.load(textures)

//     // Textured environment
//     scene.background = cubeTexture

//     // Controls
//     new OrbitControls(camera, renderer.domElement)

//     // Sphere
//     const geometry = new IcosahedronGeometry(400, 10)
//     const sphereMaterial = new MeshLambertMaterial({ envMap: cubeTexture })
//     const sphereMesh = new Mesh(geometry, sphereMaterial)
//     scene.add(sphereMesh)

//     // Light
//     const light = new AmbientLight('white')
//     scene.add(light)

// }

// function animate() {
//     requestAnimationFrame(animate)
//     renderer.render(scene, camera)
// }

// init()
// animate()