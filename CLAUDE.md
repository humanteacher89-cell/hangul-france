# hangul-france — 프랑스 한글학교 로비 (GitHub Pages 배포본)

이 저장소는 그대로 GitHub Pages로 공개된다: https://humanteacher89-cell.github.io/hangul-france/
2026-10-07에 휴먼쌤 월드 저장소(`my-3d-world`)에서 따로 뺐다(휴먼쌤 결정). 그 전 주소 `…/my-3d-world/france/`에는 이리로 넘기는 페이지만 남아 있다. 온라인 서버(Cloudflare Worker `hangul-lobby-relay`)는 이름 그대로라 저장된 내용(관리자 계정·사진·글)이 그대로 이어진다.
클라우드 세션(claude.ai/code)이나 다른 곳에서 이 저장소를 열어 고칠 때 아래를 따른다.
사용자는 **휴먼쌤**이라고 부른다. 답은 한국어로, 휴대폰에서 읽기 쉽게 결과부터 짧게 쓴다. 이모지는 쓰지 않는다.

## 무엇이 어디에
| 경로 | 무엇 | 공개 주소 |
|---|---|---|
| `index.html` · `lobby.js` · `lobby.config.js` · `room.js` · `france-map.js` · `relay.json` | 프랑스 한글학교 로비: 2.5D 지도 + 학교 17곳 교실 + 온라인 동시접속. `lobby.js`(엔진) · `lobby.config.js`(글·학교·교실 내용) · `room.js`(교실) · `france-map.js`(지도 좌표, 도구가 만든 파일 — 손대지 않는다) · `relay.json`(온라인 서버 주소) · `index.html`(페이지) | https://humanteacher89-cell.github.io/hangul-france/ |
| `admin/` | 로비 관리자 페이지(로그인, 학교 홈페이지·교실 글·사진첩·영상·링크 관리). `index.html` · `admin.js` · `admin.css`. `../lobby.config.js`·`../relay.json`을 읽는다 | …/hangul-france/admin/ |
| `relay-cf/` | Cloudflare Worker: 온라인 동시접속 중계(`src/index.js`) + 관리자 내용 저장소(`src/content.js`, Durable Object SQLite) + 기본 내용 시드(`src/seed-fr.js`) · `wrangler.jsonc` | https://hangul-lobby-relay.humanteacher89.workers.dev |
| `relay/` | Node 판 중계 서버(다른 호스팅용 대안, 지금은 쓰지 않음) | — |

휴먼쌤 월드(월드 1 + 리니를 만나는 광장)는 다른 저장소 `my-3d-world`에 있다. 그 광장의 '프랑스 한글학교 섬'에 내리면 이 로비로 넘어온다(링크는 그쪽 `world1/world1.config.js`의 `plaza.franceIsland`).

## 배포가 되는 방식
- `main`에 들어가면 GitHub Pages가 1~2분 안에 반영한다(CDN 캐시 최대 10분. 확인할 때는 주소 뒤에 `?t=숫자`를 붙인다).
- `relay-cf/`가 바뀐 커밋이 `main`에 들어가면 Cloudflare Workers Builds가 자동으로 다시 배포한다(몇 분). 빌드 기록은 Cloudflare 대시보드에서만 볼 수 있다(휴먼쌤). 성공·실패 여부는 GitHub의 커밋 check-run(`Workers Builds: hangul-lobby-relay`)으로도 보인다.
- 그래서 **`main`에 바로 올리지 말고 새 브랜치 + PR**로 올린다. 합치는 것은 휴먼쌤이 GitHub에서 한다. PR 설명은 한국어로 "무엇을 · 왜 · 어떻게 확인했는지 · 휴먼쌤이 폰에서 볼 곳".

