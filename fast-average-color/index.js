const fac = new FastAverageColor();

fac.getColorAsync(
    "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
)
    .then((color) => {
        console.log(color.hex);
    })
    .catch((e) => {
        console.log(e);
    });
