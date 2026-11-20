#!/bin/bash
cd "$(dirname "$0")" || exit 1
LOG="$(pwd)/deploy.log"
: > "$LOG"
exec > >(tee -a "$LOG") 2>&1
set -o pipefail
echo "start $(date)"

echo ""
echo "  ADVENT HOUSE → GitHub Pages"
echo "  ────────────────────────────"
echo ""

GH="$(command -v gh || true)"
[ -z "$GH" ] && [ -x "$HOME/.local/bin/gh" ] && GH="$HOME/.local/bin/gh"
if [ -z "$GH" ]; then
  echo "  Не найден gh (GitHub CLI). Установите: brew install gh"
  read -n 1 -s -r -p "  Нажмите любую клавишу…"
  exit 1
fi

if ! "$GH" auth status >/dev/null 2>&1; then
  echo "  → Вход в GitHub. Откроется браузер, введите код."
  echo ""
  "$GH" auth login --hostname github.com --git-protocol https --web --skip-ssh-key || exit 1
else
  echo "  → Уже авторизованы как $("$GH" api user -q .login 2>/dev/null)"
fi

USER=$("$GH" api user -q .login)
REPO="advent-house"
echo ""
echo "  → Аккаунт: $USER"

# сохраняем свежие правки, иначе уедет старая версия
git add -A
git -c user.name="Lisa" -c user.email="foreverforest0@gmail.com" commit -q -m "update $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "  → изменений нет"

if "$GH" repo view "$USER/$REPO" >/dev/null 2>&1; then
  echo "  → Репозиторий уже существует, обновляю"
  git remote remove origin 2>/dev/null
  git remote add origin "https://github.com/$USER/$REPO.git"
  git push -u origin main --force
else
  echo "  → Создаю репозиторий $USER/$REPO"
  "$GH" repo create "$REPO" --public --source=. --remote=origin --push
fi

echo "  → Включаю GitHub Pages"
"$GH" api -X POST "/repos/$USER/$REPO/pages" \
  -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
|| "$GH" api -X PUT "/repos/$USER/$REPO/pages" \
  -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
|| echo "  (Pages, возможно, уже включён)"

echo ""
echo "  Готово. Через минуту откроется:"
echo "  https://$USER.github.io/$REPO/"
echo ""
read -n 1 -s -r -p "  Нажмите любую клавишу, чтобы закрыть…"
