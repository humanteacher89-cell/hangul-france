# 한글월드 — 프랑스 · 유럽 한글학교 로비 (hangul-france)

hangeulworld.human-teacher.com — 한글학교 로비(프랑스 /, 유럽 eu/, 독일 de/, 영국 uk/, 관리 admin/). 옛 주소 humanssaem-hangul-france.pages.dev도 그대로 열린다. Cloudflare Pages 집 `humanssaem-hangul-france`.

## 올리는 길 (2026-11-16 주소 정리부터)
- **로비 화면**: main에 들어가면 GitHub Actions가 올린다 — 묶음(`python scripts/build_site.py _site`) → 점검(`node scripts/check.mjs _site`) → Cloudflare Pages `humanssaem-hangul-france` → 실제 주소 확인. 확인이 실패하면 앞 판으로 되돌린다.
- **로비 서버(relay-cf/)**: 이 묶음에 넣지 않는다. Cloudflare Workers Builds가 main을 받아 `hangul-lobby-relay`로 따로 올린다(감시 경로가 * 라 main에 무엇이 들어가도 서버가 같은 코드로 한 번 다시 올라간다 — 로비 화면은 끊기면 다시 붙음).
- PC에만 있던 `tools/unity/cf-world/build_cf_world.py`의 규칙을 `scripts/build_site.py`로 옮겼다(결과가 공개판과 바이트까지 같음, 11-16 대조).
- 창은 자기 작업 가지에서 고치고, 휴먼쌤 "올려" 뒤 main에 합친다. 유럽 학교 수업 시간은 피한다.

## 고장 났을 때
1. Cloudflare 화면 → Workers & Pages → humanssaem-hangul-france → Deployments → 앞 판의 … → Rollback(1분). 또는 GitHub → Actions → 되돌리기 → Run workflow.
2. GitHub에서 문제 생긴 기록을 Revert(5분).
3. PC 창에 "한글월드 되돌려"(10분).