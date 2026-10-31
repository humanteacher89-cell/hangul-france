// 영국 한글학교 로비 설정 — 자동 생성(유럽로비\tools\make_country_config.py, 2026-10-31 유럽 한글학교 메타버스 A안). 손으로 고치지 말고 도구·학교 목록 JSON을 고친다.
// 짜임은 프랑스 로비 설정(../lobby.config.js)과 같다. [예시]·[확인 전] 글은 학교가 관리자 페이지(../admin/?map=uk)에서 바꾼다.
// 학교 목록: 유럽로비\자료\uk-schools.json (출처·확인 상태는 유럽로비\자료\영국-한글학교-목록-*.md). 교장·교사 개인 이름은 넣지 않는다.
window.LOBBY_CONFIG = {
  version: 'v0.3-uk',
  contentMap: 'uk',          // 관리자 내용 영역(서버 map)
  flag: 'gb', countryFoot: 'United Kingdom',
  europeUrl: '../eu/',
  text: {
    "title": "영국 한글학교 로비",
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
    "listNote": "학교 목록은 주영국 대사관·주영국한국교육원 안내와 재외동포청 스터디코리안 한글학교 정보(2026년)로 모아 확인 중입니다(확인 전 시험판). '확인 전' 표시는 올해 운영이 확인되지 않은 곳입니다.",
    "noSchools": "아직 표시할 학교가 없습니다.",
    "close": "닫기",
    "enter": "입장하기",
    "pending": "확인 전",
    "enterBody": "이 학교의 공간은 준비 중이에요.",
    "back": "로비로 돌아가기",
    "toLobby": "로비로",
    "exitSign": "로비로",
    "exitName": "로비로 나가기",
    "exitSub": "영국 지도 로비로 돌아가요",
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
  // 지역 코드별 한글·현지어 이름과 색(지도 파일 uk-map.js의 regions[].c). label: 땅에 쓴 이름의 크기(size)와 자리 옮김(dx 동쪽+, dz 남쪽+)
  regions: {
    "S92000003": {
      "ko": "스코틀랜드",
      "local": "Scotland",
      "color": "#B9D7A6",
      "label": {
        "size": 17
      }
    },
    "N92000002": {
      "ko": "북아일랜드",
      "local": "Northern Ireland",
      "color": "#C6E39C",
      "label": {
        "size": 11
      }
    },
    "E12000001": {
      "ko": "잉글랜드 북동부",
      "local": "North East",
      "color": "#F2B3C4",
      "label": {
        "size": 10
      }
    },
    "E12000002": {
      "ko": "잉글랜드 북서부",
      "local": "North West",
      "color": "#F5DD8C",
      "label": {
        "size": 10
      }
    },
    "E12000003": {
      "ko": "요크셔험버",
      "local": "Yorkshire and the Humber",
      "color": "#C9B8EA",
      "label": {
        "size": 11
      }
    },
    "E12000004": {
      "ko": "이스트미들랜즈",
      "local": "East Midlands",
      "color": "#F7BE8F",
      "label": {
        "size": 11
      }
    },
    "E12000005": {
      "ko": "웨스트미들랜즈",
      "local": "West Midlands",
      "color": "#BFD8EE",
      "label": {
        "size": 10.5
      }
    },
    "W92000004": {
      "ko": "웨일스",
      "local": "Wales",
      "color": "#EBA7A1",
      "label": {
        "size": 12
      }
    },
    "E12000006": {
      "ko": "잉글랜드 동부",
      "local": "East of England",
      "color": "#E3B7DE",
      "label": {
        "size": 11
      }
    },
    "E12000007": {
      "ko": "런던",
      "local": "London",
      "color": "#F4B49C",
      "label": {
        "size": 6
      }
    },
    "E12000008": {
      "ko": "잉글랜드 남동부",
      "local": "South East",
      "color": "#A8D99A",
      "label": {
        "size": 12
      }
    },
    "E12000009": {
      "ko": "잉글랜드 남서부",
      "local": "South West",
      "color": "#F9CF85",
      "label": {
        "size": 12
      }
    }
  },
  regionOrder: ["S92000003", "E12000001", "N92000002", "E12000002", "E12000003", "E12000004", "E12000005", "W92000004", "E12000006", "E12000007", "E12000008", "E12000009"],
  plaza: {"lon": -0.8, "lat": 52.45},
  landmarks: [
    {
      "id": "bigben",
      "kind": "bigben",
      "name": "엘리자베스 타워(빅벤)",
      "lon": -0.1246,
      "lat": 51.5007,
      "scale": 0.8
    }
  ],
  mountains: [
    {
      "name": "스코틀랜드 하일랜드",
      "lon": [
        -6.2,
        -3.0
      ],
      "lat": [
        56.3,
        58.4
      ],
      "regions": [
        "S92000003"
      ],
      "count": 70,
      "r": [
        0.9,
        1.5
      ],
      "h": [
        1.3,
        2.6
      ],
      "snow": 2.2,
      "colors": [
        "#A9A09A",
        "#9D958F",
        "#8DB77C"
      ]
    },
    {
      "name": "서던 업랜드",
      "lon": [
        -4.5,
        -2.6
      ],
      "lat": [
        55.2,
        55.7
      ],
      "regions": [
        "S92000003"
      ],
      "count": 8,
      "r": [
        0.8,
        1.1
      ],
      "h": [
        0.8,
        1.2
      ],
      "colors": [
        "#8DB77C",
        "#9CC28B"
      ]
    },
    {
      "name": "레이크 디스트릭트",
      "lon": [
        -3.4,
        -2.8
      ],
      "lat": [
        54.3,
        54.7
      ],
      "regions": [
        "E12000002"
      ],
      "count": 6,
      "r": [
        0.7,
        1.0
      ],
      "h": [
        1.0,
        1.6
      ],
      "colors": [
        "#A9A09A",
        "#8DB77C"
      ]
    },
    {
      "name": "페나인 산맥",
      "lon": [
        -2.5,
        -1.8
      ],
      "lat": [
        53.4,
        54.9
      ],
      "regions": [
        "E12000002",
        "E12000003",
        "E12000001"
      ],
      "count": 16,
      "r": [
        0.7,
        1.0
      ],
      "h": [
        0.7,
        1.1
      ],
      "colors": [
        "#8DB77C",
        "#9CC28B"
      ]
    },
    {
      "name": "스노도니아",
      "lon": [
        -4.2,
        -3.5
      ],
      "lat": [
        52.7,
        53.2
      ],
      "regions": [
        "W92000004"
      ],
      "count": 8,
      "r": [
        0.8,
        1.2
      ],
      "h": [
        1.1,
        1.8
      ],
      "colors": [
        "#A9A09A",
        "#9D958F"
      ]
    }
  ],
  trees: { count: 460, colors: ['#7FBF6A', '#6FB15E', '#8CCB76', '#5FA35A', '#94C77E'] },
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
  multiplayer: { file: '../relay.json', lobbyRoom: 'uk:lobby', roomPrefix: 'uk:', sendHz: 4 },
  // 한글학교 21곳 [확인 전 — 휴먼쌤 확정 전 조사본]
  schools: [
    {
      "id": "aberdeen",
      "name": "아버딘 한글학교",
      "nameLocal": "Aberdeen Korean School",
      "city": "아버딘",
      "region": "S92000003",
      "lon": -2.1023,
      "lat": 57.1646,
      "web": "",
      "pending": true
    },
    {
      "id": "edinburgh",
      "name": "에딘버러 한글학교",
      "nameLocal": "Edinburgh Korean School",
      "city": "에딘버러",
      "region": "S92000003",
      "lon": -3.1824,
      "lat": 55.9472,
      "web": "https://www.facebook.com/EdinburghKLS"
    },
    {
      "id": "glasgow",
      "name": "글라스고 한글학교",
      "nameLocal": "Glasgow Korean School",
      "city": "글라스고",
      "region": "S92000003",
      "lon": -4.3039,
      "lat": 55.8706,
      "web": "",
      "pending": true
    },
    {
      "id": "newcastle",
      "name": "뉴캐슬 한글학교",
      "nameLocal": "Newcastle Korean School",
      "city": "뉴캐슬",
      "region": "E12000001",
      "lon": -1.5732,
      "lat": 55.0097,
      "web": ""
    },
    {
      "id": "leeds",
      "name": "리즈 한글학교",
      "nameLocal": "Leeds Korean School",
      "city": "리즈",
      "region": "E12000003",
      "lon": -1.4609,
      "lat": 53.7966,
      "web": "",
      "pending": true
    },
    {
      "id": "sheffield",
      "name": "쉐필드 한글학교",
      "nameLocal": "Sheffield Korean School",
      "city": "쉐필드",
      "region": "E12000003",
      "lon": -1.5221,
      "lat": 53.3754,
      "web": ""
    },
    {
      "id": "manchester",
      "name": "맨체스터 한글학교",
      "nameLocal": "Manchester Korean School",
      "city": "맨체스터",
      "region": "E12000002",
      "lon": -2.2388,
      "lat": 53.4217,
      "web": "https://manchesterks.wixsite.com/mcrkoreanschool"
    },
    {
      "id": "nottingham",
      "name": "노팅험 한글학교",
      "nameLocal": "Nottingham Korean School",
      "city": "노팅험",
      "region": "E12000004",
      "lon": -1.1916,
      "lat": 52.9097,
      "web": ""
    },
    {
      "id": "birmingham",
      "name": "버밍엄 한글학교",
      "nameLocal": "Birmingham Korean School",
      "city": "버밍엄",
      "region": "E12000005",
      "lon": -1.9598,
      "lat": 52.4325,
      "web": "https://bkschooluk.org/"
    },
    {
      "id": "coventry",
      "name": "코벤트리 한글학교",
      "nameLocal": "Coventry Korean School",
      "city": "코벤트리",
      "region": "E12000005",
      "lon": -1.5735,
      "lat": 52.393,
      "web": "",
      "pending": true
    },
    {
      "id": "cambridge",
      "name": "케임브리지 한글학교",
      "nameLocal": "Cambridge Korean School",
      "city": "케임브리지",
      "region": "E12000006",
      "lon": 0.1076,
      "lat": 52.2196,
      "web": "http://www.cambridgekoreanschool.org/"
    },
    {
      "id": "northlondon",
      "name": "강북런던한국학교",
      "nameLocal": "North London Korean School",
      "city": "런던",
      "region": "E12000007",
      "lon": -0.2409,
      "lat": 51.6008,
      "web": "http://www.nlks.co.uk"
    },
    {
      "id": "london",
      "name": "런던한국학교",
      "nameLocal": "London Korean School",
      "city": "런던",
      "region": "E12000007",
      "lon": -0.2617,
      "lat": 51.3979,
      "web": "https://www.londonkoreanschool.com/"
    },
    {
      "id": "reading",
      "name": "레딩 한글학교",
      "nameLocal": "Reading Korean School",
      "city": "레딩",
      "region": "E12000008",
      "lon": -0.9627,
      "lat": 51.4486,
      "web": "https://readingkoreanschool.co.uk/"
    },
    {
      "id": "oxford",
      "name": "옥스포드 한글학교",
      "nameLocal": "Oxford Korean School",
      "city": "옥스포드",
      "region": "E12000008",
      "lon": -1.1916,
      "lat": 51.7617,
      "web": "",
      "pending": true
    },
    {
      "id": "southampton",
      "name": "싸우스햄튼 한글학교",
      "nameLocal": "Southampton Korean School",
      "city": "싸우스햄튼",
      "region": "E12000008",
      "lon": -1.4005,
      "lat": 50.9063,
      "web": "",
      "pending": true
    },
    {
      "id": "bristol",
      "name": "브리스톨 한글학교",
      "nameLocal": "Bristol Korean School",
      "city": "브리스톨",
      "region": "E12000009",
      "lon": -2.6654,
      "lat": 51.4986,
      "web": "https://bristolkoreanschool.org/"
    },
    {
      "id": "exeter",
      "name": "엑시터 한글학교",
      "nameLocal": "Exeter Korean School",
      "city": "엑시터",
      "region": "E12000009",
      "lon": -3.5343,
      "lat": 50.7215,
      "web": "",
      "pending": true
    },
    {
      "id": "bridgend",
      "name": "브리젠드 한글학교",
      "nameLocal": "Bridgend Korean School",
      "city": "브리젠드",
      "region": "W92000004",
      "lon": -3.5764,
      "lat": 51.5079,
      "web": ""
    },
    {
      "id": "cardiff",
      "name": "카디프 한글학교",
      "nameLocal": "Cardiff Korean School",
      "city": "카디프",
      "region": "W92000004",
      "lon": -3.106,
      "lat": 51.5146,
      "web": ""
    },
    {
      "id": "swansea",
      "name": "스완지 한글학교",
      "nameLocal": "Swansea Korean School",
      "city": "스완지",
      "region": "W92000004",
      "lon": -4.0077,
      "lat": 51.6146,
      "web": "",
      "pending": true
    }
  ],
  // 학교별 교실 [예시] — 글·사진·영상은 학교가 관리자 페이지에서 바꾼다
  rooms: {
    "aberdeen": {
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
          "kind": "sea",
          "sky": [
            "#9ED8F0",
            "#EEF8FB"
          ],
          "far": "#B8D8E8",
          "near": "#E8D9B0",
          "water": "#6FB7D6",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "아버딘",
          "sub": "Aberdeen · Scotland",
          "kind": "lighthouse",
          "color": "#3E6B8F",
          "foot": "Scotland · United Kingdom"
        }
      },
      "boardTitle": "아버딘 한글학교",
      "boardLine": "",
      "welcome": "아버딘 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 아버딘 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "아버딘",
          "sub": "Aberdeen · 스코틀랜드",
          "text": "아버딘은 스코틀랜드 북동쪽 바닷가에 있는 도시예요.\n\n회색 화강암으로 지은 건물이 많아서 '화강암 도시'라고도 불러요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "아버딘 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "아버딘 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "edinburgh": {
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
          "title": "에딘버러",
          "sub": "Edinburgh · Scotland",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Scotland · United Kingdom"
        }
      },
      "boardTitle": "에딘버러 한글학교",
      "boardLine": "",
      "welcome": "에딘버러 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 에딘버러 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "에딘버러",
          "sub": "Edinburgh · 스코틀랜드",
          "text": "에딘버러는 스코틀랜드의 수도예요. 도시 한가운데 바위 언덕 위에 오래된 성이 서 있어요.\n\n여름이면 세계 여러 나라 사람들이 모이는 큰 공연 축제가 열려요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "에딘버러 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "에딘버러 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "glasgow": {
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
          "title": "글라스고",
          "sub": "Glasgow · Scotland",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "Scotland · United Kingdom"
        }
      },
      "boardTitle": "글라스고 한글학교",
      "boardLine": "",
      "welcome": "글라스고 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 글라스고 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "글라스고",
          "sub": "Glasgow · 스코틀랜드",
          "text": "글라스고는 스코틀랜드에서 가장 큰 도시예요. 도시 가운데로 클라이드강이 흘러요.\n\n옛날에는 큰 배를 많이 만드는 도시로 유명했어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "글라스고 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "글라스고 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "newcastle": {
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
          "title": "뉴캐슬",
          "sub": "Newcastle upon Tyne · North East",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "North East · United Kingdom"
        }
      },
      "boardTitle": "뉴캐슬 한글학교",
      "boardLine": "",
      "welcome": "뉴캐슬 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 뉴캐슬 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "뉴캐슬",
          "sub": "Newcastle upon Tyne · 잉글랜드 북동부",
          "text": "뉴캐슬은 잉글랜드 북동쪽에 있는 도시예요. 타인강 위에 모양이 서로 다른 다리가 여러 개 놓여 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "뉴캐슬 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "뉴캐슬 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "leeds": {
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
          "title": "리즈",
          "sub": "Leeds · Yorkshire and the Humber",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "Yorkshire and the Humber · United Kingdom"
        }
      },
      "boardTitle": "리즈 한글학교",
      "boardLine": "",
      "welcome": "리즈 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 리즈 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "리즈",
          "sub": "Leeds · 요크셔험버",
          "text": "리즈는 잉글랜드 북쪽 요크셔 지방의 큰 도시예요.\n\n옛날부터 양털로 옷감을 짜는 일로 이름난 도시였어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "리즈 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "리즈 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "sheffield": {
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
          "title": "쉐필드",
          "sub": "Sheffield · Yorkshire and the Humber",
          "kind": "house",
          "color": "#C9704F",
          "foot": "Yorkshire and the Humber · United Kingdom"
        }
      },
      "boardTitle": "쉐필드 한글학교",
      "boardLine": "",
      "welcome": "쉐필드 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 쉐필드 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "쉐필드",
          "sub": "Sheffield · 요크셔험버",
          "text": "쉐필드는 잉글랜드 북쪽 요크셔 지방의 도시예요. 쇠로 만든 칼과 식기로 오래전부터 이름났어요.\n\n도시 안에 공원과 나무가 아주 많아요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "쉐필드 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "쉐필드 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "manchester": {
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
          "title": "맨체스터",
          "sub": "Manchester · North West",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "North West · United Kingdom"
        }
      },
      "boardTitle": "맨체스터 한글학교",
      "boardLine": "",
      "welcome": "맨체스터 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 맨체스터 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "맨체스터",
          "sub": "Manchester · 잉글랜드 북서부",
          "text": "맨체스터는 잉글랜드 북서쪽의 큰 도시예요. 옛날 산업혁명 때 실과 옷감을 만드는 공장이 많았어요.\n\n이름난 축구팀이 두 개나 있는 도시예요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "맨체스터 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "맨체스터 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "nottingham": {
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
          "title": "노팅험",
          "sub": "Nottingham · East Midlands",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "East Midlands · United Kingdom"
        }
      },
      "boardTitle": "노팅험 한글학교",
      "boardLine": "",
      "welcome": "노팅험 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 노팅험 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "노팅험",
          "sub": "Nottingham · 이스트미들랜즈",
          "text": "노팅험은 잉글랜드 한가운데 있는 도시예요. 숲속 의적 로빈 후드 이야기의 무대로 알려져 있어요.\n\n언덕 위에 노팅험 성이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "노팅험 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "노팅험 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "birmingham": {
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
          "title": "버밍엄",
          "sub": "Birmingham · West Midlands",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "West Midlands · United Kingdom"
        }
      },
      "boardTitle": "버밍엄 한글학교",
      "boardLine": "",
      "welcome": "버밍엄 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 버밍엄 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "버밍엄",
          "sub": "Birmingham · 웨스트미들랜즈",
          "text": "버밍엄은 잉글랜드 한가운데 있는 아주 큰 도시예요.\n\n도시 곳곳에 배가 다니는 물길(운하)이 많아요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "버밍엄 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "버밍엄 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "coventry": {
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
          "title": "코벤트리",
          "sub": "Coventry · West Midlands",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "West Midlands · United Kingdom"
        }
      },
      "boardTitle": "코벤트리 한글학교",
      "boardLine": "",
      "welcome": "코벤트리 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 코벤트리 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "코벤트리",
          "sub": "Coventry · 웨스트미들랜즈",
          "text": "코벤트리는 잉글랜드 한가운데 있는 도시예요.\n\n옛 성당의 남은 벽과 새로 지은 성당이 나란히 서 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "코벤트리 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "코벤트리 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "cambridge": {
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
          "title": "케임브리지",
          "sub": "Cambridge · East of England",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "East of England · United Kingdom"
        }
      },
      "boardTitle": "케임브리지 한글학교",
      "boardLine": "",
      "welcome": "케임브리지 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 케임브리지 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "케임브리지",
          "sub": "Cambridge · 잉글랜드 동부",
          "text": "케임브리지는 오래된 대학이 있는 도시예요.\n\n도시를 흐르는 캠강에서 사람들이 긴 막대로 작은 배를 밀며 다녀요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "케임브리지 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "케임브리지 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "northlondon": {
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
          "title": "런던",
          "sub": "London · London",
          "kind": "bigben",
          "color": "#8C6A3F",
          "foot": "London · United Kingdom"
        }
      },
      "boardTitle": "강북런던한국학교",
      "boardLine": "",
      "welcome": "강북런던한국학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 강북런던한국학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "런던",
          "sub": "London · 런던",
          "text": "런던은 영국의 수도예요. 도시 가운데로 템스강이 흐르고, 강가에는 큰 시계탑(빅벤)이 있어요.\n\n빨간 2층 버스가 거리를 달려요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "강북런던한국학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "런던 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "london": {
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
          "title": "런던",
          "sub": "London · London",
          "kind": "bigben",
          "color": "#8C6A3F",
          "foot": "London · United Kingdom"
        }
      },
      "boardTitle": "런던한국학교",
      "boardLine": "",
      "welcome": "런던한국학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 런던한국학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "런던",
          "sub": "London · 런던",
          "text": "런던은 영국의 수도예요. 도시 가운데로 템스강이 흐르고, 강가에는 큰 시계탑(빅벤)이 있어요.\n\n빨간 2층 버스가 거리를 달려요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "런던한국학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "런던 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "reading": {
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
          "title": "레딩",
          "sub": "Reading · South East",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "South East · United Kingdom"
        }
      },
      "boardTitle": "레딩 한글학교",
      "boardLine": "",
      "welcome": "레딩 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 레딩 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "레딩",
          "sub": "Reading · 잉글랜드 남동부",
          "text": "레딩은 런던 서쪽에 있는 도시예요. 템스강과 케넷강이 이곳에서 만나요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "레딩 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "레딩 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "oxford": {
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
          "title": "옥스포드",
          "sub": "Oxford · South East",
          "kind": "belfry",
          "color": "#6B5B4B",
          "foot": "South East · United Kingdom"
        }
      },
      "boardTitle": "옥스포드 한글학교",
      "boardLine": "",
      "welcome": "옥스포드 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 옥스포드 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "옥스포드",
          "sub": "Oxford · 잉글랜드 남동부",
          "text": "옥스포드에는 영어를 쓰는 나라에서 가장 오래된 대학이 있어요.\n\n뾰족한 탑이 많은 오래된 건물들이 도시를 채우고 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "옥스포드 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "옥스포드 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "southampton": {
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
          "kind": "sea",
          "sky": [
            "#9ED8F0",
            "#EEF8FB"
          ],
          "far": "#B8D8E8",
          "near": "#E8D9B0",
          "water": "#6FB7D6",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "싸우스햄튼",
          "sub": "Southampton · South East",
          "kind": "lighthouse",
          "color": "#3E6B8F",
          "foot": "South East · United Kingdom"
        }
      },
      "boardTitle": "싸우스햄튼 한글학교",
      "boardLine": "",
      "welcome": "싸우스햄튼 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 싸우스햄튼 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "싸우스햄튼",
          "sub": "Southampton · 잉글랜드 남동부",
          "text": "싸우스햄튼은 잉글랜드 남쪽 바닷가의 큰 항구 도시예요.\n\n아주 큰 배들이 드나들어요. 1912년 타이타닉호도 이 항구에서 떠났어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "싸우스햄튼 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "싸우스햄튼 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bristol": {
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
          "title": "브리스톨",
          "sub": "Bristol · South West",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "South West · United Kingdom"
        }
      },
      "boardTitle": "브리스톨 한글학교",
      "boardLine": "",
      "welcome": "브리스톨 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 브리스톨 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "브리스톨",
          "sub": "Bristol · 잉글랜드 남서부",
          "text": "브리스톨은 잉글랜드 남서쪽의 큰 도시예요. 깊은 골짜기 위에 클리프턴 현수교가 걸려 있어요.\n\n여름에는 열기구 축제가 열려 하늘이 알록달록해져요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "브리스톨 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "브리스톨 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "exeter": {
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
          "title": "엑시터",
          "sub": "Exeter · South West",
          "kind": "cathedral",
          "color": "#2B2B2F",
          "foot": "South West · United Kingdom"
        }
      },
      "boardTitle": "엑시터 한글학교",
      "boardLine": "",
      "welcome": "엑시터 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 엑시터 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "엑시터",
          "sub": "Exeter · 잉글랜드 남서부",
          "text": "엑시터는 잉글랜드 남서쪽 데번 지방의 중심 도시예요. 도시 한가운데 오래된 큰 성당이 있어요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "엑시터 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "엑시터 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "bridgend": {
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
          "title": "브리젠드",
          "sub": "Bridgend · Wales",
          "kind": "bridge",
          "color": "#5A7A6A",
          "foot": "Wales · United Kingdom"
        }
      },
      "boardTitle": "브리젠드 한글학교",
      "boardLine": "",
      "welcome": "브리젠드 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 브리젠드 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "브리젠드",
          "sub": "Bridgend · 웨일스",
          "text": "브리젠드는 웨일스 남쪽, 카디프와 스완지 사이에 있는 도시예요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "브리젠드 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "브리젠드 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "cardiff": {
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
          "kind": "sea",
          "sky": [
            "#9ED8F0",
            "#EEF8FB"
          ],
          "far": "#B8D8E8",
          "near": "#E8D9B0",
          "water": "#6FB7D6",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "카디프",
          "sub": "Cardiff · Wales",
          "kind": "castle",
          "color": "#5A6A8A",
          "foot": "Wales · United Kingdom"
        }
      },
      "boardTitle": "카디프 한글학교",
      "boardLine": "",
      "welcome": "카디프 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 카디프 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "카디프",
          "sub": "Cardiff · 웨일스",
          "text": "카디프는 웨일스의 수도예요. 도시 한가운데 카디프 성이 있어요.\n\n큰 경기장에서 럭비 경기가 자주 열려요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "카디프 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "카디프 소개 영상",
          "video": "",
          "sample": true
        }
      }
    },
    "swansea": {
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
          "kind": "sea",
          "sky": [
            "#9ED8F0",
            "#EEF8FB"
          ],
          "far": "#B8D8E8",
          "near": "#E8D9B0",
          "water": "#6FB7D6",
          "accent": "#FFFFFF"
        },
        "poster": {
          "title": "스완지",
          "sub": "Swansea · Wales",
          "kind": "lighthouse",
          "color": "#3E6B8F",
          "foot": "Wales · United Kingdom"
        }
      },
      "boardTitle": "스완지 한글학교",
      "boardLine": "",
      "welcome": "스완지 한글학교 교실이에요. 교장 선생님께 다가가 보세요.",
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
          "안녕하세요! 스완지 한글학교에 온 것을 환영해요.",
          "저는 이 학교 교장 선생님이에요. 우리 학교 퀴즈를 내 볼게요. 맞혀 보세요!"
        ]
      },
      "items": {
        "bbs": {
          "url": "https://padlet.com/humanteacher89/padlet-s024s1j4y7p2v3kic1bo"
        },
        "book": {
          "title": "스완지",
          "sub": "Swansea · 웨일스",
          "text": "스완지는 웨일스 남쪽 바닷가에 있는 도시예요. 가까운 고어 반도에는 아름다운 바닷가가 많아요.\n\n(이 글은 보기 글이에요. 학교가 관리자 페이지에서 소개 글로 바꿉니다.)",
          "sample": true
        },
        "album": {
          "title": "스완지 한글학교 사진첩",
          "photos": [],
          "captions": [
            "수업 시간",
            "한글날 행사",
            "운동회",
            "졸업식"
          ]
        },
        "tv": {
          "title": "스완지 소개 영상",
          "video": "",
          "sample": true
        }
      }
    }
  }
};
