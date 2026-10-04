import urllib.request
import urllib.parse
import re
import json

def get_ddg_image(query):
    url = f"https://duckduckgo.com/?q={urllib.parse.quote(query + ' perfume')}&t=h_&iax=images&ia=images"
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
            # Extract vqd
            vqd_match = re.search(r'vqd="?([0-9-]+)"?', html)
            if not vqd_match:
                return None
            vqd = vqd_match.group(1)
            
            # Request i.js
            img_url = f"https://duckduckgo.com/i.js?l=wt-wt&o=json&q={urllib.parse.quote(query + ' perfume')}&vqd={vqd}&f=,,,;&p=1"
            req2 = urllib.request.Request(img_url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://duckduckgo.com/'
            })
            with urllib.request.urlopen(req2) as resp2:
                data = json.loads(resp2.read().decode('utf-8'))
                if data and 'results' in data and len(data['results']) > 0:
                    # Duckduckgo provides direct image link AND thumbnail link (https://tse...)
                    # data['results'][0]['thumbnail'] is an ultra reliable, CORS-free image proxy!
                    return {
                        'image': data['results'][0].get('image'),
                        'thumbnail': data['results'][0].get('thumbnail')
                    }
    except Exception as e:
        print("Error:", e)
    return None

tests = ['Bharara King', 'Bharara Rose', 'Tubbees Berry Blast', 'Paco Rabanne Invictus']
for t in tests:
    res = get_ddg_image(t)
    print(t, "->", res)
