import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    const isMobile = window.innerWidth < 768;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff4e0, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4af37, 2.5);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe0a899, 1.8);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffdf88, 3, 50);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x3d2c0e,
      emissiveIntensity: 0.2,
    });

    const roseGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdda094,
      metalness: 0.75,
      roughness: 0.3,
    });

    const glassPearlMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfaf7f2,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
    });

    const bondMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      metalness: 0.8,
      roughness: 0.4,
    });

    // Helper: Create a 3D Skincare / Collagen Molecule cluster
    function createMolecule(scale = 1) {
      const group = new THREE.Group();
      const sphereGeo = new THREE.SphereGeometry(0.8 * scale, 32, 32);
      const smallSphereGeo = new THREE.SphereGeometry(0.45 * scale, 24, 24);

      // Central atom (Gold)
      const centerAtom = new THREE.Mesh(sphereGeo, goldMaterial);
      group.add(centerAtom);

      // Satellite atoms (Rose gold & Frosted glass)
      const satellitePositions = [
        [2.2 * scale, 1.2 * scale, 0],
        [-1.8 * scale, 1.5 * scale, 0.8 * scale],
        [0.8 * scale, -2 * scale, -1.2 * scale],
        [-1.5 * scale, -1.2 * scale, 1.5 * scale],
        [1.6 * scale, -0.8 * scale, 1.8 * scale],
      ];

      satellitePositions.forEach((pos, idx) => {
        const mat = idx % 2 === 0 ? roseGoldMaterial : glassPearlMaterial;
        const sat = new THREE.Mesh(smallSphereGeo, mat);
        sat.position.set(...pos);
        group.add(sat);

        // Cylinder bond connecting center to satellite
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(...pos);
        const distance = start.distanceTo(end);
        const cylinderGeo = new THREE.CylinderGeometry(0.08 * scale, 0.08 * scale, distance, 12);
        const bond = new THREE.Mesh(cylinderGeo, bondMaterial);

        // Position & orient bond halfway
        bond.position.copy(start).add(end).multiplyScalar(0.5);
        bond.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          end.clone().normalize()
        );
        group.add(bond);
      });

      return group;
    }

    // Add 3 interactive molecule clusters
    const molecule1 = createMolecule(1.1);
    molecule1.position.set(-8, 3, -2);
    scene.add(molecule1);

    const molecule2 = createMolecule(0.75);
    molecule2.position.set(9, -4, -4);
    scene.add(molecule2);

    const molecule3 = createMolecule(0.6);
    molecule3.position.set(-6, -6, -6);
    scene.add(molecule3);

    // Create a 3D Golden DNA Helix structure
    const helixGroup = new THREE.Group();
    const helixNodes = 36;
    const helixRadius = 1.6;
    const helixHeight = 18;
    const helixSphereGeo = new THREE.SphereGeometry(0.2, 16, 16);

    for (let i = 0; i < helixNodes; i++) {
      const t = (i / helixNodes) * Math.PI * 4;
      const y = ((i - helixNodes / 2) / helixNodes) * helixHeight;

      // Strand 1
      const x1 = Math.cos(t) * helixRadius;
      const z1 = Math.sin(t) * helixRadius;
      const node1 = new THREE.Mesh(helixSphereGeo, goldMaterial);
      node1.position.set(x1, y, z1);
      helixGroup.add(node1);

      // Strand 2
      const x2 = Math.cos(t + Math.PI) * helixRadius;
      const z2 = Math.sin(t + Math.PI) * helixRadius;
      const node2 = new THREE.Mesh(helixSphereGeo, roseGoldMaterial);
      node2.position.set(x2, y, z2);
      helixGroup.add(node2);

      // Base pair rungs every 2 nodes
      if (i % 2 === 0) {
        const rungGeo = new THREE.CylinderGeometry(0.04, 0.04, helixRadius * 2, 8);
        const rung = new THREE.Mesh(rungGeo, bondMaterial);
        rung.position.set(0, y, 0);
        rung.rotation.y = -t;
        rung.rotation.z = Math.PI / 2;
        helixGroup.add(rung);
      }
    }
    helixGroup.position.set(11, 1, -5);
    helixGroup.rotation.z = 0.25;
    scene.add(helixGroup);

    // Floating Golden Particle Cloud
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 35;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleScales[i] = Math.random() * 0.5 + 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite using canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 235, 175, 1)');
    grad.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)');
    grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const particleTexture = new THREE.CanvasTexture(canvas);
    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 2;
      targetY = y * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX * 1.5;
      camera.position.y = mouseY * 1.5;
      camera.lookAt(0, 0, 0);

      // Rotate molecules
      molecule1.rotation.x = elapsedTime * 0.25;
      molecule1.rotation.y = elapsedTime * 0.35;
      molecule1.position.y = 3 + Math.sin(elapsedTime * 0.8) * 0.5;

      molecule2.rotation.x = -elapsedTime * 0.2;
      molecule2.rotation.z = elapsedTime * 0.3;
      molecule2.position.y = -4 + Math.cos(elapsedTime * 0.7) * 0.4;

      molecule3.rotation.y = elapsedTime * 0.4;
      molecule3.position.y = -6 + Math.sin(elapsedTime * 0.9) * 0.3;

      // Rotate DNA helix
      helixGroup.rotation.y = elapsedTime * 0.4;
      helixGroup.position.y = 1 + Math.sin(elapsedTime * 0.5) * 0.4;

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}

