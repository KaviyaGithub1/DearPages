from PIL import Image
import colorsys

try:
    img = Image.open('C:/Users/KAVIYA A/Downloads/DearPages.art/my-pages/public/logo.jpeg')
    img = img.convert('RGB')
    
    pixels = list(img.getdata())
    
    darkest = None
    min_l = 255
    
    most_saturated = None
    max_s = 0
    
    for p in set(pixels): # Use set to speed up
        r, g, b = p
        h, l, s = colorsys.rgb_to_hls(r/255.0, g/255.0, b/255.0)
        
        if l < min_l:
            min_l = l
            darkest = p
            
        if s > max_s and l > 0.1 and l < 0.9: # avoid black/white for saturation
            max_s = s
            most_saturated = p

    print(f"Darkest color: #{darkest[0]:02x}{darkest[1]:02x}{darkest[2]:02x}")
    if most_saturated:
        print(f"Most saturated color: #{most_saturated[0]:02x}{most_saturated[1]:02x}{most_saturated[2]:02x}")
except Exception as e:
    print(f"Error: {e}")
