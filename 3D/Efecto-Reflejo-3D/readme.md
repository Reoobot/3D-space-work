let { PerspectiveCamera, Scene, WebGLRenderer, CubeTextureLoader, IcosahedronGeometry, MeshLambertMaterial, Mesh, AmbientLight, OrbitControls } = THREE

let textures = [
    'https://assets.codepen.io/911796/px.jpeg',
    'https://assets.codepen.io/911796/nx.jpeg',
    'https://assets.codepen.io/911796/py.jpeg',
    'https://assets.codepen.io/911796/ny.jpeg',
    'https://assets.codepen.io/911796/pz.jpeg',
    'https://assets.codepen.io/911796/nz.jpeg'
];

// let textures = [
//     'https://assets.codepen.io/911796/px_demo.jpg',
//     'https://assets.codepen.io/911796/nx_demo.jpg',
//     'https://assets.codepen.io/911796/py_demo.jpg',
//     'https://assets.codepen.io/911796/ny_demo.jpg',
//     'https://assets.codepen.io/911796/pz_demo.jpg',
//     'https://assets.codepen.io/911796/nz_demo.jpg'
// ]

let scene, camera, renderer

function init() {

    // Camera
    camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000)
    camera.position.set(0, 0, 1000)

    // Scene
    scene = new Scene()

    // Renderer
    renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // Textures cube
    let cubeLoader = new CubeTextureLoader()
    let cubeTexture = cubeLoader.load(textures)

    // Textured environment
    scene.background = cubeTexture

    // Controls
    new OrbitControls(camera, renderer.domElement)

    // Sphere
    const geometry = new IcosahedronGeometry(400, 10)
    const sphereMaterial = new MeshLambertMaterial({ envMap: cubeTexture })
    const sphereMesh = new Mesh(geometry, sphereMaterial)
    scene.add(sphereMesh)

    // Light
    const light = new AmbientLight('white')
    scene.add(light)

}

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

init()
animate()






















html 




<!DOCTYPE html>
<html lang="en">

<head>
    <title>Garaje Code Pills | Three.js environment maps</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/240474/OrbitControls.js"></script>
    <script src="js/script.js"></script>
</body>

</html>