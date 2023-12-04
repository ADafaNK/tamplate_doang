const projectile = document.querySelector('.projectile');

let positionX = 0;
let positionY = 0;
let velocityX = 0; // Horizontal velocity
let velocityY = 0; // Vertical velocity
const gravity = -0.5; // Gravity effect
const friction = 1.5; // Air friction

function animateProjectile() {
    velocityY += gravity; // Apply gravity to vertical velocity
    positionX += velocityX; // Update horizontal position based on horizontal velocity
    positionY += velocityY; // Update vertical position based on vertical velocity

    // Bounce when the projectile hits the ground
    if (positionY > window.innerHeight - 20) {
        positionY = window.innerHeight - 20;
        velocityY *= -0.5; // Reverse vertical velocity for bounce effect
        velocityY *= friction; // Apply friction to vertical velocity
    }

    projectile.style.transform = `translate(${positionX}px, ${positionY}px)`;
    requestAnimationFrame(animateProjectile); // Recursive call for smooth animation
}

animateProjectile(); // Start the animation loop
