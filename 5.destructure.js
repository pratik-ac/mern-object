// Create an object named laptopDetails. Add fields like brand, processor,ram,core,gpu,storage,screenSize. Do object destructure and print out laptop details.

const laptopDetails = {
  brand: "HP",
  processor: "Intel Core i5",
  ram: "8GB",
  core: "Quad Core",
  gpu: "Nvidia GeForce GTX 1650",
  storage: "1TB SSD",
  screenSize: "15.6 inch",
};

const { brand, processor, ram, core, gpu, storage, screenSize } = laptopDetails;
console.log(`Brand: ${brand}`);
console.log(`Processor: ${processor}`);
console.log(`RAM: ${ram}`);
console.log(`Core: ${core}`);
console.log(`GPU: ${gpu}`);
console.log(`Storage: ${storage}`);
console.log(`Screen Size: ${screenSize}`);
