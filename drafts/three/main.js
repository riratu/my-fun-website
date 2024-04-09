import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.DodecahedronGeometry( 3, 1 );

const material3 = new THREE.LineDashedMaterial( {
    color: 0xffff00,
    linewidth: 5,
    scale: 0.1,
    dashSize: 50,
    gapSize: 0.01,
} );

const material4 = new THREE.LineBasicMaterial( {
    color: 0xffffff,
    linewidth: 1,
    linecap: 'round', //ignored by WebGLRenderer
    linejoin:  'round' //ignored by WebGLRenderer
} );

// const material = new THREE.PointsMaterial( {
//     //linewidth: 0.01,
//     //scale: 0.0001,
//     //dashSize:  3,
//     //gapSize: 3,
//     size: 0.000005
// } );
//
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {
    const x = THREE.MathUtils.randFloatSpread( 2000 );
    const y = THREE.MathUtils.randFloatSpread( 2000 );
    const z = THREE.MathUtils.randFloatSpread( 2000 );

    vertices.push( x, y, z );
}

const geometry2 = new THREE.BufferGeometry();
geometry2.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
const material2 = new THREE.PointsMaterial( { color: 0x888888, size: 0.001} );
const points = new THREE.Points( geometry, material4 );
scene.add( points );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    points.rotation.x += 0.01;
    points.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();