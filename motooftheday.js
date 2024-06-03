document.addEventListener("DOMContentLoaded", function() {
    // Define motorcycle models with their information
    const motorcycles = [
        {
            model: "BMW S1000rr",
            imageUrl: 's1k.jpg',
            description: "The BMW S1000RR is a high-performance superbike renowned for its cutting-edge technology, blistering acceleration, and razor-sharp handling, making it a top contender in the liter-class sportbike segment."
        },
        {
            model: "Indian FTR 1200",
            imageUrl: "ftr.jpg",
            description: "The Indian FTR 1200 is a modern interpretation of flat track racing heritage, featuring a potent V-twin engine, agile handling, and distinctive styling that combines retro aesthetics with contemporary performance, offering a thrilling riding experience on both urban streets and winding country roads."
        },
        {
            model: "Triumph Speed Twin",
            imageUrl: "speed twin.webp",
            description: "The Triumph Speed Twin is a classic-inspired modern motorcycle, blending timeless design cues with cutting-edge technology, boasting a torquey parallel-twin engine, agile handling, and a comfortable riding position, making it a versatile and enjoyable ride for both urban commuting and spirited weekend adventures."
        }

    ];


    const randomIndex = Math.floor(Math.random() * motorcycles.length);
    const randomMotorcycle = motorcycles[randomIndex];


    const motorcycleImage = document.getElementById('motorcycleImage');
    motorcycleImage.src = randomMotorcycle.imageUrl;
    motorcycleImage.style.height = "500px"; // Set the height of the image
    document.getElementById('modelInfo').innerText = `${randomMotorcycle.model}: ${randomMotorcycle.description}`;
});