## 지킬 것
- 비밀을 커밋하지 않는다: 관리자 설정 코드, 비밀번호, API 토큰. `wrangler.jsonc`의 `ADMIN_SETUP_HASH`는 해시뿐이라 괜찮다.
- 글 파일은 모두 UTF-8(한글). 한 줄에 문장이 여러 개인 JS가 많으니 줄 중간에 `//` 주석을 넣지 않는다(`/* */`만).
- `france-map.js`는 손대지 않는다(도구가 만든 좌표 파일).
- 글·학교 정보는 `lobby.config.js`에만 있다. 사실(학교 이름·주소, 교장 호칭)은 지어내지 않고, 모르면 `[예시]`·`[확인 전]`으로 표시하고 휴먼쌤에게 묻는다. 관리자 페이지에서 저장한 글이 코드의 기본 글보다 우선한다.
- 서버가 허용하는 페이지 출처는 `https://humanteacher89-cell.github.io`뿐이다(`relay-cf/src/index.js`·`content.js`). 다른 주소로 옮기면 거기도 더해야 한다.
- 큰 구조 변경(엔진 교체, 폴더 이동, 파일 이름 바꾸기, Worker 이름 바꾸기)은 먼저 휴먼쌤에게 묻는다. Worker 이름을 바꾸면 저장된 내용이 새 빈 저장소로 바뀐다.
- 원본 작업 폴더는 휴먼쌤 PC에도 있다. PC 쪽은 작업 전에 이 저장소를 먼저 받아오므로, 여기서 고친 것은 `main`에 합쳐지기만 하면 된다.

## 지금 상태와 남은 일 (인수인계 — 작업을 마칠 때 이 절을 고쳐 같은 PR에 넣는다)
PC 쪽 작업 기록은 이 저장소 밖에 있다. 클라우드 세션과 PC가 서로 이어받는 곳은 **이 절 하나**다. 시작할 때 읽고, 끝낼 때 '마지막 작업'과 '남은 일'을 고친다(공개 파일이니 비밀·개인 정보는 쓰지 않는다).
- 마지막 작업(2026-10-07, PC): **저장소 분리**. 로비·관리자 페이지·서버 코드를 `my-3d-world/france/`에서 이 저장소 루트로 옮겼다(코드는 그대로, 경로만 바뀜). 옛 주소에는 넘김 페이지, 휴먼쌤 월드의 섬 링크는 새 주소로.
- 그 전(2026-10-07, PC): 관리자 저장소에 **시드**를 넣었다. `relay-cf/src/seed-fr.js`(공개 자료 조사에서 모은 학교 홈페이지 14곳·'책' 소개 글 17곳·TV 영상 5곳·'더 알아보기' 링크 103개)를 `relay-cf/src/content.js`의 `seed()`가 `/api/content`를 처음 읽을 때 **비어 있는 칸에만 한 번** 넣는다(`meta` 표의 `seed:fr`에 적용한 version을 적음). 관리자 페이지에서 저장한 값은 건드리지 않는다. 시드를 고치려면 `seed-fr.js`의 값을 고치고 `version`을 1 올린다(그때도 비어 있는 칸만 채움). 사진은 아이 얼굴이 나올 수 있어 넣지 않았다(학교 허락 전에는 링크로만). 소개 글 끝에는 '공개 자료를 바탕으로 정리했고 학교 확인 전'이라는 문단이 붙는다.
- 남은 일: 교실 17곳의 칠판·인사말·교장 대사는 아직 `[예시]`(책·TV·링크는 시드가 채움) — 휴먼쌤이 주는 글·사진·교장 호칭으로 `lobby.config.js`의 `rooms.<학교 id>`를 바꾸거나 관리자 페이지에서 넣는다. 지도의 작은 고칠 거리 몇 건(동경 13° 잘림, 메노르카 조각 등)은 나중. 실제 폰 두 대 동시접속 확인 전. 60명 행사 때 Cloudflare 무료 한도(하루 요청 10만)가 모자랄 수 있어 유료 전환은 휴먼쌤이 고민 중.

## 확인하는 법 (클라우드 환경에는 브라우저가 없을 수 있다)
- 문법: 바뀐 JS마다 `node --check 파일`(node가 있을 때).
- 페이지는 정적 파일이다. `python3 -m http.server 8000`으로 띄워 `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8000/`처럼 200인지 본다. 3D 화면·폰 조작은 휴먼쌤이 폰으로 확인한다.
- 공개 주소(`*.github.io`, `*.workers.dev`)는 환경의 네트워크 설정이 허용할 때만 열린다. 막혀 있으면 PR 설명에 "합친 뒤 볼 곳"을 적는다.
- Worker(`relay-cf/`)는 배포 뒤 `/health`(ok)와 `/api/admin/state`로 본다.
