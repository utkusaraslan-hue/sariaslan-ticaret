#!/bin/bash
# Her gün TÜRİB (il bazlı) ve TMO (Konya) verisinden fiyatları yeniden
# üretir, GitHub'a push eder ve Vercel'de production'a deploy eder.
# launchd tarafından günlük 22:00'de tetiklenir
# (bkz. ~/Library/LaunchAgents/com.yinebiagent.site-fiyat-guncelle.plist).

set -euo pipefail

REPO_DIR="/Users/utkus/Desktop/yine-bi-agent/website/web"
cd "$REPO_DIR"

export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

echo "== $(date '+%Y-%m-%d %H:%M:%S') güncelleme başladı =="

python3 scripts/refresh_il_fiyatlari.py
python3 scripts/refresh_tmo_konya.py
python3 scripts/refresh_gida_bultenleri.py || echo "Bülten PDF'i bulunamadı, atlanıyor."
python3 scripts/refresh_gida_haberleri.py || echo "Haber verisi bulunamadı, atlanıyor."

IZLENEN_YOLLAR="src/data/il-fiyatlari.ts src/data/tmo-fiyatlari.ts src/data/bultenler.ts public/bultenler src/data/haberler.ts public/haberler"

if git diff --quiet -- $IZLENEN_YOLLAR \
   && ! git status --porcelain -- public/bultenler public/haberler | grep -q '^??'; then
  echo "Fiyatlarda/bültenlerde/haberlerde değişiklik yok, deploy atlanıyor."
  exit 0
fi

git add $IZLENEN_YOLLAR
git commit -m "Günlük fiyat güncellemesi ($(date '+%Y-%m-%d'))"
git push origin main

npx vercel --prod --yes --scope achilles9

echo "== $(date '+%Y-%m-%d %H:%M:%S') güncelleme tamamlandı =="
