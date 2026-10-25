/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

interface CyborgSceneProps {
  scrollProgress: number; // 0 (Hero) to 1 (Bottom of page)
}

export const CyborgScene: React.FC<CyborgSceneProps> = ({ scrollProgress }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect software WebGL guard
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.05);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 5.8);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 4. Room Environment for PBR Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // 5. Cinematic Multi-Color Studio Lighting Rig
    // Electric Cyan Key Light
    const keyLight = new THREE.DirectionalLight(0x00f0ff, 4.0);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Vibrant Magenta / Purple Rim Light
    const rimLight = new THREE.DirectionalLight(0xd946ef, 3.8);
    rimLight.position.set(-5, 2, -3);
    scene.add(rimLight);

    // Lime Green / Electric Accent Fill
    const accentLight = new THREE.DirectionalLight(0x84cc16, 2.0);
    accentLight.position.set(0, -4, 3);
    scene.add(accentLight);

    // Deep Orange Backlight
    const orangeBack = new THREE.PointLight(0xf97316, 2.5, 12);
    orangeBack.position.set(2, -2, -2);
    scene.add(orangeBack);

    // Cool Hemisphere Light
    const hemiLight = new THREE.HemisphereLight(0x0ea5e9, 0x030712, 1.2);
    scene.add(hemiLight);

    // 6. High-Grade Materials
    const blackChromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0a0f1d,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const brushedTitaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.88,
      roughness: 0.28,
    });

    const visorGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });

    const coreReactorMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.5,
      metalness: 0.5,
      roughness: 0.2,
    });

    // 7. Assemble 3D Humanoid Robot / Cyber Character in THREE.Group
    const robotRoot = new THREE.Group();
    scene.add(robotRoot);

    // Position robot initially slightly to the right of center for editorial hero balance
    robotRoot.position.set(0.7, -0.6, 0);

    // --- A. HEAD & VISOR ---
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.55, 0);
    robotRoot.add(headGroup);

    // Cranium helmet (sculpted sphere)
    const craniumGeo = new THREE.SphereGeometry(0.48, 32, 24);
    craniumGeo.scale(0.85, 1.05, 1.0);
    const cranium = new THREE.Mesh(craniumGeo, blackChromeMaterial);
    headGroup.add(cranium);

    // Visor strip (futuristic horizontal curved visor)
    const visorGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.11, 32, 1, false, 0, Math.PI);
    const visor = new THREE.Mesh(visorGeo, visorGlowMaterial);
    visor.rotation.y = Math.PI / 2;
    visor.position.set(0, 0.05, 0.14);
    headGroup.add(visor);

    // Ear / Temple Modules
    const earGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.14, 16);
    const leftEar = new THREE.Mesh(earGeo, brushedTitaniumMaterial);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.position.set(-0.43, 0.02, 0);
    headGroup.add(leftEar);

    const rightEar = leftEar.clone();
    rightEar.position.x = 0.43;
    headGroup.add(rightEar);

    // Chin and jaw guard
    const jawGeo = new THREE.BoxGeometry(0.32, 0.22, 0.35);
    const jaw = new THREE.Mesh(jawGeo, brushedTitaniumMaterial);
    jaw.position.set(0, -0.32, 0.1);
    headGroup.add(jaw);

    // --- B. NECK & HYDRAULICS ---
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 1.25, 0);
    robotRoot.add(neckGroup);

    const neckCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.2, 0.3, 16),
      brushedTitaniumMaterial
    );
    neckGroup.add(neckCore);

    // Hydraulic pistons on neck
    const pistonGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.26, 8);
    const leftPiston = new THREE.Mesh(pistonGeo, blackChromeMaterial);
    leftPiston.position.set(-0.16, 0, -0.05);
    neckGroup.add(leftPiston);
    const rightPiston = leftPiston.clone();
    rightPiston.position.x = 0.16;
    neckGroup.add(rightPiston);

    // --- C. CHEST & TORSO ---
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, 0.75, 0);
    robotRoot.add(torsoGroup);

    // Main chest armor plate
    const chestGeo = new THREE.CylinderGeometry(0.58, 0.42, 0.75, 8);
    chestGeo.scale(1.2, 1.0, 0.75);
    const chestPlate = new THREE.Mesh(chestGeo, blackChromeMaterial);
    torsoGroup.add(chestPlate);

    // Glowing Reactor Core (Arc Core in chest center)
    const reactorRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.13, 0.028, 16, 32),
      brushedTitaniumMaterial
    );
    reactorRing.position.set(0, 0.1, 0.3);
    torsoGroup.add(reactorRing);

    const reactorCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 16, 16),
      coreReactorMaterial
    );
    reactorCore.position.set(0, 0.1, 0.3);
    torsoGroup.add(reactorCore);

    // Spinal Column Vertebrae
    const spineGroup = new THREE.Group();
    spineGroup.position.set(0, -0.45, 0);
    robotRoot.add(spineGroup);

    for (let i = 0; i < 4; i++) {
      const vert = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24 - i * 0.02, 0.22 - i * 0.02, 0.09, 12),
        brushedTitaniumMaterial
      );
      vert.position.y = -i * 0.11;
      spineGroup.add(vert);
    }

    // --- D. SHOULDERS & ARMS ---
    const shoulderGeo = new THREE.SphereGeometry(0.24, 16, 16);
    shoulderGeo.scale(1.2, 0.9, 1.0);

    // Left Shoulder
    const leftShoulder = new THREE.Mesh(shoulderGeo, blackChromeMaterial);
    leftShoulder.position.set(-0.82, 1.05, 0);
    robotRoot.add(leftShoulder);

    // Right Shoulder
    const rightShoulder = leftShoulder.clone();
    rightShoulder.position.x = 0.82;
    robotRoot.add(rightShoulder);

    // Left Upper Arm
    const bicepGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.55, 12);
    const leftBicep = new THREE.Mesh(bicepGeo, brushedTitaniumMaterial);
    leftBicep.position.set(-0.85, 0.65, 0);
    leftBicep.rotation.z = 0.12;
    robotRoot.add(leftBicep);

    // Right Upper Arm
    const rightBicep = leftBicep.clone();
    rightBicep.position.x = 0.85;
    rightBicep.rotation.z = -0.12;
    robotRoot.add(rightBicep);

    // Forearms resting posture
    const forearmGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.52, 12);
    const leftForearm = new THREE.Mesh(forearmGeo, blackChromeMaterial);
    leftForearm.position.set(-0.8, 0.18, 0.18);
    leftForearm.rotation.x = -0.4;
    robotRoot.add(leftForearm);

    const rightForearm = leftForearm.clone();
    rightForearm.position.x = 0.8;
    robotRoot.add(rightForearm);

    // --- E. FLOATING VIBRANT GLOSS ORBS & DIGITAL PARTICLES ---
    // Floating multi-colored liquid/glass spheres (as seen in the reference video: Orange, Magenta, Electric Blue, Lime Green)
    const orbsGroup = new THREE.Group();
    scene.add(orbsGroup);

    const orbConfigs = [
      { color: 0x00f0ff, emissive: 0x0284c7, radius: 0.28, pos: [-1.8, 1.4, 0.8] },
      { color: 0xd946ef, emissive: 0xa21caf, radius: 0.32, pos: [2.1, 0.8, 0.6] },
      { color: 0xf97316, emissive: 0xc2410c, radius: 0.25, pos: [1.6, 2.2, -0.4] },
      { color: 0x84cc16, emissive: 0x4d7c0f, radius: 0.22, pos: [-1.4, -0.3, 0.5] },
      { color: 0x38bdf8, emissive: 0x0369a1, radius: 0.18, pos: [0.2, 2.5, 0.3] },
    ];

    const orbMeshes: THREE.Mesh[] = [];

    orbConfigs.forEach((cfg) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: cfg.color,
        emissive: cfg.emissive,
        emissiveIntensity: 0.65,
        metalness: 0.4,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        transmission: isSoftwareGl ? 0 : 0.6,
        transparent: true,
        opacity: 0.95,
      });

      const mesh = new THREE.Mesh(new THREE.SphereGeometry(cfg.radius, 32, 32), mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      orbsGroup.add(mesh);
      orbMeshes.push(mesh);
    });

    // Orbiting Geometric Ring around the robot
    const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    orbitRing.position.set(0.7, 0.6, 0);
    scene.add(orbitRing);

    // Particle Cloud (digital space dust)
    const particleCount = isSoftwareGl || window.innerWidth < 768 ? 80 : 220;
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 12;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // 8. Mouse & Pointer Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 9. Render Loop with Scroll Triggered Kinematics
    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const scroll = scrollRef.current; // 0 to 1

      // Mouse damping
      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.targetX, 3.5, delta);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.targetY, 3.5, delta);

      // --- SCROLL DRIVEN KINEMATICS ---
      // In Hero (scroll < 0.2): Robot is on right, looking slightly at user
      // As user scrolls towards 0.4 (Creative Exploration): Robot shifts position, rotates, camera moves
      // At scroll > 0.6 (Projects/Contact): Robot glides or moves back with cinematic rotation

      const isMobile = window.innerWidth < 768;
      const basePosX = isMobile ? 0 : 0.85;

      // Interpolate robot position based on scroll progress
      let targetX = basePosX;
      let targetY = -0.55;
      let targetRotY = 0;
      let targetCameraZ = 5.8;

      if (scroll < 0.25) {
        // Hero Section: Standing poised, facing camera/mouse
        targetX = basePosX;
        targetY = -0.55;
        targetRotY = mouse.x * 0.4 - 0.15;
        targetCameraZ = 5.8;
      } else if (scroll >= 0.25 && scroll < 0.55) {
        // Creative Exploration Section: Rotates 35 degrees, shifts slightly
        targetX = isMobile ? 0 : 1.2;
        targetY = -0.35;
        targetRotY = 0.55 + mouse.x * 0.3;
        targetCameraZ = 5.2;
      } else if (scroll >= 0.55 && scroll < 0.8) {
        // Projects Timeline: Shifts further back into digital space
        targetX = isMobile ? 0 : 1.5;
        targetY = -0.7;
        targetRotY = -0.4 + mouse.x * 0.2;
        targetCameraZ = 6.4;
      } else {
        // Contact Scene: Centered in background as majestic focal presence
        targetX = 0;
        targetY = -0.6;
        targetRotY = Math.sin(elapsed * 0.4) * 0.25;
        targetCameraZ = 5.5;
      }

      // Smoothly damp position and rotation towards scroll targets
      robotRoot.position.x = THREE.MathUtils.damp(robotRoot.position.x, targetX, 2.5, delta);
      robotRoot.position.y = THREE.MathUtils.damp(robotRoot.position.y, targetY + Math.sin(elapsed * 1.5) * 0.05, 2.5, delta);
      robotRoot.rotation.y = THREE.MathUtils.damp(robotRoot.rotation.y, targetRotY, 2.8, delta);

      // Head subtly tracks mouse pointer
      headGroup.rotation.y = THREE.MathUtils.damp(headGroup.rotation.y, mouse.x * 0.5, 4.0, delta);
      headGroup.rotation.x = THREE.MathUtils.damp(headGroup.rotation.x, -mouse.y * 0.3, 4.0, delta);

      // Camera Z movement
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCameraZ, 2.0, delta);

      // Animate floating orbs with organic orbital trajectories
      orbMeshes.forEach((orb, idx) => {
        const speed = 0.8 + idx * 0.25;
        const offset = idx * 1.3;
        orb.position.y += Math.sin(elapsed * speed + offset) * 0.003;
        orb.position.x += Math.cos(elapsed * speed * 0.7 + offset) * 0.002;
      });

      // Animate orbit ring
      orbitRing.rotation.z += 0.3 * delta;
      orbitRing.rotation.y += 0.15 * delta;

      // Subtle particle float
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // 10. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose resources
      craniumGeo.dispose();
      visorGeo.dispose();
      earGeo.dispose();
      jawGeo.dispose();
      chestGeo.dispose();
      reactorRing.geometry.dispose();
      reactorCore.geometry.dispose();
      pistonGeo.dispose();
      shoulderGeo.dispose();
      bicepGeo.dispose();
      forearmGeo.dispose();
      ringGeo.dispose();
      pGeo.dispose();

      blackChromeMaterial.dispose();
      brushedTitaniumMaterial.dispose();
      visorGlowMaterial.dispose();
      coreReactorMaterial.dispose();
      ringMat.dispose();
      pMat.dispose();

      orbMeshes.forEach((o) => {
        o.geometry.dispose();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      });

      envTexture.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
