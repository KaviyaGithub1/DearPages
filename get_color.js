const fs = require('fs');

async function getColors() {
    try {
        const Jimp = require('jimp');
        const image = await Jimp.read('C:/Users/KAVIYA A/Downloads/DearPages.art/my-pages/public/logo.jpeg');
        let r = 0, g = 0, b = 0, count = 0;
        
        // simple average
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red   = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue  = this.bitmap.data[idx + 2];
            // ignore white or almost white backgrounds to find actual logo color
            if (red < 240 || green < 240 || blue < 240) {
                r += red;
                g += green;
                b += blue;
                count++;
            }
        });
        
        if (count > 0) {
            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);
            
            const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            console.log("Dominant non-white color hex:", hex);
        } else {
            console.log("Mostly white/light image");
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}

getColors();
