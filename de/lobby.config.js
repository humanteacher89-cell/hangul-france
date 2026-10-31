// 독일 한글학교 로비 설정 — 자동 생성(유럽로비\tools\make_country_config.py, 2026-10-31 유럽 한글학교 메타버스 A안). 손으로 고치지 말고 도구·학교 목록 JSON을 고친다.
// 짜임은 프랑스 로비 설정(../lobby.config.js)과 같다. [예시]·[확인 전] 글은 학교가 관리자 페이지(../admin/?map=de)에서 바꾼다.
// 학교 목록: 유럽로비\자료\de-schools.json (출처·확인 상태는 유럽로비\자료\독일-한글학교-목록-*.md). 교장·교사 개인 이름은 넣지 않는다.
window.LOBBY_CONFIG = {
  version: 'v0.3-de',
  contentMap: 'de',          // 관리자 내용 영역(서버 map)
  flag: 'de', countryFoot: 'Deutschland',
  europeUrl: '../eu/',
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
        "size": 8
      }
    },
    "02": {
      "ko": "함부르크",
      "local": "Hamburg",
      "color": "#F2B3C4",
      "label": {
        "size": 4.2
      }
    },
    "03": {
      "ko": "니더작센",
      "local": "Niedersachsen",
      "color": "#F5DD8C"
    },
    "04": {
      "ko": "브레멘",
      "local": "Bremen",
      "color": "#EBA7A1",
      "label": {
        "size": 3.6
      }
    },
    "05": {
      "ko": "노르트라인베스트팔렌",
      "local": "Nordrhein-Westfalen",
      "color": "#F7BE8F"
    },
    "06": {
      "ko": "헤센",
      "local": "Hessen",
      "color": "#EBA7A1",
      "label": {
        "size": 8
      }
    },
    "07": {
      "ko": "라인란트팔츠",
      "local": "Rheinland-Pfalz",
      "color": "#B9D7A6",
      "label": {
        "size": 8
      }
    },
    "08": {
      "ko": "바덴뷔르템베르크",
      "local": "Baden-Württemberg",
      "color": "#E8D3A6"
    },
    "09": {
      "ko": "바이에른",
      "local": "Bayern",
      "color": "#BFD8EE"
    },
    "10": {
      "ko": "자를란트",
      "local": "Saarland",
      "color": "#F2B3C4",
      "label": {
        "size": 4.2
      }
    },
    "11": {
      "ko": "베를린",
      "local": "Berlin",
      "color": "#F4B49C",
      "label": {
        "size": 4.4
      }
    },
    "12": {
      "ko": "브란덴부르크",
      "local": "Brandenburg",
      "color": "#C6E39C"
    },
    "13": {
      "ko": "메클렌부르크포어포메른",
      "local": "Mecklenburg-Vorpommern",
      "color": "#BFD8EE"
    },
    "14": {
      "ko": "작센",
      "local": "Sachsen",
      "color": "#F9CF85"
    },
    "15": {
      "ko": "작센안할트",
      "local": "Sachsen-Anhalt",
      "color": "#C9B8EA",
      "label": {
        "size": 9
      }
    },
    "16": {
      "ko": "튀링겐",
      "local": "Thüringen",
      "color": "#A8D99A",
      "label": {
        "size": 8
      }
    }
  },
  regionOrder: ["01", "13", "02", "04", "03", "11", "12", "15", "05", "14", "16", "06", "07", "10", "09", "08"],
  plaza: {"lon": 9.55, "lat": 51.25},
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
      "count": 24,
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
      "count": 12,
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
      "count": 8,
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
      "count": 6,
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
      "count": 7,
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
  trees: { count: 240, colors: ['#7FBF6A', '#6FB15E', '#8CCB76', '#5FA35A', '#94C77E'] },
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
  // 한글학교 0곳 [확인 전 — 휴먼쌤 확정 전 조사본]
  schools: [],
  // 학교별 교실 [예시] — 글·사진·영상은 학교가 관리자 페이지에서 바꾼다
  rooms: {}
};
