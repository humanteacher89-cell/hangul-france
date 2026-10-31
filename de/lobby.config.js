// 독일 한글학교 로비 설정 — 자동 생성(유럽로비\tools\make_country_config.py, 2026-10-31 유럽 한글학교 메타버스 A안). 손으로 고치지 말고 도구·학교 목록 JSON을 고친다.
// 짜임은 프랑스 로비 설정(../lobby.config.js)과 같다. [예시]·[확인 전] 글은 학교가 관리자 페이지(../admin/?map=de)에서 바꾼다.
// 학교 목록: 유럽로비\자료\de-schools.json (출처·확인 상태는 유럽로비\자료\독일-한글학교-목록-*.md). 교장·교사 개인 이름은 넣지 않는다.
window.LOBBY_CONFIG = {
  version: 'v0.3-de',
  contentMap: 'de',          // 관리자 내용 영역(서버 map)
  flag: 'de', countryFoot: 'Deutschland',
  europeUrl: '../eu/',
  layout: { relax: true, minGap: 3.3 },   // 가까운 학교 건물이 겹치지 않게 조금씩 벌린다(엔진 placeSchools)
  text: {
    "title": "독일 한글학교 로비",
    "plaza": "만남의 광장",
    "plazaSub": "여기서 출발해요",
    "north": "북",
    "flag": "한",
    "hintTouch": "조이스틱이나 땅을 눌러 걸어요",
    "hintMouse": "W A S D 키나 땅을 눌러 걸어요",
    "hintRoom": "교장 선생님이나 책·사진첩·TV·게시판 가까이 가 보세요",
    "map": "전체 지도",
    "mapClose": "내 위치로",
    "list": "학교 목록",
    "listTitle": "지역별 한글학교",
    "listNote": "학교 목록은 주독일 대사관·총영사관 안내와 재외동포청 스터디코리안 한글학교 정보(2026년)로 모아 확인 중입니다(확인 전 시험판). '확인 전' 표시는 올해 운영이 확인되지 않은 곳입니다.",
    "noSchools": "아직 표시할 학교가 없습니다.",
    "close": "닫기",
    "enter": "입장하기",
    "pending": "확인 전",
    "enterBody": "이 학교의 공간은 준비 중이에요.",
    "back": "로비로 돌아가기",
    "toLobby": "로비로",
    "exitSign": "로비로",
    "exitName": "로비로 나가기",
    "exitSub": "독일 지도 로비로 돌아가요",
    "exitBtn": "나가기",
    "homepage": "홈페이지",
    "moreLinks": "더 알아보기",
    "overHint": "가고 싶은 곳이나 학교를 누르면 바로 가요",
    "europe": "유럽 지도로",
    "me": "나",
    "bot": "참가자 {n}",
    "stat": "{n}명 · {fps}fps",
    "botsButton": "시험용 참가자 50명 띄우기",
    "botsToast": "시험용 참가자 50명이 광장 근처를 걸어 다녀요",
    "loading": "지도를 펼치는 중",
    "loadFail": "3D 도구를 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 새로 고침해 주세요.",
    "nameTitle": "로비에서 쓸 이름",
    "nameHint": "비워 두면 손님",
    "nameGo": "들어가기",
    "nameLook": "모습 바꾸기",
    "profileButton": "내 이름·모습 바꾸기",
    "mpSolo": "혼자 보기",
    "mpWake": "서버 깨우는 중",
    "mpWait": "연결하는 중",
    "mpOn": "온라인 {n}명",
    "mpOff": "연결 끊김 · 다시 연결 중",
    "mpFull": "방이 가득 찼어요. 잠시 뒤에 다시 와 주세요.",
    "mpFullBadge": "방이 가득 참",
    "guest": "손님",
    "roomEnter": "{school}에 들어왔어요",
    "talk": "말 걸기",
    "open": "펼쳐 보기",
    "photos": "사진 보기",
    "watch": "영상 보기",
    "next": "다음",
    "start": "연습 시작",
    "later": "나중에",
    "listen": "듣기",
    "choose": "알맞은 말을 골라 보세요",
    "good": "좋아요!",
    "tryAgain": "다시 골라 볼까요?",
    "done": "연습 완료!",
    "doneBody": "{title} 연습을 마쳤어요. 다른 학교에서도 만나요.",
    "again": "다시 하기",
    "progress": "{i} / {n}",
    "quizSub": "우리 학교 퀴즈를 내 줘요",
    "quizStart": "퀴즈 풀기",
    "quizAsk": "정답을 골라 보세요",
    "quizRight": "정답이에요!",
    "quizWrong": "아쉬워요. 다시 골라 볼까요?",
    "quizResult": "결과 보기",
    "quizDone": "퀴즈 끝!",
    "quizDoneAll": "{n}문제를 모두 한 번에 맞혔어요! 다른 학교 교장 선생님 퀴즈도 풀어 보세요.",
    "quizDoneBody": "{n}문제 가운데 {k}문제를 한 번에 맞혔어요. 다른 학교 교장 선생님 퀴즈도 풀어 보세요.",
    "quizCityQ": "{school}는 어느 도시에 있을까요?",
    "quizCityNote": "{city}에 있는 학교예요.",
    "quizBase": [
      {
        "q": "한글을 만든 사람은 누구일까요?",
        "choices": [
          "이순신",
          "세종대왕",
          "광개토대왕"
        ],
        "answer": 1,
        "note": "세종대왕이 1443년에 훈민정음(한글)을 만들었어요."
      },
      {
        "q": "한글날은 언제일까요?",
        "choices": [
          "3월 1일",
          "8월 15일",
          "10월 9일"
        ],
        "answer": 2,
        "note": "10월 9일은 한글을 기리는 날이에요."
      }
    ],
    "sampleTag": "예시",
    "photoSoon": "한글학교 사진은 나중에 넣어요",
    "videoSoon": "소개 영상은 나중에 넣어요",
    "principal": "교장 선생님",
    "bookSign": "책",
    "albumSign": "사진첩",
    "tvSign": "TV",
    "bbsSign": "게시판",
    "bbsBtn": "게시판 열기",
    "bbsSub": "누르면 새 창에서 열려요",
    "bbsNone": "아직 게시판 주소가 없어요"
  },
  look: { sky: '#CDEBF6', sea: '#8DD3EA', base: '#EDE3CC', neighbor: '#DDE5D3', neighborLine: '#B9C4AC' },
  // 지역 코드별 한글·현지어 이름과 색(지도 파일 germany-map.js의 regions[].c). label: 땅에 쓴 이름의 크기(size)와 자리 옮김(dx 동쪽+, dz 남쪽+)
  regions: {
    "01": {
      "ko": "슐레스비히홀슈타인",
      "local": "Schleswig-Holstein",
      "color": "#A9D9B5",
      "label": {
        "size": 13
      }
    },
    "02": {
      "ko": "함부르크",
      "local": "Hamburg",
      "color": "#F2B3C4",
      "label": {
        "size": 5.5,
        "dz": -1.6
      }
    },
    "03": {
      "ko": "니더작센",
      "local": "Niedersachsen",
      "color": "#F5DD8C",
      "label": {
        "size": 17
      }
    },
    "04": {
      "ko": "브레멘",
      "local": "Bremen",
      "color": "#EBA7A1",
      "label": {
        "size": 4.6,
        "dz": -1.4
      }
    },
    "05": {
      "ko": "노르트라인베스트팔렌",
      "local": "Nordrhein-Westfalen",
      "color": "#F7BE8F",
      "label": {
        "size": 16
      }
    },
    "06": {
      "ko": "헤센",
      "local": "Hessen",
      "color": "#EBA7A1",
      "label": {
        "size": 12
      }
    },
    "07": {
      "ko": "라인란트팔츠",
      "local": "Rheinland-Pfalz",
      "color": "#B9D7A6",
      "label": {
        "size": 12
      }
    },
    "08": {
      "ko": "바덴뷔르템베르크",
      "local": "Baden-Württemberg",
      "color": "#E8D3A6",
      "label": {
        "size": 17
      }
    },
    "09": {
      "ko": "바이에른",
      "local": "Bayern",
      "color": "#BFD8EE",
      "label": {
        "size": 18
      }
    },
    "10": {
      "ko": "자를란트",
      "local": "Saarland",
      "color": "#F2B3C4",
      "label": {
        "size": 6.5
      }
    },
    "11": {
      "ko": "베를린",
      "local": "Berlin",
      "color": "#F4B49C",
      "label": {
        "size": 6,
        "dz": -2.8
      }
    },
    "12": {
      "ko": "브란덴부르크",
      "local": "Brandenburg",
      "color": "#C6E39C",
      "label": {
        "size": 16
      }
    },
    "13": {
      "ko": "메클렌부르크포어포메른",
      "local": "Mecklenburg-Vorpommern",
      "color": "#BFD8EE",
      "label": {
        "size": 18
      }
    },
    "14": {
      "ko": "작센",
      "local": "Sachsen",
      "color": "#F9CF85",
      "label": {
        "size": 14
      }
    },
    "15": {
      "ko": "작센안할트",
      "local": "Sachsen-Anhalt",
      "color": "#C9B8EA",
      "label": {
        "size": 13
      }
    },
    "16": {
      "ko": "튀링겐",
      "local": "Thüringen",
      "color": "#A8D99A",
      "label": {
        "size": 12
      }
    }
  },
  regionOrder: ["01", "13", "02", "04", "03", "11", "12", "15", "05", "14", "16", "06", "07", "10", "09", "08"],
  plaza: {"lon": 10.0, "lat": 50.95},
  landmarks: [
    {
      "id": "brandenburg",
      "kind": "gate",
      "name": "브란덴부르크 문",
      "lon": 13.3777,
      "lat": 52.5163,
      "scale": 0.72
    }
  ],
  mountains: [
    {
      "name": "알프스",
      "lon": [
        10.0,
        13.1
      ],
      "lat": [
        47.32,
        47.72
      ],
      "regions": [
        "09"
      ],
      "count": 38,
      "r": [
        0.9,
        1.4
      ],
      "h": [
        1.6,
        3.1
      ],
      "snow": 2.3,
      "colors": [
        "#A9A09A",
        "#9D958F",
        "#B5ADA5"
      ]
    },
    {
      "name": "슈바르츠발트",
      "lon": [
        7.8,
        8.7
      ],
      "lat": [
        47.7,
        48.9
      ],
      "regions": [
        "08"
      ],
      "count": 18,
      "r": [
        0.8,
        1.2
      ],
      "h": [
        0.9,
        1.5
      ],
      "colors": [
        "#5F944F",
        "#6EA35C",
        "#7FAF72"
      ]
    },
    {
      "name": "바이에른 숲",
      "lon": [
        12.3,
        13.8
      ],
      "lat": [
        48.7,
        49.4
      ],
      "regions": [
        "09"
      ],
      "count": 12,
      "r": [
        0.8,
        1.1
      ],
      "h": [
        0.8,
        1.3
      ],
      "colors": [
        "#6EA35C",
        "#7FAF72"
      ]
    },
    {
      "name": "하르츠",
      "lon": [
        10.3,
        11.1
      ],
      "lat": [
        51.6,
        51.9
      ],
      "regions": [
        "03",
        "15"
      ],
      "count": 9,
      "r": [
        0.7,
        1.0
      ],
      "h": [
        0.8,
        1.2
      ],
      "colors": [
        "#6EA35C",
        "#8DB77C"
      ]
    },
    {
      "name": "에르츠산맥",
      "lon": [
        12.2,
        13.9
      ],
      "lat": [
        50.4,
        50.75
      ],
      "regions": [
        "14"
      ],
      "count": 10,
      "r": [
        0.7,
        1.0
      ],
      "h": [
        0.8,
        1.2
      ],
      "colors": [
        "#8DB77C",
        "#9CC28B"
      ]
    }
  ],
  trees: { count: 420, colors: ['#7FBF6A', '#6FB15E', '#8CCB76', '#5FA35A', '#94C77E'] },
  charLook: {
    skin: ['#FFE0C7', '#F6CFAE', '#E8B48F', '#C98E66'],
    hair: ['#2B2420', '#4A3428', '#7A4E33', '#B98A57', '#E2C48F', '#6E7FA8'],
    shirt: ['#E0483E', '#2A4D9B', '#F2B544', '#3FA37A', '#8C6CD0', '#FFFFFF', '#F28DB2', '#4FB3D9'],
    pants: ['#2F3A56', '#4A5A78', '#6B5B4B', '#3D6B5A', '#7A4E3A']
  },
  // 교장 선생님 기본 퀴즈(프랑스 로비와 같음): 1번 = 그 학교 도시(보기는 다른 학교 도시 2곳), 2·3번 = text.quizBase. room.js와 admin.js가 함께 쓴다
  defaultQuiz(s, schools) {
    const T = this.text, out = [];
    const others = [...new Set((schools || []).map(x => x.city).filter(c => c && c !== s.city))];
    if (s.city && others.length >= 2) {
      let h = 0; for (const ch of s.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      const n = others.length, choices = [others[h % n], others[(h + 1 + (h >> 3) % (n - 1)) % n]], at = h % 3;
      choices.splice(at, 0, s.city);
      out.push({ q: T.quizCityQ.replace('{school}', s.name), choices, answer: at, note: T.quizCityNote.replace('{city}', s.city) });
    }
    return out.concat((T.quizBase || []).map(x => ({ q: x.q, choices: x.choices.slice(), answer: x.answer, note: x.note || '' })));
  },
  // 멀티플레이: 저장소 루트의 relay.json(프랑스와 같은 서버), 방 이름 앞머리만 다르다
  multiplayer: { file: '../relay.json', lobbyRoom: 'de:lobby', roomPrefix: 'de:', sendHz: 4 },
  // 한글학교 32곳 [확인 전 — 휴먼쌤 확정 전 조사본]
  schools: [
    {
      "id": "hamburg",
      "name": "함부르크 한인학교",
      "nameLocal": "Koreanische Schule in Hamburg e.V.",
      "city": "함부르크",
      "region": "02",
      "lon": 9.9338,
      "lat": 53.5487,
      "web": "https://www.koreanisch-hamburg.de"
    },
    {
      "id": "bremen",
      "name": "브레멘 한글학교",
      "nameLocal": "Koreanische Schule Bremen e.V.",
      "city": "브레멘",
      "region": "04",
      "lon": 8.8287,
      "lat": 53.0383,
      "web": "https://koreanisch-bremen.de"
    },
    {
      "id": "berlin",
      "name": "베를린 한글학교",
      "nameLocal": "Koreanische Schule Berlin e.V.",
      "city": "베를린",
      "region": "11",
      "lon": 13.3215,
      "lat": 52.511,
      "web": "https://www.hanhag.de"
    },
    {
      "id": "dodamdodam",
      "name": "베를린 도담도담 한글학교",
      "nameLocal": "Dodamdodam Koreanische Schule",
      "city": "베를린",
      "region": "11",
      "lon": 13.3201,
      "lat": 52.4799,
      "web": ""
    },
    {
      "id": "hannover",
      "name": "하노버 한글학교",
      "nameLocal": "Koreanische Schule in Hannover e.V.",
      "city": "하노버",
      "region": "03",
      "lon": 9.7088,
      "lat": 52.3678,
      "web": "https://www.koreanisch-hannover.de"
    },
    {
      "id": "braunschweig",
      "name": "브라운슈바이크 한글학교",
      "nameLocal": "Koreanische Schule Braunschweig e.V.",
      "city": "브라운슈바이크",
      "region": "03",
      "lon": 10.5105,
      "lat": 52.2504,
      "web": "https://www.koreanisch-braunschweig.de"
    },
    {
      "id": "bielefeld",
      "name": "빌레펠트 한글학교",
      "nameLocal": "",
      "city": "빌레펠트",
      "region": "05",
      "lon": 8.4933,
      "lat": 52.0377,
      "web": ""
    },
    {
      "id": "muenster",
      "name": "뮌스터 한글학교",
      "nameLocal": "Koreanische Schule Münster",
      "city": "뮌스터",
      "region": "05",
      "lon": 7.6125,
      "lat": 51.9982,
      "web": "https://kschulemuenster.wixsite.com/ksmster"
    },
    {
      "id": "dortmund",
      "name": "도르트문트 한글학교",
      "nameLocal": "Koreanische Schule Dortmund e. V.",
      "city": "도르트문트",
      "region": "05",
      "lon": 7.4995,
      "lat": 51.4923,
      "web": "https://www.koreanische-schule-dortmund.de"
    },
    {
      "id": "bochum",
      "name": "보훔 한글학교",
      "nameLocal": "Koreanische Schule Bochum e.V.",
      "city": "보훔",
      "region": "05",
      "lon": 7.2128,
      "lat": 51.482,
      "web": "https://www.koreanische-schule-bochum.de"
    },
    {
      "id": "essen",
      "name": "에센 한글학교",
      "nameLocal": "Koreanische Schule in Essen e.V.",
      "city": "에센",
      "region": "05",
      "lon": 7.0035,
      "lat": 51.4485,
      "web": "http://kschool-essen.de"
    },
    {
      "id": "duisburg",
      "name": "뒤스부르크 한글학교",
      "nameLocal": "Koreanische Schule Duisburg e.V.",
      "city": "뒤스부르크",
      "region": "05",
      "lon": 6.7619,
      "lat": 51.437,
      "web": "https://koschuduisburg.wixsite.com/koschuduisburg"
    },
    {
      "id": "duesseldorf",
      "name": "뒤셀도르프 한글학교",
      "nameLocal": "Koreanische Schule Düsseldorf e.V.",
      "city": "뒤셀도르프",
      "region": "05",
      "lon": 6.8286,
      "lat": 51.2078,
      "web": ""
    },
    {
      "id": "leverkusen",
      "name": "레버쿠젠 한글학교",
      "nameLocal": "",
      "city": "레버쿠젠",
      "region": "05",
      "lon": 7.0043,
      "lat": 51.0689,
      "web": ""
    },
    {
      "id": "koeln",
      "name": "쾰른 한글학교",
      "nameLocal": "Koreanische Schule in Köln e.V.",
      "city": "쾰른",
      "region": "05",
      "lon": 6.9231,
      "lat": 50.918,
      "web": "https://koreanische-schule-koeln.org"
    },
    {
      "id": "aachen",
      "name": "아헨 한글학교",
      "nameLocal": "",
      "city": "아헨",
      "region": "05",
      "lon": 6.0413,
      "lat": 50.7721,
      "web": "https://www.facebook.com/KSAachen/"
    },
    {
      "id": "bonn",
      "name": "본 한글학교",
      "nameLocal": "Koreanische Schule Bonn e.V.",
      "city": "본",
      "region": "05",
      "lon": 7.1505,
      "lat": 50.6866,
      "web": "https://korschulebonn.com/de/startseite/"
    },
    {
      "id": "leipzig",
      "name": "라이프치히 한글학교",
      "nameLocal": "",
      "city": "라이프치히",
      "region": "14",
      "lon": 12.3972,
      "lat": 51.3462,
      "web": ""
    },
    {
      "id": "dresden",
      "name": "드레스덴 한글학교",
      "nameLocal": "",
      "city": "드레스덴",
      "region": "14",
      "lon": 13.7912,
      "lat": 51.0462,
      "web": ""
    },
    {
      "id": "kassel",
      "name": "카셀 한글학교",
      "nameLocal": "Koreanische Schule in Kassel e.V.",
      "city": "카셀",
      "region": "06",
      "lon": 9.5012,
      "lat": 51.3269,
      "web": "https://www.instagram.com/koreanischeschuleinkassel/"
    },
    {
      "id": "frankfurt",
      "name": "프랑크푸르트 한국학교",
      "nameLocal": "Koreanische Schule Frankfurt am Main e.V.",
      "city": "프랑크푸르트",
      "region": "06",
      "lon": 8.5418,
      "lat": 50.1053,
      "web": "https://www.k-school.de"
    },
    {
      "id": "wiesbaden",
      "name": "비스바덴 한글학교",
      "nameLocal": "Koreanische Schule in Wiesbaden",
      "city": "비스바덴",
      "region": "06",
      "lon": 8.2552,
      "lat": 50.0682,
      "web": "https://www.facebook.com/KoreanischeSchuleInWiesbaden/"
    },
    {
      "id": "mainz",
      "name": "마인츠 무궁화 한글학교",
      "nameLocal": "Mugunghwa Koreanische Schule e.V.",
      "city": "마인츠",
      "region": "06",
      "lon": 8.2942,
      "lat": 50.0121,
      "web": "https://mugunghwa-mainz.de"
    },
    {
      "id": "darmstadt",
      "name": "다름슈타트 한글학교",
      "nameLocal": "Koreanische Schule Darmstadt e.V.",
      "city": "다름슈타트",
      "region": "06",
      "lon": 8.6639,
      "lat": 49.8846,
      "web": "https://www.koreanischeschule-darmstadt.de"
    },
    {
      "id": "saarland",
      "name": "자알란트 한글학교",
      "nameLocal": "",
      "city": "자르브뤼켄",
      "region": "10",
      "lon": 7.0491,
      "lat": 49.2589,
      "web": ""
    },
    {
      "id": "heidelberg",
      "name": "하이델베르크 한글학교",
      "nameLocal": "Koreanische Schule Heidelberg e.V.",
      "city": "하이델베르크",
      "region": "08",
      "lon": 8.6911,
      "lat": 49.4095,
      "web": "http://cafe.daum.net/koreanischeschulehd"
    },
    {
      "id": "karlsruhe",
      "name": "칼스루에 한글학교",
      "nameLocal": "Die Koreanische Schule in Karlsruhe e.V.",
      "city": "칼스루에",
      "region": "08",
      "lon": 8.389,
      "lat": 49.0269,
      "web": "https://sites.google.com/view/koreanisch-karlsruhe"
    },
    {
      "id": "stuttgart",
      "name": "슈투트가르트 한글학교",
      "nameLocal": "Koreanische Schule Stuttgart e.V.",
      "city": "슈투트가르트",
      "region": "08",
      "lon": 9.1639,
      "lat": 48.7401,
      "web": "https://www.koreanischeschule-stuttgart.de"
    },
    {
      "id": "freiburg",
      "name": "프라이부르그 한글학교",
      "nameLocal": "Koreanische Schule in Freiburg",
      "city": "프라이부르그",
      "region": "08",
      "lon": 7.81,
      "lat": 47.995,
      "web": ""
    },
    {
      "id": "erlangen",
      "name": "에얼랑엔-뉘른베르크 한글학교",
      "nameLocal": "Koreanische Schule Erlangen/Nürnberg e.V.",
      "city": "에얼랑엔",
      "region": "09",
      "lon": 11.0104,
      "lat": 49.5945,
      "web": ""
    },
    {
      "id": "augsburg",
      "name": "아욱스부르크 슈바벤 한글학교",
      "nameLocal": "Koreanische Schule Augsburg Schwaben e. V.",
      "city": "아욱스부르크",
      "region": "09",
      "lon": 10.879,
      "lat": 48.3895,
      "web": ""
    },
    {
      "id": "muenchen",
      "name": "뮌헨 한글학교",
      "nameLocal": "Koreanische Schule München e. V.",
      "city": "뮌헨",
      "region": "09",
      "lon": 11.5471,
      "lat": 48.1249,
      "web": "https://sites.google.com/view/kschmuc/home"
    }
  ],
  // 학교별 교실 [예시] — 글·사진·영상은 학교가 관리자 페이지에서 바꾼다
  rooms: {
    "hamburg": {
      "theme": {
        "wall": "#FBF3E2",
        "wainscot": "#D9C4A0",
        "floor": [
          "#D9B583",
          "#CFA874",
          "#E0BD8E"
        ],
        "rug": "#9FC7A3",
        "board": "#2F5D50",
        "sky": "#D7ECF7",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "함부르크",
          "sub": "Hamburg · Hamburg",
          "kind": "lighthouse",
          "color": "#3E6B8F",
          "foot": "Hamburg · Deutschland"
        }
      },
      "boardTitle": "함부르크 한인학교",
      "boardLine": "",
      "welcome": "함부르크 한인학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 1,
          "shirt": "#3E6B8F",
          "pants": "#2F3A56"
        },
        "lines": [
          "안녕하세요! 함부르크 한인학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "함부르크",
          "sub": "Hamburg · 함부르크",
          "text": "함부르크는 독일 북쪽의 큰 항구 도시예요. 엘베강을 따라 커다란 배들이 드나들어요.\n\n강과 운하가 많아서 다리도 아주 많아요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "함부르크 한인학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "함부르크 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bremen": {
      "theme": {
        "wall": "#FCF1E6",
        "wainscot": "#E3C9B0",
        "floor": [
          "#E0BC8E",
          "#D6AF80",
          "#E8C79A"
        ],
        "rug": "#F2B8B5",
        "board": "#33506B",
        "sky": "#DCEAF7",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "브레멘",
          "sub": "Bremen · Bremen",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Bremen · Deutschland"
        }
      },
      "boardTitle": "브레멘 한글학교",
      "boardLine": "",
      "welcome": "브레멘 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B85C6B",
          "pants": "#3A3F5C"
        },
        "lines": [
          "안녕하세요! 브레멘 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "브레멘",
          "sub": "Bremen · 브레멘",
          "text": "브레멘은 독일 북쪽 베저강 가에 있는 도시예요. 그림 형제의 동화 '브레멘 음악대'로 잘 알려져 있어요.\n\n시청 앞 광장에는 커다란 롤란트 석상이 서 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "브레멘 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "브레멘 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "berlin": {
      "theme": {
        "wall": "#FAF0F0",
        "wainscot": "#DDB9B9",
        "floor": [
          "#DDB892",
          "#D2AB85",
          "#E6C6A0"
        ],
        "rug": "#C9B6E4",
        "board": "#4A3A63",
        "sky": "#E6DDF3",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "베를린",
          "sub": "Berlin · Berlin",
          "kind": "gate",
          "color": "#7A6A4A",
          "foot": "Berlin · Deutschland"
        }
      },
      "boardTitle": "베를린 한글학교",
      "boardLine": "",
      "welcome": "베를린 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#6E7FA8",
          "hairStyle": 2,
          "shirt": "#7B5EA7",
          "pants": "#2E2E3E"
        },
        "lines": [
          "안녕하세요! 베를린 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "베를린",
          "sub": "Berlin · 베를린",
          "text": "베를린은 독일의 수도예요. 도시 한가운데 브란덴부르크 문이 서 있어요.\n\n슈프레강이 도시를 지나 흘러요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "베를린 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "베를린 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "dodamdodam": {
      "theme": {
        "wall": "#F2F7EC",
        "wainscot": "#C9D8B8",
        "floor": [
          "#D9BE92",
          "#CEB285",
          "#E3C89E"
        ],
        "rug": "#F5D08A",
        "board": "#2F5F5A",
        "sky": "#D9EFF2",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "베를린",
          "sub": "Berlin · Berlin",
          "kind": "gate",
          "color": "#7A6A4A",
          "foot": "Berlin · Deutschland"
        }
      },
      "boardTitle": "베를린 도담도담 한글학교",
      "boardLine": "",
      "welcome": "베를린 도담도담 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#7A4E33",
          "hairStyle": 1,
          "shirt": "#4F9A8A",
          "pants": "#4A4A5A"
        },
        "lines": [
          "안녕하세요! 베를린 도담도담 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "베를린",
          "sub": "Berlin · 베를린",
          "text": "베를린은 독일의 수도예요. 도시 한가운데 브란덴부르크 문이 서 있어요.\n\n슈프레강이 도시를 지나 흘러요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "베를린 도담도담 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "베를린 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "hannover": {
      "theme": {
        "wall": "#FFF4E0",
        "wainscot": "#E6C99B",
        "floor": [
          "#DDB27F",
          "#D2A672",
          "#E7C092"
        ],
        "rug": "#E8A598",
        "board": "#6B3E2E",
        "sky": "#FBE6CF",
        "view": {
          "kind": "fields",
          "sky": [
            "#A9D6F0",
            "#F3F8EC"
          ],
          "far": "#BFD3A8",
          "near": "#8DBB74",
          "water": "#8EC3E6",
          "accent": "#F2B544"
        },
        "poster": {
          "title": "하노버",
          "sub": "Hannover · Niedersachsen",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Niedersachsen · Deutschland"
        }
      },
      "boardTitle": "하노버 한글학교",
      "boardLine": "",
      "welcome": "하노버 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#C98E66",
          "hair": "#2B2420",
          "hairStyle": 2,
          "shirt": "#D9822B",
          "pants": "#3B3B4F"
        },
        "lines": [
          "안녕하세요! 하노버 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "하노버",
          "sub": "Hannover · 니더작센",
          "text": "하노버는 니더작센주의 중심 도시예요. 세계 여러 나라 사람들이 모이는 큰 박람회가 열려요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "하노버 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "하노버 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "braunschweig": {
      "theme": {
        "wall": "#EEF6FA",
        "wainscot": "#B9CFDB",
        "floor": [
          "#D8C09A",
          "#CFB68D",
          "#E2CCA8"
        ],
        "rug": "#9CC3DD",
        "board": "#2D4F66",
        "sky": "#D8EDF9",
        "view": {
          "kind": "fields",
          "sky": [
            "#A9D6F0",
            "#F3F8EC"
          ],
          "far": "#BFD3A8",
          "near": "#8DBB74",
          "water": "#8EC3E6",
          "accent": "#F2B544"
        },
        "poster": {
          "title": "브라운슈바이크",
          "sub": "Braunschweig · Niedersachsen",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Niedersachsen · Deutschland"
        }
      },
      "boardTitle": "브라운슈바이크 한글학교",
      "boardLine": "",
      "welcome": "브라운슈바이크 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#B98A57",
          "hairStyle": 0,
          "shirt": "#4F8FB5",
          "pants": "#3B4A63"
        },
        "lines": [
          "안녕하세요! 브라운슈바이크 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "브라운슈바이크",
          "sub": "Braunschweig · 니더작센",
          "text": "브라운슈바이크는 니더작센주 동쪽의 오래된 도시예요. 도시를 지키는 사자 동상으로 알려져 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "브라운슈바이크 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "브라운슈바이크 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bielefeld": {
      "theme": {
        "wall": "#FFF1E0",
        "wainscot": "#C9A27A",
        "floor": [
          "#D6B07F",
          "#CCA574",
          "#E0BC8D"
        ],
        "rug": "#E8A9A0",
        "board": "#4A3A5C",
        "sky": "#E2EEF8",
        "view": {
          "kind": "mountain",
          "sky": [
            "#9ED3F2",
            "#EAF6FC"
          ],
          "far": "#B8C9DD",
          "near": "#6E9A6B",
          "water": "#8EC1DF",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "빌레펠트",
          "sub": "Bielefeld · Nordrhein-Westfalen",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "빌레펠트 한글학교",
      "boardLine": "",
      "welcome": "빌레펠트 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B5563E",
          "pants": "#3D3A4F"
        },
        "lines": [
          "안녕하세요! 빌레펠트 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "빌레펠트",
          "sub": "Bielefeld · 노르트라인베스트팔렌",
          "text": "빌레펠트는 토이토부르크 숲 가까이에 있는 도시예요. 언덕 위에 스파렌베르크 성이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "빌레펠트 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "빌레펠트 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "muenster": {
      "theme": {
        "wall": "#FCEDE6",
        "wainscot": "#D9A58F",
        "floor": [
          "#D9B089",
          "#CFA57E",
          "#E3BD98"
        ],
        "rug": "#E7B3A8",
        "board": "#5A3A44",
        "sky": "#F8E4DD",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "뮌스터",
          "sub": "Münster · Nordrhein-Westfalen",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "뮌스터 한글학교",
      "boardLine": "",
      "welcome": "뮌스터 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 2,
          "shirt": "#3FA37A",
          "pants": "#35405C"
        },
        "lines": [
          "안녕하세요! 뮌스터 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "뮌스터",
          "sub": "Münster · 노르트라인베스트팔렌",
          "text": "뮌스터는 자전거를 타는 사람이 아주 많은 도시예요.\n\n1648년에 긴 전쟁을 끝내는 평화 조약이 이 도시에서 맺어졌어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "뮌스터 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "뮌스터 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "dortmund": {
      "theme": {
        "wall": "#FBF3E2",
        "wainscot": "#D9C4A0",
        "floor": [
          "#D9B583",
          "#CFA874",
          "#E0BD8E"
        ],
        "rug": "#9FC7A3",
        "board": "#2F5D50",
        "sky": "#D7ECF7",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "도르트문트",
          "sub": "Dortmund · Nordrhein-Westfalen",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "도르트문트 한글학교",
      "boardLine": "",
      "welcome": "도르트문트 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 1,
          "shirt": "#3E6B8F",
          "pants": "#2F3A56"
        },
        "lines": [
          "안녕하세요! 도르트문트 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "도르트문트",
          "sub": "Dortmund · 노르트라인베스트팔렌",
          "text": "도르트문트는 루르 지방의 큰 도시예요. 옛날에는 석탄과 쇠를 만드는 일로 이름났어요.\n\n축구를 좋아하는 사람들이 많고 아주 큰 축구 경기장이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "도르트문트 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "도르트문트 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bochum": {
      "theme": {
        "wall": "#FCF1E6",
        "wainscot": "#E3C9B0",
        "floor": [
          "#E0BC8E",
          "#D6AF80",
          "#E8C79A"
        ],
        "rug": "#F2B8B5",
        "board": "#33506B",
        "sky": "#DCEAF7",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "보훔",
          "sub": "Bochum · Nordrhein-Westfalen",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "보훔 한글학교",
      "boardLine": "",
      "welcome": "보훔 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B85C6B",
          "pants": "#3A3F5C"
        },
        "lines": [
          "안녕하세요! 보훔 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "보훔",
          "sub": "Bochum · 노르트라인베스트팔렌",
          "text": "보훔은 루르 지방의 도시예요. 옛날에 석탄을 캐던 도시라서 큰 광산 박물관이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "보훔 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "보훔 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "essen": {
      "theme": {
        "wall": "#FAF0F0",
        "wainscot": "#DDB9B9",
        "floor": [
          "#DDB892",
          "#D2AB85",
          "#E6C6A0"
        ],
        "rug": "#C9B6E4",
        "board": "#4A3A63",
        "sky": "#E6DDF3",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "에센",
          "sub": "Essen · Nordrhein-Westfalen",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "에센 한글학교",
      "boardLine": "",
      "welcome": "에센 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#6E7FA8",
          "hairStyle": 2,
          "shirt": "#7B5EA7",
          "pants": "#2E2E3E"
        },
        "lines": [
          "안녕하세요! 에센 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "에센",
          "sub": "Essen · 노르트라인베스트팔렌",
          "text": "에센은 루르 지방의 큰 도시예요. 옛 탄광 '촐페라인'은 세계유산이 되었어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "에센 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "에센 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "duisburg": {
      "theme": {
        "wall": "#F2F7EC",
        "wainscot": "#C9D8B8",
        "floor": [
          "#D9BE92",
          "#CEB285",
          "#E3C89E"
        ],
        "rug": "#F5D08A",
        "board": "#2F5F5A",
        "sky": "#D9EFF2",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "뒤스부르크",
          "sub": "Duisburg · Nordrhein-Westfalen",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "뒤스부르크 한글학교",
      "boardLine": "",
      "welcome": "뒤스부르크 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#7A4E33",
          "hairStyle": 1,
          "shirt": "#4F9A8A",
          "pants": "#4A4A5A"
        },
        "lines": [
          "안녕하세요! 뒤스부르크 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "뒤스부르크",
          "sub": "Duisburg · 노르트라인베스트팔렌",
          "text": "뒤스부르크는 라인강과 루르강이 만나는 곳에 있는 도시예요.\n\n강을 따라 배가 드나드는 아주 큰 항구가 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "뒤스부르크 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "뒤스부르크 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "duesseldorf": {
      "theme": {
        "wall": "#FFF4E0",
        "wainscot": "#E6C99B",
        "floor": [
          "#DDB27F",
          "#D2A672",
          "#E7C092"
        ],
        "rug": "#E8A598",
        "board": "#6B3E2E",
        "sky": "#FBE6CF",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "뒤셀도르프",
          "sub": "Düsseldorf · Nordrhein-Westfalen",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "뒤셀도르프 한글학교",
      "boardLine": "",
      "welcome": "뒤셀도르프 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#C98E66",
          "hair": "#2B2420",
          "hairStyle": 2,
          "shirt": "#D9822B",
          "pants": "#3B3B4F"
        },
        "lines": [
          "안녕하세요! 뒤셀도르프 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "뒤셀도르프",
          "sub": "Düsseldorf · 노르트라인베스트팔렌",
          "text": "뒤셀도르프는 노르트라인베스트팔렌주의 중심 도시예요. 라인강 가에 길게 자리 잡고 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "뒤셀도르프 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "뒤셀도르프 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "leverkusen": {
      "theme": {
        "wall": "#EEF6FA",
        "wainscot": "#B9CFDB",
        "floor": [
          "#D8C09A",
          "#CFB68D",
          "#E2CCA8"
        ],
        "rug": "#9CC3DD",
        "board": "#2D4F66",
        "sky": "#D8EDF9",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "레버쿠젠",
          "sub": "Leverkusen · Nordrhein-Westfalen",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "레버쿠젠 한글학교",
      "boardLine": "",
      "welcome": "레버쿠젠 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#B98A57",
          "hairStyle": 0,
          "shirt": "#4F8FB5",
          "pants": "#3B4A63"
        },
        "lines": [
          "안녕하세요! 레버쿠젠 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "레버쿠젠",
          "sub": "Leverkusen · 노르트라인베스트팔렌",
          "text": "레버쿠젠은 쾰른 북쪽 라인강 가에 있는 도시예요. 축구팀으로도 잘 알려져 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "레버쿠젠 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "레버쿠젠 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "koeln": {
      "theme": {
        "wall": "#FFF1E0",
        "wainscot": "#C9A27A",
        "floor": [
          "#D6B07F",
          "#CCA574",
          "#E0BC8D"
        ],
        "rug": "#E8A9A0",
        "board": "#4A3A5C",
        "sky": "#E2EEF8",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "쾰른",
          "sub": "Köln · Nordrhein-Westfalen",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "쾰른 한글학교",
      "boardLine": "",
      "welcome": "쾰른 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B5563E",
          "pants": "#3D3A4F"
        },
        "lines": [
          "안녕하세요! 쾰른 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "쾰른",
          "sub": "Köln · 노르트라인베스트팔렌",
          "text": "쾰른은 라인강 가에 있는 큰 도시예요. 하늘로 솟은 두 개의 첨탑이 있는 쾰른 대성당은 세계유산이에요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "쾰른 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "쾰른 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "aachen": {
      "theme": {
        "wall": "#FCEDE6",
        "wainscot": "#D9A58F",
        "floor": [
          "#D9B089",
          "#CFA57E",
          "#E3BD98"
        ],
        "rug": "#E7B3A8",
        "board": "#5A3A44",
        "sky": "#F8E4DD",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "아헨",
          "sub": "Aachen · Nordrhein-Westfalen",
          "kind": "basilica",
          "color": "#C97B5A",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "아헨 한글학교",
      "boardLine": "",
      "welcome": "아헨 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 2,
          "shirt": "#3FA37A",
          "pants": "#35405C"
        },
        "lines": [
          "안녕하세요! 아헨 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "아헨",
          "sub": "Aachen · 노르트라인베스트팔렌",
          "text": "아헨은 독일 서쪽 끝, 네덜란드와 벨기에가 가까운 도시예요.\n\n오래된 아헨 대성당은 세계유산이고, 따뜻한 온천도 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "아헨 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "아헨 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bonn": {
      "theme": {
        "wall": "#FBF3E2",
        "wainscot": "#D9C4A0",
        "floor": [
          "#D9B583",
          "#CFA874",
          "#E0BD8E"
        ],
        "rug": "#9FC7A3",
        "board": "#2F5D50",
        "sky": "#D7ECF7",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "본",
          "sub": "Bonn · Nordrhein-Westfalen",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Nordrhein-Westfalen · Deutschland"
        }
      },
      "boardTitle": "본 한글학교",
      "boardLine": "",
      "welcome": "본 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 1,
          "shirt": "#3E6B8F",
          "pants": "#2F3A56"
        },
        "lines": [
          "안녕하세요! 본 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "본",
          "sub": "Bonn · 노르트라인베스트팔렌",
          "text": "본은 라인강 가에 있는 도시예요. 음악가 베토벤이 태어난 곳이에요.\n\n예전에는 서독의 수도였어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "본 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "본 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "leipzig": {
      "theme": {
        "wall": "#FCF1E6",
        "wainscot": "#E3C9B0",
        "floor": [
          "#E0BC8E",
          "#D6AF80",
          "#E8C79A"
        ],
        "rug": "#F2B8B5",
        "board": "#33506B",
        "sky": "#DCEAF7",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "라이프치히",
          "sub": "Leipzig · Sachsen",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Sachsen · Deutschland"
        }
      },
      "boardTitle": "라이프치히 한글학교",
      "boardLine": "",
      "welcome": "라이프치히 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B85C6B",
          "pants": "#3A3F5C"
        },
        "lines": [
          "안녕하세요! 라이프치히 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "라이프치히",
          "sub": "Leipzig · 작센",
          "text": "라이프치히는 작센주의 큰 도시예요. 음악가 바흐가 토마스 교회에서 오랫동안 일했어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "라이프치히 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "라이프치히 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "dresden": {
      "theme": {
        "wall": "#FAF0F0",
        "wainscot": "#DDB9B9",
        "floor": [
          "#DDB892",
          "#D2AB85",
          "#E6C6A0"
        ],
        "rug": "#C9B6E4",
        "board": "#4A3A63",
        "sky": "#E6DDF3",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "드레스덴",
          "sub": "Dresden · Sachsen",
          "kind": "basilica",
          "color": "#C97B5A",
          "foot": "Sachsen · Deutschland"
        }
      },
      "boardTitle": "드레스덴 한글학교",
      "boardLine": "",
      "welcome": "드레스덴 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#6E7FA8",
          "hairStyle": 2,
          "shirt": "#7B5EA7",
          "pants": "#2E2E3E"
        },
        "lines": [
          "안녕하세요! 드레스덴 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "드레스덴",
          "sub": "Dresden · 작센",
          "text": "드레스덴은 작센주의 중심 도시예요. 엘베강 가에 둥근 지붕의 프라우엔 교회가 서 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "드레스덴 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "드레스덴 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "kassel": {
      "theme": {
        "wall": "#F2F7EC",
        "wainscot": "#C9D8B8",
        "floor": [
          "#D9BE92",
          "#CEB285",
          "#E3C89E"
        ],
        "rug": "#F5D08A",
        "board": "#2F5F5A",
        "sky": "#D9EFF2",
        "view": {
          "kind": "mountain",
          "sky": [
            "#9ED3F2",
            "#EAF6FC"
          ],
          "far": "#B8C9DD",
          "near": "#6E9A6B",
          "water": "#8EC1DF",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "카셀",
          "sub": "Kassel · Hessen",
          "kind": "fountain",
          "color": "#4F7FB8",
          "foot": "Hessen · Deutschland"
        }
      },
      "boardTitle": "카셀 한글학교",
      "boardLine": "",
      "welcome": "카셀 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#7A4E33",
          "hairStyle": 1,
          "shirt": "#4F9A8A",
          "pants": "#4A4A5A"
        },
        "lines": [
          "안녕하세요! 카셀 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "카셀",
          "sub": "Kassel · 헤센",
          "text": "카셀은 헤센주 북쪽의 도시예요. 그림 형제가 이곳에서 옛이야기를 모아 동화책을 만들었어요.\n\n언덕 위 큰 공원에는 물이 계단처럼 흘러내리는 폭포가 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "카셀 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "카셀 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "frankfurt": {
      "theme": {
        "wall": "#FFF4E0",
        "wainscot": "#E6C99B",
        "floor": [
          "#DDB27F",
          "#D2A672",
          "#E7C092"
        ],
        "rug": "#E8A598",
        "board": "#6B3E2E",
        "sky": "#FBE6CF",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "프랑크푸르트",
          "sub": "Frankfurt am Main · Hessen",
          "kind": "plane",
          "color": "#4F7FB8",
          "foot": "Hessen · Deutschland"
        }
      },
      "boardTitle": "프랑크푸르트 한국학교",
      "boardLine": "",
      "welcome": "프랑크푸르트 한국학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#C98E66",
          "hair": "#2B2420",
          "hairStyle": 2,
          "shirt": "#D9822B",
          "pants": "#3B3B4F"
        },
        "lines": [
          "안녕하세요! 프랑크푸르트 한국학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "프랑크푸르트",
          "sub": "Frankfurt am Main · 헤센",
          "text": "프랑크푸르트는 마인강 가에 있는 큰 도시예요. 높은 빌딩이 많고, 아주 큰 공항이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "프랑크푸르트 한국학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "프랑크푸르트 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "wiesbaden": {
      "theme": {
        "wall": "#EEF6FA",
        "wainscot": "#B9CFDB",
        "floor": [
          "#D8C09A",
          "#CFB68D",
          "#E2CCA8"
        ],
        "rug": "#9CC3DD",
        "board": "#2D4F66",
        "sky": "#D8EDF9",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "비스바덴",
          "sub": "Wiesbaden · Hessen",
          "kind": "fountain",
          "color": "#4F7FB8",
          "foot": "Hessen · Deutschland"
        }
      },
      "boardTitle": "비스바덴 한글학교",
      "boardLine": "",
      "welcome": "비스바덴 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#B98A57",
          "hairStyle": 0,
          "shirt": "#4F8FB5",
          "pants": "#3B4A63"
        },
        "lines": [
          "안녕하세요! 비스바덴 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "비스바덴",
          "sub": "Wiesbaden · 헤센",
          "text": "비스바덴은 헤센주의 중심 도시예요. 땅속에서 따뜻한 온천물이 솟아나요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "비스바덴 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "비스바덴 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "mainz": {
      "theme": {
        "wall": "#FFF1E0",
        "wainscot": "#C9A27A",
        "floor": [
          "#D6B07F",
          "#CCA574",
          "#E0BC8D"
        ],
        "rug": "#E8A9A0",
        "board": "#4A3A5C",
        "sky": "#E2EEF8",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "마인츠",
          "sub": "Mainz · Hessen",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "Hessen · Deutschland"
        }
      },
      "boardTitle": "마인츠 무궁화 한글학교",
      "boardLine": "",
      "welcome": "마인츠 무궁화 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B5563E",
          "pants": "#3D3A4F"
        },
        "lines": [
          "안녕하세요! 마인츠 무궁화 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "마인츠",
          "sub": "Mainz · 헤센",
          "text": "마인츠는 라인강과 마인강이 만나는 곳에 있는 도시예요.\n\n구텐베르크가 이 도시에서 금속 활자로 책을 찍었어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "마인츠 무궁화 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "마인츠 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "darmstadt": {
      "theme": {
        "wall": "#FCEDE6",
        "wainscot": "#D9A58F",
        "floor": [
          "#D9B089",
          "#CFA57E",
          "#E3BD98"
        ],
        "rug": "#E7B3A8",
        "board": "#5A3A44",
        "sky": "#F8E4DD",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "다름슈타트",
          "sub": "Darmstadt · Hessen",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Hessen · Deutschland"
        }
      },
      "boardTitle": "다름슈타트 한글학교",
      "boardLine": "",
      "welcome": "다름슈타트 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 2,
          "shirt": "#3FA37A",
          "pants": "#35405C"
        },
        "lines": [
          "안녕하세요! 다름슈타트 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "다름슈타트",
          "sub": "Darmstadt · 헤센",
          "text": "다름슈타트는 헤센주 남쪽의 과학 도시예요. 새로 찾은 원소 '다름슈타튬'의 이름이 이 도시에서 왔어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "다름슈타트 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "다름슈타트 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "saarland": {
      "theme": {
        "wall": "#FBF3E2",
        "wainscot": "#D9C4A0",
        "floor": [
          "#D9B583",
          "#CFA874",
          "#E0BD8E"
        ],
        "rug": "#9FC7A3",
        "board": "#2F5D50",
        "sky": "#D7ECF7",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "자르브뤼켄",
          "sub": "Saarbrücken · Saarland",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "Saarland · Deutschland"
        }
      },
      "boardTitle": "자알란트 한글학교",
      "boardLine": "",
      "welcome": "자알란트 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 1,
          "shirt": "#3E6B8F",
          "pants": "#2F3A56"
        },
        "lines": [
          "안녕하세요! 자알란트 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "자르브뤼켄",
          "sub": "Saarbrücken · 자를란트",
          "text": "자르브뤼켄은 자를란트주의 중심 도시예요. 프랑스와 맞닿아 있고, 자르강이 흘러요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "자알란트 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "자르브뤼켄 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "heidelberg": {
      "theme": {
        "wall": "#FCF1E6",
        "wainscot": "#E3C9B0",
        "floor": [
          "#E0BC8E",
          "#D6AF80",
          "#E8C79A"
        ],
        "rug": "#F2B8B5",
        "board": "#33506B",
        "sky": "#DCEAF7",
        "view": {
          "kind": "river",
          "sky": [
            "#A8D5F0",
            "#F1F7FB"
          ],
          "far": "#C9B8A8",
          "near": "#8FB57A",
          "water": "#7FB3D5",
          "accent": "#D98B5F"
        },
        "poster": {
          "title": "하이델베르크",
          "sub": "Heidelberg · Baden-Württemberg",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Baden-Württemberg · Deutschland"
        }
      },
      "boardTitle": "하이델베르크 한글학교",
      "boardLine": "",
      "welcome": "하이델베르크 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B85C6B",
          "pants": "#3A3F5C"
        },
        "lines": [
          "안녕하세요! 하이델베르크 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "하이델베르크",
          "sub": "Heidelberg · 바덴뷔르템베르크",
          "text": "하이델베르크는 네카어강 가에 있는 도시예요. 언덕 위에 오래된 성이 있어요.\n\n독일에서 가장 오래된 대학이 이 도시에 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "하이델베르크 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "하이델베르크 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "karlsruhe": {
      "theme": {
        "wall": "#FAF0F0",
        "wainscot": "#DDB9B9",
        "floor": [
          "#DDB892",
          "#D2AB85",
          "#E6C6A0"
        ],
        "rug": "#C9B6E4",
        "board": "#4A3A63",
        "sky": "#E6DDF3",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "칼스루에",
          "sub": "Karlsruhe · Baden-Württemberg",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Baden-Württemberg · Deutschland"
        }
      },
      "boardTitle": "칼스루에 한글학교",
      "boardLine": "",
      "welcome": "칼스루에 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#6E7FA8",
          "hairStyle": 2,
          "shirt": "#7B5EA7",
          "pants": "#2E2E3E"
        },
        "lines": [
          "안녕하세요! 칼스루에 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "칼스루에",
          "sub": "Karlsruhe · 바덴뷔르템베르크",
          "text": "칼스루에는 성을 가운데 두고 길이 부채처럼 펼쳐진 도시예요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "칼스루에 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "칼스루에 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "stuttgart": {
      "theme": {
        "wall": "#F2F7EC",
        "wainscot": "#C9D8B8",
        "floor": [
          "#D9BE92",
          "#CEB285",
          "#E3C89E"
        ],
        "rug": "#F5D08A",
        "board": "#2F5F5A",
        "sky": "#D9EFF2",
        "view": {
          "kind": "vineyard",
          "sky": [
            "#A9D4EE",
            "#FBF3E6"
          ],
          "far": "#C9B48A",
          "near": "#9CB86A",
          "water": "#8EC3E6",
          "accent": "#7A4E8C"
        },
        "poster": {
          "title": "슈투트가르트",
          "sub": "Stuttgart · Baden-Württemberg",
          "kind": "car",
          "color": "#3E5C8A",
          "foot": "Baden-Württemberg · Deutschland"
        }
      },
      "boardTitle": "슈투트가르트 한글학교",
      "boardLine": "",
      "welcome": "슈투트가르트 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#7A4E33",
          "hairStyle": 1,
          "shirt": "#4F9A8A",
          "pants": "#4A4A5A"
        },
        "lines": [
          "안녕하세요! 슈투트가르트 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "슈투트가르트",
          "sub": "Stuttgart · 바덴뷔르템베르크",
          "text": "슈투트가르트는 바덴뷔르템베르크주의 중심 도시예요. 자동차를 만드는 도시로 유명하고 자동차 박물관이 있어요.\n\n도시 둘레 언덕에는 포도밭이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "슈투트가르트 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "슈투트가르트 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "freiburg": {
      "theme": {
        "wall": "#FFF4E0",
        "wainscot": "#E6C99B",
        "floor": [
          "#DDB27F",
          "#D2A672",
          "#E7C092"
        ],
        "rug": "#E8A598",
        "board": "#6B3E2E",
        "sky": "#FBE6CF",
        "view": {
          "kind": "mountain",
          "sky": [
            "#9ED3F2",
            "#EAF6FC"
          ],
          "far": "#B8C9DD",
          "near": "#6E9A6B",
          "water": "#8EC1DF",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "프라이부르그",
          "sub": "Freiburg im Breisgau · Baden-Württemberg",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "Baden-Württemberg · Deutschland"
        }
      },
      "boardTitle": "프라이부르그 한글학교",
      "boardLine": "",
      "welcome": "프라이부르그 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#C98E66",
          "hair": "#2B2420",
          "hairStyle": 2,
          "shirt": "#D9822B",
          "pants": "#3B3B4F"
        },
        "lines": [
          "안녕하세요! 프라이부르그 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "프라이부르그",
          "sub": "Freiburg im Breisgau · 바덴뷔르템베르크",
          "text": "프라이부르그는 독일 남서쪽, 검은 숲(슈바르츠발트) 옆에 있는 도시예요.\n\n골목길 옆으로 작은 물길이 흐르고, 햇볕이 많은 도시예요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "프라이부르그 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "프라이부르그 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "erlangen": {
      "theme": {
        "wall": "#EEF6FA",
        "wainscot": "#B9CFDB",
        "floor": [
          "#D8C09A",
          "#CFB68D",
          "#E2CCA8"
        ],
        "rug": "#9CC3DD",
        "board": "#2D4F66",
        "sky": "#D8EDF9",
        "view": {
          "kind": "fields",
          "sky": [
            "#A9D6F0",
            "#F3F8EC"
          ],
          "far": "#BFD3A8",
          "near": "#8DBB74",
          "water": "#8EC3E6",
          "accent": "#F2B544"
        },
        "poster": {
          "title": "에얼랑엔",
          "sub": "Erlangen · Bayern",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Bayern · Deutschland"
        }
      },
      "boardTitle": "에얼랑엔-뉘른베르크 한글학교",
      "boardLine": "",
      "welcome": "에얼랑엔-뉘른베르크 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#FFE0C7",
          "hair": "#B98A57",
          "hairStyle": 0,
          "shirt": "#4F8FB5",
          "pants": "#3B4A63"
        },
        "lines": [
          "안녕하세요! 에얼랑엔-뉘른베르크 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "에얼랑엔",
          "sub": "Erlangen · 바이에른",
          "text": "에얼랑엔은 바이에른주 뉘른베르크 바로 옆에 있는 대학 도시예요.\n\n이웃 뉘른베르크에는 언덕 위 큰 성과 크리스마스 시장이 유명해요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "에얼랑엔-뉘른베르크 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "에얼랑엔 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "augsburg": {
      "theme": {
        "wall": "#FFF1E0",
        "wainscot": "#C9A27A",
        "floor": [
          "#D6B07F",
          "#CCA574",
          "#E0BC8D"
        ],
        "rug": "#E8A9A0",
        "board": "#4A3A5C",
        "sky": "#E2EEF8",
        "view": {
          "kind": "city",
          "sky": [
            "#A9D4F2",
            "#F1F7FC"
          ],
          "far": "#C9D3E3",
          "near": "#9BA9C4",
          "water": "#8EC3E6",
          "accent": "#E8A87C"
        },
        "poster": {
          "title": "아욱스부르크",
          "sub": "Augsburg · Bayern",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Bayern · Deutschland"
        }
      },
      "boardTitle": "아욱스부르크 슈바벤 한글학교",
      "boardLine": "",
      "welcome": "아욱스부르크 슈바벤 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#E8B48F",
          "hair": "#2B2420",
          "hairStyle": 0,
          "shirt": "#B5563E",
          "pants": "#3D3A4F"
        },
        "lines": [
          "안녕하세요! 아욱스부르크 슈바벤 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "아욱스부르크",
          "sub": "Augsburg · 바이에른",
          "text": "아욱스부르크는 바이에른주의 아주 오래된 도시예요. 2000년도 더 전에 로마 사람들이 세웠어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "아욱스부르크 슈바벤 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "아욱스부르크 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "muenchen": {
      "theme": {
        "wall": "#FCEDE6",
        "wainscot": "#D9A58F",
        "floor": [
          "#D9B089",
          "#CFA57E",
          "#E3BD98"
        ],
        "rug": "#E7B3A8",
        "board": "#5A3A44",
        "sky": "#F8E4DD",
        "view": {
          "kind": "mountain",
          "sky": [
            "#9ED3F2",
            "#EAF6FC"
          ],
          "far": "#B8C9DD",
          "near": "#6E9A6B",
          "water": "#8EC1DF",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "뮌헨",
          "sub": "München · Bayern",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "Bayern · Deutschland"
        }
      },
      "boardTitle": "뮌헨 한글학교",
      "boardLine": "",
      "welcome": "뮌헨 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
      "principal": {
        "name": "교장 선생님",
        "look": {
          "skin": "#F6CFAE",
          "hair": "#4A3428",
          "hairStyle": 2,
          "shirt": "#3FA37A",
          "pants": "#35405C"
        },
        "lines": [
          "안녕하세요! 뮌헨 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "뮌헨",
          "sub": "München · 바이에른",
          "text": "뮌헨은 바이에른주의 중심 도시예요. 남쪽으로 조금만 가면 알프스산맥이 있어요.\n\n둥근 지붕 탑이 두 개인 프라우엔 교회가 도시의 상징이에요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "뮌헨 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "뮌헨 소개 영상",
          "video": "",
          "sample": true
        }
      }
    }
  }
};
