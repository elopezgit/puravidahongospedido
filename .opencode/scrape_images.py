import urllib.request
import re

url = 'https://www.google.com/search?q=Bharara+King+perfume&udm=2'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    title = re.findall(r'<title>(.*?)</title>', html)
    print('Page title:', title)
    imgs = re.findall(r'<img[^>]+src="([^"]+)"', html)
    print('Imgs found:', len(imgs))
    for img in imgs[:10]:
        print(' -', img[:120])
