from PIL import Image
from collections import Counter
import sys

try:
    img = Image.open('C:/Users/KAVIYA A/Downloads/DearPages.art/my-pages/public/logo.jpeg')
    img = img.convert('RGB')
    
    pixels = list(img.getdata())
    
    # Filter out near-white pixels
    filtered = [p for p in pixels if not (p[0] > 240 and p[1] > 240 and p[2] > 240)]
    
    if len(filtered) == 0:
        print("Mostly white image")
    else:
        counts = Counter(filtered)
        common = counts.most_common(5)
        print("Most common non-white colors:")
        for color, count in common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
            print(f"{hex_color} (count: {count})")
except Exception as e:
    print(f"Error: {e}")
