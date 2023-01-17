let n = 100;
let animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < animations.length; i++) {
  n += 200;
  setTimeout(() => {
    process.stdout.write(animations[i]);
  }, n);
  
};
