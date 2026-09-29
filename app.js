const Words = [
  {  "id": 1, "level": "middle_1", "word": "the", "meaning": "その", "options": ["少年","その","この前の","死ぬ"],"status": "unlearned"},
  {
    "id": 2,
    "level": "middle_1",
    "word": "be",
    "meaning": "である、になる",
    "options": [
      "である、になる",
      "本当に、実際に",
      "を置いていく",
      "を通り抜けて"
    ],
    "status": "unlearned"
  },
  {
    "id": 3,
    "level": "middle_1",
    "word": "and",
    "meaning": "それと",
    "options": [
      "それと",
      "番号",
      "気に懸ける",
      "人"
    ],
    "status": "unlearned"
  },
  {
    "id": 4,
    "level": "middle_1",
    "word": "are",
    "meaning": "です、ます",
    "options": [
      "最後の",
      "身体",
      "皿",
      "です、ます"
    ],
    "status": "unlearned"
  },
  {
    "id": 5,
    "level": "middle_1",
    "word": "in",
    "meaning": "の中に",
    "options": [
      "5月",
      "〜さえ",
      "の中に",
      "〜以来"
    ],
    "status": "unlearned"
  },
  {
    "id": 6,
    "level": "middle_1",
    "word": "to",
    "meaning": "の方へ",
    "options": [
      "数学",
      "軽い・光",
      "の方へ",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 7,
    "level": "middle_1",
    "word": "have",
    "meaning": "を持っている",
    "options": [
      "番号",
      "を持っている",
      "死",
      "もまた"
    ],
    "status": "unlearned"
  },
  {
    "id": 8,
    "level": "middle_1",
    "word": "is",
    "meaning": "です、ます",
    "options": [
      "どちらの",
      "ちがい",
      "秒",
      "です、ます"
    ],
    "status": "unlearned"
  },
  {
    "id": 9,
    "level": "middle_1",
    "word": "it",
    "meaning": "それは",
    "options": [
      "死",
      "ある、いる",
      "それは",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 10,
    "level": "middle_1",
    "word": "I",
    "meaning": "私は、私が",
    "options": [
      "を説明する",
      "手伝う",
      "私は、私が",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 11,
    "level": "middle_1",
    "word": "that",
    "meaning": "あの",
    "options": [
      "地下鉄",
      "あの",
      "今まで、かつて",
      "簡単な"
    ],
    "status": "unlearned"
  },
  {
    "id": 12,
    "level": "middle_1",
    "word": "for",
    "meaning": "として・〜のために",
    "options": [
      "として・〜のために",
      "意味する",
      "〜さえ",
      "を与える、渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 13,
    "level": "middle_1",
    "word": "he",
    "meaning": "彼は",
    "options": [
      "事実、現実",
      "外に",
      "彼は",
      "続く"
    ],
    "status": "unlearned"
  },
  {
    "id": 14,
    "level": "middle_1",
    "word": "on",
    "meaning": "の上に",
    "options": [
      "彼女は",
      "の上に",
      "運転する",
      "年"
    ],
    "status": "unlearned"
  },
  {
    "id": 15,
    "level": "middle_1",
    "word": "do",
    "meaning": "をする、行う",
    "options": [
      "問題",
      "をする、行う",
      "この前の",
      "長い"
    ],
    "status": "unlearned"
  },
  {
    "id": 16,
    "level": "middle_1",
    "word": "say",
    "meaning": "を言う",
    "options": [
      "するとき",
      "しばらくの間",
      "を言う",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 17,
    "level": "middle_1",
    "word": "this",
    "meaning": "この",
    "options": [
      "母",
      "この",
      "可能な",
      "3"
    ],
    "status": "unlearned"
  },
  {
    "id": 18,
    "level": "middle_1",
    "word": "they",
    "meaning": "彼らは",
    "options": [
      "店",
      "彼らは",
      "母",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 19,
    "level": "middle_1",
    "word": "at",
    "meaning": "【場所】に、で",
    "options": [
      "です、ます",
      "自転車",
      "【場所】に、で",
      "費やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 20,
    "level": "middle_1",
    "word": "but",
    "meaning": "しかし、けれども",
    "options": [
      "戦争",
      "開発",
      "しかし、けれども",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 21,
    "level": "middle_1",
    "word": "his",
    "meaning": "彼の",
    "options": [
      "場所",
      "彼の",
      "値段",
      "帽子"
    ],
    "status": "unlearned"
  },
  {
    "id": 22,
    "level": "middle_1",
    "word": "from",
    "meaning": "【時間・場所】から",
    "options": [
      "学校",
      "まで、までは",
      "【時間・場所】から",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 23,
    "level": "middle_1",
    "word": "not",
    "meaning": "でない",
    "options": [
      "でない",
      "市、都会",
      "を動かす",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 24,
    "level": "middle_1",
    "word": "by",
    "meaning": "【手段・方法・原因】によって",
    "options": [
      "帰る、戻る",
      "仕事",
      "【手段・方法・原因】によって",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 25,
    "level": "middle_1",
    "word": "she",
    "meaning": "彼女は",
    "options": [
      "を動かす",
      "であるけれど",
      "彼女は",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 26,
    "level": "middle_1",
    "word": "as",
    "meaning": "として",
    "options": [
      "考える",
      "〜と一緒に",
      "として",
      "を開ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 27,
    "level": "middle_1",
    "word": "go",
    "meaning": "行く",
    "options": [
      "行く",
      "であるけれど",
      "あれらの",
      "の中に"
    ],
    "status": "unlearned"
  },
  {
    "id": 28,
    "level": "middle_1",
    "word": "their",
    "meaning": "彼らの",
    "options": [
      "を計画する",
      "彼らの",
      "ノート",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 29,
    "level": "middle_1",
    "word": "can",
    "meaning": "〜することができる",
    "options": [
      "〜することができる",
      "を見せる",
      "まだ",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 30,
    "level": "middle_1",
    "word": "get",
    "meaning": "を得る",
    "options": [
      "を得る",
      "それと",
      "祭り",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 31,
    "level": "middle_1",
    "word": "all",
    "meaning": "全部、全員、全て",
    "options": [
      "店",
      "父",
      "全部、全員、全て",
      "と感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 32,
    "level": "middle_1",
    "word": "my",
    "meaning": "私の",
    "options": [
      "望む",
      "私の",
      "目",
      "行事"
    ],
    "status": "unlearned"
  },
  {
    "id": 33,
    "level": "middle_1",
    "word": "make",
    "meaning": "を作る",
    "options": [
      "を試す",
      "曲がる",
      "精神",
      "を作る"
    ],
    "status": "unlearned"
  },
  {
    "id": 34,
    "level": "middle_1",
    "word": "about",
    "meaning": "について、に関する",
    "options": [
      "宿題",
      "について、に関する",
      "来る",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 35,
    "level": "middle_1",
    "word": "know",
    "meaning": "を知っている",
    "options": [
      "そして",
      "を知っている",
      "戦争",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 36,
    "level": "middle_1",
    "word": "up",
    "meaning": "上へ",
    "options": [
      "上へ",
      "劇",
      "道路",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 37,
    "level": "middle_1",
    "word": "one",
    "meaning": "1",
    "options": [
      "1",
      "落ちる、降る",
      "する前に",
      "〜のあとに"
    ],
    "status": "unlearned"
  },
  {
    "id": 38,
    "level": "middle_1",
    "word": "time",
    "meaning": "時間",
    "options": [
      "赤",
      "今日",
      "時間",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 39,
    "level": "middle_1",
    "word": "there",
    "meaning": "そこに",
    "options": [
      "を撮る・取る",
      "まだ",
      "し続ける",
      "そこに"
    ],
    "status": "unlearned"
  },
  {
    "id": 40,
    "level": "middle_1",
    "word": "so",
    "meaning": "とても",
    "options": [
      "できた",
      "彼は",
      "とても",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 41,
    "level": "middle_1",
    "word": "think",
    "meaning": "考える",
    "options": [
      "重要な",
      "外に",
      "を必要とする",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 42,
    "level": "middle_1",
    "word": "them",
    "meaning": "彼らを",
    "options": [
      "社会",
      "夏",
      "彼らを",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 43,
    "level": "middle_1",
    "word": "some",
    "meaning": "いくつかの",
    "options": [
      "よりもっと",
      "全部、全員、全て",
      "いくつかの",
      "によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 44,
    "level": "middle_1",
    "word": "me",
    "meaning": "私に",
    "options": [
      "若い",
      "できた",
      "私に",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 45,
    "level": "middle_1",
    "word": "people",
    "meaning": "人々",
    "options": [
      "戦争",
      "人々",
      "【手段・方法・原因】によって",
      "〜さえ"
    ],
    "status": "unlearned"
  },
  {
    "id": 46,
    "level": "middle_1",
    "word": "take",
    "meaning": "を撮る・取る",
    "options": [
      "加える",
      "向こうへ",
      "を撮る・取る",
      "はじめて"
    ],
    "status": "unlearned"
  },
  {
    "id": 47,
    "level": "middle_1",
    "word": "out",
    "meaning": "外に",
    "options": [
      "彼らの",
      "を想像する",
      "決定",
      "外に"
    ],
    "status": "unlearned"
  },
  {
    "id": 48,
    "level": "middle_1",
    "word": "just",
    "meaning": "ちょうど、方向に",
    "options": [
      "ちょうど、方向に",
      "死",
      "を試す",
      "落ちる、降る"
    ],
    "status": "unlearned"
  },
  {
    "id": 49,
    "level": "middle_1",
    "word": "see",
    "meaning": "を見る",
    "options": [
      "取る",
      "意味する",
      "早く",
      "を見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 50,
    "level": "middle_1",
    "word": "him",
    "meaning": "彼を",
    "options": [
      "彼を",
      "を開ける",
      "数学",
      "できた"
    ],
    "status": "unlearned"
  },
  {
    "id": 51,
    "level": "middle_1",
    "word": "come",
    "meaning": "来る",
    "options": [
      "来る",
      "母",
      "と感じる",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 52,
    "level": "middle_1",
    "word": "could",
    "meaning": "できた",
    "options": [
      "できた",
      "彼自身を",
      "を好む",
      "彼らは"
    ],
    "status": "unlearned"
  },
  {
    "id": 53,
    "level": "middle_1",
    "word": "like",
    "meaning": "を好む",
    "options": [
      "より良い",
      "を好む",
      "行事",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 54,
    "level": "middle_1",
    "word": "other",
    "meaning": "他の",
    "options": [
      "他の",
      "3",
      "たった今",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 55,
    "level": "middle_1",
    "word": "how",
    "meaning": "どんな・どのように",
    "options": [
      "どんな・どのように",
      "住む",
      "地下鉄",
      "ちょうど、方向に"
    ],
    "status": "unlearned"
  },
  {
    "id": 56,
    "level": "middle_1",
    "word": "its",
    "meaning": "それの、その",
    "options": [
      "を研究する",
      "科学技術",
      "それの、その",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 57,
    "level": "middle_1",
    "word": "our",
    "meaning": "私たちの",
    "options": [
      "を支援する",
      "私たちの",
      "続く",
      "社会"
    ],
    "status": "unlearned"
  },
  {
    "id": 58,
    "level": "middle_1",
    "word": "and",
    "meaning": "そして",
    "options": [
      "報告",
      "日、1日",
      "なぜなら",
      "そして"
    ],
    "status": "unlearned"
  },
  {
    "id": 59,
    "level": "middle_1",
    "word": "two",
    "meaning": "2",
    "options": [
      "2",
      "まだ",
      "報告",
      "し続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 60,
    "level": "middle_1",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "これらの",
      "それは",
      "行事",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 61,
    "level": "middle_1",
    "word": "want",
    "meaning": "欲しい",
    "options": [
      "市場",
      "とても",
      "欲しい",
      "手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 62,
    "level": "middle_1",
    "word": "look",
    "meaning": "見る",
    "options": [
      "私の",
      "彼を",
      "見る",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 63,
    "level": "middle_1",
    "word": "first",
    "meaning": "1番め、最初",
    "options": [
      "あれらの",
      "1番め、最初",
      "上へ",
      "を支援する"
    ],
    "status": "unlearned"
  },
  {
    "id": 64,
    "level": "middle_1",
    "word": "also",
    "meaning": "もまた",
    "options": [
      "家族",
      "もまた",
      "を決める",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 65,
    "level": "middle_1",
    "word": "new",
    "meaning": "新しい",
    "options": [
      "警察",
      "1番め、最初",
      "新しい",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 66,
    "level": "middle_1",
    "word": "day",
    "meaning": "日、1日",
    "options": [
      "日、1日",
      "彼の",
      "を得る",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 67,
    "level": "middle_1",
    "word": "use",
    "meaning": "使う",
    "options": [
      "どちらの",
      "使う",
      "かばん",
      "日本"
    ],
    "status": "unlearned"
  },
  {
    "id": 68,
    "level": "middle_1",
    "word": "man",
    "meaning": "男性、男の人",
    "options": [
      "説明する",
      "あれらの",
      "を見せる",
      "男性、男の人"
    ],
    "status": "unlearned"
  },
  {
    "id": 69,
    "level": "middle_1",
    "word": "here",
    "meaning": "ここに",
    "options": [
      "なぜなら",
      "ここに",
      "少年",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 70,
    "level": "middle_1",
    "word": "thing",
    "meaning": "もの、こと",
    "options": [
      "図書館",
      "市場",
      "もの、こと",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 71,
    "level": "middle_1",
    "word": "give",
    "meaning": "を与える、渡す",
    "options": [
      "を与える、渡す",
      "川",
      "花",
      "そうしなければ"
    ],
    "status": "unlearned"
  },
  {
    "id": 72,
    "level": "middle_1",
    "word": "many",
    "meaning": "たくさんの",
    "options": [
      "たくさんの",
      "信じる",
      "を動かす",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 73,
    "level": "middle_1",
    "word": "at",
    "meaning": "【時刻】に",
    "options": [
      "かわいい",
      "外に",
      "どれもない",
      "【時刻】に"
    ],
    "status": "unlearned"
  },
  {
    "id": 74,
    "level": "middle_1",
    "word": "only",
    "meaning": "〜だけ",
    "options": [
      "全部、全員、全て",
      "を知っている",
      "〜だけ",
      "実は、本当は"
    ],
    "status": "unlearned"
  },
  {
    "id": 75,
    "level": "middle_1",
    "word": "those",
    "meaning": "あれらの",
    "options": [
      "本当に、実際に",
      "大学",
      "生きる",
      "あれらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 76,
    "level": "middle_1",
    "word": "tell",
    "meaning": "に話す",
    "options": [
      "戻って、返して",
      "に話す",
      "決してない",
      "曲がる"
    ],
    "status": "unlearned"
  },
  {
    "id": 77,
    "level": "middle_1",
    "word": "very",
    "meaning": "非常に",
    "options": [
      "他の",
      "物語",
      "そのとき",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 78,
    "level": "middle_1",
    "word": "back",
    "meaning": "戻って、返して",
    "options": [
      "戻って、返して",
      "名前",
      "政府",
      "置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 79,
    "level": "middle_1",
    "word": "good",
    "meaning": "良い",
    "options": [
      "良い",
      "人生",
      "動く、引っ越す",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 80,
    "level": "middle_1",
    "word": "life",
    "meaning": "生活、人生",
    "options": [
      "腕",
      "生活、人生",
      "おおいに、たいへん",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 81,
    "level": "middle_1",
    "word": "child",
    "meaning": "子供",
    "options": [
      "大学",
      "子供",
      "非常に",
      "それの、その"
    ],
    "status": "unlearned"
  },
  {
    "id": 82,
    "level": "middle_1",
    "word": "work",
    "meaning": "仕事・働く",
    "options": [
      "仕事・働く",
      "仕事",
      "考える",
      "参加する"
    ],
    "status": "unlearned"
  },
  {
    "id": 83,
    "level": "middle_1",
    "word": "down",
    "meaning": "下に",
    "options": [
      "下に",
      "を創造する",
      "心",
      "できた"
    ],
    "status": "unlearned"
  },
  {
    "id": 84,
    "level": "middle_1",
    "word": "May",
    "meaning": "5月",
    "options": [
      "私は、私が",
      "だけれども",
      "5月",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 85,
    "level": "middle_1",
    "word": "after",
    "meaning": "〜のあとに",
    "options": [
      "〜するつもり",
      "行事",
      "〜のあとに",
      "動く、引っ越す"
    ],
    "status": "unlearned"
  },
  {
    "id": 86,
    "level": "middle_1",
    "word": "over",
    "meaning": "向こうへ",
    "options": [
      "の中に",
      "終わる",
      "向こうへ",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 87,
    "level": "middle_1",
    "word": "school",
    "meaning": "学校",
    "options": [
      "3",
      "を聞く",
      "学校",
      "異なる"
    ],
    "status": "unlearned"
  },
  {
    "id": 88,
    "level": "middle_1",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "ちょうど、方向に",
      "歌",
      "〜するつもり",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 89,
    "level": "middle_1",
    "word": "try",
    "meaning": "を試す",
    "options": [
      "たった今",
      "を見る",
      "家",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 90,
    "level": "middle_1",
    "word": "last",
    "meaning": "この前の",
    "options": [
      "家",
      "早く",
      "事実、現実",
      "この前の"
    ],
    "status": "unlearned"
  },
  {
    "id": 91,
    "level": "middle_1",
    "word": "need",
    "meaning": "を必要とする",
    "options": [
      "有名な",
      "を必要とする",
      "理解する",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 92,
    "level": "middle_1",
    "word": "too",
    "meaning": "もまた",
    "options": [
      "もまた",
      "日曜日",
      "たのむ",
      "置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 93,
    "level": "middle_1",
    "word": "feel",
    "meaning": "と感じる",
    "options": [
      "今日",
      "と感じる",
      "早く",
      "〜することができる"
    ],
    "status": "unlearned"
  },
  {
    "id": 94,
    "level": "middle_1",
    "word": "three",
    "meaning": "3",
    "options": [
      "3",
      "そして",
      "切る",
      "方法"
    ],
    "status": "unlearned"
  },
  {
    "id": 95,
    "level": "middle_1",
    "word": "become",
    "meaning": "になる",
    "options": [
      "になる",
      "人々",
      "それは",
      "だろうに"
    ],
    "status": "unlearned"
  },
  {
    "id": 96,
    "level": "middle_1",
    "word": "really",
    "meaning": "本当に、実際に",
    "options": [
      "これらの",
      "を説明する",
      "滞在する",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 97,
    "level": "middle_1",
    "word": "something",
    "meaning": "なにか",
    "options": [
      "夏",
      "を言う",
      "なにか",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 98,
    "level": "middle_1",
    "word": "another",
    "meaning": "ほかの、別の",
    "options": [
      "を買う",
      "だけれども",
      "少女",
      "ほかの、別の"
    ],
    "status": "unlearned"
  },
  {
    "id": 99,
    "level": "middle_1",
    "word": "much",
    "meaning": "おおいに、たいへん",
    "options": [
      "待つ",
      "古い",
      "おおいに、たいへん",
      "未来"
    ],
    "status": "unlearned"
  },
  {
    "id": 100,
    "level": "middle_1",
    "word": "family",
    "meaning": "家族",
    "options": [
      "学校",
      "を経験する",
      "を手伝う",
      "家族"
    ],
    "status": "unlearned"
  },
  {
    "id": 101,
    "level": "middle_1",
    "word": "leave",
    "meaning": "去る",
    "options": [
      "人々",
      "決してない",
      "興味",
      "去る"
    ],
    "status": "unlearned"
  },
  {
    "id": 102,
    "level": "middle_1",
    "word": "put",
    "meaning": "を置く",
    "options": [
      "説明する",
      "を計画する",
      "かばん",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 103,
    "level": "middle_1",
    "word": "old",
    "meaning": "古い",
    "options": [
      "古い",
      "多分",
      "家族",
      "あの"
    ],
    "status": "unlearned"
  },
  {
    "id": 104,
    "level": "middle_1",
    "word": "student",
    "meaning": "生徒",
    "options": [
      "先生",
      "向こうへ",
      "生徒",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 105,
    "level": "middle_1",
    "word": "big",
    "meaning": "大きい",
    "options": [
      "大きい",
      "劇",
      "異なる",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 106,
    "level": "middle_1",
    "word": "country",
    "meaning": "国",
    "options": [
      "〜で",
      "状況",
      "国",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 107,
    "level": "middle_1",
    "word": "help",
    "meaning": "を手伝う",
    "options": [
      "〜するとき",
      "状況",
      "時間",
      "を手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 108,
    "level": "middle_1",
    "word": "where",
    "meaning": "どこ",
    "options": [
      "問題",
      "〜の様に見える",
      "を変える",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 109,
    "level": "middle_1",
    "word": "turn",
    "meaning": "曲がる",
    "options": [
      "を発見する",
      "終わる",
      "を運ぶ",
      "曲がる"
    ],
    "status": "unlearned"
  },
  {
    "id": 110,
    "level": "middle_1",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "問題、困ったこと",
      "しかし",
      "少女",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 111,
    "level": "middle_1",
    "word": "hand",
    "meaning": "手",
    "options": [
      "について、に関する",
      "を運ぶ",
      "を研究する",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 112,
    "level": "middle_1",
    "word": "place",
    "meaning": "場所",
    "options": [
      "花",
      "場所",
      "帰る、戻る",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 113,
    "level": "middle_1",
    "word": "small",
    "meaning": "小さい",
    "options": [
      "を置く",
      "自動車",
      "小さい",
      "費やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 114,
    "level": "middle_1",
    "word": "number",
    "meaning": "数、数字",
    "options": [
      "数、数字",
      "行く",
      "はじめて",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 115,
    "level": "middle_1",
    "word": "always",
    "meaning": "いつも",
    "options": [
      "を聞く",
      "を受け取る",
      "人間の",
      "いつも"
    ],
    "status": "unlearned"
  },
  {
    "id": 116,
    "level": "middle_1",
    "word": "night",
    "meaning": "夜",
    "options": [
      "なにか",
      "地下鉄",
      "下に",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 117,
    "level": "middle_1",
    "word": "live",
    "meaning": "住む",
    "options": [
      "木",
      "住む",
      "を増やす",
      "に直面する"
    ],
    "status": "unlearned"
  },
  {
    "id": 118,
    "level": "middle_1",
    "word": "today",
    "meaning": "今日",
    "options": [
      "今日",
      "の方へ",
      "学校",
      "人"
    ],
    "status": "unlearned"
  },
  {
    "id": 119,
    "level": "middle_1",
    "word": "before",
    "meaning": "の前に",
    "options": [
      "ここに",
      "の前に",
      "一生懸命に",
      "良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 120,
    "level": "middle_1",
    "word": "large",
    "meaning": "大きい",
    "options": [
      "人、個人",
      "大きい",
      "有名な",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 121,
    "level": "middle_1",
    "word": "room",
    "meaning": "部屋",
    "options": [
      "夜",
      "部屋",
      "種類",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 122,
    "level": "middle_1",
    "word": "mother",
    "meaning": "母",
    "options": [
      "教室",
      "来る",
      "〜の様に見える",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 123,
    "level": "middle_1",
    "word": "money",
    "meaning": "お金",
    "options": [
      "覆う",
      "お金",
      "青い",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 124,
    "level": "middle_1",
    "word": "month",
    "meaning": "月",
    "options": [
      "1番め、最初",
      "月",
      "小さい",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 125,
    "level": "middle_1",
    "word": "different",
    "meaning": "色々な",
    "options": [
      "色々な",
      "【時刻】に",
      "参加する",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 126,
    "level": "middle_1",
    "word": "study",
    "meaning": "を勉強する",
    "options": [
      "重要な",
      "待つ",
      "緑",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 127,
    "level": "middle_1",
    "word": "book",
    "meaning": "本",
    "options": [
      "年",
      "どれもみな",
      "日本",
      "本"
    ],
    "status": "unlearned"
  },
  {
    "id": 128,
    "level": "middle_1",
    "word": "eye",
    "meaning": "目",
    "options": [
      "話す",
      "を買う",
      "目",
      "裏の、後ろの"
    ],
    "status": "unlearned"
  },
  {
    "id": 129,
    "level": "middle_1",
    "word": "job",
    "meaning": "仕事",
    "options": [
      "仕事",
      "色々な",
      "考える",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 130,
    "level": "middle_1",
    "word": "kind",
    "meaning": "親切な",
    "options": [
      "人生",
      "仕事・働く",
      "に影響を与える",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 131,
    "level": "middle_1",
    "word": "black",
    "meaning": "黒い",
    "options": [
      "を研究する",
      "たった今",
      "になった",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 132,
    "level": "middle_1",
    "word": "house",
    "meaning": "家",
    "options": [
      "を聞く",
      "文化",
      "家",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 133,
    "level": "middle_1",
    "word": "friend",
    "meaning": "友達",
    "options": [
      "を含む",
      "友達",
      "を守る、保護する",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 134,
    "level": "middle_1",
    "word": "father",
    "meaning": "父",
    "options": [
      "父",
      "手などを挙げる",
      "始まる",
      "米、ご飯"
    ],
    "status": "unlearned"
  },
  {
    "id": 135,
    "level": "middle_1",
    "word": "sit",
    "meaning": "座る",
    "options": [
      "の中に",
      "座る",
      "それと",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 136,
    "level": "middle_1",
    "word": "hour",
    "meaning": "1時間",
    "options": [
      "特徴、論点",
      "それと",
      "費やす",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 137,
    "level": "middle_1",
    "word": "bad",
    "meaning": "悪い",
    "options": [
      "をがまんする",
      "料理する",
      "悪い",
      "そのとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 138,
    "level": "middle_1",
    "word": "meet",
    "meaning": "と会う",
    "options": [
      "滞在",
      "と会う",
      "進路",
      "彼自身を"
    ],
    "status": "unlearned"
  },
  {
    "id": 139,
    "level": "middle_1",
    "word": "car",
    "meaning": "自動車",
    "options": [
      "外に",
      "自動車",
      "を保つ",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 140,
    "level": "middle_1",
    "word": "city",
    "meaning": "市、都会",
    "options": [
      "であるけれど",
      "劇",
      "市、都会",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 141,
    "level": "middle_1",
    "word": "name",
    "meaning": "名前",
    "options": [
      "名前",
      "にとって",
      "興味",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 142,
    "level": "middle_1",
    "word": "best",
    "meaning": "最も良い",
    "options": [
      "英語",
      "最も良い",
      "〜の",
      "かばん"
    ],
    "status": "unlearned"
  },
  {
    "id": 143,
    "level": "middle_1",
    "word": "idea",
    "meaning": "考え",
    "options": [
      "起こる",
      "を開ける",
      "考え",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 144,
    "level": "middle_1",
    "word": "body",
    "meaning": "身体",
    "options": [
      "駅",
      "身体",
      "する前に",
      "ここに"
    ],
    "status": "unlearned"
  },
  {
    "id": 145,
    "level": "middle_1",
    "word": "information",
    "meaning": "情報",
    "options": [
      "進路",
      "情報",
      "側、面",
      "簡単な"
    ],
    "status": "unlearned"
  },
  {
    "id": 146,
    "level": "middle_1",
    "word": "stop",
    "meaning": "止める",
    "options": [
      "を置いていく",
      "止める",
      "緑",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 147,
    "level": "middle_1",
    "word": "face",
    "meaning": "顔",
    "options": [
      "顔",
      "生活、人生",
      "軽い・光",
      "座る"
    ],
    "status": "unlearned"
  },
  {
    "id": 148,
    "level": "middle_1",
    "word": "speak",
    "meaning": "を話す",
    "options": [
      "果物",
      "〜と一緒に",
      "政府",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 149,
    "level": "middle_1",
    "word": "read",
    "meaning": "を読む",
    "options": [
      "〜のあとに",
      "考え",
      "を読む",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 150,
    "level": "middle_1",
    "word": "door",
    "meaning": "戸、ドア",
    "options": [
      "【時間・場所】から",
      "情報",
      "戸、ドア",
      "医者"
    ],
    "status": "unlearned"
  },
  {
    "id": 151,
    "level": "middle_1",
    "word": "sure",
    "meaning": "確信して",
    "options": [
      "始まる",
      "確信して",
      "2",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 152,
    "level": "middle_1",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "終わる",
      "6月",
      "を経験する",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 153,
    "level": "middle_1",
    "word": "open",
    "meaning": "を開ける",
    "options": [
      "を開ける",
      "になった",
      "に着く、到着する",
      "〜の"
    ],
    "status": "unlearned"
  },
  {
    "id": 154,
    "level": "middle_1",
    "word": "morning",
    "meaning": "朝",
    "options": [
      "朝",
      "地下鉄",
      "あれらの",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 155,
    "level": "middle_1",
    "word": "girl",
    "meaning": "少女",
    "options": [
      "少女",
      "植物",
      "青い",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 156,
    "level": "middle_1",
    "word": "early",
    "meaning": "早く",
    "options": [
      "ついに、やっと",
      "早く",
      "お金",
      "他の"
    ],
    "status": "unlearned"
  },
  {
    "id": 157,
    "level": "middle_1",
    "word": "food",
    "meaning": "食べ物",
    "options": [
      "時刻",
      "黒い",
      "壊れる、破る",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 158,
    "level": "middle_1",
    "word": "teacher",
    "meaning": "先生",
    "options": [
      "法律",
      "あれらの",
      "先生",
      "戻って、返して"
    ],
    "status": "unlearned"
  },
  {
    "id": 159,
    "level": "middle_1",
    "word": "boy",
    "meaning": "少年",
    "options": [
      "紙",
      "市場",
      "少年",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 160,
    "level": "middle_1",
    "word": "music",
    "meaning": "音楽",
    "options": [
      "もし〜ならば",
      "落ちる、降る",
      "音楽",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 161,
    "level": "middle_1",
    "word": "buy",
    "meaning": "を買う",
    "options": [
      "多分",
      "りんご",
      "を買う",
      "帰る、戻る"
    ],
    "status": "unlearned"
  },
  {
    "id": 162,
    "level": "middle_1",
    "word": "wait",
    "meaning": "待つ",
    "options": [
      "まだ",
      "問題、困ったこと",
      "悪い",
      "待つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 163,
    "level": "middle_1",
    "word": "market",
    "meaning": "市場",
    "options": [
      "晴れの",
      "友達",
      "市場",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 164,
    "level": "middle_1",
    "word": "season",
    "meaning": "季節",
    "options": [
      "季節",
      "親切な",
      "ほかの、別の",
      "私たちの"
    ],
    "status": "unlearned"
  },
  {
    "id": 165,
    "level": "middle_1",
    "word": "doctor",
    "meaning": "医者",
    "options": [
      "〜の様に見える",
      "を受け取る",
      "医者",
      "友達"
    ],
    "status": "unlearned"
  },
  {
    "id": 166,
    "level": "middle_1",
    "word": "movie",
    "meaning": "映画",
    "options": [
      "〜さえ",
      "を話す",
      "私に",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 167,
    "level": "middle_1",
    "word": "tree",
    "meaning": "木",
    "options": [
      "親切な",
      "に直面する",
      "他の",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 168,
    "level": "middle_1",
    "word": "red",
    "meaning": "赤",
    "options": [
      "続く",
      "赤",
      "かつて",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 169,
    "level": "middle_1",
    "word": "summer",
    "meaning": "夏",
    "options": [
      "を建てる",
      "夏",
      "〜することができる",
      "壊れる、破る"
    ],
    "status": "unlearned"
  },
  {
    "id": 170,
    "level": "middle_1",
    "word": "bed",
    "meaning": "ベッド",
    "options": [
      "猫",
      "ベッド",
      "下に",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 171,
    "level": "middle_1",
    "word": "sound",
    "meaning": "音",
    "options": [
      "欲しい",
      "【手段・方法・原因】によって",
      "環境",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 172,
    "level": "middle_1",
    "word": "station",
    "meaning": "駅",
    "options": [
      "手などを挙げる",
      "場所",
      "言葉",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 173,
    "level": "middle_1",
    "word": "blue",
    "meaning": "青い",
    "options": [
      "を得る",
      "を受け取る",
      "青い",
      "〜するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 174,
    "level": "middle_1",
    "word": "song",
    "meaning": "歌",
    "options": [
      "多分",
      "側、面",
      "静かな",
      "歌"
    ],
    "status": "unlearned"
  },
  {
    "id": 175,
    "level": "middle_1",
    "word": "science",
    "meaning": "科学",
    "options": [
      "科学",
      "〜のあとに",
      "全部、全員、全て",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 176,
    "level": "middle_1",
    "word": "green",
    "meaning": "緑",
    "options": [
      "映画",
      "として",
      "科学技術",
      "緑"
    ],
    "status": "unlearned"
  },
  {
    "id": 177,
    "level": "middle_1",
    "word": "beautiful",
    "meaning": "美しい",
    "options": [
      "〜と一緒に",
      "美しい",
      "すでに、もう",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 178,
    "level": "middle_1",
    "word": "bag",
    "meaning": "かばん",
    "options": [
      "悪い",
      "かばん",
      "最後の",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 179,
    "level": "middle_1",
    "word": "sing",
    "meaning": "を歌う",
    "options": [
      "必要な",
      "一生懸命に",
      "を歌う",
      "それは"
    ],
    "status": "unlearned"
  },
  {
    "id": 180,
    "level": "middle_1",
    "word": "park",
    "meaning": "公園",
    "options": [
      "開発",
      "公園",
      "仕事",
      "を持っている"
    ],
    "status": "unlearned"
  },
  {
    "id": 181,
    "level": "middle_1",
    "word": "drink",
    "meaning": "を飲む",
    "options": [
      "今まで、かつて",
      "を生産する",
      "を飲む",
      "2"
    ],
    "status": "unlearned"
  },
  {
    "id": 182,
    "level": "middle_1",
    "word": "mountain",
    "meaning": "山",
    "options": [
      "政府",
      "本",
      "山",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 183,
    "level": "middle_1",
    "word": "river",
    "meaning": "川",
    "options": [
      "を勉強する",
      "まだ",
      "若い",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 184,
    "level": "middle_1",
    "word": "shop",
    "meaning": "店",
    "options": [
      "精神",
      "欲しい",
      "にとって",
      "店"
    ],
    "status": "unlearned"
  },
  {
    "id": 185,
    "level": "middle_1",
    "word": "cook",
    "meaning": "料理する",
    "options": [
      "良い",
      "側、面",
      "月",
      "料理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 186,
    "level": "middle_1",
    "word": "quiet",
    "meaning": "静かな",
    "options": [
      "どちらの",
      "顔",
      "開発",
      "静かな"
    ],
    "status": "unlearned"
  },
  {
    "id": 187,
    "level": "middle_1",
    "word": "classroom",
    "meaning": "教室",
    "options": [
      "法律",
      "感じる",
      "教室",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 188,
    "level": "middle_1",
    "word": "famous",
    "meaning": "有名な",
    "options": [
      "有名な",
      "を好む",
      "ここに",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 189,
    "level": "middle_1",
    "word": "flower",
    "meaning": "花",
    "options": [
      "教える",
      "花",
      "必要な",
      "を失う"
    ],
    "status": "unlearned"
  },
  {
    "id": 190,
    "level": "middle_1",
    "word": "yesterday",
    "meaning": "昨日",
    "options": [
      "昨日",
      "数学",
      "夏",
      "を想像する"
    ],
    "status": "unlearned"
  },
  {
    "id": 191,
    "level": "middle_1",
    "word": "desk",
    "meaning": "机",
    "options": [
      "を導く",
      "よりもっと",
      "1",
      "机"
    ],
    "status": "unlearned"
  },
  {
    "id": 192,
    "level": "middle_1",
    "word": "fruit",
    "meaning": "果物",
    "options": [
      "彼らは",
      "理解する",
      "動く、引っ越す",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 193,
    "level": "middle_1",
    "word": "cat",
    "meaning": "猫",
    "options": [
      "同じもの",
      "図書館",
      "猫",
      "欲しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 194,
    "level": "middle_1",
    "word": "English",
    "meaning": "英語",
    "options": [
      "たくさんの",
      "親切な",
      "名前",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 195,
    "level": "middle_1",
    "word": "busy",
    "meaning": "忙しい",
    "options": [
      "決定",
      "忙しい",
      "を経験する",
      "異なる"
    ],
    "status": "unlearned"
  },
  {
    "id": 196,
    "level": "middle_1",
    "word": "dish",
    "meaning": "皿",
    "options": [
      "〜と〜の間",
      "皿",
      "置く",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 197,
    "level": "middle_1",
    "word": "hat",
    "meaning": "帽子",
    "options": [
      "を切る",
      "〜に〜をさせる",
      "それは",
      "帽子"
    ],
    "status": "unlearned"
  },
  {
    "id": 198,
    "level": "middle_1",
    "word": "library",
    "meaning": "図書館",
    "options": [
      "を買う",
      "を作る",
      "地下鉄",
      "図書館"
    ],
    "status": "unlearned"
  },
  {
    "id": 199,
    "level": "middle_1",
    "word": "bike",
    "meaning": "自転車",
    "options": [
      "見る",
      "しなければならない",
      "自転車",
      "成長する"
    ],
    "status": "unlearned"
  },
  {
    "id": 200,
    "level": "middle_1",
    "word": "rice",
    "meaning": "米、ご飯",
    "options": [
      "米、ご飯",
      "彼を",
      "持って来る",
      "【手段・方法・原因】によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 201,
    "level": "middle_1",
    "word": "swim",
    "meaning": "泳ぐ",
    "options": [
      "泳ぐ",
      "植物",
      "朝",
      "教室"
    ],
    "status": "unlearned"
  },
  {
    "id": 202,
    "level": "middle_1",
    "word": "math",
    "meaning": "数学",
    "options": [
      "〜以来",
      "でない",
      "この前の",
      "数学"
    ],
    "status": "unlearned"
  },
  {
    "id": 203,
    "level": "middle_1",
    "word": "apple",
    "meaning": "りんご",
    "options": [
      "必要な",
      "家",
      "りんご",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 204,
    "level": "middle_1",
    "word": "festival",
    "meaning": "祭り",
    "options": [
      "自由な",
      "良い",
      "祭り",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 205,
    "level": "middle_1",
    "word": "cute",
    "meaning": "かわいい",
    "options": [
      "を続ける",
      "側、面",
      "を開ける",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 206,
    "level": "middle_1",
    "word": "homework",
    "meaning": "宿題",
    "options": [
      "宿題",
      "1番め、最初",
      "種類",
      "【時間・場所】から"
    ],
    "status": "unlearned"
  },
  {
    "id": 207,
    "level": "middle_1",
    "word": "sunny",
    "meaning": "晴れの",
    "options": [
      "とても",
      "晴れの",
      "しばらくの間",
      "早く"
    ],
    "status": "unlearned"
  },
  {
    "id": 208,
    "level": "middle_1",
    "word": "subway",
    "meaning": "地下鉄",
    "options": [
      "年",
      "そのとき",
      "地下鉄",
      "歌"
    ],
    "status": "unlearned"
  },
  {
    "id": 209,
    "level": "middle_1",
    "word": "Japan",
    "meaning": "日本",
    "options": [
      "日本",
      "費やす",
      "もまた",
      "ノート"
    ],
    "status": "unlearned"
  },
  {
    "id": 210,
    "level": "middle_1",
    "word": "Sunday",
    "meaning": "日曜日",
    "options": [
      "どれもみな",
      "日曜日",
      "と書いてある",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 211,
    "level": "middle_1",
    "word": "June",
    "meaning": "6月",
    "options": [
      "6月",
      "状況",
      "を聞く",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 212,
    "level": "middle_1",
    "word": "notebook",
    "meaning": "ノート",
    "options": [
      "ノート",
      "まだ",
      "実現する",
      "をする、行う"
    ],
    "status": "unlearned"
  },
  {
    "id": 213,
    "level": "middle_1",
    "word": "leave",
    "meaning": "去る",
    "options": [
      "ベッド",
      "のまわりに",
      "去る",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 214,
    "level": "middle_1",
    "word": "put",
    "meaning": "を置く",
    "options": [
      "〜と一緒に",
      "帰る、戻る",
      "を置く",
      "だけれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 215,
    "level": "middle_1",
    "word": "old",
    "meaning": "古い",
    "options": [
      "教室",
      "〜だけ",
      "理解する",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 216,
    "level": "middle_1",
    "word": "student",
    "meaning": "生徒",
    "options": [
      "自転車",
      "生徒",
      "を生産する",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 217,
    "level": "middle_1",
    "word": "big",
    "meaning": "大きい",
    "options": [
      "古い",
      "である、になる",
      "大きい",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 218,
    "level": "middle_1",
    "word": "country",
    "meaning": "国",
    "options": [
      "説明する",
      "国",
      "商売",
      "たいていの"
    ],
    "status": "unlearned"
  },
  {
    "id": 219,
    "level": "middle_1",
    "word": "help",
    "meaning": "を手伝う",
    "options": [
      "死ぬ",
      "他の",
      "を手伝う",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 220,
    "level": "middle_1",
    "word": "where",
    "meaning": "どこ",
    "options": [
      "紙",
      "〜で",
      "年",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 221,
    "level": "middle_1",
    "word": "turn",
    "meaning": "曲がる",
    "options": [
      "曲がる",
      "上へ",
      "を増やす",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 222,
    "level": "middle_1",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "もう、すでに",
      "上へ",
      "問題",
      "家"
    ],
    "status": "unlearned"
  },
  {
    "id": 223,
    "level": "middle_1",
    "word": "hand",
    "meaning": "手",
    "options": [
      "古い",
      "最も良い",
      "商売",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 224,
    "level": "middle_1",
    "word": "place",
    "meaning": "場所",
    "options": [
      "2",
      "水",
      "に着く、到着する",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 225,
    "level": "middle_1",
    "word": "small",
    "meaning": "小さい",
    "options": [
      "小さい",
      "気に懸ける",
      "人生",
      "覆う"
    ],
    "status": "unlearned"
  },
  {
    "id": 226,
    "level": "middle_1",
    "word": "number",
    "meaning": "数、数字",
    "options": [
      "数、数字",
      "を知っている",
      "どれもみな",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 227,
    "level": "middle_1",
    "word": "always",
    "meaning": "いつも",
    "options": [
      "いつも",
      "信じる",
      "社会",
      "市場"
    ],
    "status": "unlearned"
  },
  {
    "id": 228,
    "level": "middle_1",
    "word": "night",
    "meaning": "夜",
    "options": [
      "未来",
      "待つ",
      "できた",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 229,
    "level": "middle_1",
    "word": "live",
    "meaning": "住む",
    "options": [
      "ついに、やっと",
      "この前の",
      "住む",
      "おおいに、たいへん"
    ],
    "status": "unlearned"
  },
  {
    "id": 230,
    "level": "middle_1",
    "word": "today",
    "meaning": "今日",
    "options": [
      "今日",
      "実現する",
      "健康",
      "ここに"
    ],
    "status": "unlearned"
  },
  {
    "id": 231,
    "level": "middle_1",
    "word": "before",
    "meaning": "の前に",
    "options": [
      "目",
      "私に",
      "の前に",
      "聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 232,
    "level": "middle_1",
    "word": "large",
    "meaning": "大きい",
    "options": [
      "仕事",
      "大きい",
      "戻って、返して",
      "本"
    ],
    "status": "unlearned"
  },
  {
    "id": 233,
    "level": "middle_1",
    "word": "room",
    "meaning": "部屋",
    "options": [
      "部屋",
      "を守る、保護する",
      "向こうへ",
      "下に"
    ],
    "status": "unlearned"
  },
  {
    "id": 234,
    "level": "middle_1",
    "word": "mother",
    "meaning": "母",
    "options": [
      "を撮る・取る",
      "母",
      "起こる",
      "【場所】に、で"
    ],
    "status": "unlearned"
  },
  {
    "id": 235,
    "level": "middle_1",
    "word": "money",
    "meaning": "お金",
    "options": [
      "あれらの",
      "歴史",
      "お金",
      "として"
    ],
    "status": "unlearned"
  },
  {
    "id": 236,
    "level": "middle_1",
    "word": "month",
    "meaning": "月",
    "options": [
      "月",
      "開発",
      "〜と一緒に",
      "教える"
    ],
    "status": "unlearned"
  },
  {
    "id": 237,
    "level": "middle_1",
    "word": "different",
    "meaning": "色々な",
    "options": [
      "芸術",
      "色々な",
      "場所",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 238,
    "level": "middle_1",
    "word": "study",
    "meaning": "を勉強する",
    "options": [
      "を勉強する",
      "子供",
      "どちらの",
      "によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 239,
    "level": "middle_1",
    "word": "book",
    "meaning": "本",
    "options": [
      "彼の",
      "〜で",
      "音楽",
      "本"
    ],
    "status": "unlearned"
  },
  {
    "id": 240,
    "level": "middle_1",
    "word": "eye",
    "meaning": "目",
    "options": [
      "を経験する",
      "特徴、論点",
      "目",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 241,
    "level": "middle_1",
    "word": "job",
    "meaning": "仕事",
    "options": [
      "運転する",
      "果物",
      "仕事",
      "を言う"
    ],
    "status": "unlearned"
  },
  {
    "id": 242,
    "level": "middle_1",
    "word": "kind",
    "meaning": "親切な",
    "options": [
      "科学",
      "親切な",
      "仕事",
      "彼自身を"
    ],
    "status": "unlearned"
  },
  {
    "id": 243,
    "level": "middle_1",
    "word": "black",
    "meaning": "黒い",
    "options": [
      "日曜日",
      "黒い",
      "を保つ",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 244,
    "level": "middle_1",
    "word": "house",
    "meaning": "家",
    "options": [
      "〜に〜をさせる",
      "名前",
      "意味する",
      "家"
    ],
    "status": "unlearned"
  },
  {
    "id": 245,
    "level": "middle_1",
    "word": "friend",
    "meaning": "友達",
    "options": [
      "友達",
      "秒",
      "2",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 246,
    "level": "middle_1",
    "word": "father",
    "meaning": "父",
    "options": [
      "父",
      "〜するつもり",
      "母",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 247,
    "level": "middle_1",
    "word": "sit",
    "meaning": "座る",
    "options": [
      "に影響を与える",
      "親切な",
      "座る",
      "戸、ドア"
    ],
    "status": "unlearned"
  },
  {
    "id": 248,
    "level": "middle_1",
    "word": "hour",
    "meaning": "1時間",
    "options": [
      "興味",
      "1時間",
      "もまた",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 249,
    "level": "middle_1",
    "word": "bad",
    "meaning": "悪い",
    "options": [
      "悪い",
      "この",
      "皿",
      "〜以来"
    ],
    "status": "unlearned"
  },
  {
    "id": 250,
    "level": "middle_1",
    "word": "meet",
    "meaning": "と会う",
    "options": [
      "と会う",
      "市、都会",
      "日、1日",
      "〜するつもり"
    ],
    "status": "unlearned"
  },
  {
    "id": 251,
    "level": "middle_1",
    "word": "car",
    "meaning": "自動車",
    "options": [
      "を創造する",
      "自動車",
      "外に",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 252,
    "level": "middle_1",
    "word": "city",
    "meaning": "市、都会",
    "options": [
      "木",
      "彼の",
      "市、都会",
      "自由な"
    ],
    "status": "unlearned"
  },
  {
    "id": 253,
    "level": "middle_1",
    "word": "name",
    "meaning": "名前",
    "options": [
      "人生",
      "〜と一緒に",
      "名前",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 254,
    "level": "middle_1",
    "word": "best",
    "meaning": "最も良い",
    "options": [
      "環境",
      "最も良い",
      "運転する",
      "日本"
    ],
    "status": "unlearned"
  },
  {
    "id": 255,
    "level": "middle_1",
    "word": "idea",
    "meaning": "考え",
    "options": [
      "問題、困ったこと",
      "考え",
      "を保つ",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 256,
    "level": "middle_1",
    "word": "body",
    "meaning": "身体",
    "options": [
      "を話す",
      "しなければならない",
      "と会う",
      "身体"
    ],
    "status": "unlearned"
  },
  {
    "id": 257,
    "level": "middle_1",
    "word": "information",
    "meaning": "情報",
    "options": [
      "を与える、渡す",
      "情報",
      "人",
      "新しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 258,
    "level": "middle_1",
    "word": "stop",
    "meaning": "止める",
    "options": [
      "止める",
      "最も",
      "行、線",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 259,
    "level": "middle_1",
    "word": "face",
    "meaning": "顔",
    "options": [
      "であるけれど",
      "を聞く",
      "顔",
      "来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 260,
    "level": "middle_1",
    "word": "speak",
    "meaning": "を話す",
    "options": [
      "学校",
      "を話す",
      "同じもの",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 261,
    "level": "middle_1",
    "word": "read",
    "meaning": "を読む",
    "options": [
      "家族",
      "理由",
      "を経験する",
      "を読む"
    ],
    "status": "unlearned"
  },
  {
    "id": 262,
    "level": "middle_1",
    "word": "door",
    "meaning": "戸、ドア",
    "options": [
      "戸、ドア",
      "を手渡す",
      "家族",
      "2"
    ],
    "status": "unlearned"
  },
  {
    "id": 263,
    "level": "middle_1",
    "word": "sure",
    "meaning": "確信して",
    "options": [
      "数、数字",
      "生徒",
      "教室",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 264,
    "level": "middle_1",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "そのとき",
      "自転車",
      "歴史",
      "だろうに"
    ],
    "status": "unlearned"
  },
  {
    "id": 265,
    "level": "middle_1",
    "word": "open",
    "meaning": "を開ける",
    "options": [
      "家",
      "使う",
      "を開ける",
      "男性、男の人"
    ],
    "status": "unlearned"
  },
  {
    "id": 266,
    "level": "middle_1",
    "word": "morning",
    "meaning": "朝",
    "options": [
      "を聞く",
      "多くの",
      "と会う",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 267,
    "level": "middle_1",
    "word": "girl",
    "meaning": "少女",
    "options": [
      "歴史",
      "少女",
      "問題",
      "着る"
    ],
    "status": "unlearned"
  },
  {
    "id": 268,
    "level": "middle_1",
    "word": "early",
    "meaning": "早く",
    "options": [
      "新しい",
      "早く",
      "帽子",
      "もし〜ならば"
    ],
    "status": "unlearned"
  },
  {
    "id": 269,
    "level": "middle_1",
    "word": "food",
    "meaning": "食べ物",
    "options": [
      "です、ます",
      "あの",
      "科学技術",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 270,
    "level": "middle_1",
    "word": "teacher",
    "meaning": "先生",
    "options": [
      "先生",
      "この前の",
      "特徴、論点",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 271,
    "level": "middle_1",
    "word": "boy",
    "meaning": "少年",
    "options": [
      "を飲む",
      "を聞く",
      "を作る",
      "少年"
    ],
    "status": "unlearned"
  },
  {
    "id": 272,
    "level": "middle_1",
    "word": "music",
    "meaning": "音楽",
    "options": [
      "することがあり得る",
      "考える",
      "音楽",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 273,
    "level": "middle_1",
    "word": "buy",
    "meaning": "を買う",
    "options": [
      "を買う",
      "音",
      "3",
      "道路"
    ],
    "status": "unlearned"
  },
  {
    "id": 274,
    "level": "middle_1",
    "word": "wait",
    "meaning": "待つ",
    "options": [
      "について、に関する",
      "待つ",
      "興味",
      "そのとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 275,
    "level": "middle_1",
    "word": "market",
    "meaning": "市場",
    "options": [
      "腕",
      "〜と一緒に",
      "市場",
      "を与える、渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 276,
    "level": "middle_1",
    "word": "season",
    "meaning": "季節",
    "options": [
      "季節",
      "社会",
      "によって",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 277,
    "level": "middle_1",
    "word": "doctor",
    "meaning": "医者",
    "options": [
      "医者",
      "を切る",
      "身体",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 278,
    "level": "middle_1",
    "word": "movie",
    "meaning": "映画",
    "options": [
      "水",
      "望む",
      "映画",
      "を受け取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 279,
    "level": "middle_1",
    "word": "tree",
    "meaning": "木",
    "options": [
      "色々な",
      "学校",
      "【時間・場所】から",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 280,
    "level": "middle_1",
    "word": "red",
    "meaning": "赤",
    "options": [
      "を歌う",
      "母",
      "これらの",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 281,
    "level": "middle_1",
    "word": "summer",
    "meaning": "夏",
    "options": [
      "〜のあとに",
      "座る",
      "夏",
      "家"
    ],
    "status": "unlearned"
  },
  {
    "id": 282,
    "level": "middle_1",
    "word": "bed",
    "meaning": "ベッド",
    "options": [
      "権利",
      "ベッド",
      "泳ぐ",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 283,
    "level": "middle_1",
    "word": "sound",
    "meaning": "音",
    "options": [
      "と感じる",
      "音",
      "規則",
      "である、になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 284,
    "level": "middle_1",
    "word": "station",
    "meaning": "駅",
    "options": [
      "泳ぐ",
      "子供",
      "ついに、やっと",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 285,
    "level": "middle_1",
    "word": "blue",
    "meaning": "青い",
    "options": [
      "6月",
      "だから、なので",
      "青い",
      "5月"
    ],
    "status": "unlearned"
  },
  {
    "id": 286,
    "level": "middle_1",
    "word": "song",
    "meaning": "歌",
    "options": [
      "時間",
      "を歌う",
      "落ちる",
      "歌"
    ],
    "status": "unlearned"
  },
  {
    "id": 287,
    "level": "middle_1",
    "word": "science",
    "meaning": "科学",
    "options": [
      "科学",
      "泳ぐ",
      "宿題",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 288,
    "level": "middle_1",
    "word": "green",
    "meaning": "緑",
    "options": [
      "する前に",
      "音",
      "緑",
      "多分"
    ],
    "status": "unlearned"
  },
  {
    "id": 289,
    "level": "middle_1",
    "word": "beautiful",
    "meaning": "美しい",
    "options": [
      "最も良い",
      "黒い",
      "美しい",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 290,
    "level": "middle_1",
    "word": "bag",
    "meaning": "かばん",
    "options": [
      "かばん",
      "忙しい",
      "を生産する",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 291,
    "level": "middle_1",
    "word": "sing",
    "meaning": "を歌う",
    "options": [
      "をつかむ",
      "の前に",
      "食べ物",
      "を歌う"
    ],
    "status": "unlearned"
  },
  {
    "id": 292,
    "level": "middle_1",
    "word": "park",
    "meaning": "公園",
    "options": [
      "水",
      "であるけれど",
      "公園",
      "彼らは"
    ],
    "status": "unlearned"
  },
  {
    "id": 293,
    "level": "middle_1",
    "word": "drink",
    "meaning": "を飲む",
    "options": [
      "成長する",
      "を飲む",
      "〜することができる",
      "しなければならない"
    ],
    "status": "unlearned"
  },
  {
    "id": 294,
    "level": "middle_1",
    "word": "mountain",
    "meaning": "山",
    "options": [
      "山",
      "する前に",
      "ついに、やっと",
      "を撮る・取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 295,
    "level": "middle_1",
    "word": "river",
    "meaning": "川",
    "options": [
      "川",
      "費やす",
      "この",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 296,
    "level": "middle_1",
    "word": "shop",
    "meaning": "店",
    "options": [
      "店",
      "続く",
      "社会",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 297,
    "level": "middle_1",
    "word": "cook",
    "meaning": "料理する",
    "options": [
      "料理する",
      "方法",
      "を話す",
      "し続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 298,
    "level": "middle_1",
    "word": "quiet",
    "meaning": "静かな",
    "options": [
      "数学",
      "静かな",
      "の向こう側に",
      "そして"
    ],
    "status": "unlearned"
  },
  {
    "id": 299,
    "level": "middle_1",
    "word": "classroom",
    "meaning": "教室",
    "options": [
      "教室",
      "〜できる",
      "まだ",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 300,
    "level": "middle_1",
    "word": "famous",
    "meaning": "有名な",
    "options": [
      "同じもの",
      "を撮る・取る",
      "使う",
      "有名な"
    ],
    "status": "unlearned"
  },
  {
    "id": 301,
    "level": "middle_1",
    "word": "flower",
    "meaning": "花",
    "options": [
      "税、税金",
      "花",
      "1",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 302,
    "level": "middle_1",
    "word": "yesterday",
    "meaning": "昨日",
    "options": [
      "どちらの",
      "どれもみな",
      "昨日",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 303,
    "level": "middle_1",
    "word": "desk",
    "meaning": "机",
    "options": [
      "もの、こと",
      "取る",
      "を発見する",
      "机"
    ],
    "status": "unlearned"
  },
  {
    "id": 304,
    "level": "middle_1",
    "word": "fruit",
    "meaning": "果物",
    "options": [
      "取る",
      "5月",
      "来る",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 305,
    "level": "middle_1",
    "word": "cat",
    "meaning": "猫",
    "options": [
      "の前に",
      "座る",
      "だから、なので",
      "猫"
    ],
    "status": "unlearned"
  },
  {
    "id": 306,
    "level": "middle_1",
    "word": "English",
    "meaning": "英語",
    "options": [
      "英語",
      "最も",
      "を好む",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 307,
    "level": "middle_1",
    "word": "busy",
    "meaning": "忙しい",
    "options": [
      "おおいに、たいへん",
      "どこ",
      "を得る",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 308,
    "level": "middle_1",
    "word": "dish",
    "meaning": "皿",
    "options": [
      "今日",
      "皿",
      "彼の",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 309,
    "level": "middle_1",
    "word": "hat",
    "meaning": "帽子",
    "options": [
      "を見せる",
      "にとって",
      "問題、困ったこと",
      "帽子"
    ],
    "status": "unlearned"
  },
  {
    "id": 310,
    "level": "middle_1",
    "word": "library",
    "meaning": "図書館",
    "options": [
      "に影響を与える",
      "番号",
      "図書館",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 311,
    "level": "middle_1",
    "word": "bike",
    "meaning": "自転車",
    "options": [
      "私たちの",
      "2",
      "大きい、広い",
      "自転車"
    ],
    "status": "unlearned"
  },
  {
    "id": 312,
    "level": "middle_1",
    "word": "rice",
    "meaning": "米、ご飯",
    "options": [
      "心",
      "米、ご飯",
      "を知っている",
      "自動車"
    ],
    "status": "unlearned"
  },
  {
    "id": 313,
    "level": "middle_1",
    "word": "swim",
    "meaning": "泳ぐ",
    "options": [
      "に着く、到着する",
      "泳ぐ",
      "顔",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 314,
    "level": "middle_1",
    "word": "math",
    "meaning": "数学",
    "options": [
      "壊れる、破る",
      "規則",
      "日本",
      "数学"
    ],
    "status": "unlearned"
  },
  {
    "id": 315,
    "level": "middle_1",
    "word": "apple",
    "meaning": "りんご",
    "options": [
      "時刻",
      "望む",
      "他の",
      "りんご"
    ],
    "status": "unlearned"
  },
  {
    "id": 316,
    "level": "middle_1",
    "word": "festival",
    "meaning": "祭り",
    "options": [
      "机",
      "祭り",
      "地下鉄",
      "を飲む"
    ],
    "status": "unlearned"
  },
  {
    "id": 317,
    "level": "middle_1",
    "word": "cute",
    "meaning": "かわいい",
    "options": [
      "壊れる、破る",
      "数、数字",
      "かわいい",
      "公園"
    ],
    "status": "unlearned"
  },
  {
    "id": 318,
    "level": "middle_1",
    "word": "homework",
    "meaning": "宿題",
    "options": [
      "良い",
      "最も",
      "まで、までは",
      "宿題"
    ],
    "status": "unlearned"
  },
  {
    "id": 319,
    "level": "middle_1",
    "word": "sunny",
    "meaning": "晴れの",
    "options": [
      "見る",
      "晴れの",
      "ついに、やっと",
      "変化"
    ],
    "status": "unlearned"
  },
  {
    "id": 320,
    "level": "middle_1",
    "word": "subway",
    "meaning": "地下鉄",
    "options": [
      "をがまんする",
      "を切る",
      "〜の間",
      "地下鉄"
    ],
    "status": "unlearned"
  },
  {
    "id": 321,
    "level": "middle_1",
    "word": "Japan",
    "meaning": "日本",
    "options": [
      "日本",
      "父",
      "2",
      "たった今"
    ],
    "status": "unlearned"
  },
  {
    "id": 322,
    "level": "middle_1",
    "word": "Sunday",
    "meaning": "日曜日",
    "options": [
      "日曜日",
      "戸、ドア",
      "起こる",
      "もう一つの"
    ],
    "status": "unlearned"
  },
  {
    "id": 323,
    "level": "middle_1",
    "word": "June",
    "meaning": "6月",
    "options": [
      "6月",
      "どちらの",
      "年",
      "心"
    ],
    "status": "unlearned"
  },
  {
    "id": 324,
    "level": "middle_1",
    "word": "notebook",
    "meaning": "ノート",
    "options": [
      "戻って、返して",
      "ノート",
      "を含む",
      "戸、ドア"
    ],
    "status": "unlearned"
  },
  {
    "id": 325,
    "level": "middle_1",
    "word": "leave",
    "meaning": "去る",
    "options": [
      "値段",
      "去る",
      "今まで、かつて",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 326,
    "level": "middle_1",
    "word": "put",
    "meaning": "を置く",
    "options": [
      "権利",
      "を置く",
      "について、に関する",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 327,
    "level": "middle_1",
    "word": "old",
    "meaning": "古い",
    "options": [
      "古い",
      "忙しい",
      "とまる、停止する",
      "音楽"
    ],
    "status": "unlearned"
  },
  {
    "id": 328,
    "level": "middle_1",
    "word": "student",
    "meaning": "生徒",
    "options": [
      "です、ます",
      "生徒",
      "しばらくの間",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 329,
    "level": "middle_1",
    "word": "big",
    "meaning": "大きい",
    "options": [
      "大きい",
      "物語",
      "法律",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 330,
    "level": "middle_1",
    "word": "country",
    "meaning": "国",
    "options": [
      "昨日",
      "芸術",
      "自転車",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 331,
    "level": "middle_1",
    "word": "help",
    "meaning": "を手伝う",
    "options": [
      "を手伝う",
      "を発見する",
      "紙",
      "できた"
    ],
    "status": "unlearned"
  },
  {
    "id": 332,
    "level": "middle_1",
    "word": "where",
    "meaning": "どこ",
    "options": [
      "どこ",
      "家族",
      "赤",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 333,
    "level": "middle_1",
    "word": "turn",
    "meaning": "曲がる",
    "options": [
      "座る",
      "を建てる",
      "興味",
      "曲がる"
    ],
    "status": "unlearned"
  },
  {
    "id": 334,
    "level": "middle_1",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "問題",
      "1",
      "見る",
      "である、になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 335,
    "level": "middle_1",
    "word": "hand",
    "meaning": "手",
    "options": [
      "ある、いる",
      "手",
      "部分",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 336,
    "level": "middle_1",
    "word": "place",
    "meaning": "場所",
    "options": [
      "先生",
      "を置いていく",
      "場所",
      "ある、いる"
    ],
    "status": "unlearned"
  },
  {
    "id": 337,
    "level": "middle_1",
    "word": "small",
    "meaning": "小さい",
    "options": [
      "部分",
      "国家の",
      "情報",
      "小さい"
    ],
    "status": "unlearned"
  },
  {
    "id": 338,
    "level": "middle_1",
    "word": "number",
    "meaning": "数、数字",
    "options": [
      "権利",
      "若い",
      "数、数字",
      "そうしなければ"
    ],
    "status": "unlearned"
  },
  {
    "id": 339,
    "level": "middle_1",
    "word": "always",
    "meaning": "いつも",
    "options": [
      "法律",
      "この前の",
      "いつも",
      "家族"
    ],
    "status": "unlearned"
  },
  {
    "id": 340,
    "level": "middle_1",
    "word": "night",
    "meaning": "夜",
    "options": [
      "夜",
      "全部、全員、全て",
      "どれもみな",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 341,
    "level": "middle_1",
    "word": "live",
    "meaning": "住む",
    "options": [
      "季節",
      "の前に",
      "待つ",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 342,
    "level": "middle_1",
    "word": "today",
    "meaning": "今日",
    "options": [
      "戸、ドア",
      "今日",
      "を〜の状態にする",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 343,
    "level": "middle_1",
    "word": "before",
    "meaning": "の前に",
    "options": [
      "店",
      "の前に",
      "部分",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 344,
    "level": "middle_1",
    "word": "large",
    "meaning": "大きい",
    "options": [
      "商売",
      "大きい",
      "国家の",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 345,
    "level": "middle_1",
    "word": "room",
    "meaning": "部屋",
    "options": [
      "彼自身を",
      "である、になる",
      "部屋",
      "帽子"
    ],
    "status": "unlearned"
  },
  {
    "id": 346,
    "level": "middle_1",
    "word": "mother",
    "meaning": "母",
    "options": [
      "戦争",
      "私たちの",
      "母",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 347,
    "level": "middle_1",
    "word": "money",
    "meaning": "お金",
    "options": [
      "どれもない",
      "手",
      "お金",
      "行く"
    ],
    "status": "unlearned"
  },
  {
    "id": 348,
    "level": "middle_1",
    "word": "month",
    "meaning": "月",
    "options": [
      "を手伝う",
      "壊れる、破る",
      "聞く",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 349,
    "level": "middle_1",
    "word": "different",
    "meaning": "色々な",
    "options": [
      "報告",
      "彼らは",
      "しかし、けれども",
      "色々な"
    ],
    "status": "unlearned"
  },
  {
    "id": 350,
    "level": "middle_1",
    "word": "study",
    "meaning": "を勉強する",
    "options": [
      "仕事・働く",
      "5月",
      "を勉強する",
      "建物"
    ],
    "status": "unlearned"
  },
  {
    "id": 351,
    "level": "middle_1",
    "word": "book",
    "meaning": "本",
    "options": [
      "本",
      "特徴、論点",
      "戸、ドア",
      "精神"
    ],
    "status": "unlearned"
  },
  {
    "id": 352,
    "level": "middle_1",
    "word": "eye",
    "meaning": "目",
    "options": [
      "側、面",
      "特徴、論点",
      "目",
      "する前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 353,
    "level": "middle_1",
    "word": "job",
    "meaning": "仕事",
    "options": [
      "法律",
      "仕事",
      "未来",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 354,
    "level": "middle_1",
    "word": "kind",
    "meaning": "親切な",
    "options": [
      "親切な",
      "私たちの",
      "場所",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 355,
    "level": "middle_1",
    "word": "black",
    "meaning": "黒い",
    "options": [
      "を手伝う",
      "黒い",
      "仕事・働く",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 356,
    "level": "middle_1",
    "word": "house",
    "meaning": "家",
    "options": [
      "のような",
      "教える",
      "するとき",
      "家"
    ],
    "status": "unlearned"
  },
  {
    "id": 357,
    "level": "middle_1",
    "word": "friend",
    "meaning": "友達",
    "options": [
      "友達",
      "おおいに、たいへん",
      "顔",
      "花"
    ],
    "status": "unlearned"
  },
  {
    "id": 358,
    "level": "middle_1",
    "word": "father",
    "meaning": "父",
    "options": [
      "父",
      "を動かす",
      "参加する",
      "手などを挙げる"
    ],
    "status": "unlearned"
  },
  {
    "id": 359,
    "level": "middle_1",
    "word": "sit",
    "meaning": "座る",
    "options": [
      "着る",
      "〜に〜をさせる",
      "座る",
      "するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 360,
    "level": "middle_1",
    "word": "hour",
    "meaning": "1時間",
    "options": [
      "を試す",
      "家",
      "1時間",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 361,
    "level": "middle_1",
    "word": "bad",
    "meaning": "悪い",
    "options": [
      "生徒",
      "悪い",
      "たくさん",
      "参加する"
    ],
    "status": "unlearned"
  },
  {
    "id": 362,
    "level": "middle_1",
    "word": "meet",
    "meaning": "と会う",
    "options": [
      "年",
      "と会う",
      "かばん",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 363,
    "level": "middle_1",
    "word": "car",
    "meaning": "自動車",
    "options": [
      "自動車",
      "子供",
      "をつかむ",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 364,
    "level": "middle_1",
    "word": "city",
    "meaning": "市、都会",
    "options": [
      "側面",
      "彼女は",
      "市、都会",
      "を導く"
    ],
    "status": "unlearned"
  },
  {
    "id": 365,
    "level": "middle_1",
    "word": "name",
    "meaning": "名前",
    "options": [
      "名前",
      "山",
      "地下鉄",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 366,
    "level": "middle_1",
    "word": "best",
    "meaning": "最も良い",
    "options": [
      "事実、現実",
      "加える",
      "使う",
      "最も良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 367,
    "level": "middle_1",
    "word": "idea",
    "meaning": "考え",
    "options": [
      "文化",
      "ノート",
      "考え",
      "市場"
    ],
    "status": "unlearned"
  },
  {
    "id": 368,
    "level": "middle_1",
    "word": "body",
    "meaning": "身体",
    "options": [
      "英語",
      "可能な",
      "の方へ",
      "身体"
    ],
    "status": "unlearned"
  },
  {
    "id": 369,
    "level": "middle_1",
    "word": "information",
    "meaning": "情報",
    "options": [
      "報告",
      "落ちる、降る",
      "情報",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 370,
    "level": "middle_1",
    "word": "stop",
    "meaning": "止める",
    "options": [
      "色々な",
      "英語",
      "止める",
      "警察"
    ],
    "status": "unlearned"
  },
  {
    "id": 371,
    "level": "middle_1",
    "word": "face",
    "meaning": "顔",
    "options": [
      "顔",
      "科学技術",
      "〜の間",
      "先生"
    ],
    "status": "unlearned"
  },
  {
    "id": 372,
    "level": "middle_1",
    "word": "speak",
    "meaning": "を話す",
    "options": [
      "今日",
      "を話す",
      "商売",
      "を受け取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 373,
    "level": "middle_1",
    "word": "read",
    "meaning": "を読む",
    "options": [
      "未来",
      "大統領",
      "有名な",
      "を読む"
    ],
    "status": "unlearned"
  },
  {
    "id": 374,
    "level": "middle_1",
    "word": "door",
    "meaning": "戸、ドア",
    "options": [
      "に着く、到着する",
      "はじめて",
      "簡単な",
      "戸、ドア"
    ],
    "status": "unlearned"
  },
  {
    "id": 375,
    "level": "middle_1",
    "word": "sure",
    "meaning": "確信して",
    "options": [
      "戦争",
      "決してない",
      "確信して",
      "医者"
    ],
    "status": "unlearned"
  },
  {
    "id": 376,
    "level": "middle_1",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "歌",
      "にとって",
      "決してない",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 377,
    "level": "middle_1",
    "word": "open",
    "meaning": "を開ける",
    "options": [
      "見る",
      "方法",
      "を開ける",
      "悪い"
    ],
    "status": "unlearned"
  },
  {
    "id": 378,
    "level": "middle_1",
    "word": "morning",
    "meaning": "朝",
    "options": [
      "を好む",
      "朝",
      "父",
      "必要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 379,
    "level": "middle_1",
    "word": "girl",
    "meaning": "少女",
    "options": [
      "まで、までは",
      "はじめて",
      "生徒",
      "少女"
    ],
    "status": "unlearned"
  },
  {
    "id": 380,
    "level": "middle_1",
    "word": "early",
    "meaning": "早く",
    "options": [
      "なぜなら",
      "早く",
      "ほとんど",
      "壊れる、破る"
    ],
    "status": "unlearned"
  },
  {
    "id": 381,
    "level": "middle_1",
    "word": "food",
    "meaning": "食べ物",
    "options": [
      "をする、行う",
      "あれらの",
      "によって",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 382,
    "level": "middle_1",
    "word": "teacher",
    "meaning": "先生",
    "options": [
      "3",
      "たった今",
      "先生",
      "を得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 383,
    "level": "middle_1",
    "word": "boy",
    "meaning": "少年",
    "options": [
      "報告",
      "心",
      "泳ぐ",
      "少年"
    ],
    "status": "unlearned"
  },
  {
    "id": 384,
    "level": "middle_1",
    "word": "music",
    "meaning": "音楽",
    "options": [
      "を導く",
      "を動かす",
      "音楽",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 385,
    "level": "middle_1",
    "word": "buy",
    "meaning": "を買う",
    "options": [
      "どんな・どのように",
      "行、線",
      "を買う",
      "日曜日"
    ],
    "status": "unlearned"
  },
  {
    "id": 386,
    "level": "middle_1",
    "word": "wait",
    "meaning": "待つ",
    "options": [
      "しなければならない",
      "を発見する",
      "身体",
      "待つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 387,
    "level": "middle_1",
    "word": "market",
    "meaning": "市場",
    "options": [
      "だろうに",
      "市場",
      "規則",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 388,
    "level": "middle_1",
    "word": "season",
    "meaning": "季節",
    "options": [
      "を勉強する",
      "芸術",
      "季節",
      "を決める"
    ],
    "status": "unlearned"
  },
  {
    "id": 389,
    "level": "middle_1",
    "word": "doctor",
    "meaning": "医者",
    "options": [
      "実は、本当は",
      "大きい",
      "医者",
      "子供"
    ],
    "status": "unlearned"
  },
  {
    "id": 390,
    "level": "middle_1",
    "word": "movie",
    "meaning": "映画",
    "options": [
      "泳ぐ",
      "日本",
      "を持っている",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 391,
    "level": "middle_1",
    "word": "tree",
    "meaning": "木",
    "options": [
      "木",
      "人々",
      "昨日",
      "として"
    ],
    "status": "unlearned"
  },
  {
    "id": 392,
    "level": "middle_1",
    "word": "red",
    "meaning": "赤",
    "options": [
      "赤",
      "成長する",
      "自然",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 393,
    "level": "middle_1",
    "word": "summer",
    "meaning": "夏",
    "options": [
      "夏",
      "あれらの",
      "離れて",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 394,
    "level": "middle_1",
    "word": "bed",
    "meaning": "ベッド",
    "options": [
      "もっと",
      "彼女は",
      "値段",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 395,
    "level": "middle_1",
    "word": "sound",
    "meaning": "音",
    "options": [
      "滞在する",
      "人、個人",
      "音",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 396,
    "level": "middle_1",
    "word": "station",
    "meaning": "駅",
    "options": [
      "最も",
      "多分",
      "駅",
      "科学技術"
    ],
    "status": "unlearned"
  },
  {
    "id": 397,
    "level": "middle_1",
    "word": "blue",
    "meaning": "青い",
    "options": [
      "落ちる",
      "のような",
      "公園",
      "青い"
    ],
    "status": "unlearned"
  },
  {
    "id": 398,
    "level": "middle_1",
    "word": "song",
    "meaning": "歌",
    "options": [
      "時刻",
      "歌",
      "たくさん",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 399,
    "level": "middle_1",
    "word": "science",
    "meaning": "科学",
    "options": [
      "教える",
      "〜することができる",
      "もっと",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 400,
    "level": "middle_1",
    "word": "green",
    "meaning": "緑",
    "options": [
      "【手段・方法・原因】によって",
      "【時刻】に",
      "緑",
      "およそ、約、ごろ"
    ],
    "status": "unlearned"
  },
  {
    "id": 401,
    "level": "middle_1",
    "word": "beautiful",
    "meaning": "美しい",
    "options": [
      "になった",
      "歌",
      "美しい",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 402,
    "level": "middle_1",
    "word": "bag",
    "meaning": "かばん",
    "options": [
      "終わる",
      "そして",
      "かばん",
      "〜できる"
    ],
    "status": "unlearned"
  },
  {
    "id": 403,
    "level": "middle_1",
    "word": "sing",
    "meaning": "を歌う",
    "options": [
      "覆う",
      "を歌う",
      "手伝う",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 404,
    "level": "middle_1",
    "word": "park",
    "meaning": "公園",
    "options": [
      "公園",
      "食べ物",
      "置く",
      "の中に"
    ],
    "status": "unlearned"
  },
  {
    "id": 405,
    "level": "middle_1",
    "word": "drink",
    "meaning": "を飲む",
    "options": [
      "滞在する",
      "市場",
      "教室",
      "を飲む"
    ],
    "status": "unlearned"
  },
  {
    "id": 406,
    "level": "middle_1",
    "word": "mountain",
    "meaning": "山",
    "options": [
      "山",
      "だけれども",
      "今まで、かつて",
      "を言う"
    ],
    "status": "unlearned"
  },
  {
    "id": 407,
    "level": "middle_1",
    "word": "river",
    "meaning": "川",
    "options": [
      "宿題",
      "ある、いる",
      "参加する",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 408,
    "level": "middle_1",
    "word": "shop",
    "meaning": "店",
    "options": [
      "たくさんの",
      "店",
      "し続ける",
      "もっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 409,
    "level": "middle_1",
    "word": "cook",
    "meaning": "料理する",
    "options": [
      "料理する",
      "問題、困ったこと",
      "皿",
      "とまる、停止する"
    ],
    "status": "unlearned"
  },
  {
    "id": 410,
    "level": "middle_1",
    "word": "quiet",
    "meaning": "静かな",
    "options": [
      "静かな",
      "健康",
      "を研究する",
      "はじめて"
    ],
    "status": "unlearned"
  },
  {
    "id": 411,
    "level": "middle_1",
    "word": "classroom",
    "meaning": "教室",
    "options": [
      "を得る",
      "を失う",
      "教室",
      "のような"
    ],
    "status": "unlearned"
  },
  {
    "id": 412,
    "level": "middle_1",
    "word": "famous",
    "meaning": "有名な",
    "options": [
      "有名な",
      "〜できる",
      "を失う",
      "を動かす"
    ],
    "status": "unlearned"
  },
  {
    "id": 413,
    "level": "middle_1",
    "word": "flower",
    "meaning": "花",
    "options": [
      "夏",
      "を想像する",
      "人々",
      "花"
    ],
    "status": "unlearned"
  },
  {
    "id": 414,
    "level": "middle_1",
    "word": "yesterday",
    "meaning": "昨日",
    "options": [
      "壊れる、破る",
      "学校",
      "昨日",
      "先生"
    ],
    "status": "unlearned"
  },
  {
    "id": 415,
    "level": "middle_1",
    "word": "desk",
    "meaning": "机",
    "options": [
      "机",
      "するとき",
      "加える",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 416,
    "level": "middle_1",
    "word": "fruit",
    "meaning": "果物",
    "options": [
      "変化",
      "果物",
      "を買う",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 417,
    "level": "middle_1",
    "word": "cat",
    "meaning": "猫",
    "options": [
      "文化",
      "猫",
      "戻って、返して",
      "より良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 418,
    "level": "middle_1",
    "word": "English",
    "meaning": "英語",
    "options": [
      "英語",
      "部分",
      "その",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 419,
    "level": "middle_1",
    "word": "busy",
    "meaning": "忙しい",
    "options": [
      "欲しい",
      "おおいに、たいへん",
      "意味する",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 420,
    "level": "middle_1",
    "word": "dish",
    "meaning": "皿",
    "options": [
      "5月",
      "皿",
      "歌",
      "問題、困ったこと"
    ],
    "status": "unlearned"
  },
  {
    "id": 421,
    "level": "middle_1",
    "word": "hat",
    "meaning": "帽子",
    "options": [
      "です、ます",
      "裏の、後ろの",
      "帽子",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 422,
    "level": "middle_1",
    "word": "library",
    "meaning": "図書館",
    "options": [
      "本当に、実際に",
      "【場所】に、で",
      "図書館",
      "について、に関する"
    ],
    "status": "unlearned"
  },
  {
    "id": 423,
    "level": "middle_1",
    "word": "bike",
    "meaning": "自転車",
    "options": [
      "歴史",
      "この前の",
      "になった",
      "自転車"
    ],
    "status": "unlearned"
  },
  {
    "id": 424,
    "level": "middle_1",
    "word": "rice",
    "meaning": "米、ご飯",
    "options": [
      "3",
      "を研究する",
      "米、ご飯",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 425,
    "level": "middle_1",
    "word": "swim",
    "meaning": "泳ぐ",
    "options": [
      "泳ぐ",
      "戦争",
      "猫",
      "人々"
    ],
    "status": "unlearned"
  },
  {
    "id": 426,
    "level": "middle_1",
    "word": "math",
    "meaning": "数学",
    "options": [
      "を知っている",
      "数学",
      "若い",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 427,
    "level": "middle_1",
    "word": "apple",
    "meaning": "りんご",
    "options": [
      "りんご",
      "滞在する",
      "〜だけ",
      "成長する"
    ],
    "status": "unlearned"
  },
  {
    "id": 428,
    "level": "middle_1",
    "word": "festival",
    "meaning": "祭り",
    "options": [
      "祭り",
      "〜で",
      "を知っている",
      "1"
    ],
    "status": "unlearned"
  },
  {
    "id": 429,
    "level": "middle_1",
    "word": "cute",
    "meaning": "かわいい",
    "options": [
      "料理する",
      "決してない",
      "かわいい",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 430,
    "level": "middle_1",
    "word": "homework",
    "meaning": "宿題",
    "options": [
      "宿題",
      "である、になる",
      "説明する",
      "を開ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 431,
    "level": "middle_1",
    "word": "sunny",
    "meaning": "晴れの",
    "options": [
      "人々",
      "晴れの",
      "いくつかの",
      "意味する"
    ],
    "status": "unlearned"
  },
  {
    "id": 432,
    "level": "middle_1",
    "word": "subway",
    "meaning": "地下鉄",
    "options": [
      "地下鉄",
      "質問",
      "国際的な",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 433,
    "level": "middle_1",
    "word": "Japan",
    "meaning": "日本",
    "options": [
      "国家の",
      "日本",
      "音",
      "教える"
    ],
    "status": "unlearned"
  },
  {
    "id": 434,
    "level": "middle_1",
    "word": "Sunday",
    "meaning": "日曜日",
    "options": [
      "日曜日",
      "時間",
      "朝",
      "日本"
    ],
    "status": "unlearned"
  },
  {
    "id": 435,
    "level": "middle_1",
    "word": "June",
    "meaning": "6月",
    "options": [
      "を聞く",
      "共通の",
      "を試す",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 436,
    "level": "middle_1",
    "word": "notebook",
    "meaning": "ノート",
    "options": [
      "ノート",
      "値段",
      "しかし",
      "〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 437,
    "level": "middle_1",
    "word": "leave",
    "meaning": "去る",
    "options": [
      "5月",
      "去る",
      "古い",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 438,
    "level": "middle_1",
    "word": "put",
    "meaning": "を置く",
    "options": [
      "必要な",
      "【時間・場所】から",
      "と感じる",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 439,
    "level": "middle_1",
    "word": "old",
    "meaning": "古い",
    "options": [
      "を続ける",
      "古い",
      "〜だけ",
      "どんな・どのように"
    ],
    "status": "unlearned"
  },
  {
    "id": 440,
    "level": "middle_1",
    "word": "student",
    "meaning": "生徒",
    "options": [
      "だろうに",
      "それの、その",
      "報告",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 441,
    "level": "middle_1",
    "word": "big",
    "meaning": "大きい",
    "options": [
      "行事",
      "落ちる、降る",
      "欲しい",
      "大きい"
    ],
    "status": "unlearned"
  },
  {
    "id": 442,
    "level": "middle_1",
    "word": "country",
    "meaning": "国",
    "options": [
      "を想像する",
      "国",
      "するとき",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 443,
    "level": "middle_1",
    "word": "help",
    "meaning": "を手伝う",
    "options": [
      "若い",
      "いつも",
      "問題",
      "を手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 444,
    "level": "middle_1",
    "word": "where",
    "meaning": "どこ",
    "options": [
      "建物",
      "どこ",
      "向こうへ",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 445,
    "level": "middle_1",
    "word": "turn",
    "meaning": "曲がる",
    "options": [
      "大学",
      "手",
      "まだ",
      "曲がる"
    ],
    "status": "unlearned"
  },
  {
    "id": 446,
    "level": "middle_1",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "なにか",
      "木",
      "問題",
      "によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 447,
    "level": "middle_1",
    "word": "hand",
    "meaning": "手",
    "options": [
      "色々な",
      "切る",
      "の中に",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 448,
    "level": "middle_1",
    "word": "place",
    "meaning": "場所",
    "options": [
      "の方へ",
      "たいていの",
      "ほかの、別の",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 449,
    "level": "middle_1",
    "word": "small",
    "meaning": "小さい",
    "options": [
      "を主催する",
      "月",
      "小さい",
      "かばん"
    ],
    "status": "unlearned"
  },
  {
    "id": 450,
    "level": "middle_1",
    "word": "number",
    "meaning": "数、数字",
    "options": [
      "数、数字",
      "として",
      "子供",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 451,
    "level": "middle_1",
    "word": "always",
    "meaning": "いつも",
    "options": [
      "ついに、やっと",
      "を失う",
      "と書いてある",
      "いつも"
    ],
    "status": "unlearned"
  },
  {
    "id": 452,
    "level": "middle_1",
    "word": "night",
    "meaning": "夜",
    "options": [
      "どちらの",
      "それは",
      "〜の",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 453,
    "level": "middle_1",
    "word": "live",
    "meaning": "住む",
    "options": [
      "学校",
      "を手渡す",
      "住む",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 454,
    "level": "middle_1",
    "word": "today",
    "meaning": "今日",
    "options": [
      "世界",
      "昨日",
      "今日",
      "裏の、後ろの"
    ],
    "status": "unlearned"
  },
  {
    "id": 455,
    "level": "middle_1",
    "word": "before",
    "meaning": "の前に",
    "options": [
      "を知っている",
      "しなければならない",
      "の前に",
      "でない"
    ],
    "status": "unlearned"
  },
  {
    "id": 456,
    "level": "middle_1",
    "word": "large",
    "meaning": "大きい",
    "options": [
      "家族",
      "大きい",
      "食べ物",
      "時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 457,
    "level": "middle_1",
    "word": "room",
    "meaning": "部屋",
    "options": [
      "始まる",
      "文化",
      "部屋",
      "はじめて"
    ],
    "status": "unlearned"
  },
  {
    "id": 458,
    "level": "middle_1",
    "word": "mother",
    "meaning": "母",
    "options": [
      "先生",
      "実現する",
      "音",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 459,
    "level": "middle_1",
    "word": "money",
    "meaning": "お金",
    "options": [
      "行、線",
      "生活、人生",
      "終わる",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 460,
    "level": "middle_1",
    "word": "month",
    "meaning": "月",
    "options": [
      "しなければならない",
      "する前に",
      "でない",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 461,
    "level": "middle_1",
    "word": "different",
    "meaning": "色々な",
    "options": [
      "彼自身を",
      "2",
      "色々な",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 462,
    "level": "middle_1",
    "word": "study",
    "meaning": "を勉強する",
    "options": [
      "を勉強する",
      "赤",
      "〜するとき",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 463,
    "level": "middle_1",
    "word": "book",
    "meaning": "本",
    "options": [
      "〜だけ",
      "本",
      "をつかむ",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 464,
    "level": "middle_1",
    "word": "eye",
    "meaning": "目",
    "options": [
      "続く",
      "部分",
      "目",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 465,
    "level": "middle_1",
    "word": "job",
    "meaning": "仕事",
    "options": [
      "私に",
      "だけれども",
      "仕事",
      "を受け取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 466,
    "level": "middle_1",
    "word": "kind",
    "meaning": "親切な",
    "options": [
      "親切な",
      "【場所】に、で",
      "生きる",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 467,
    "level": "middle_1",
    "word": "black",
    "meaning": "黒い",
    "options": [
      "黒い",
      "たくさんの",
      "音楽",
      "学校"
    ],
    "status": "unlearned"
  },
  {
    "id": 468,
    "level": "middle_1",
    "word": "house",
    "meaning": "家",
    "options": [
      "帽子",
      "家",
      "良い",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 469,
    "level": "middle_1",
    "word": "friend",
    "meaning": "友達",
    "options": [
      "有名な",
      "友達",
      "駅",
      "を増やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 470,
    "level": "middle_1",
    "word": "father",
    "meaning": "父",
    "options": [
      "見る",
      "芸術",
      "場所",
      "父"
    ],
    "status": "unlearned"
  },
  {
    "id": 471,
    "level": "middle_1",
    "word": "sit",
    "meaning": "座る",
    "options": [
      "を受け取る",
      "顔",
      "座る",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 472,
    "level": "middle_1",
    "word": "hour",
    "meaning": "1時間",
    "options": [
      "1時間",
      "のような",
      "皿",
      "だろうに"
    ],
    "status": "unlearned"
  },
  {
    "id": 473,
    "level": "middle_1",
    "word": "bad",
    "meaning": "悪い",
    "options": [
      "進路",
      "として",
      "非常に",
      "悪い"
    ],
    "status": "unlearned"
  },
  {
    "id": 474,
    "level": "middle_1",
    "word": "meet",
    "meaning": "と会う",
    "options": [
      "動く、引っ越す",
      "身体",
      "劇",
      "と会う"
    ],
    "status": "unlearned"
  },
  {
    "id": 475,
    "level": "middle_1",
    "word": "car",
    "meaning": "自動車",
    "options": [
      "悪い",
      "自動車",
      "精神",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 476,
    "level": "middle_1",
    "word": "city",
    "meaning": "市、都会",
    "options": [
      "〜の",
      "〜だけ",
      "おおいに、たいへん",
      "市、都会"
    ],
    "status": "unlearned"
  },
  {
    "id": 477,
    "level": "middle_1",
    "word": "name",
    "meaning": "名前",
    "options": [
      "外に",
      "名前",
      "を設立する",
      "置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 478,
    "level": "middle_1",
    "word": "best",
    "meaning": "最も良い",
    "options": [
      "欲しい",
      "最も良い",
      "おおいに、たいへん",
      "生活、人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 479,
    "level": "middle_1",
    "word": "idea",
    "meaning": "考え",
    "options": [
      "青い",
      "彼の",
      "考え",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 480,
    "level": "middle_1",
    "word": "body",
    "meaning": "身体",
    "options": [
      "身体",
      "〜のあとに",
      "の向こう側に",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 481,
    "level": "middle_1",
    "word": "information",
    "meaning": "情報",
    "options": [
      "泳ぐ",
      "なぜなら",
      "を手渡す",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 482,
    "level": "middle_1",
    "word": "stop",
    "meaning": "止める",
    "options": [
      "同じもの",
      "説明する",
      "彼を",
      "止める"
    ],
    "status": "unlearned"
  },
  {
    "id": 483,
    "level": "middle_1",
    "word": "face",
    "meaning": "顔",
    "options": [
      "と会う",
      "【時刻】に",
      "として",
      "顔"
    ],
    "status": "unlearned"
  },
  {
    "id": 484,
    "level": "middle_1",
    "word": "speak",
    "meaning": "を話す",
    "options": [
      "を話す",
      "であるけれど",
      "彼自身を",
      "かばん"
    ],
    "status": "unlearned"
  },
  {
    "id": 485,
    "level": "middle_1",
    "word": "read",
    "meaning": "を読む",
    "options": [
      "大学",
      "を読む",
      "すべての",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 486,
    "level": "middle_1",
    "word": "door",
    "meaning": "戸、ドア",
    "options": [
      "健康",
      "戸、ドア",
      "を説明する",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 487,
    "level": "middle_1",
    "word": "sure",
    "meaning": "確信して",
    "options": [
      "日曜日",
      "確信して",
      "自転車",
      "ある、いる"
    ],
    "status": "unlearned"
  },
  {
    "id": 488,
    "level": "middle_1",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "とまる、停止する",
      "店",
      "歴史",
      "それは"
    ],
    "status": "unlearned"
  },
  {
    "id": 489,
    "level": "middle_1",
    "word": "open",
    "meaning": "を開ける",
    "options": [
      "望む",
      "を増やす",
      "を開ける",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 490,
    "level": "middle_1",
    "word": "morning",
    "meaning": "朝",
    "options": [
      "を受け入れる",
      "映画",
      "死",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 491,
    "level": "middle_1",
    "word": "girl",
    "meaning": "少女",
    "options": [
      "を保つ",
      "自動車",
      "彼女は",
      "少女"
    ],
    "status": "unlearned"
  },
  {
    "id": 492,
    "level": "middle_1",
    "word": "early",
    "meaning": "早く",
    "options": [
      "をつかむ",
      "賛成する",
      "早く",
      "店"
    ],
    "status": "unlearned"
  },
  {
    "id": 493,
    "level": "middle_1",
    "word": "food",
    "meaning": "食べ物",
    "options": [
      "その",
      "食べ物",
      "1",
      "滞在"
    ],
    "status": "unlearned"
  },
  {
    "id": 494,
    "level": "middle_1",
    "word": "teacher",
    "meaning": "先生",
    "options": [
      "市場",
      "人生",
      "先生",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 495,
    "level": "middle_1",
    "word": "boy",
    "meaning": "少年",
    "options": [
      "として",
      "少年",
      "〜以来",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 496,
    "level": "middle_1",
    "word": "music",
    "meaning": "音楽",
    "options": [
      "あの",
      "音楽",
      "実は、本当は",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 497,
    "level": "middle_1",
    "word": "buy",
    "meaning": "を買う",
    "options": [
      "向こうへ",
      "教室",
      "赤",
      "を買う"
    ],
    "status": "unlearned"
  },
  {
    "id": 498,
    "level": "middle_1",
    "word": "wait",
    "meaning": "待つ",
    "options": [
      "待つ",
      "考え",
      "であるけれど",
      "戻って、返して"
    ],
    "status": "unlearned"
  },
  {
    "id": 499,
    "level": "middle_1",
    "word": "market",
    "meaning": "市場",
    "options": [
      "考える",
      "市場",
      "大きい、広い",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 500,
    "level": "middle_1",
    "word": "season",
    "meaning": "季節",
    "options": [
      "子供",
      "部分",
      "するとき",
      "季節"
    ],
    "status": "unlearned"
  },
  {
    "id": 501,
    "level": "middle_1",
    "word": "doctor",
    "meaning": "医者",
    "options": [
      "離れて",
      "忙しい",
      "問題、困ったこと",
      "医者"
    ],
    "status": "unlearned"
  },
  {
    "id": 502,
    "level": "middle_1",
    "word": "movie",
    "meaning": "映画",
    "options": [
      "行、線",
      "進路",
      "を含む",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 503,
    "level": "middle_1",
    "word": "tree",
    "meaning": "木",
    "options": [
      "今まで、かつて",
      "木",
      "を着ている",
      "同じもの"
    ],
    "status": "unlearned"
  },
  {
    "id": 504,
    "level": "middle_1",
    "word": "red",
    "meaning": "赤",
    "options": [
      "大統領",
      "自動車",
      "いくつかの",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 505,
    "level": "middle_1",
    "word": "summer",
    "meaning": "夏",
    "options": [
      "最も良い",
      "夏",
      "〜の",
      "本当の"
    ],
    "status": "unlearned"
  },
  {
    "id": 506,
    "level": "middle_1",
    "word": "bed",
    "meaning": "ベッド",
    "options": [
      "ベッド",
      "部屋",
      "自然",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 507,
    "level": "middle_1",
    "word": "sound",
    "meaning": "音",
    "options": [
      "を撮る・取る",
      "より良い",
      "仕事・働く",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 508,
    "level": "middle_1",
    "word": "station",
    "meaning": "駅",
    "options": [
      "私たちの",
      "を置いていく",
      "駅",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 509,
    "level": "middle_1",
    "word": "blue",
    "meaning": "青い",
    "options": [
      "青い",
      "仕事",
      "晴れの",
      "取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 510,
    "level": "middle_1",
    "word": "song",
    "meaning": "歌",
    "options": [
      "状況",
      "歌",
      "最も良い",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 511,
    "level": "middle_1",
    "word": "science",
    "meaning": "科学",
    "options": [
      "共通の",
      "道",
      "だから、なので",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 512,
    "level": "middle_1",
    "word": "green",
    "meaning": "緑",
    "options": [
      "緑",
      "もう、すでに",
      "長い",
      "家"
    ],
    "status": "unlearned"
  },
  {
    "id": 513,
    "level": "middle_1",
    "word": "beautiful",
    "meaning": "美しい",
    "options": [
      "美しい",
      "考える",
      "かばん",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 514,
    "level": "middle_1",
    "word": "bag",
    "meaning": "かばん",
    "options": [
      "どこ",
      "場所",
      "の方へ",
      "かばん"
    ],
    "status": "unlearned"
  },
  {
    "id": 515,
    "level": "middle_1",
    "word": "sing",
    "meaning": "を歌う",
    "options": [
      "を歌う",
      "すべての",
      "です、ます",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 516,
    "level": "middle_1",
    "word": "park",
    "meaning": "公園",
    "options": [
      "赤",
      "同じもの",
      "を計画する",
      "公園"
    ],
    "status": "unlearned"
  },
  {
    "id": 517,
    "level": "middle_1",
    "word": "drink",
    "meaning": "を飲む",
    "options": [
      "人間の",
      "昨日",
      "を飲む",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 518,
    "level": "middle_1",
    "word": "mountain",
    "meaning": "山",
    "options": [
      "の上に",
      "部分",
      "異なる",
      "山"
    ],
    "status": "unlearned"
  },
  {
    "id": 519,
    "level": "middle_1",
    "word": "river",
    "meaning": "川",
    "options": [
      "顔",
      "自転車",
      "簡単な",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 520,
    "level": "middle_1",
    "word": "shop",
    "meaning": "店",
    "options": [
      "人生",
      "〜と〜の間",
      "行、線",
      "店"
    ],
    "status": "unlearned"
  },
  {
    "id": 521,
    "level": "middle_1",
    "word": "cook",
    "meaning": "料理する",
    "options": [
      "料理する",
      "【時間・場所】から",
      "そこに",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 522,
    "level": "middle_1",
    "word": "quiet",
    "meaning": "静かな",
    "options": [
      "によって",
      "する前に",
      "静かな",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 523,
    "level": "middle_1",
    "word": "classroom",
    "meaning": "教室",
    "options": [
      "に影響を与える",
      "1",
      "行事",
      "教室"
    ],
    "status": "unlearned"
  },
  {
    "id": 524,
    "level": "middle_1",
    "word": "famous",
    "meaning": "有名な",
    "options": [
      "家",
      "を通り抜けて",
      "有名な",
      "を与える、渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 525,
    "level": "middle_1",
    "word": "flower",
    "meaning": "花",
    "options": [
      "を生産する",
      "市、都会",
      "最後の",
      "花"
    ],
    "status": "unlearned"
  },
  {
    "id": 526,
    "level": "middle_1",
    "word": "yesterday",
    "meaning": "昨日",
    "options": [
      "仕事",
      "もっと",
      "値段",
      "昨日"
    ],
    "status": "unlearned"
  },
  {
    "id": 527,
    "level": "middle_1",
    "word": "desk",
    "meaning": "机",
    "options": [
      "図書館",
      "市場",
      "机",
      "を生産する"
    ],
    "status": "unlearned"
  },
  {
    "id": 528,
    "level": "middle_1",
    "word": "fruit",
    "meaning": "果物",
    "options": [
      "するとき",
      "果物",
      "数、数字",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 529,
    "level": "middle_1",
    "word": "cat",
    "meaning": "猫",
    "options": [
      "【時間・場所】から",
      "教室",
      "社会",
      "猫"
    ],
    "status": "unlearned"
  },
  {
    "id": 530,
    "level": "middle_1",
    "word": "English",
    "meaning": "英語",
    "options": [
      "米、ご飯",
      "英語",
      "すべての",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 531,
    "level": "middle_1",
    "word": "busy",
    "meaning": "忙しい",
    "options": [
      "いつも",
      "国家の",
      "を運ぶ",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 532,
    "level": "middle_1",
    "word": "dish",
    "meaning": "皿",
    "options": [
      "皿",
      "のまわりに",
      "死ぬ",
      "およそ、約、ごろ"
    ],
    "status": "unlearned"
  },
  {
    "id": 533,
    "level": "middle_1",
    "word": "hat",
    "meaning": "帽子",
    "options": [
      "を着ている",
      "に影響を与える",
      "帽子",
      "上へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 534,
    "level": "middle_1",
    "word": "library",
    "meaning": "図書館",
    "options": [
      "およそ、約、ごろ",
      "図書館",
      "取る",
      "必要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 535,
    "level": "middle_1",
    "word": "bike",
    "meaning": "自転車",
    "options": [
      "美しい",
      "人々",
      "もまた",
      "自転車"
    ],
    "status": "unlearned"
  },
  {
    "id": 536,
    "level": "middle_1",
    "word": "rice",
    "meaning": "米、ご飯",
    "options": [
      "行事",
      "米、ご飯",
      "でない",
      "先生"
    ],
    "status": "unlearned"
  },
  {
    "id": 537,
    "level": "middle_1",
    "word": "swim",
    "meaning": "泳ぐ",
    "options": [
      "待つ",
      "泳ぐ",
      "軽い・光",
      "を続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 538,
    "level": "middle_1",
    "word": "math",
    "meaning": "数学",
    "options": [
      "数学",
      "新しい",
      "手などを挙げる",
      "それは"
    ],
    "status": "unlearned"
  },
  {
    "id": 539,
    "level": "middle_1",
    "word": "apple",
    "meaning": "りんご",
    "options": [
      "を置く",
      "どれもない",
      "赤",
      "りんご"
    ],
    "status": "unlearned"
  },
  {
    "id": 540,
    "level": "middle_1",
    "word": "festival",
    "meaning": "祭り",
    "options": [
      "月",
      "〜のあとに",
      "より良い",
      "祭り"
    ],
    "status": "unlearned"
  },
  {
    "id": 541,
    "level": "middle_1",
    "word": "cute",
    "meaning": "かわいい",
    "options": [
      "たのむ",
      "を手伝う",
      "身体",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 542,
    "level": "middle_1",
    "word": "homework",
    "meaning": "宿題",
    "options": [
      "を保つ",
      "宿題",
      "最も良い",
      "部屋"
    ],
    "status": "unlearned"
  },
  {
    "id": 543,
    "level": "middle_1",
    "word": "sunny",
    "meaning": "晴れの",
    "options": [
      "手伝う",
      "晴れの",
      "5月",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 544,
    "level": "middle_1",
    "word": "subway",
    "meaning": "地下鉄",
    "options": [
      "地下鉄",
      "全部、全員、全て",
      "ほとんど",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 545,
    "level": "middle_1",
    "word": "Japan",
    "meaning": "日本",
    "options": [
      "必要な",
      "〜と一緒に",
      "行く",
      "日本"
    ],
    "status": "unlearned"
  },
  {
    "id": 546,
    "level": "middle_1",
    "word": "Sunday",
    "meaning": "日曜日",
    "options": [
      "心",
      "ついに、やっと",
      "運転する",
      "日曜日"
    ],
    "status": "unlearned"
  },
  {
    "id": 547,
    "level": "middle_1",
    "word": "June",
    "meaning": "6月",
    "options": [
      "権利",
      "美しい",
      "することがあり得る",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 548,
    "level": "middle_1",
    "word": "notebook",
    "meaning": "ノート",
    "options": [
      "切る",
      "目",
      "ノート",
      "時刻"
    ],
    "status": "unlearned"
  },
  {
    "id": 549,
    "level": "middle_1",
    "word": "leave",
    "meaning": "去る",
    "options": [
      "母",
      "を支援する",
      "去る",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 550,
    "level": "middle_1",
    "word": "put",
    "meaning": "を置く",
    "options": [
      "上へ",
      "を置く",
      "いつも",
      "税、税金"
    ],
    "status": "unlearned"
  },
  {
    "id": 551,
    "level": "middle_1",
    "word": "old",
    "meaning": "古い",
    "options": [
      "の向こう側に",
      "最も",
      "仕事",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 552,
    "level": "middle_1",
    "word": "student",
    "meaning": "生徒",
    "options": [
      "生徒",
      "しかし",
      "まだ",
      "年"
    ],
    "status": "unlearned"
  },
  {
    "id": 553,
    "level": "middle_1",
    "word": "big",
    "meaning": "大きい",
    "options": [
      "それと",
      "を通り抜けて",
      "大きい",
      "壊れる、破る"
    ],
    "status": "unlearned"
  },
  {
    "id": 554,
    "level": "middle_1",
    "word": "country",
    "meaning": "国",
    "options": [
      "信じる",
      "国",
      "大きい、広い",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 555,
    "level": "middle_1",
    "word": "help",
    "meaning": "を手伝う",
    "options": [
      "を説明する",
      "科学",
      "昨日",
      "を手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 556,
    "level": "middle_1",
    "word": "where",
    "meaning": "どこ",
    "options": [
      "を計画する",
      "2",
      "特徴、論点",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 557,
    "level": "middle_1",
    "word": "turn",
    "meaning": "曲がる",
    "options": [
      "人",
      "自動車",
      "曲がる",
      "店"
    ],
    "status": "unlearned"
  },
  {
    "id": 558,
    "level": "middle_1",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "問題",
      "そして",
      "家族",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 559,
    "level": "middle_1",
    "word": "hand",
    "meaning": "手",
    "options": [
      "興味",
      "店",
      "今まで、かつて",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 560,
    "level": "middle_1",
    "word": "place",
    "meaning": "場所",
    "options": [
      "〜と一緒に",
      "滞在する",
      "場所",
      "大統領"
    ],
    "status": "unlearned"
  },
  {
    "id": 561,
    "level": "middle_1",
    "word": "small",
    "meaning": "小さい",
    "options": [
      "多分",
      "を受け取る",
      "小さい",
      "の中に"
    ],
    "status": "unlearned"
  },
  {
    "id": 562,
    "level": "middle_1",
    "word": "number",
    "meaning": "数、数字",
    "options": [
      "夏",
      "たのむ",
      "数、数字",
      "日本"
    ],
    "status": "unlearned"
  },
  {
    "id": 563,
    "level": "middle_1",
    "word": "always",
    "meaning": "いつも",
    "options": [
      "美しい",
      "いつも",
      "行く",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 564,
    "level": "middle_1",
    "word": "night",
    "meaning": "夜",
    "options": [
      "公園",
      "夜",
      "を知っている",
      "5月"
    ],
    "status": "unlearned"
  },
  {
    "id": 565,
    "level": "middle_1",
    "word": "live",
    "meaning": "住む",
    "options": [
      "運転する",
      "忙しい",
      "特徴、論点",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 566,
    "level": "middle_1",
    "word": "today",
    "meaning": "今日",
    "options": [
      "目",
      "今日",
      "取る",
      "〜するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 567,
    "level": "middle_1",
    "word": "before",
    "meaning": "の前に",
    "options": [
      "彼自身を",
      "ついに、やっと",
      "の前に",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 568,
    "level": "middle_1",
    "word": "large",
    "meaning": "大きい",
    "options": [
      "曲がる",
      "滞在する",
      "大きい",
      "静かな"
    ],
    "status": "unlearned"
  },
  {
    "id": 569,
    "level": "middle_1",
    "word": "room",
    "meaning": "部屋",
    "options": [
      "部屋",
      "時間",
      "水",
      "〜さえ"
    ],
    "status": "unlearned"
  },
  {
    "id": 570,
    "level": "middle_1",
    "word": "mother",
    "meaning": "母",
    "options": [
      "母",
      "を切る",
      "戦争",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 571,
    "level": "middle_1",
    "word": "money",
    "meaning": "お金",
    "options": [
      "しかし",
      "〜の後で",
      "お金",
      "〜の様に見える"
    ],
    "status": "unlearned"
  },
  {
    "id": 572,
    "level": "middle_1",
    "word": "month",
    "meaning": "月",
    "options": [
      "月",
      "青い",
      "意味する",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 573,
    "level": "middle_1",
    "word": "different",
    "meaning": "色々な",
    "options": [
      "意味する",
      "異なる",
      "である、になる",
      "色々な"
    ],
    "status": "unlearned"
  },
  {
    "id": 574,
    "level": "middle_1",
    "word": "study",
    "meaning": "を勉強する",
    "options": [
      "を勉強する",
      "彼の",
      "を設立する",
      "公園"
    ],
    "status": "unlearned"
  },
  {
    "id": 575,
    "level": "middle_1",
    "word": "book",
    "meaning": "本",
    "options": [
      "本",
      "〜するつもり",
      "年",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 576,
    "level": "middle_1",
    "word": "eye",
    "meaning": "目",
    "options": [
      "を手渡す",
      "ベッド",
      "目",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 577,
    "level": "middle_1",
    "word": "job",
    "meaning": "仕事",
    "options": [
      "日本",
      "猫",
      "仕事",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 578,
    "level": "middle_1",
    "word": "kind",
    "meaning": "親切な",
    "options": [
      "彼らは",
      "店",
      "親切な",
      "彼らの"
    ],
    "status": "unlearned"
  },
  {
    "id": 579,
    "level": "middle_1",
    "word": "black",
    "meaning": "黒い",
    "options": [
      "に着く、到着する",
      "ノート",
      "だろうに",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 580,
    "level": "middle_1",
    "word": "house",
    "meaning": "家",
    "options": [
      "必要な",
      "家",
      "座る",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 581,
    "level": "middle_1",
    "word": "friend",
    "meaning": "友達",
    "options": [
      "友達",
      "を支援する",
      "お金",
      "を増やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 582,
    "level": "middle_1",
    "word": "father",
    "meaning": "父",
    "options": [
      "父",
      "水",
      "番号",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 583,
    "level": "middle_1",
    "word": "sit",
    "meaning": "座る",
    "options": [
      "座る",
      "を試す",
      "を増やす",
      "〜するつもり"
    ],
    "status": "unlearned"
  },
  {
    "id": 584,
    "level": "middle_1",
    "word": "hour",
    "meaning": "1時間",
    "options": [
      "を発見する",
      "〜だけ",
      "1時間",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 585,
    "level": "middle_1",
    "word": "bad",
    "meaning": "悪い",
    "options": [
      "私は、私が",
      "手伝う",
      "悪い",
      "をつかむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 586,
    "level": "middle_1",
    "word": "meet",
    "meaning": "と会う",
    "options": [
      "そこに",
      "名前",
      "を支援する",
      "と会う"
    ],
    "status": "unlearned"
  },
  {
    "id": 587,
    "level": "middle_1",
    "word": "car",
    "meaning": "自動車",
    "options": [
      "私の",
      "自動車",
      "およそ、約、ごろ",
      "とまる、停止する"
    ],
    "status": "unlearned"
  },
  {
    "id": 588,
    "level": "middle_1",
    "word": "city",
    "meaning": "市、都会",
    "options": [
      "もし〜ならば",
      "ほかの、別の",
      "もっと",
      "市、都会"
    ],
    "status": "unlearned"
  },
  {
    "id": 589,
    "level": "middle_1",
    "word": "name",
    "meaning": "名前",
    "options": [
      "名前",
      "母",
      "を置いていく",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 590,
    "level": "middle_1",
    "word": "best",
    "meaning": "最も良い",
    "options": [
      "最も良い",
      "公園",
      "を発見する",
      "目"
    ],
    "status": "unlearned"
  },
  {
    "id": 591,
    "level": "middle_1",
    "word": "idea",
    "meaning": "考え",
    "options": [
      "賛成する",
      "考え",
      "皿",
      "行事"
    ],
    "status": "unlearned"
  },
  {
    "id": 592,
    "level": "middle_1",
    "word": "body",
    "meaning": "身体",
    "options": [
      "身体",
      "座る",
      "であるけれど",
      "権利"
    ],
    "status": "unlearned"
  },
  {
    "id": 593,
    "level": "middle_1",
    "word": "information",
    "meaning": "情報",
    "options": [
      "を見る",
      "考え",
      "のような",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 594,
    "level": "middle_1",
    "word": "stop",
    "meaning": "止める",
    "options": [
      "止める",
      "を通り抜けて",
      "を発見する",
      "を失う"
    ],
    "status": "unlearned"
  },
  {
    "id": 595,
    "level": "middle_1",
    "word": "face",
    "meaning": "顔",
    "options": [
      "母",
      "顔",
      "権利",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 596,
    "level": "middle_1",
    "word": "speak",
    "meaning": "を話す",
    "options": [
      "を着ている",
      "社会",
      "を話す",
      "どこ"
    ],
    "status": "unlearned"
  },
  {
    "id": 597,
    "level": "middle_1",
    "word": "read",
    "meaning": "を読む",
    "options": [
      "彼の",
      "を読む",
      "待つ",
      "側面"
    ],
    "status": "unlearned"
  },
  {
    "id": 598,
    "level": "middle_1",
    "word": "door",
    "meaning": "戸、ドア",
    "options": [
      "になる",
      "大きい",
      "戸、ドア",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 599,
    "level": "middle_1",
    "word": "sure",
    "meaning": "確信して",
    "options": [
      "少年",
      "感じる",
      "父",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 600,
    "level": "middle_1",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "歴史",
      "緑",
      "賛成する",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 601,
    "level": "middle_1",
    "word": "open",
    "meaning": "を開ける",
    "options": [
      "たった今",
      "学ぶ、習う",
      "を開ける",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 602,
    "level": "middle_1",
    "word": "morning",
    "meaning": "朝",
    "options": [
      "他の",
      "〜できる",
      "朝",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 603,
    "level": "middle_1",
    "word": "girl",
    "meaning": "少女",
    "options": [
      "聞く",
      "あれらの",
      "少女",
      "【場所】に、で"
    ],
    "status": "unlearned"
  },
  {
    "id": 604,
    "level": "middle_1",
    "word": "early",
    "meaning": "早く",
    "options": [
      "を持っている",
      "これらの",
      "壊れる、破る",
      "早く"
    ],
    "status": "unlearned"
  },
  {
    "id": 605,
    "level": "middle_1",
    "word": "food",
    "meaning": "食べ物",
    "options": [
      "駅",
      "自動車",
      "食べ物",
      "この前の"
    ],
    "status": "unlearned"
  },
  {
    "id": 606,
    "level": "middle_1",
    "word": "teacher",
    "meaning": "先生",
    "options": [
      "全ての、全部の",
      "先生",
      "方法",
      "ある、いる"
    ],
    "status": "unlearned"
  },
  {
    "id": 607,
    "level": "middle_1",
    "word": "boy",
    "meaning": "少年",
    "options": [
      "少年",
      "を与える、渡す",
      "〜以来",
      "大きい"
    ],
    "status": "unlearned"
  },
  {
    "id": 608,
    "level": "middle_1",
    "word": "music",
    "meaning": "音楽",
    "options": [
      "彼の",
      "良い",
      "音楽",
      "秒"
    ],
    "status": "unlearned"
  },
  {
    "id": 609,
    "level": "middle_1",
    "word": "buy",
    "meaning": "を買う",
    "options": [
      "古い",
      "を買う",
      "上へ",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 610,
    "level": "middle_1",
    "word": "wait",
    "meaning": "待つ",
    "options": [
      "待つ",
      "多くの",
      "時刻",
      "緑"
    ],
    "status": "unlearned"
  },
  {
    "id": 611,
    "level": "middle_1",
    "word": "market",
    "meaning": "市場",
    "options": [
      "市場",
      "文化",
      "実は、本当は",
      "参加する"
    ],
    "status": "unlearned"
  },
  {
    "id": 612,
    "level": "middle_1",
    "word": "season",
    "meaning": "季節",
    "options": [
      "もの、こと",
      "ここに",
      "季節",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 613,
    "level": "middle_1",
    "word": "doctor",
    "meaning": "医者",
    "options": [
      "生きる",
      "するとき",
      "人",
      "医者"
    ],
    "status": "unlearned"
  },
  {
    "id": 614,
    "level": "middle_1",
    "word": "movie",
    "meaning": "映画",
    "options": [
      "映画",
      "を創造する",
      "よりも",
      "行く"
    ],
    "status": "unlearned"
  },
  {
    "id": 615,
    "level": "middle_1",
    "word": "tree",
    "meaning": "木",
    "options": [
      "場所",
      "全ての、全部の",
      "〜の中へ",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 616,
    "level": "middle_1",
    "word": "red",
    "meaning": "赤",
    "options": [
      "植物",
      "赤",
      "を読む",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 617,
    "level": "middle_1",
    "word": "summer",
    "meaning": "夏",
    "options": [
      "新しい",
      "を持っている",
      "夏",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 618,
    "level": "middle_1",
    "word": "bed",
    "meaning": "ベッド",
    "options": [
      "ベッド",
      "それは",
      "だろうに",
      "他の"
    ],
    "status": "unlearned"
  },
  {
    "id": 619,
    "level": "middle_1",
    "word": "sound",
    "meaning": "音",
    "options": [
      "進路",
      "図書館",
      "大学",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 620,
    "level": "middle_1",
    "word": "station",
    "meaning": "駅",
    "options": [
      "駅",
      "戦争",
      "2",
      "の中に"
    ],
    "status": "unlearned"
  },
  {
    "id": 621,
    "level": "middle_2",
    "word": "be",
    "meaning": "ある、いる",
    "options": [
      "いつも",
      "未来",
      "ある、いる",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 622,
    "level": "middle_2",
    "word": "of",
    "meaning": "〜の",
    "options": [
      "だろうに",
      "今日",
      "だけれども",
      "〜の"
    ],
    "status": "unlearned"
  },
  {
    "id": 623,
    "level": "middle_2",
    "word": "are",
    "meaning": "ある、いる",
    "options": [
      "ある、いる",
      "生徒",
      "公園",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 624,
    "level": "middle_2",
    "word": "for",
    "meaning": "にとって",
    "options": [
      "にとって",
      "古い",
      "映画",
      "なぜなら"
    ],
    "status": "unlearned"
  },
  {
    "id": 625,
    "level": "middle_2",
    "word": "with",
    "meaning": "〜と一緒に",
    "options": [
      "【時間・場所】から",
      "情報",
      "〜と一緒に",
      "取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 626,
    "level": "middle_2",
    "word": "on",
    "meaning": "の上に",
    "options": [
      "の上に",
      "国",
      "今まで、かつて",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 627,
    "level": "middle_2",
    "word": "say",
    "meaning": "と書いてある",
    "options": [
      "を必要とする",
      "と会う",
      "と書いてある",
      "いくつかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 628,
    "level": "middle_2",
    "word": "by",
    "meaning": "によって",
    "options": [
      "1",
      "によって",
      "学ぶ、習う",
      "を与える、渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 629,
    "level": "middle_2",
    "word": "as",
    "meaning": "のような",
    "options": [
      "環境",
      "のような",
      "望む",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 630,
    "level": "middle_2",
    "word": "can",
    "meaning": "することがあり得る",
    "options": [
      "を知っている",
      "最も",
      "賛成する",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 631,
    "level": "middle_2",
    "word": "if",
    "meaning": "もし〜ならば",
    "options": [
      "をつかむ",
      "黒い",
      "もし〜ならば",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 632,
    "level": "middle_2",
    "word": "all",
    "meaning": "全ての、全部の",
    "options": [
      "商売",
      "全ての、全部の",
      "必要な",
      "人、個人"
    ],
    "status": "unlearned"
  },
  {
    "id": 633,
    "level": "middle_2",
    "word": "about",
    "meaning": "およそ、約、ごろ",
    "options": [
      "を支援する",
      "説明する",
      "泳ぐ",
      "およそ、約、ごろ"
    ],
    "status": "unlearned"
  },
  {
    "id": 634,
    "level": "middle_2",
    "word": "will",
    "meaning": "〜するつもり",
    "options": [
      "話す",
      "着る",
      "〜するつもり",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 635,
    "level": "middle_2",
    "word": "think",
    "meaning": "考える",
    "options": [
      "確信して",
      "母",
      "質問",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 636,
    "level": "middle_2",
    "word": "when",
    "meaning": "するとき",
    "options": [
      "するとき",
      "問題、困ったこと",
      "本当の",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 637,
    "level": "middle_2",
    "word": "which",
    "meaning": "どちらの",
    "options": [
      "かわいい",
      "〜できる",
      "どちらの",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 638,
    "level": "middle_2",
    "word": "people",
    "meaning": "人々",
    "options": [
      "人々",
      "を試す",
      "止める",
      "色々な"
    ],
    "status": "unlearned"
  },
  {
    "id": 639,
    "level": "middle_2",
    "word": "take",
    "meaning": "取る",
    "options": [
      "駅",
      "するとき",
      "取る",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 640,
    "level": "middle_2",
    "word": "into",
    "meaning": "〜の中へ",
    "options": [
      "曲がる",
      "彼らは",
      "〜の中へ",
      "色々な"
    ],
    "status": "unlearned"
  },
  {
    "id": 641,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "家",
      "考え",
      "見る",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 642,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "を言う",
      "よりも",
      "になる",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 643,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "よりも",
      "全ての、全部の",
      "はじめて",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 644,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "意味する",
      "ほかの",
      "人",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 645,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "よりもっと",
      "日曜日",
      "を置いていく",
      "だけれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 646,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "これらの",
      "かわいい",
      "時間",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 647,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "方法",
      "3",
      "いつも",
      "たいていの"
    ],
    "status": "unlearned"
  },
  {
    "id": 648,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "を続ける",
      "青い",
      "だから、なので",
      "目"
    ],
    "status": "unlearned"
  },
  {
    "id": 649,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "花",
      "を発見する",
      "5月",
      "番号"
    ],
    "status": "unlearned"
  },
  {
    "id": 650,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "すでに、もう",
      "はじめて",
      "道",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 651,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "問題",
      "人",
      "文化",
      "子供"
    ],
    "status": "unlearned"
  },
  {
    "id": 652,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "仕事",
      "し続ける",
      "より良い",
      "家族"
    ],
    "status": "unlearned"
  },
  {
    "id": 653,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "と書いてある",
      "世界",
      "住む",
      "子供"
    ],
    "status": "unlearned"
  },
  {
    "id": 654,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "を必要とする",
      "払う",
      "見る",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 655,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "科学",
      "の向こう側に",
      "人生",
      "感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 656,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "になる",
      "市場",
      "質問",
      "〜のあとに"
    ],
    "status": "unlearned"
  },
  {
    "id": 657,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "音楽",
      "離れて",
      "市場",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 658,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "を話す",
      "たくさん",
      "長い",
      "心"
    ],
    "status": "unlearned"
  },
  {
    "id": 659,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "置く",
      "医者",
      "人",
      "しばらくの間"
    ],
    "status": "unlearned"
  },
  {
    "id": 660,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "意味する",
      "使う",
      "彼自身を",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 661,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "環境",
      "戦争",
      "し続ける",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 662,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "〜の様に見える",
      "を変える",
      "少女",
      "話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 663,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "大学",
      "良い",
      "を見せる",
      "そこに"
    ],
    "status": "unlearned"
  },
  {
    "id": 664,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "山",
      "道路",
      "部分",
      "手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 665,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "【時間・場所】から",
      "月",
      "変化",
      "聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 666,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "それと",
      "規則",
      "質問",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 667,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "を飲む",
      "少女",
      "小さい",
      "を動かす"
    ],
    "status": "unlearned"
  },
  {
    "id": 668,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "可能な",
      "子供",
      "生きる",
      "の上に"
    ],
    "status": "unlearned"
  },
  {
    "id": 669,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "することがあり得る",
      "猫",
      "信じる",
      "質問"
    ],
    "status": "unlearned"
  },
  {
    "id": 670,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "をつかむ",
      "手伝う",
      "しなければならない",
      "〜以来"
    ],
    "status": "unlearned"
  },
  {
    "id": 671,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "行、線",
      "報告",
      "手伝う",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 672,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "猫",
      "起こる",
      "人間の",
      "でない"
    ],
    "status": "unlearned"
  },
  {
    "id": 673,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "する前に",
      "説明する",
      "法律",
      "彼らの"
    ],
    "status": "unlearned"
  },
  {
    "id": 674,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "そして",
      "道路",
      "しなければならない",
      "〜するつもり"
    ],
    "status": "unlearned"
  },
  {
    "id": 675,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "水",
      "をがまんする",
      "を設立する",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 676,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "大きい",
      "滞在する",
      "物語",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 677,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "そのとき",
      "若い",
      "を手伝う",
      "5月"
    ],
    "status": "unlearned"
  },
  {
    "id": 678,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "動く、引っ越す",
      "あの",
      "異なる",
      "開発"
    ],
    "status": "unlearned"
  },
  {
    "id": 679,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "言葉",
      "決定",
      "年",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 680,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "商売",
      "戦争",
      "事実、現実",
      "あれらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 681,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "の中に",
      "自由な",
      "側面",
      "実現する"
    ],
    "status": "unlearned"
  },
  {
    "id": 682,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "研究、調査",
      "最も",
      "種類",
      "裏の、後ろの"
    ],
    "status": "unlearned"
  },
  {
    "id": 683,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "朝",
      "に直面する",
      "を受け入れる",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 684,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "を増やす",
      "時刻",
      "戻って、返して",
      "〜の様に見える"
    ],
    "status": "unlearned"
  },
  {
    "id": 685,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "彼の",
      "終わる",
      "全部、全員、全て",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 686,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "すべての",
      "を失う",
      "行く",
      "先生"
    ],
    "status": "unlearned"
  },
  {
    "id": 687,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "を見せる",
      "払う",
      "裏の、後ろの",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 688,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "そこに",
      "について、に関する",
      "を手伝う",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 689,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "夏",
      "決定",
      "〜に〜をさせる",
      "を続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 690,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "を失う",
      "〜するとき",
      "学ぶ、習う",
      "動く、引っ越す"
    ],
    "status": "unlearned"
  },
  {
    "id": 691,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "を変える",
      "になる",
      "側面",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 692,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "たった今",
      "払う",
      "大きい",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 693,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "見る",
      "に話す",
      "本",
      "起こる"
    ],
    "status": "unlearned"
  },
  {
    "id": 694,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "私たちの",
      "に直面する",
      "物語",
      "もまた"
    ],
    "status": "unlearned"
  },
  {
    "id": 695,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "を創造する",
      "することがあり得る",
      "一生懸命に",
      "地下鉄"
    ],
    "status": "unlearned"
  },
  {
    "id": 696,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "加える",
      "しかし",
      "他の",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 697,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "費やす",
      "を管理する",
      "生活、人生",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 698,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "座る",
      "どちらの",
      "あれらの",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 699,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "長い",
      "【時間・場所】から",
      "人",
      "変化"
    ],
    "status": "unlearned"
  },
  {
    "id": 700,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "を研究する",
      "を着ている",
      "およそ、約、ごろ",
      "芸術"
    ],
    "status": "unlearned"
  },
  {
    "id": 701,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "進路",
      "時間",
      "を計画する",
      "戦争"
    ],
    "status": "unlearned"
  },
  {
    "id": 702,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "ほとんど",
      "人々",
      "歴史",
      "考え"
    ],
    "status": "unlearned"
  },
  {
    "id": 703,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "どんな・どのように",
      "成長する",
      "宿題",
      "ある、いる"
    ],
    "status": "unlearned"
  },
  {
    "id": 704,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "理由",
      "若い",
      "多くの",
      "国際的な"
    ],
    "status": "unlearned"
  },
  {
    "id": 705,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "ここに",
      "を研究する",
      "歌",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 706,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "建物",
      "を建てる",
      "の上に",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 707,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "ちがい",
      "によって",
      "滞在する",
      "顔"
    ],
    "status": "unlearned"
  },
  {
    "id": 708,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "始まる",
      "落ちる",
      "自転車",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 709,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "側、面",
      "取る",
      "緑",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 710,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "を言う",
      "店",
      "切る",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 711,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "実現する",
      "大学",
      "壊れる、破る",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 712,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "水",
      "彼らの",
      "科学",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 713,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "を切る",
      "料理する",
      "〜さえ",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 714,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "より良い",
      "覆う",
      "良い",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 715,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "大統領",
      "を決める",
      "商売",
      "を飲む"
    ],
    "status": "unlearned"
  },
  {
    "id": 716,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "1時間",
      "彼らを",
      "心",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 717,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "終わる",
      "軽い・光",
      "興味",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 718,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "を発達させる",
      "を決める",
      "警察",
      "社会"
    ],
    "status": "unlearned"
  },
  {
    "id": 719,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "たいていの",
      "彼は",
      "新しい",
      "帰る、戻る"
    ],
    "status": "unlearned"
  },
  {
    "id": 720,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "今日",
      "自由な",
      "政府",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 721,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "値段",
      "特徴、論点",
      "3",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 722,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "を説明する",
      "とても",
      "を作る",
      "歌"
    ],
    "status": "unlearned"
  },
  {
    "id": 723,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "古い",
      "気に懸ける",
      "望む",
      "はじめて"
    ],
    "status": "unlearned"
  },
  {
    "id": 724,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "かばん",
      "を管理する",
      "たいていの",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 725,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "を動かす",
      "りんご",
      "を運ぶ",
      "年"
    ],
    "status": "unlearned"
  },
  {
    "id": 726,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "それと",
      "若い",
      "道",
      "ついに、やっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 727,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "実は、本当は",
      "およそ、約、ごろ",
      "運転する",
      "変化"
    ],
    "status": "unlearned"
  },
  {
    "id": 728,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "山",
      "感じる",
      "建物",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 729,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "そのとき",
      "そして",
      "参加する",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 730,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "かわいい",
      "社会",
      "を飲む",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 731,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "小さい",
      "歴史",
      "着る",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 732,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "季節",
      "紙",
      "可能な",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 733,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "を生産する",
      "美しい",
      "彼らは",
      "です、ます"
    ],
    "status": "unlearned"
  },
  {
    "id": 734,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "教室",
      "でない",
      "たくさん",
      "教える"
    ],
    "status": "unlearned"
  },
  {
    "id": 735,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "と会う",
      "全ての、全部の",
      "簡単な",
      "〜することができる"
    ],
    "status": "unlearned"
  },
  {
    "id": 736,
    "level": "middle_2",
    "word": "technology",
    "meaning": "科学技術",
    "options": [
      "自由な",
      "1番め、最初",
      "になる",
      "科学技術"
    ],
    "status": "unlearned"
  },
  {
    "id": 737,
    "level": "middle_2",
    "word": "culture",
    "meaning": "文化",
    "options": [
      "かばん",
      "文化",
      "この前の",
      "〜と〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 738,
    "level": "middle_2",
    "word": "plant",
    "meaning": "植物",
    "options": [
      "手などを挙げる",
      "植物",
      "できた",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 739,
    "level": "middle_2",
    "word": "rule",
    "meaning": "規則",
    "options": [
      "規則",
      "理由",
      "を動かす",
      "先生"
    ],
    "status": "unlearned"
  },
  {
    "id": 740,
    "level": "middle_2",
    "word": "future",
    "meaning": "未来",
    "options": [
      "水",
      "未来",
      "見る",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 741,
    "level": "middle_2",
    "word": "nature",
    "meaning": "自然",
    "options": [
      "図書館",
      "最も良い",
      "自然",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 742,
    "level": "middle_2",
    "word": "common",
    "meaning": "共通の",
    "options": [
      "考え",
      "駅",
      "説明する",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 743,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "見る",
      "を持っている",
      "することがあり得る",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 744,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "をがまんする",
      "になる",
      "一生懸命に",
      "もまた"
    ],
    "status": "unlearned"
  },
  {
    "id": 745,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "を主催する",
      "よりも",
      "食べ物",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 746,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "ほかの",
      "を発達させる",
      "水",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 747,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "重要な",
      "よりもっと",
      "戻って、返して",
      "動く、引っ越す"
    ],
    "status": "unlearned"
  },
  {
    "id": 748,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "確信して",
      "手",
      "すでに、もう",
      "これらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 749,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "方法",
      "を説明する",
      "落ちる",
      "一生懸命に"
    ],
    "status": "unlearned"
  },
  {
    "id": 750,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "になる",
      "のような",
      "だから、なので",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 751,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "を想像する",
      "軽い・光",
      "物語",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 752,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "人生",
      "種類",
      "を話す",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 753,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "科学技術",
      "を買う",
      "子供",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 754,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "仕事",
      "家族",
      "を受け取る",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 755,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "にとって",
      "実現する",
      "世界",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 756,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "忙しい",
      "3",
      "を置く",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 757,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "部屋",
      "感じる",
      "駅",
      "規則"
    ],
    "status": "unlearned"
  },
  {
    "id": 758,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "になる",
      "国際的な",
      "【場所】に、で",
      "猫"
    ],
    "status": "unlearned"
  },
  {
    "id": 759,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "ノート",
      "最も",
      "戦争",
      "を設立する"
    ],
    "status": "unlearned"
  },
  {
    "id": 760,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "来る",
      "着る",
      "を置いていく",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 761,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "置く",
      "たいていの",
      "果物",
      "決定"
    ],
    "status": "unlearned"
  },
  {
    "id": 762,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "意味する",
      "必要な",
      "によって",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 763,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "起こる",
      "し続ける",
      "およそ、約、ごろ",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 764,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "話す",
      "木",
      "祭り",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 765,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "彼女は",
      "を見せる",
      "泳ぐ",
      "道路"
    ],
    "status": "unlearned"
  },
  {
    "id": 766,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "この前の",
      "部分",
      "を読む",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 767,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "自由な",
      "夏",
      "聞く",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 768,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "質問",
      "を経験する",
      "死",
      "2"
    ],
    "status": "unlearned"
  },
  {
    "id": 769,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "を動かす",
      "一生懸命に",
      "いくつかの",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 770,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "生きる",
      "重要な",
      "理由",
      "でない"
    ],
    "status": "unlearned"
  },
  {
    "id": 771,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "人、個人",
      "言葉",
      "信じる",
      "季節"
    ],
    "status": "unlearned"
  },
  {
    "id": 772,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "同じもの",
      "をつかむ",
      "の中に",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 773,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "持って来る",
      "取る",
      "見る",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 774,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "種類",
      "に影響を与える",
      "起こる",
      "行く"
    ],
    "status": "unlearned"
  },
  {
    "id": 775,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "友達",
      "を見せる",
      "を開ける",
      "する前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 776,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "を知っている",
      "しなければならない",
      "本",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 777,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "なにか",
      "だから、なので",
      "数、数字",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 778,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "青い",
      "物語",
      "全ての、全部の",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 779,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "を開ける",
      "あれらの",
      "必要な",
      "若い"
    ],
    "status": "unlearned"
  },
  {
    "id": 780,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "目",
      "異なる",
      "歴史",
      "友達"
    ],
    "status": "unlearned"
  },
  {
    "id": 781,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "〜の",
      "上へ",
      "言葉",
      "に話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 782,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "彼らは",
      "〜することができる",
      "商売",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 783,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "側面",
      "大統領",
      "住む",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 784,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "税、税金",
      "を建てる",
      "〜と一緒に",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 785,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "覆う",
      "なにか",
      "感じる",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 786,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "を撮る・取る",
      "異なる",
      "時刻",
      "少年"
    ],
    "status": "unlearned"
  },
  {
    "id": 787,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "英語",
      "国",
      "最も",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 788,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "起こる",
      "を失う",
      "を手伝う",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 789,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "少年",
      "のまわりに",
      "彼らの",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 790,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "非常に",
      "法律",
      "〜で",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 791,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "たくさん",
      "を続ける",
      "よりもっと",
      "を研究する"
    ],
    "status": "unlearned"
  },
  {
    "id": 792,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "参加する",
      "理由",
      "音楽",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 793,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "植物",
      "米、ご飯",
      "おおいに、たいへん",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 794,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "理解する",
      "日、1日",
      "青い",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 795,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "〜さえ",
      "見る",
      "を持っている",
      "はじめて"
    ],
    "status": "unlearned"
  },
  {
    "id": 796,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "に直面する",
      "を〜の状態にする",
      "私の",
      "料理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 797,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "を創造する",
      "若い",
      "だから、なので",
      "質問"
    ],
    "status": "unlearned"
  },
  {
    "id": 798,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "文化",
      "手",
      "加える",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 799,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "始まる",
      "図書館",
      "費やす",
      "のような"
    ],
    "status": "unlearned"
  },
  {
    "id": 800,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "腕",
      "〜するとき",
      "皿",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 801,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "ベッド",
      "私の",
      "人",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 802,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "どれもない",
      "使う",
      "住む",
      "芸術"
    ],
    "status": "unlearned"
  },
  {
    "id": 803,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "意味する",
      "戦争",
      "〜と一緒に",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 804,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "本",
      "軽い・光",
      "歴史",
      "を含む"
    ],
    "status": "unlearned"
  },
  {
    "id": 805,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "だろうに",
      "を保つ",
      "成長する",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 806,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "興味",
      "〜の間",
      "政府",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 807,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "月",
      "を研究する",
      "ほかの",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 808,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "です、ます",
      "を建てる",
      "離れて",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 809,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "国際的な",
      "滞在する",
      "状況",
      "自由な"
    ],
    "status": "unlearned"
  },
  {
    "id": 810,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "必要な",
      "今まで、かつて",
      "落ちる",
      "止める"
    ],
    "status": "unlearned"
  },
  {
    "id": 811,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "賛成する",
      "を設立する",
      "まで、までは",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 812,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "切る",
      "を持っている",
      "を買う",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 813,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "かつて",
      "最も良い",
      "大学",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 814,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "最も",
      "1",
      "を経験する",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 815,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "意味する",
      "気に懸ける",
      "およそ、約、ごろ",
      "を開ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 816,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "部分",
      "人、個人",
      "より良い",
      "もの、こと"
    ],
    "status": "unlearned"
  },
  {
    "id": 817,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "を決める",
      "映画",
      "よりも",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 818,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "宿題",
      "を導く",
      "心",
      "静かな"
    ],
    "status": "unlearned"
  },
  {
    "id": 819,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "を増やす",
      "特徴、論点",
      "軽い・光",
      "大学"
    ],
    "status": "unlearned"
  },
  {
    "id": 820,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "を受け取る",
      "外に",
      "皿",
      "警察"
    ],
    "status": "unlearned"
  },
  {
    "id": 821,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "帰る、戻る",
      "理解する",
      "たくさんの",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 822,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "すべての",
      "死ぬ",
      "もう一つの",
      "自由な"
    ],
    "status": "unlearned"
  },
  {
    "id": 823,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "値段",
      "〜の中へ",
      "続く",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 824,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "を説明する",
      "下に",
      "を切る",
      "建物"
    ],
    "status": "unlearned"
  },
  {
    "id": 825,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "望む",
      "向こうへ",
      "日、1日",
      "警察"
    ],
    "status": "unlearned"
  },
  {
    "id": 826,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "かつて",
      "を発達させる",
      "理解する",
      "を見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 827,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "全ての、全部の",
      "を知っている",
      "を運ぶ",
      "取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 828,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "最も良い",
      "科学",
      "道",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 829,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "緑",
      "運転する",
      "どこ",
      "興味"
    ],
    "status": "unlearned"
  },
  {
    "id": 830,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "そして",
      "日本",
      "建物",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 831,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "参加する",
      "しばらくの間",
      "を主催する",
      "を説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 832,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "社会",
      "建物",
      "より良い",
      "青い"
    ],
    "status": "unlearned"
  },
  {
    "id": 833,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "死",
      "友達",
      "着る",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 834,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "紙",
      "を見せる",
      "着る",
      "成長する"
    ],
    "status": "unlearned"
  },
  {
    "id": 835,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "数学",
      "する前に",
      "を生産する",
      "色々な"
    ],
    "status": "unlearned"
  },
  {
    "id": 836,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "仕事",
      "教える",
      "を得る",
      "公園"
    ],
    "status": "unlearned"
  },
  {
    "id": 837,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "取る",
      "報告",
      "簡単な",
      "する前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 838,
    "level": "middle_2",
    "word": "technology",
    "meaning": "科学技術",
    "options": [
      "生活、人生",
      "戸、ドア",
      "科学技術",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 839,
    "level": "middle_2",
    "word": "culture",
    "meaning": "文化",
    "options": [
      "番号",
      "文化",
      "そのとき",
      "美しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 840,
    "level": "middle_2",
    "word": "plant",
    "meaning": "植物",
    "options": [
      "赤",
      "植物",
      "を開ける",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 841,
    "level": "middle_2",
    "word": "rule",
    "meaning": "規則",
    "options": [
      "を発見する",
      "たいていの",
      "規則",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 842,
    "level": "middle_2",
    "word": "future",
    "meaning": "未来",
    "options": [
      "おおいに、たいへん",
      "未来",
      "若い",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 843,
    "level": "middle_2",
    "word": "nature",
    "meaning": "自然",
    "options": [
      "科学",
      "〜と一緒に",
      "置く",
      "自然"
    ],
    "status": "unlearned"
  },
  {
    "id": 844,
    "level": "middle_2",
    "word": "common",
    "meaning": "共通の",
    "options": [
      "死ぬ",
      "今日",
      "共通の",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 845,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "を開ける",
      "彼らの",
      "見る",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 846,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "決定",
      "になる",
      "今まで、かつて",
      "もまた"
    ],
    "status": "unlearned"
  },
  {
    "id": 847,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "事実、現実",
      "よりも",
      "これらの",
      "を研究する"
    ],
    "status": "unlearned"
  },
  {
    "id": 848,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "かつて",
      "なにか",
      "去る",
      "ほかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 849,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "よりもっと",
      "いくつかの",
      "考え",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 850,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "報告",
      "仕事・働く",
      "これらの",
      "規則"
    ],
    "status": "unlearned"
  },
  {
    "id": 851,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "食べ物",
      "〜の様に見える",
      "方法",
      "もし〜ならば"
    ],
    "status": "unlearned"
  },
  {
    "id": 852,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "心",
      "〜のあとに",
      "止める",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 853,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "最も良い",
      "を発見する",
      "続く",
      "として"
    ],
    "status": "unlearned"
  },
  {
    "id": 854,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "の中に",
      "人生",
      "同じもの",
      "おおいに、たいへん"
    ],
    "status": "unlearned"
  },
  {
    "id": 855,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "待つ",
      "人、個人",
      "子供",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 856,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "実現する",
      "静かな",
      "仕事",
      "考え"
    ],
    "status": "unlearned"
  },
  {
    "id": 857,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "多分",
      "生徒",
      "を変える",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 858,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "【時刻】に",
      "たのむ",
      "一生懸命に",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 859,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "を守る、保護する",
      "置く",
      "感じる",
      "待つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 860,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "教室",
      "になる",
      "終わる",
      "置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 861,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "そうしなければ",
      "りんご",
      "部屋",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 862,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "たくさん",
      "事実、現実",
      "情報",
      "もの、こと"
    ],
    "status": "unlearned"
  },
  {
    "id": 863,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "置く",
      "全ての、全部の",
      "費やす",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 864,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "を見る",
      "意味する",
      "そのとき",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 865,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "し続ける",
      "続く",
      "全部、全員、全て",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 866,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "精神",
      "社会",
      "話す",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 867,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "下に",
      "物語",
      "に着く、到着する",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 868,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "水",
      "部分",
      "花",
      "続く"
    ],
    "status": "unlearned"
  },
  {
    "id": 869,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "住む",
      "聞く",
      "行事",
      "を説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 870,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "子供",
      "この",
      "質問",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 871,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "を動かす",
      "【時間・場所】から",
      "店",
      "どれもみな"
    ],
    "status": "unlearned"
  },
  {
    "id": 872,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "部屋",
      "生きる",
      "の方へ",
      "科学技術"
    ],
    "status": "unlearned"
  },
  {
    "id": 873,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "かばん",
      "信じる",
      "場所",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 874,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "音楽",
      "をつかむ",
      "すでに、もう",
      "若い"
    ],
    "status": "unlearned"
  },
  {
    "id": 875,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "歴史",
      "持って来る",
      "自由な",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 876,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "ほかの",
      "起こる",
      "行く",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 877,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "する前に",
      "待つ",
      "泳ぐ",
      "祭り"
    ],
    "status": "unlearned"
  },
  {
    "id": 878,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "しなければならない",
      "国",
      "し続ける",
      "するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 879,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "欲しい",
      "他の",
      "水",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 880,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "物語",
      "今まで、かつて",
      "そして",
      "道路"
    ],
    "status": "unlearned"
  },
  {
    "id": 881,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "親切な",
      "落ちる",
      "全ての、全部の",
      "若い"
    ],
    "status": "unlearned"
  },
  {
    "id": 882,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "異なる",
      "理由",
      "待つ",
      "良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 883,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "国家の",
      "言葉",
      "大学",
      "決してない"
    ],
    "status": "unlearned"
  },
  {
    "id": 884,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "友達",
      "少女",
      "信じる",
      "商売"
    ],
    "status": "unlearned"
  },
  {
    "id": 885,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "を管理する",
      "側面",
      "世界",
      "あれらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 886,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "手などを挙げる",
      "起こる",
      "法律",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 887,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "重要な",
      "友達",
      "だろうに",
      "を増やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 888,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "なにか",
      "行く",
      "時刻",
      "新しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 889,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "終わる",
      "〜以来",
      "夏",
      "である、になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 890,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "を受け入れる",
      "手などを挙げる",
      "そして",
      "を失う"
    ],
    "status": "unlearned"
  },
  {
    "id": 891,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "法律",
      "払う",
      "音楽",
      "彼らの"
    ],
    "status": "unlearned"
  },
  {
    "id": 892,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "法律",
      "を試す",
      "ほかの、別の",
      "多分"
    ],
    "status": "unlearned"
  },
  {
    "id": 893,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "月",
      "し続ける",
      "を続ける",
      "を歌う"
    ],
    "status": "unlearned"
  },
  {
    "id": 894,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "ほかの、別の",
      "側面",
      "学ぶ、習う",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 895,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "切る",
      "もっと",
      "音楽",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 896,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "とても",
      "を必要とする",
      "理解する",
      "社会"
    ],
    "status": "unlearned"
  },
  {
    "id": 897,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "見る",
      "そこに",
      "花",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 898,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "〜の中へ",
      "滞在する",
      "に直面する",
      "を言う"
    ],
    "status": "unlearned"
  },
  {
    "id": 899,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "を創造する",
      "料理する",
      "晴れの",
      "今日"
    ],
    "status": "unlearned"
  },
  {
    "id": 900,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "若い",
      "を着ている",
      "聞く",
      "加える"
    ],
    "status": "unlearned"
  },
  {
    "id": 901,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "費やす",
      "少女",
      "を必要とする",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 902,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "健康",
      "側面",
      "を導く",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 903,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "国",
      "仕事",
      "人",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 904,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "自由な",
      "を撮る・取る",
      "芸術",
      "感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 905,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "季節",
      "を勉強する",
      "戦争",
      "として・〜のために"
    ],
    "status": "unlearned"
  },
  {
    "id": 906,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "規則",
      "小さい",
      "歴史",
      "子供"
    ],
    "status": "unlearned"
  },
  {
    "id": 907,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "成長する",
      "着る",
      "部分",
      "側面"
    ],
    "status": "unlearned"
  },
  {
    "id": 908,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "理由",
      "ちょうど、方向に",
      "を管理する",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 909,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "音楽",
      "ほかの、別の",
      "質問",
      "を研究する"
    ],
    "status": "unlearned"
  },
  {
    "id": 910,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "を支援する",
      "を読む",
      "に話す",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 911,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "欲しい",
      "生徒",
      "晴れの",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 912,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "特徴、論点",
      "落ちる",
      "興味",
      "部屋"
    ],
    "status": "unlearned"
  },
  {
    "id": 913,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "たくさん",
      "を計画する",
      "行、線",
      "と会う"
    ],
    "status": "unlearned"
  },
  {
    "id": 914,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "を想像する",
      "すべての",
      "切る",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 915,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "行く",
      "ほとんど",
      "大学",
      "市、都会"
    ],
    "status": "unlearned"
  },
  {
    "id": 916,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "を動かす",
      "学校",
      "を経験する",
      "自転車"
    ],
    "status": "unlearned"
  },
  {
    "id": 917,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "を話す",
      "どれもない",
      "商売",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 918,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "参加する",
      "を創造する",
      "公園",
      "より良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 919,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "たくさんの",
      "側面",
      "を決める",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 920,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "腕",
      "を失う",
      "し続ける",
      "心"
    ],
    "status": "unlearned"
  },
  {
    "id": 921,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "を運ぶ",
      "年",
      "軽い・光",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 922,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "考える",
      "小さい",
      "警察",
      "一生懸命に"
    ],
    "status": "unlearned"
  },
  {
    "id": 923,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "帰る、戻る",
      "を管理する",
      "ある、いる",
      "そのとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 924,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "子供",
      "3",
      "自由な",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 925,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "歴史",
      "公園",
      "夜",
      "値段"
    ],
    "status": "unlearned"
  },
  {
    "id": 926,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "確信して",
      "を説明する",
      "警察",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 927,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "望む",
      "取る",
      "腕",
      "仕事"
    ],
    "status": "unlearned"
  },
  {
    "id": 928,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "を発達させる",
      "理解する",
      "場所",
      "図書館"
    ],
    "status": "unlearned"
  },
  {
    "id": 929,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "植物",
      "かばん",
      "仕事・働く",
      "を運ぶ"
    ],
    "status": "unlearned"
  },
  {
    "id": 930,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "〜以来",
      "道",
      "の上に",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 931,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "親切な",
      "運転する",
      "払う",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 932,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "を説明する",
      "そして",
      "を決める",
      "建物"
    ],
    "status": "unlearned"
  },
  {
    "id": 933,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "歴史",
      "参加する",
      "を想像する",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 934,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "社会",
      "をがまんする",
      "よりもっと",
      "落ちる"
    ],
    "status": "unlearned"
  },
  {
    "id": 935,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "まだ",
      "目",
      "着る",
      "日曜日"
    ],
    "status": "unlearned"
  },
  {
    "id": 936,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "を受け入れる",
      "のまわりに",
      "紙",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 937,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "私に",
      "を生産する",
      "です、ます",
      "の前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 938,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "教える",
      "机",
      "問題",
      "戸、ドア"
    ],
    "status": "unlearned"
  },
  {
    "id": 939,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "本当の",
      "全部、全員、全て",
      "簡単な",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 940,
    "level": "middle_2",
    "word": "technology",
    "meaning": "科学技術",
    "options": [
      "行く",
      "人、個人",
      "科学技術",
      "とても"
    ],
    "status": "unlearned"
  },
  {
    "id": 941,
    "level": "middle_2",
    "word": "culture",
    "meaning": "文化",
    "options": [
      "切る",
      "文化",
      "帽子",
      "もの、こと"
    ],
    "status": "unlearned"
  },
  {
    "id": 942,
    "level": "middle_2",
    "word": "plant",
    "meaning": "植物",
    "options": [
      "人々",
      "植物",
      "を含む",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 943,
    "level": "middle_2",
    "word": "rule",
    "meaning": "規則",
    "options": [
      "建物",
      "生活、人生",
      "規則",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 944,
    "level": "middle_2",
    "word": "future",
    "meaning": "未来",
    "options": [
      "たのむ",
      "未来",
      "を知っている",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 945,
    "level": "middle_2",
    "word": "nature",
    "meaning": "自然",
    "options": [
      "なにか",
      "自然",
      "の上に",
      "戦争"
    ],
    "status": "unlearned"
  },
  {
    "id": 946,
    "level": "middle_2",
    "word": "common",
    "meaning": "共通の",
    "options": [
      "ある、いる",
      "多くの",
      "教室",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 947,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "を変える",
      "そうしなければ",
      "欲しい",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 948,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "家族",
      "〜の様に見える",
      "もう、すでに",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 949,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "日、1日",
      "よりも",
      "自転車",
      "そのとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 950,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "ほかの",
      "もっと",
      "向こうへ",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 951,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "側、面",
      "です、ます",
      "多くの",
      "よりもっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 952,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "理解する",
      "緑",
      "事実、現実",
      "これらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 953,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "方法",
      "どれもみな",
      "を聞く",
      "を手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 954,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "だから、なので",
      "を知っている",
      "大統領",
      "他の"
    ],
    "status": "unlearned"
  },
  {
    "id": 955,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "見る",
      "市、都会",
      "事実、現実",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 956,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "3",
      "黒い",
      "をする、行う",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 957,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "子供",
      "考え",
      "ほかの、別の",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 958,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "進路",
      "だけれども",
      "を〜の状態にする",
      "仕事"
    ],
    "status": "unlearned"
  },
  {
    "id": 959,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "〜の",
      "を切る",
      "世界",
      "全部、全員、全て"
    ],
    "status": "unlearned"
  },
  {
    "id": 960,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "を買う",
      "たのむ",
      "見る",
      "ちょうど、方向に"
    ],
    "status": "unlearned"
  },
  {
    "id": 961,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "しかし",
      "実現する",
      "感じる",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 962,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "になる",
      "覆う",
      "帽子",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 963,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "最も",
      "人々",
      "を読む",
      "目"
    ],
    "status": "unlearned"
  },
  {
    "id": 964,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "たくさん",
      "非常に",
      "起こる",
      "どれもない"
    ],
    "status": "unlearned"
  },
  {
    "id": 965,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "置く",
      "を必要とする",
      "に直面する",
      "未来"
    ],
    "status": "unlearned"
  },
  {
    "id": 966,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "かわいい",
      "生徒",
      "意味する",
      "外に"
    ],
    "status": "unlearned"
  },
  {
    "id": 967,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "し続ける",
      "若い",
      "本当に、実際に",
      "公園"
    ],
    "status": "unlearned"
  },
  {
    "id": 968,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "色々な",
      "話す",
      "を切る",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 969,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "忙しい",
      "を手伝う",
      "重要な",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 970,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "を見せる",
      "部分",
      "軽い・光",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 971,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "特徴、論点",
      "を決める",
      "大統領",
      "聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 972,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "開発",
      "種類",
      "場所",
      "質問"
    ],
    "status": "unlearned"
  },
  {
    "id": 973,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "生活、人生",
      "を動かす",
      "ここに",
      "を続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 974,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "人、個人",
      "もの、こと",
      "生きる",
      "興味"
    ],
    "status": "unlearned"
  },
  {
    "id": 975,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "をつかむ",
      "信じる",
      "を置いていく",
      "帽子"
    ],
    "status": "unlearned"
  },
  {
    "id": 976,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "帽子",
      "〜できる",
      "をつかむ",
      "私たちの"
    ],
    "status": "unlearned"
  },
  {
    "id": 977,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "を着ている",
      "同じもの",
      "数学",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 978,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "本当に、実際に",
      "の方へ",
      "生徒",
      "起こる"
    ],
    "status": "unlearned"
  },
  {
    "id": 979,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "する前に",
      "学ぶ、習う",
      "を撮る・取る",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 980,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "〜することができる",
      "を聞く",
      "信じる",
      "しなければならない"
    ],
    "status": "unlearned"
  },
  {
    "id": 981,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "朝",
      "水",
      "しかし、けれども",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 982,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "忙しい",
      "もの、こと",
      "年",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 983,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "向こうへ",
      "若い",
      "参加する",
      "のまわりに"
    ],
    "status": "unlearned"
  },
  {
    "id": 984,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "異なる",
      "をする、行う",
      "自然",
      "のような"
    ],
    "status": "unlearned"
  },
  {
    "id": 985,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "米、ご飯",
      "共通の",
      "言葉",
      "私は、私が"
    ],
    "status": "unlearned"
  },
  {
    "id": 986,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "他の",
      "なぜなら",
      "駅",
      "商売"
    ],
    "status": "unlearned"
  },
  {
    "id": 987,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "使う",
      "なぜなら",
      "側面",
      "川"
    ],
    "status": "unlearned"
  },
  {
    "id": 988,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "種類",
      "と会う",
      "置く",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 989,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "どんな・どのように",
      "重要な",
      "皿",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 990,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "時刻",
      "を受け入れる",
      "日本",
      "少女"
    ],
    "status": "unlearned"
  },
  {
    "id": 991,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "ノート",
      "終わる",
      "良い",
      "手などを挙げる"
    ],
    "status": "unlearned"
  },
  {
    "id": 992,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "できた",
      "彼らは",
      "を失う",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 993,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "静かな",
      "数、数字",
      "説明する",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 994,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "住む",
      "側、面",
      "問題、困ったこと",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 995,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "いくつかの",
      "を得る",
      "を続ける",
      "祭り"
    ],
    "status": "unlearned"
  },
  {
    "id": 996,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "大統領",
      "黒い",
      "ここに",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 997,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "を歌う",
      "を変える",
      "親切な",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 998,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "軽い・光",
      "来る",
      "ちょうど、方向に",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 999,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "法律",
      "見る",
      "とまる、停止する",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1000,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "しばらくの間",
      "曲がる",
      "〜の中へ",
      "に直面する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1001,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "を創造する",
      "を話す",
      "歌",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1002,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "未来",
      "宿題",
      "加える",
      "するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 1003,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "と書いてある",
      "の方へ",
      "費やす",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1004,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "共通の",
      "去る",
      "〜するつもり",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1005,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "を見せる",
      "人",
      "〜のあとに",
      "〜と〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1006,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "芸術",
      "音楽",
      "下に",
      "説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1007,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "を手渡す",
      "彼を",
      "戦争",
      "を得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1008,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "【場所】に、で",
      "を聞く",
      "歴史",
      "決定"
    ],
    "status": "unlearned"
  },
  {
    "id": 1009,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "健康",
      "を生産する",
      "成長する",
      "どんな・どのように"
    ],
    "status": "unlearned"
  },
  {
    "id": 1010,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "ついに、やっと",
      "理由",
      "お金",
      "数学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1011,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "見る",
      "植物",
      "を研究する",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1012,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "を建てる",
      "落ちる、降る",
      "社会",
      "を含む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1013,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "ここに",
      "彼らの",
      "滞在する",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 1014,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "を設立する",
      "落ちる",
      "可能な",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 1015,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "を計画する",
      "であるけれど",
      "信じる",
      "を支援する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1016,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "時刻",
      "研究、調査",
      "切る",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1017,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "歌",
      "大学",
      "その",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1018,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "を経験する",
      "晴れの",
      "家族",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1019,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "6月",
      "になる",
      "気に懸ける",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 1020,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "私は、私が",
      "古い",
      "しばらくの間",
      "より良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1021,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "どれもみな",
      "祭り",
      "を決める",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1022,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "夜",
      "まだ",
      "側面",
      "心"
    ],
    "status": "unlearned"
  },
  {
    "id": 1023,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "使う",
      "軽い・光",
      "映画",
      "いくつかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1024,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "猫",
      "警察",
      "数、数字",
      "おおいに、たいへん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1025,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "帰る、戻る",
      "着る",
      "どちらの",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 1026,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "を説明する",
      "彼らの",
      "自由な",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 1027,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "値段",
      "しかし",
      "環境",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 1028,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "季節",
      "〜の間",
      "を説明する",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 1029,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "とても",
      "望む",
      "それと",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 1030,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "興味",
      "場所",
      "食べ物",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1031,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "を見る",
      "を運ぶ",
      "曲がる",
      "たいていの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1032,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "道",
      "なにか",
      "あの",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 1033,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "を主催する",
      "劇",
      "を失う",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1034,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "音",
      "建物",
      "戦争",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 1035,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "たくさんの",
      "すべての",
      "参加する",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1036,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "〜するつもり",
      "に話す",
      "社会",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1037,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "3",
      "精神",
      "着る",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1038,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "【時刻】に",
      "紙",
      "晴れの",
      "座る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1039,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "することがあり得る",
      "商売",
      "のような",
      "を生産する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1040,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "運転する",
      "【時間・場所】から",
      "教える",
      "父"
    ],
    "status": "unlearned"
  },
  {
    "id": 1041,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "意味する",
      "止める",
      "場所",
      "簡単な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1042,
    "level": "middle_2",
    "word": "technology",
    "meaning": "科学技術",
    "options": [
      "として",
      "生徒",
      "科学技術",
      "仕事"
    ],
    "status": "unlearned"
  },
  {
    "id": 1043,
    "level": "middle_2",
    "word": "culture",
    "meaning": "文化",
    "options": [
      "文化",
      "そのとき",
      "終わる",
      "し続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1044,
    "level": "middle_2",
    "word": "plant",
    "meaning": "植物",
    "options": [
      "植物",
      "始まる",
      "進路",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1045,
    "level": "middle_2",
    "word": "rule",
    "meaning": "規則",
    "options": [
      "【手段・方法・原因】によって",
      "植物",
      "規則",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1046,
    "level": "middle_2",
    "word": "future",
    "meaning": "未来",
    "options": [
      "未来",
      "成長する",
      "どこ",
      "を〜の状態にする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1047,
    "level": "middle_2",
    "word": "nature",
    "meaning": "自然",
    "options": [
      "自然",
      "だから、なので",
      "たった今",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1048,
    "level": "middle_2",
    "word": "common",
    "meaning": "共通の",
    "options": [
      "法律",
      "〜と〜の間",
      "〜だけ",
      "共通の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1049,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "見る",
      "覆う",
      "を保つ",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 1050,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "裏の、後ろの",
      "ちがい",
      "規則",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1051,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "美しい",
      "〜できる",
      "生きる",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 1052,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "ほかの",
      "ほかの、別の",
      "たくさんの",
      "〜できる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1053,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "音",
      "よりもっと",
      "情報",
      "大きい、広い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1054,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "これらの",
      "側、面",
      "を聞く",
      "落ちる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1055,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "裏の、後ろの",
      "切る",
      "どんな・どのように",
      "方法"
    ],
    "status": "unlearned"
  },
  {
    "id": 1056,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "〜に〜をさせる",
      "静かな",
      "そのとき",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1057,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "を発見する",
      "自動車",
      "滞在",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1058,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "を着ている",
      "行く",
      "を建てる",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 1059,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "にとって",
      "音楽",
      "子供",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1060,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "仕事",
      "ほかの",
      "加える",
      "たった今"
    ],
    "status": "unlearned"
  },
  {
    "id": 1061,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "しばらくの間",
      "大統領",
      "世界",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1062,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "少年",
      "のような",
      "を研究する",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1063,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "およそ、約、ごろ",
      "感じる",
      "先生",
      "できた"
    ],
    "status": "unlearned"
  },
  {
    "id": 1064,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "を見る",
      "権利",
      "政府",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1065,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "私の",
      "最も",
      "座る",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1066,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "国際的な",
      "によって",
      "たくさん",
      "数学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1067,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "置く",
      "同じもの",
      "健康",
      "を言う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1068,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "異なる",
      "意味する",
      "だけれども",
      "数、数字"
    ],
    "status": "unlearned"
  },
  {
    "id": 1069,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "事実、現実",
      "し続ける",
      "を続ける",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 1070,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "話す",
      "払う",
      "言葉",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1071,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "〜することができる",
      "を見せる",
      "成長する",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1072,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "部分",
      "生徒",
      "落ちる、降る",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1073,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "水",
      "なぜなら",
      "戸、ドア",
      "聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1074,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "彼らは",
      "質問",
      "理由",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 1075,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "感じる",
      "簡単な",
      "を動かす",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 1076,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "彼らの",
      "仕事",
      "生きる",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 1077,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "です、ます",
      "皿",
      "信じる",
      "落ちる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1078,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "生きる",
      "彼自身を",
      "自然",
      "をつかむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1079,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "祭り",
      "持って来る",
      "美しい",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 1080,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "起こる",
      "落ちる",
      "かばん",
      "を〜の状態にする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1081,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "昨日",
      "する前に",
      "心",
      "人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1082,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "環境",
      "しなければならない",
      "軽い・光",
      "どんな・どのように"
    ],
    "status": "unlearned"
  },
  {
    "id": 1083,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "になった",
      "たくさん",
      "水",
      "の前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1084,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "滞在する",
      "いくつかの",
      "物語",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1085,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "若い",
      "止める",
      "を撮る・取る",
      "欲しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1086,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "建物",
      "異なる",
      "それの、その",
      "向こうへ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1087,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "もう一つの",
      "お金",
      "言葉",
      "時刻"
    ],
    "status": "unlearned"
  },
  {
    "id": 1088,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "店",
      "商売",
      "水",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1089,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "側面",
      "生活、人生",
      "学ぶ、習う",
      "本当の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1090,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "にとって",
      "のような",
      "顔",
      "種類"
    ],
    "status": "unlearned"
  },
  {
    "id": 1091,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "政府",
      "重要な",
      "開発",
      "説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1092,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "時刻",
      "を撮る・取る",
      "生活、人生",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 1093,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "終わる",
      "季節",
      "を手伝う",
      "その"
    ],
    "status": "unlearned"
  },
  {
    "id": 1094,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "を失う",
      "考え",
      "世界",
      "私たちの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1095,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "を支援する",
      "落ちる",
      "彼の",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1096,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "心",
      "生活、人生",
      "彼らは",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 1097,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "名前",
      "を続ける",
      "を説明する",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1098,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "学ぶ、習う",
      "そのとき",
      "長い",
      "のような"
    ],
    "status": "unlearned"
  },
  {
    "id": 1099,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "を買う",
      "研究、調査",
      "子供",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1100,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "に話す",
      "の方へ",
      "必要な",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1101,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "科学技術",
      "見る",
      "大きい",
      "の中に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1102,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "として・〜のために",
      "必要な",
      "に直面する",
      "意味する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1103,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "友達",
      "たのむ",
      "始まる",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1104,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "できた",
      "多分",
      "簡単な",
      "加える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1105,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "決定",
      "【手段・方法・原因】によって",
      "費やす",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1106,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "覆う",
      "手などを挙げる",
      "〜の後で",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1107,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "であるけれど",
      "落ちる",
      "人",
      "番号"
    ],
    "status": "unlearned"
  },
  {
    "id": 1108,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "のような",
      "猫",
      "大きい",
      "芸術"
    ],
    "status": "unlearned"
  },
  {
    "id": 1109,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "よりも",
      "古い",
      "戦争",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 1110,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "歴史",
      "下に",
      "1",
      "〜と〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1111,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "親切な",
      "〜と一緒に",
      "時刻",
      "成長する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1112,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "もう一つの",
      "を着ている",
      "する前に",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 1113,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "死",
      "払う",
      "を研究する",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1114,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "を建てる",
      "を勉強する",
      "店",
      "側面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1115,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "するとき",
      "を得る",
      "よりも",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1116,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "するとき",
      "秒",
      "落ちる",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1117,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "を計画する",
      "を撮る・取る",
      "の上に",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 1118,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "必要な",
      "緑",
      "文化",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1119,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "運転する",
      "大学",
      "良い",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1120,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "を想像する",
      "を経験する",
      "座る",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1121,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "気に懸ける",
      "人生",
      "の方へ",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1122,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "〜の中へ",
      "より良い",
      "を言う",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 1123,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "を決める",
      "気に懸ける",
      "彼を",
      "〜の様に見える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1124,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "最も",
      "心",
      "はじめて",
      "自由な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1125,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "になった",
      "1",
      "軽い・光",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 1126,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "図書館",
      "警察",
      "番号",
      "するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 1127,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "夜",
      "死",
      "戸、ドア",
      "帰る、戻る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1128,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "自由な",
      "一生懸命に",
      "しかし、けれども",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1129,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "値段",
      "この",
      "のような",
      "音"
    ],
    "status": "unlearned"
  },
  {
    "id": 1130,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "を説明する",
      "自由な",
      "と感じる",
      "を手伝う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1131,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "に話す",
      "望む",
      "季節",
      "待つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1132,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "を撮る・取る",
      "子供",
      "【時間・場所】から",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1133,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "もう、すでに",
      "を運ぶ",
      "を話す",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1134,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "手",
      "道",
      "私は、私が",
      "ほかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1135,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "去る",
      "本当に、実際に",
      "待つ",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1136,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "建物",
      "食べ物",
      "赤",
      "に直面する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1137,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "参加する",
      "を読む",
      "黒い",
      "覆う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1138,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "猫",
      "払う",
      "社会",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1139,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "自転車",
      "〜だけ",
      "着る",
      "軽い・光"
    ],
    "status": "unlearned"
  },
  {
    "id": 1140,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "について、に関する",
      "動く、引っ越す",
      "とても",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 1141,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "費やす",
      "を生産する",
      "音楽",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1142,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "生きる",
      "ほとんど",
      "【手段・方法・原因】によって",
      "教える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1143,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "共通の",
      "なにか",
      "簡単な",
      "でない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1144,
    "level": "middle_2",
    "word": "technology",
    "meaning": "科学技術",
    "options": [
      "科学技術",
      "去る",
      "を創造する",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 1145,
    "level": "middle_2",
    "word": "culture",
    "meaning": "文化",
    "options": [
      "文化",
      "を計画する",
      "人生",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1146,
    "level": "middle_2",
    "word": "plant",
    "meaning": "植物",
    "options": [
      "ノート",
      "植物",
      "1時間",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 1147,
    "level": "middle_2",
    "word": "rule",
    "meaning": "規則",
    "options": [
      "月",
      "ついに、やっと",
      "規則",
      "手"
    ],
    "status": "unlearned"
  },
  {
    "id": 1148,
    "level": "middle_2",
    "word": "future",
    "meaning": "未来",
    "options": [
      "家族",
      "気に懸ける",
      "特徴、論点",
      "未来"
    ],
    "status": "unlearned"
  },
  {
    "id": 1149,
    "level": "middle_2",
    "word": "nature",
    "meaning": "自然",
    "options": [
      "自然",
      "いつも",
      "を知っている",
      "意味する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1150,
    "level": "middle_2",
    "word": "common",
    "meaning": "共通の",
    "options": [
      "少年",
      "いつも",
      "共通の",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 1151,
    "level": "middle_2",
    "word": "see",
    "meaning": "見る",
    "options": [
      "を持っている",
      "を経験する",
      "死ぬ",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1152,
    "level": "middle_2",
    "word": "come",
    "meaning": "になる",
    "options": [
      "になる",
      "できた",
      "軽い・光",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1153,
    "level": "middle_2",
    "word": "than",
    "meaning": "よりも",
    "options": [
      "よりも",
      "政府",
      "するとき",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1154,
    "level": "middle_2",
    "word": "other",
    "meaning": "ほかの",
    "options": [
      "宿題",
      "最も良い",
      "ほかの",
      "【手段・方法・原因】によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 1155,
    "level": "middle_2",
    "word": "more",
    "meaning": "よりもっと",
    "options": [
      "よりもっと",
      "待つ",
      "考え",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1156,
    "level": "middle_2",
    "word": "these",
    "meaning": "これらの",
    "options": [
      "これらの",
      "を置いていく",
      "だろうに",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1157,
    "level": "middle_2",
    "word": "way",
    "meaning": "方法",
    "options": [
      "猫",
      "方法",
      "この前の",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 1158,
    "level": "middle_2",
    "word": "because",
    "meaning": "だから、なので",
    "options": [
      "彼自身を",
      "かばん",
      "顔",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1159,
    "level": "middle_2",
    "word": "find",
    "meaning": "を発見する",
    "options": [
      "を勉強する",
      "を発見する",
      "問題、困ったこと",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1160,
    "level": "middle_2",
    "word": "life",
    "meaning": "人生",
    "options": [
      "今日",
      "どれもない",
      "人生",
      "言葉"
    ],
    "status": "unlearned"
  },
  {
    "id": 1161,
    "level": "middle_2",
    "word": "child",
    "meaning": "子供",
    "options": [
      "払う",
      "子供",
      "長い",
      "顔"
    ],
    "status": "unlearned"
  },
  {
    "id": 1162,
    "level": "middle_2",
    "word": "work",
    "meaning": "仕事",
    "options": [
      "仕事",
      "彼女は",
      "それは",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1163,
    "level": "middle_2",
    "word": "world",
    "meaning": "世界",
    "options": [
      "はじめて",
      "世界",
      "向こうへ",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1164,
    "level": "middle_2",
    "word": "ask",
    "meaning": "たのむ",
    "options": [
      "はじめて",
      "すべての",
      "切る",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1165,
    "level": "middle_2",
    "word": "feel",
    "meaning": "感じる",
    "options": [
      "を置く",
      "大きい",
      "大学",
      "感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1166,
    "level": "middle_2",
    "word": "become",
    "meaning": "になる",
    "options": [
      "になる",
      "科学技術",
      "私の",
      "生きる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1167,
    "level": "middle_2",
    "word": "most",
    "meaning": "最も",
    "options": [
      "有名な",
      "最も",
      "学校",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1168,
    "level": "middle_2",
    "word": "much",
    "meaning": "たくさん",
    "options": [
      "方法",
      "もまた",
      "古い",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1169,
    "level": "middle_2",
    "word": "put",
    "meaning": "置く",
    "options": [
      "木",
      "置く",
      "しなければならない",
      "子供"
    ],
    "status": "unlearned"
  },
  {
    "id": 1170,
    "level": "middle_2",
    "word": "mean",
    "meaning": "意味する",
    "options": [
      "税、税金",
      "意味する",
      "人、個人",
      "〜するつもり"
    ],
    "status": "unlearned"
  },
  {
    "id": 1171,
    "level": "middle_2",
    "word": "keep",
    "meaning": "し続ける",
    "options": [
      "果物",
      "人",
      "しかし",
      "し続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1172,
    "level": "middle_2",
    "word": "talk",
    "meaning": "話す",
    "options": [
      "音楽",
      "彼の",
      "話す",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 1173,
    "level": "middle_2",
    "word": "show",
    "meaning": "を見せる",
    "options": [
      "花",
      "を見せる",
      "〜の様に見える",
      "を決める"
    ],
    "status": "unlearned"
  },
  {
    "id": 1174,
    "level": "middle_2",
    "word": "part",
    "meaning": "部分",
    "options": [
      "部分",
      "を増やす",
      "進路",
      "〜と〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1175,
    "level": "middle_2",
    "word": "hear",
    "meaning": "聞く",
    "options": [
      "聞く",
      "3",
      "状況",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 1176,
    "level": "middle_2",
    "word": "question",
    "meaning": "質問",
    "options": [
      "音楽",
      "決してない",
      "朝",
      "質問"
    ],
    "status": "unlearned"
  },
  {
    "id": 1177,
    "level": "middle_2",
    "word": "move",
    "meaning": "を動かす",
    "options": [
      "去る",
      "異なる",
      "目",
      "を動かす"
    ],
    "status": "unlearned"
  },
  {
    "id": 1178,
    "level": "middle_2",
    "word": "live",
    "meaning": "生きる",
    "options": [
      "生きる",
      "市場",
      "を〜の状態にする",
      "異なる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1179,
    "level": "middle_2",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "滞在する",
      "よりも",
      "〜の",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1180,
    "level": "middle_2",
    "word": "hold",
    "meaning": "をつかむ",
    "options": [
      "に着く、到着する",
      "始まる",
      "を聞く",
      "をつかむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1181,
    "level": "middle_2",
    "word": "bring",
    "meaning": "持って来る",
    "options": [
      "持って来る",
      "行事",
      "晴れの",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1182,
    "level": "middle_2",
    "word": "happen",
    "meaning": "起こる",
    "options": [
      "文化",
      "社会",
      "起こる",
      "を聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1183,
    "level": "middle_2",
    "word": "before",
    "meaning": "する前に",
    "options": [
      "を通り抜けて",
      "それの、その",
      "する前に",
      "私の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1184,
    "level": "middle_2",
    "word": "must",
    "meaning": "しなければならない",
    "options": [
      "意味する",
      "【時刻】に",
      "をがまんする",
      "しなければならない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1185,
    "level": "middle_2",
    "word": "water",
    "meaning": "水",
    "options": [
      "ほかの",
      "水",
      "〜するとき",
      "を動かす"
    ],
    "status": "unlearned"
  },
  {
    "id": 1186,
    "level": "middle_2",
    "word": "story",
    "meaning": "物語",
    "options": [
      "〜の間",
      "物語",
      "参加する",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1187,
    "level": "middle_2",
    "word": "young",
    "meaning": "若い",
    "options": [
      "3",
      "を手伝う",
      "若い",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1188,
    "level": "middle_2",
    "word": "different",
    "meaning": "異なる",
    "options": [
      "異なる",
      "払う",
      "大きい、広い",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1189,
    "level": "middle_2",
    "word": "word",
    "meaning": "言葉",
    "options": [
      "数、数字",
      "人",
      "言葉",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1190,
    "level": "middle_2",
    "word": "business",
    "meaning": "商売",
    "options": [
      "ノート",
      "よりも",
      "本当の",
      "商売"
    ],
    "status": "unlearned"
  },
  {
    "id": 1191,
    "level": "middle_2",
    "word": "side",
    "meaning": "側面",
    "options": [
      "男性、男の人",
      "話す",
      "側面",
      "市場"
    ],
    "status": "unlearned"
  },
  {
    "id": 1192,
    "level": "middle_2",
    "word": "kind",
    "meaning": "種類",
    "options": [
      "種類",
      "月",
      "進路",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1193,
    "level": "middle_2",
    "word": "important",
    "meaning": "重要な",
    "options": [
      "重要な",
      "ここに",
      "壊れる、破る",
      "続く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1194,
    "level": "middle_2",
    "word": "hour",
    "meaning": "時刻",
    "options": [
      "社会",
      "として",
      "しなければならない",
      "時刻"
    ],
    "status": "unlearned"
  },
  {
    "id": 1195,
    "level": "middle_2",
    "word": "end",
    "meaning": "終わる",
    "options": [
      "しかし、けれども",
      "の向こう側に",
      "を着ている",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1196,
    "level": "middle_2",
    "word": "lose",
    "meaning": "を失う",
    "options": [
      "を導く",
      "税、税金",
      "古い",
      "を失う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1197,
    "level": "middle_2",
    "word": "pay",
    "meaning": "払う",
    "options": [
      "そして",
      "科学",
      "払う",
      "外に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1198,
    "level": "middle_2",
    "word": "law",
    "meaning": "法律",
    "options": [
      "〜の様に見える",
      "法律",
      "彼の",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1199,
    "level": "middle_2",
    "word": "continue",
    "meaning": "を続ける",
    "options": [
      "朝",
      "を続ける",
      "のような",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1200,
    "level": "middle_2",
    "word": "learn",
    "meaning": "学ぶ、習う",
    "options": [
      "学ぶ、習う",
      "のまわりに",
      "店",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1201,
    "level": "middle_2",
    "word": "change",
    "meaning": "を変える",
    "options": [
      "を変える",
      "お金",
      "ある、いる",
      "〜の後で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1202,
    "level": "middle_2",
    "word": "understand",
    "meaning": "理解する",
    "options": [
      "を発達させる",
      "共通の",
      "理解する",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1203,
    "level": "middle_2",
    "word": "watch",
    "meaning": "見る",
    "options": [
      "を与える、渡す",
      "1番め、最初",
      "見る",
      "向こうへ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1204,
    "level": "middle_2",
    "word": "face",
    "meaning": "に直面する",
    "options": [
      "に直面する",
      "種類",
      "駅",
      "軽い・光"
    ],
    "status": "unlearned"
  },
  {
    "id": 1205,
    "level": "middle_2",
    "word": "create",
    "meaning": "を創造する",
    "options": [
      "全ての、全部の",
      "を創造する",
      "帰る、戻る",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1206,
    "level": "middle_2",
    "word": "add",
    "meaning": "加える",
    "options": [
      "静かな",
      "加える",
      "を守る、保護する",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1207,
    "level": "middle_2",
    "word": "spend",
    "meaning": "費やす",
    "options": [
      "費やす",
      "取る",
      "によって",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 1208,
    "level": "middle_2",
    "word": "health",
    "meaning": "健康",
    "options": [
      "健康",
      "道",
      "滞在する",
      "それの、その"
    ],
    "status": "unlearned"
  },
  {
    "id": 1209,
    "level": "middle_2",
    "word": "person",
    "meaning": "人",
    "options": [
      "人",
      "を導く",
      "本当に、実際に",
      "5月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1210,
    "level": "middle_2",
    "word": "art",
    "meaning": "芸術",
    "options": [
      "芸術",
      "を好む",
      "ここに",
      "自動車"
    ],
    "status": "unlearned"
  },
  {
    "id": 1211,
    "level": "middle_2",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "戦争",
      "を撮る・取る",
      "を見る",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1212,
    "level": "middle_2",
    "word": "history",
    "meaning": "歴史",
    "options": [
      "歴史",
      "新しい",
      "を決める",
      "少年"
    ],
    "status": "unlearned"
  },
  {
    "id": 1213,
    "level": "middle_2",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "を管理する",
      "側面",
      "成長する",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1214,
    "level": "middle_2",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "全部、全員、全て",
      "理由",
      "を話す",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1215,
    "level": "middle_2",
    "word": "research",
    "meaning": "を研究する",
    "options": [
      "を切る",
      "政府",
      "を研究する",
      "そこに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1216,
    "level": "middle_2",
    "word": "build",
    "meaning": "を建てる",
    "options": [
      "科学",
      "〜できる",
      "を知っている",
      "を建てる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1217,
    "level": "middle_2",
    "word": "stay",
    "meaning": "滞在する",
    "options": [
      "滞在する",
      "を創造する",
      "事実、現実",
      "を設立する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1218,
    "level": "middle_2",
    "word": "fall",
    "meaning": "落ちる",
    "options": [
      "上へ",
      "夜",
      "落ちる",
      "学校"
    ],
    "status": "unlearned"
  },
  {
    "id": 1219,
    "level": "middle_2",
    "word": "plan",
    "meaning": "を計画する",
    "options": [
      "滞在",
      "帽子",
      "でない",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1220,
    "level": "middle_2",
    "word": "cut",
    "meaning": "切る",
    "options": [
      "死",
      "時刻",
      "建物",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1221,
    "level": "middle_2",
    "word": "college",
    "meaning": "大学",
    "options": [
      "大学",
      "考える",
      "彼自身を",
      "を切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1222,
    "level": "middle_2",
    "word": "experience",
    "meaning": "を経験する",
    "options": [
      "母",
      "の前に",
      "を経験する",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1223,
    "level": "middle_2",
    "word": "care",
    "meaning": "気に懸ける",
    "options": [
      "することがあり得る",
      "気に懸ける",
      "話す",
      "になった"
    ],
    "status": "unlearned"
  },
  {
    "id": 1224,
    "level": "middle_2",
    "word": "better",
    "meaning": "より良い",
    "options": [
      "大統領",
      "質問",
      "より良い",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1225,
    "level": "middle_2",
    "word": "decide",
    "meaning": "を決める",
    "options": [
      "を決める",
      "【手段・方法・原因】によって",
      "理解する",
      "今まで、かつて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1226,
    "level": "middle_2",
    "word": "heart",
    "meaning": "心",
    "options": [
      "教室",
      "共通の",
      "心",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1227,
    "level": "middle_2",
    "word": "light",
    "meaning": "軽い・光",
    "options": [
      "に影響を与える",
      "なぜなら",
      "軽い・光",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1228,
    "level": "middle_2",
    "word": "police",
    "meaning": "警察",
    "options": [
      "かつて",
      "に着く、到着する",
      "音",
      "警察"
    ],
    "status": "unlearned"
  },
  {
    "id": 1229,
    "level": "middle_2",
    "word": "return",
    "meaning": "帰る、戻る",
    "options": [
      "帰る、戻る",
      "どこ",
      "を主催する",
      "生徒"
    ],
    "status": "unlearned"
  },
  {
    "id": 1230,
    "level": "middle_2",
    "word": "free",
    "meaning": "自由な",
    "options": [
      "自由な",
      "住む",
      "と感じる",
      "番号"
    ],
    "status": "unlearned"
  },
  {
    "id": 1231,
    "level": "middle_2",
    "word": "price",
    "meaning": "値段",
    "options": [
      "仕事・働く",
      "する前に",
      "値段",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1232,
    "level": "middle_2",
    "word": "explain",
    "meaning": "を説明する",
    "options": [
      "数、数字",
      "を説明する",
      "とまる、停止する",
      "生活、人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 1233,
    "level": "middle_2",
    "word": "hope",
    "meaning": "望む",
    "options": [
      "側面",
      "説明する",
      "青い",
      "望む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1234,
    "level": "middle_2",
    "word": "develop",
    "meaning": "を発達させる",
    "options": [
      "を発達させる",
      "1",
      "彼を",
      "〜できる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1235,
    "level": "middle_2",
    "word": "carry",
    "meaning": "を運ぶ",
    "options": [
      "を運ぶ",
      "かばん",
      "報告",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1236,
    "level": "middle_2",
    "word": "road",
    "meaning": "道",
    "options": [
      "道",
      "落ちる、降る",
      "生きる",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1237,
    "level": "middle_2",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "物語",
      "それと",
      "行事",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1238,
    "level": "middle_2",
    "word": "building",
    "meaning": "建物",
    "options": [
      "しなければならない",
      "まだ",
      "自由な",
      "建物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1239,
    "level": "middle_2",
    "word": "join",
    "meaning": "参加する",
    "options": [
      "最後の",
      "机",
      "参加する",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1240,
    "level": "middle_2",
    "word": "society",
    "meaning": "社会",
    "options": [
      "社会",
      "もし〜ならば",
      "たった今",
      "によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 1241,
    "level": "middle_2",
    "word": "wear",
    "meaning": "着る",
    "options": [
      "夏",
      "を歌う",
      "着る",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1242,
    "level": "middle_2",
    "word": "paper",
    "meaning": "紙",
    "options": [
      "紙",
      "曲がる",
      "を歌う",
      "人、個人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1243,
    "level": "middle_2",
    "word": "produce",
    "meaning": "を生産する",
    "options": [
      "芸術",
      "するとき",
      "時刻",
      "を生産する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1244,
    "level": "middle_2",
    "word": "teach",
    "meaning": "教える",
    "options": [
      "することがあり得る",
      "教える",
      "によって",
      "3"
    ],
    "status": "unlearned"
  },
  {
    "id": 1245,
    "level": "middle_2",
    "word": "easy",
    "meaning": "簡単な",
    "options": [
      "お金",
      "感じる",
      "本",
      "簡単な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1246,
    "level": "middle_3",
    "word": "at",
    "meaning": "〜で",
    "options": [
      "建物",
      "情報",
      "生きる",
      "〜で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1247,
    "level": "middle_3",
    "word": "but",
    "meaning": "しかし",
    "options": [
      "しかし",
      "駅",
      "をする、行う",
      "彼らは"
    ],
    "status": "unlearned"
  },
  {
    "id": 1248,
    "level": "middle_3",
    "word": "or",
    "meaning": "そうしなければ",
    "options": [
      "そうしなければ",
      "簡単な",
      "を受け取る",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1249,
    "level": "middle_3",
    "word": "can",
    "meaning": "〜できる",
    "options": [
      "科学",
      "側面",
      "〜できる",
      "できた"
    ],
    "status": "unlearned"
  },
  {
    "id": 1250,
    "level": "middle_3",
    "word": "if",
    "meaning": "もし〜ならば",
    "options": [
      "もし〜ならば",
      "自由な",
      "〜のあとに",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 1251,
    "level": "middle_3",
    "word": "would",
    "meaning": "だろうに",
    "options": [
      "だろうに",
      "たのむ",
      "忙しい",
      "多分"
    ],
    "status": "unlearned"
  },
  {
    "id": 1252,
    "level": "middle_3",
    "word": "make",
    "meaning": "を〜の状態にする",
    "options": [
      "歌",
      "の中に",
      "を〜の状態にする",
      "死ぬ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1253,
    "level": "middle_3",
    "word": "year",
    "meaning": "年",
    "options": [
      "〜で",
      "年",
      "法律",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1254,
    "level": "middle_3",
    "word": "when",
    "meaning": "〜するとき",
    "options": [
      "よりもっと",
      "〜するとき",
      "図書館",
      "として"
    ],
    "status": "unlearned"
  },
  {
    "id": 1255,
    "level": "middle_3",
    "word": "out",
    "meaning": "外に",
    "options": [
      "手",
      "彼は",
      "男性、男の人",
      "外に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1256,
    "level": "middle_3",
    "word": "into",
    "meaning": "〜の中へ",
    "options": [
      "それの、その",
      "を〜の状態にする",
      "〜の中へ",
      "新しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1257,
    "level": "middle_3",
    "word": "just",
    "meaning": "たった今",
    "options": [
      "夏",
      "しかし",
      "祭り",
      "たった今"
    ],
    "status": "unlearned"
  },
  {
    "id": 1258,
    "level": "middle_3",
    "word": "could",
    "meaning": "できた",
    "options": [
      "できた",
      "を増やす",
      "それは",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1259,
    "level": "middle_3",
    "word": "then",
    "meaning": "そのとき",
    "options": [
      "方法",
      "そのとき",
      "はじめて",
      "忙しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1260,
    "level": "middle_3",
    "word": "more",
    "meaning": "もっと",
    "options": [
      "〜で",
      "国",
      "もっと",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 1261,
    "level": "middle_3",
    "word": "first",
    "meaning": "はじめて",
    "options": [
      "はじめて",
      "を見る",
      "ついに、やっと",
      "全部、全員、全て"
    ],
    "status": "unlearned"
  },
  {
    "id": 1262,
    "level": "middle_3",
    "word": "because",
    "meaning": "なぜなら",
    "options": [
      "医者",
      "を置く",
      "について、に関する",
      "なぜなら"
    ],
    "status": "unlearned"
  },
  {
    "id": 1263,
    "level": "middle_3",
    "word": "use",
    "meaning": "使う",
    "options": [
      "市場",
      "建物",
      "使う",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1264,
    "level": "middle_3",
    "word": "many",
    "meaning": "多くの",
    "options": [
      "そこに",
      "を変える",
      "多くの",
      "だろうに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1265,
    "level": "middle_3",
    "word": "those",
    "meaning": "あれらの",
    "options": [
      "〜の後で",
      "かばん",
      "多くの",
      "あれらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1266,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "〜さえ",
      "進路",
      "多分",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1267,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "を失う",
      "法律",
      "を支援する",
      "裏の、後ろの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1268,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "地下鉄",
      "と会う",
      "どれもない",
      "彼らの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1269,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "時刻",
      "を通り抜けて",
      "加える",
      "そこに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1270,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "1",
      "〜の後で",
      "去る",
      "ここに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1271,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "の向こう側に",
      "のような",
      "もう一つの",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1272,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "を話す",
      "仕事",
      "〜の間",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1273,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "ノート",
      "最後の",
      "として・〜のために",
      "離れて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1274,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "決してない",
      "を知っている",
      "部屋",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1275,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "を受け取る",
      "同じもの",
      "になった",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 1276,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "を説明する",
      "大きい、広い",
      "〜と〜の間",
      "かばん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1277,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "決してない",
      "を買う",
      "たいていの",
      "文化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1278,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "生徒",
      "もう一つの",
      "事実、現実",
      "話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1279,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "すべての",
      "を置いていく",
      "新しい",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1280,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "実現する",
      "植物",
      "山",
      "しばらくの間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1281,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "もし〜ならば",
      "を〜の状態にする",
      "であるけれど",
      "を保つ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1282,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "身体",
      "〜に〜をさせる",
      "最も",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1283,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "〜と〜の間",
      "同じもの",
      "に着く、到着する",
      "名前"
    ],
    "status": "unlearned"
  },
  {
    "id": 1284,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "始まる",
      "少女",
      "行、線",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1285,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "大きい、広い",
      "〜の様に見える",
      "を切る",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1286,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "いつも",
      "大学",
      "手伝う",
      "心"
    ],
    "status": "unlearned"
  },
  {
    "id": 1287,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "長い",
      "忙しい",
      "問題",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1288,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "たった今",
      "どれもみな",
      "1",
      "気に懸ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1289,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "有名な",
      "数、数字",
      "彼らは",
      "を手渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1290,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "軽い・光",
      "を受け取る",
      "権利",
      "少女"
    ],
    "status": "unlearned"
  },
  {
    "id": 1291,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "を聞く",
      "を生産する",
      "説明する",
      "日曜日"
    ],
    "status": "unlearned"
  },
  {
    "id": 1292,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "共通の",
      "を必要とする",
      "仕事・働く",
      "〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1293,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "劇",
      "すでに、もう",
      "人生",
      "変化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1294,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "の方へ",
      "を設立する",
      "を聞く",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1295,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "だから、なので",
      "を主催する",
      "を勉強する",
      "道路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1296,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "番号",
      "を設立する",
      "他の",
      "友達"
    ],
    "status": "unlearned"
  },
  {
    "id": 1297,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "動く、引っ越す",
      "を守る、保護する",
      "5月",
      "音楽"
    ],
    "status": "unlearned"
  },
  {
    "id": 1298,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "特徴、論点",
      "自動車",
      "始まる",
      "父"
    ],
    "status": "unlearned"
  },
  {
    "id": 1299,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "を撮る・取る",
      "信じる",
      "を手渡す",
      "起こる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1300,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "大きい、広い",
      "音楽",
      "として",
      "を研究する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1301,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "国家の",
      "成長する",
      "たくさんの",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1302,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "手伝う",
      "の向こう側に",
      "今まで、かつて",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 1303,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "色々な",
      "研究、調査",
      "手伝う",
      "ノート"
    ],
    "status": "unlearned"
  },
  {
    "id": 1304,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "だけれども",
      "赤",
      "お金",
      "感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1305,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "側、面",
      "を発見する",
      "とまる、停止する",
      "長い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1306,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "長い",
      "人間の",
      "たのむ",
      "住む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1307,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "小さい",
      "を得る",
      "数、数字",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1308,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "歴史",
      "〜以来",
      "紙",
      "をする、行う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1309,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "のまわりに",
      "生きる",
      "良い",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1310,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "離れて",
      "たのむ",
      "それの、その",
      "日、1日"
    ],
    "status": "unlearned"
  },
  {
    "id": 1311,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "大統領",
      "猫",
      "外に",
      "まで、までは"
    ],
    "status": "unlearned"
  },
  {
    "id": 1312,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "およそ、約、ごろ",
      "〜で",
      "商売",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1313,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "他の",
      "行、線",
      "特徴、論点",
      "【時刻】に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1314,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "覆う",
      "続く",
      "今まで、かつて",
      "全部、全員、全て"
    ],
    "status": "unlearned"
  },
  {
    "id": 1315,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "大きい",
      "仕事・働く",
      "をがまんする",
      "地下鉄"
    ],
    "status": "unlearned"
  },
  {
    "id": 1316,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "を試す",
      "しかし",
      "かばん",
      "自由な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1317,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "法律",
      "警察",
      "を歌う",
      "文化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1318,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "建物",
      "を撮る・取る",
      "欲しい",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1319,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "社会",
      "を含む",
      "本当に、実際に",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1320,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "〜で",
      "続く",
      "質問",
      "を続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1321,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "のような",
      "かつて",
      "それの、その",
      "およそ、約、ごろ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1322,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "その",
      "です、ます",
      "大統領",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 1323,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "を生産する",
      "名前",
      "非常に",
      "本当の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1324,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "するとき",
      "まで、までは",
      "変化",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1325,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "古い",
      "を導く",
      "を見る",
      "決定"
    ],
    "status": "unlearned"
  },
  {
    "id": 1326,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "とまる、停止する",
      "学ぶ、習う",
      "税、税金",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 1327,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "上へ",
      "本当の",
      "すでに、もう",
      "そうしなければ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1328,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "健康",
      "生活、人生",
      "〜するとき",
      "商売"
    ],
    "status": "unlearned"
  },
  {
    "id": 1329,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "を言う",
      "およそ、約、ごろ",
      "商売",
      "人、個人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1330,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "戦争",
      "未来",
      "家",
      "駅"
    ],
    "status": "unlearned"
  },
  {
    "id": 1331,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "を切る",
      "成長する",
      "するとき",
      "必要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1332,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "〜の",
      "市場",
      "理由",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1333,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "一生懸命に",
      "彼自身を",
      "学校",
      "静かな"
    ],
    "status": "unlearned"
  },
  {
    "id": 1334,
    "level": "middle_3",
    "word": "although",
    "meaning": "であるけれど",
    "options": [
      "考え",
      "少年",
      "について、に関する",
      "であるけれど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1335,
    "level": "middle_3",
    "word": "second",
    "meaning": "秒",
    "options": [
      "秒",
      "精神",
      "教室",
      "上へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1336,
    "level": "middle_3",
    "word": "actually",
    "meaning": "実は、本当は",
    "options": [
      "そのとき",
      "同じもの",
      "を計画する",
      "実は、本当は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1337,
    "level": "middle_3",
    "word": "probably",
    "meaning": "多分",
    "options": [
      "多分",
      "を聞く",
      "運転する",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1338,
    "level": "middle_3",
    "word": "college",
    "meaning": "大学",
    "options": [
      "大学",
      "人生",
      "離れて",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1339,
    "level": "middle_3",
    "word": "human",
    "meaning": "人間の",
    "options": [
      "人間の",
      "待つ",
      "若い",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1340,
    "level": "middle_3",
    "word": "die",
    "meaning": "死ぬ",
    "options": [
      "死ぬ",
      "彼らを",
      "顔",
      "ほかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1341,
    "level": "middle_3",
    "word": "stay",
    "meaning": "滞在",
    "options": [
      "自転車",
      "最後の",
      "を言う",
      "滞在"
    ],
    "status": "unlearned"
  },
  {
    "id": 1342,
    "level": "middle_3",
    "word": "fall",
    "meaning": "落ちる、降る",
    "options": [
      "いつも",
      "落ちる、降る",
      "緑",
      "早く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1343,
    "level": "middle_3",
    "word": "cut",
    "meaning": "を切る",
    "options": [
      "若い",
      "を切る",
      "仕事・働く",
      "皿"
    ],
    "status": "unlearned"
  },
  {
    "id": 1344,
    "level": "middle_3",
    "word": "interest",
    "meaning": "興味",
    "options": [
      "だけれども",
      "〜の",
      "状況",
      "興味"
    ],
    "status": "unlearned"
  },
  {
    "id": 1345,
    "level": "middle_3",
    "word": "death",
    "meaning": "死",
    "options": [
      "によって",
      "に話す",
      "可能な",
      "死"
    ],
    "status": "unlearned"
  },
  {
    "id": 1346,
    "level": "middle_3",
    "word": "course",
    "meaning": "進路",
    "options": [
      "しなければならない",
      "去る",
      "家",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1347,
    "level": "middle_3",
    "word": "reach",
    "meaning": "に着く、到着する",
    "options": [
      "国",
      "国際的な",
      "果物",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1348,
    "level": "middle_3",
    "word": "control",
    "meaning": "を管理する",
    "options": [
      "問題、困ったこと",
      "この前の",
      "を必要とする",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1349,
    "level": "middle_3",
    "word": "raise",
    "meaning": "手などを挙げる",
    "options": [
      "手などを挙げる",
      "学校",
      "特徴、論点",
      "その"
    ],
    "status": "unlearned"
  },
  {
    "id": 1350,
    "level": "middle_3",
    "word": "hard",
    "meaning": "一生懸命に",
    "options": [
      "静かな",
      "問題",
      "とても",
      "一生懸命に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1351,
    "level": "middle_3",
    "word": "development",
    "meaning": "開発",
    "options": [
      "なにか",
      "成長する",
      "家",
      "開発"
    ],
    "status": "unlearned"
  },
  {
    "id": 1352,
    "level": "middle_3",
    "word": "report",
    "meaning": "報告",
    "options": [
      "法律",
      "私たちの",
      "報告",
      "そして"
    ],
    "status": "unlearned"
  },
  {
    "id": 1353,
    "level": "middle_3",
    "word": "possible",
    "meaning": "可能な",
    "options": [
      "なにか",
      "説明する",
      "終わる",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1354,
    "level": "middle_3",
    "word": "whole",
    "meaning": "すべての",
    "options": [
      "すべての",
      "彼らを",
      "最も",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1355,
    "level": "middle_3",
    "word": "mind",
    "meaning": "精神",
    "options": [
      "精神",
      "かばん",
      "彼らを",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1356,
    "level": "middle_3",
    "word": "finally",
    "meaning": "ついに、やっと",
    "options": [
      "それの、その",
      "【時間・場所】から",
      "音楽",
      "ついに、やっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1357,
    "level": "middle_3",
    "word": "decision",
    "meaning": "決定",
    "options": [
      "私の",
      "異なる",
      "決定",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1358,
    "level": "middle_3",
    "word": "explain",
    "meaning": "説明する",
    "options": [
      "実は、本当は",
      "机",
      "説明する",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1359,
    "level": "middle_3",
    "word": "road",
    "meaning": "道路",
    "options": [
      "1",
      "道路",
      "【手段・方法・原因】によって",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1360,
    "level": "middle_3",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "運転する",
      "起こる",
      "問題、困ったこと",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 1361,
    "level": "middle_3",
    "word": "arm",
    "meaning": "腕",
    "options": [
      "彼自身を",
      "腕",
      "この前の",
      "簡単な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1362,
    "level": "middle_3",
    "word": "break",
    "meaning": "壊れる、破る",
    "options": [
      "これらの",
      "壊れる、破る",
      "税、税金",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1363,
    "level": "middle_3",
    "word": "difference",
    "meaning": "ちがい",
    "options": [
      "欲しい",
      "ちがい",
      "猫",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 1364,
    "level": "middle_3",
    "word": "receive",
    "meaning": "を受け取る",
    "options": [
      "【時刻】に",
      "を受け取る",
      "もまた",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1365,
    "level": "middle_3",
    "word": "international",
    "meaning": "国際的な",
    "options": [
      "の向こう側に",
      "国際的な",
      "手などを挙げる",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1366,
    "level": "middle_3",
    "word": "building",
    "meaning": "建物",
    "options": [
      "建物",
      "を置いていく",
      "よりもっと",
      "実は、本当は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1367,
    "level": "middle_3",
    "word": "tax",
    "meaning": "税、税金",
    "options": [
      "税、税金",
      "置く",
      "できた",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1368,
    "level": "middle_3",
    "word": "agree",
    "meaning": "賛成する",
    "options": [
      "夜",
      "賛成する",
      "あの",
      "上へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1369,
    "level": "middle_3",
    "word": "wear",
    "meaning": "を着ている",
    "options": [
      "を着ている",
      "科学技術",
      "に直面する",
      "覆う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1370,
    "level": "middle_3",
    "word": "support",
    "meaning": "を支援する",
    "options": [
      "を支援する",
      "もう一つの",
      "仕事",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 1371,
    "level": "middle_3",
    "word": "event",
    "meaning": "行事",
    "options": [
      "開発",
      "昨日",
      "行事",
      "山"
    ],
    "status": "unlearned"
  },
  {
    "id": 1372,
    "level": "middle_3",
    "word": "matter",
    "meaning": "問題、困ったこと",
    "options": [
      "お金",
      "異なる",
      "問題、困ったこと",
      "〜の後で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1373,
    "level": "middle_3",
    "word": "site",
    "meaning": "場所",
    "options": [
      "着る",
      "事実、現実",
      "ある、いる",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 1374,
    "level": "middle_3",
    "word": "cover",
    "meaning": "覆う",
    "options": [
      "公園",
      "あの",
      "祭り",
      "覆う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1375,
    "level": "middle_3",
    "word": "realize",
    "meaning": "実現する",
    "options": [
      "気に懸ける",
      "実現する",
      "自由な",
      "ほかの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1376,
    "level": "middle_3",
    "word": "condition",
    "meaning": "状況",
    "options": [
      "どちらの",
      "下に",
      "状況",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1377,
    "level": "middle_3",
    "word": "increase",
    "meaning": "を増やす",
    "options": [
      "もまた",
      "を増やす",
      "離れて",
      "学校"
    ],
    "status": "unlearned"
  },
  {
    "id": 1378,
    "level": "middle_3",
    "word": "protect",
    "meaning": "を守る、保護する",
    "options": [
      "物語",
      "を守る、保護する",
      "私に",
      "生活、人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 1379,
    "level": "middle_3",
    "word": "accept",
    "meaning": "を受け入れる",
    "options": [
      "を切る",
      "彼の",
      "を受け入れる",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1380,
    "level": "middle_3",
    "word": "environment",
    "meaning": "環境",
    "options": [
      "環境",
      "権利",
      "悪い",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1381,
    "level": "middle_3",
    "word": "establish",
    "meaning": "を設立する",
    "options": [
      "夜",
      "を設立する",
      "を創造する",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1382,
    "level": "middle_3",
    "word": "imagine",
    "meaning": "を想像する",
    "options": [
      "を想像する",
      "最後の",
      "黒い",
      "歌"
    ],
    "status": "unlearned"
  },
  {
    "id": 1383,
    "level": "middle_3",
    "word": "discover",
    "meaning": "を発見する",
    "options": [
      "し続ける",
      "〜だけ",
      "に着く、到着する",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1384,
    "level": "middle_3",
    "word": "affect",
    "meaning": "に影響を与える",
    "options": [
      "多分",
      "すべての",
      "に影響を与える",
      "続く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1385,
    "level": "middle_3",
    "word": "necessary",
    "meaning": "必要な",
    "options": [
      "今日",
      "市、都会",
      "必要な",
      "し続ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1386,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "母",
      "りんご",
      "を受け取る",
      "〜さえ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1387,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "にとって",
      "もう、すでに",
      "裏の、後ろの",
      "起こる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1388,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "どれもない",
      "彼らを",
      "を聞く",
      "自動車"
    ],
    "status": "unlearned"
  },
  {
    "id": 1389,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "必要な",
      "小さい",
      "を通り抜けて",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1390,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "〜の後で",
      "名前",
      "進路",
      "を想像する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1391,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "行事",
      "を計画する",
      "質問",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1392,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "緑",
      "大学",
      "理解する",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1393,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "研究、調査",
      "共通の",
      "最後の",
      "どんな・どのように"
    ],
    "status": "unlearned"
  },
  {
    "id": 1394,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "3",
      "決してない",
      "異なる",
      "自転車"
    ],
    "status": "unlearned"
  },
  {
    "id": 1395,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "になった",
      "どれもみな",
      "果物",
      "身体"
    ],
    "status": "unlearned"
  },
  {
    "id": 1396,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "未来",
      "世界",
      "学ぶ、習う",
      "〜と〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1397,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "〜さえ",
      "にとって",
      "たいていの",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 1398,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "を含む",
      "彼を",
      "滞在",
      "もう一つの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1399,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "古い",
      "するとき",
      "を置いていく",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1400,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "しばらくの間",
      "劇",
      "しかし",
      "文化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1401,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "に影響を与える",
      "を保つ",
      "大きい、広い",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1402,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "〜に〜をさせる",
      "問題",
      "大学",
      "を決める"
    ],
    "status": "unlearned"
  },
  {
    "id": 1403,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "同じもの",
      "を導く",
      "もまた",
      "言葉"
    ],
    "status": "unlearned"
  },
  {
    "id": 1404,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "法律",
      "色々な",
      "始まる",
      "の上に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1405,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "を好む",
      "それと",
      "〜の様に見える",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1406,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "手伝う",
      "川",
      "気に懸ける",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1407,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "行、線",
      "母",
      "彼らは",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1408,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "を買う",
      "気に懸ける",
      "どれもみな",
      "食べ物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1409,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "彼らを",
      "〜に〜をさせる",
      "を手渡す",
      "を支援する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1410,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "しかし",
      "を変える",
      "数、数字",
      "権利"
    ],
    "status": "unlearned"
  },
  {
    "id": 1411,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "を聞く",
      "植物",
      "皿",
      "人々"
    ],
    "status": "unlearned"
  },
  {
    "id": 1412,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "もう、すでに",
      "〜の間",
      "道路",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1413,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "国",
      "山",
      "劇",
      "時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1414,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "政府",
      "ちがい",
      "〜の",
      "美しい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1415,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "死",
      "を主催する",
      "もまた",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1416,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "番号",
      "理由",
      "権利",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1417,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "来る",
      "動く、引っ越す",
      "そこに",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 1418,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "人間の",
      "特徴、論点",
      "情報",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1419,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "規則",
      "【手段・方法・原因】によって",
      "環境",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1420,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "を飲む",
      "大統領",
      "とまる、停止する",
      "大きい、広い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1421,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "だから、なので",
      "本当の",
      "を受け入れる",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1422,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "ちがい",
      "を失う",
      "事実、現実",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1423,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "研究、調査",
      "医者",
      "を好む",
      "を変える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1424,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "考える",
      "どれもみな",
      "の上に",
      "だけれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1425,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "を計画する",
      "駅",
      "側、面",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 1426,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "終わる",
      "滞在する",
      "まで、までは",
      "長い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1427,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "小さい",
      "することがあり得る",
      "を創造する",
      "〜の間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1428,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "店",
      "問題、困ったこと",
      "戸、ドア",
      "〜以来"
    ],
    "status": "unlearned"
  },
  {
    "id": 1429,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "参加する",
      "置く",
      "のまわりに",
      "あの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1430,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "離れて",
      "理由",
      "〜に〜をさせる",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1431,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "下に",
      "3",
      "を導く",
      "まで、までは"
    ],
    "status": "unlearned"
  },
  {
    "id": 1432,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "祭り",
      "もう、すでに",
      "手伝う",
      "これらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1433,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "し続ける",
      "たいていの",
      "理由",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 1434,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "を主催する",
      "今まで、かつて",
      "を導く",
      "【時間・場所】から"
    ],
    "status": "unlearned"
  },
  {
    "id": 1435,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "を言う",
      "をがまんする",
      "をする、行う",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 1436,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "話す",
      "しかし",
      "することがあり得る",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1437,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "のような",
      "彼の",
      "法律",
      "曲がる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1438,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "小さい",
      "持って来る",
      "ほとんど",
      "考え"
    ],
    "status": "unlearned"
  },
  {
    "id": 1439,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "歌",
      "を勉強する",
      "を含む",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1440,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "食べ物",
      "すでに、もう",
      "英語",
      "続く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1441,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "家族",
      "かつて",
      "警察",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1442,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "大統領",
      "を生産する",
      "人生",
      "だけれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1443,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "彼らの",
      "離れて",
      "本当の",
      "であるけれど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1444,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "変化",
      "になる",
      "小さい",
      "科学技術"
    ],
    "status": "unlearned"
  },
  {
    "id": 1445,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "環境",
      "続く",
      "親切な",
      "を導く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1446,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "とまる、停止する",
      "少年",
      "たった今",
      "を〜の状態にする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1447,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "すでに、もう",
      "を知っている",
      "親切な",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1448,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "私に",
      "とても",
      "本当に、実際に",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1449,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "を手渡す",
      "しなければならない",
      "人、個人",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1450,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "座る",
      "かばん",
      "戦争",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1451,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "成長する",
      "いつも",
      "【時刻】に",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1452,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "理由",
      "建物",
      "滞在",
      "の方へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1453,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "最後の",
      "彼自身を",
      "滞在",
      "である、になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1454,
    "level": "middle_3",
    "word": "although",
    "meaning": "であるけれど",
    "options": [
      "〜の",
      "であるけれど",
      "理由",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1455,
    "level": "middle_3",
    "word": "second",
    "meaning": "秒",
    "options": [
      "下に",
      "精神",
      "秒",
      "科学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1456,
    "level": "middle_3",
    "word": "actually",
    "meaning": "実は、本当は",
    "options": [
      "医者",
      "未来",
      "実は、本当は",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 1457,
    "level": "middle_3",
    "word": "probably",
    "meaning": "多分",
    "options": [
      "大きい",
      "多分",
      "なぜなら",
      "を読む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1458,
    "level": "middle_3",
    "word": "college",
    "meaning": "大学",
    "options": [
      "終わる",
      "男性、男の人",
      "を見せる",
      "大学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1459,
    "level": "middle_3",
    "word": "human",
    "meaning": "人間の",
    "options": [
      "費やす",
      "使う",
      "医者",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1460,
    "level": "middle_3",
    "word": "die",
    "meaning": "死ぬ",
    "options": [
      "自動車",
      "かわいい",
      "たいていの",
      "死ぬ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1461,
    "level": "middle_3",
    "word": "stay",
    "meaning": "滞在",
    "options": [
      "赤",
      "〜の間",
      "を計画する",
      "滞在"
    ],
    "status": "unlearned"
  },
  {
    "id": 1462,
    "level": "middle_3",
    "word": "fall",
    "meaning": "落ちる、降る",
    "options": [
      "落ちる、降る",
      "を持っている",
      "行く",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1463,
    "level": "middle_3",
    "word": "cut",
    "meaning": "を切る",
    "options": [
      "を切る",
      "部分",
      "秒",
      "目"
    ],
    "status": "unlearned"
  },
  {
    "id": 1464,
    "level": "middle_3",
    "word": "interest",
    "meaning": "興味",
    "options": [
      "にとって",
      "興味",
      "この前の",
      "を得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1465,
    "level": "middle_3",
    "word": "death",
    "meaning": "死",
    "options": [
      "しかし、けれども",
      "死",
      "おおいに、たいへん",
      "法律"
    ],
    "status": "unlearned"
  },
  {
    "id": 1466,
    "level": "middle_3",
    "word": "course",
    "meaning": "進路",
    "options": [
      "情報",
      "科学技術",
      "進路",
      "これらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1467,
    "level": "middle_3",
    "word": "reach",
    "meaning": "に着く、到着する",
    "options": [
      "どこ",
      "に着く、到着する",
      "宿題",
      "手などを挙げる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1468,
    "level": "middle_3",
    "word": "control",
    "meaning": "を管理する",
    "options": [
      "顔",
      "法律",
      "意味する",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1469,
    "level": "middle_3",
    "word": "raise",
    "meaning": "手などを挙げる",
    "options": [
      "手などを挙げる",
      "非常に",
      "を作る",
      "考え"
    ],
    "status": "unlearned"
  },
  {
    "id": 1470,
    "level": "middle_3",
    "word": "hard",
    "meaning": "一生懸命に",
    "options": [
      "を着ている",
      "である、になる",
      "一生懸命に",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 1471,
    "level": "middle_3",
    "word": "development",
    "meaning": "開発",
    "options": [
      "たった今",
      "木",
      "開発",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 1472,
    "level": "middle_3",
    "word": "report",
    "meaning": "報告",
    "options": [
      "すでに、もう",
      "親切な",
      "報告",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1473,
    "level": "middle_3",
    "word": "possible",
    "meaning": "可能な",
    "options": [
      "はじめて",
      "を建てる",
      "を見る",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1474,
    "level": "middle_3",
    "word": "whole",
    "meaning": "すべての",
    "options": [
      "すべての",
      "を歌う",
      "を管理する",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1475,
    "level": "middle_3",
    "word": "mind",
    "meaning": "精神",
    "options": [
      "【場所】に、で",
      "音",
      "〜の間",
      "精神"
    ],
    "status": "unlearned"
  },
  {
    "id": 1476,
    "level": "middle_3",
    "word": "finally",
    "meaning": "ついに、やっと",
    "options": [
      "宿題",
      "ついに、やっと",
      "手",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 1477,
    "level": "middle_3",
    "word": "decision",
    "meaning": "決定",
    "options": [
      "文化",
      "たくさんの",
      "静かな",
      "決定"
    ],
    "status": "unlearned"
  },
  {
    "id": 1478,
    "level": "middle_3",
    "word": "explain",
    "meaning": "説明する",
    "options": [
      "晴れの",
      "〜するとき",
      "説明する",
      "聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1479,
    "level": "middle_3",
    "word": "road",
    "meaning": "道路",
    "options": [
      "を想像する",
      "道路",
      "最も",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1480,
    "level": "middle_3",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "同じもの",
      "を〜の状態にする",
      "行く",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1481,
    "level": "middle_3",
    "word": "arm",
    "meaning": "腕",
    "options": [
      "1番め、最初",
      "紙",
      "成長する",
      "腕"
    ],
    "status": "unlearned"
  },
  {
    "id": 1482,
    "level": "middle_3",
    "word": "break",
    "meaning": "壊れる、破る",
    "options": [
      "を支援する",
      "他の",
      "〜と〜の間",
      "壊れる、破る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1483,
    "level": "middle_3",
    "word": "difference",
    "meaning": "ちがい",
    "options": [
      "よりも",
      "科学",
      "時刻",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1484,
    "level": "middle_3",
    "word": "receive",
    "meaning": "を受け取る",
    "options": [
      "始まる",
      "をつかむ",
      "を受け取る",
      "報告"
    ],
    "status": "unlearned"
  },
  {
    "id": 1485,
    "level": "middle_3",
    "word": "international",
    "meaning": "国際的な",
    "options": [
      "外に",
      "他の",
      "国際的な",
      "を〜の状態にする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1486,
    "level": "middle_3",
    "word": "building",
    "meaning": "建物",
    "options": [
      "を好む",
      "建物",
      "同じもの",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1487,
    "level": "middle_3",
    "word": "tax",
    "meaning": "税、税金",
    "options": [
      "そうしなければ",
      "を撮る・取る",
      "税、税金",
      "どれもない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1488,
    "level": "middle_3",
    "word": "agree",
    "meaning": "賛成する",
    "options": [
      "彼らを",
      "について、に関する",
      "落ちる",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1489,
    "level": "middle_3",
    "word": "wear",
    "meaning": "を着ている",
    "options": [
      "彼自身を",
      "特徴、論点",
      "顔",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 1490,
    "level": "middle_3",
    "word": "support",
    "meaning": "を支援する",
    "options": [
      "上へ",
      "どちらの",
      "を支援する",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 1491,
    "level": "middle_3",
    "word": "event",
    "meaning": "行事",
    "options": [
      "たくさんの",
      "行事",
      "場所",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1492,
    "level": "middle_3",
    "word": "matter",
    "meaning": "問題、困ったこと",
    "options": [
      "手などを挙げる",
      "研究、調査",
      "問題、困ったこと",
      "母"
    ],
    "status": "unlearned"
  },
  {
    "id": 1493,
    "level": "middle_3",
    "word": "site",
    "meaning": "場所",
    "options": [
      "を歌う",
      "始まる",
      "を変える",
      "場所"
    ],
    "status": "unlearned"
  },
  {
    "id": 1494,
    "level": "middle_3",
    "word": "cover",
    "meaning": "覆う",
    "options": [
      "ほかの、別の",
      "覆う",
      "を勉強する",
      "大きい、広い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1495,
    "level": "middle_3",
    "word": "realize",
    "meaning": "実現する",
    "options": [
      "手伝う",
      "非常に",
      "実は、本当は",
      "実現する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1496,
    "level": "middle_3",
    "word": "condition",
    "meaning": "状況",
    "options": [
      "文化",
      "友達",
      "状況",
      "を経験する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1497,
    "level": "middle_3",
    "word": "increase",
    "meaning": "を増やす",
    "options": [
      "少年",
      "を増やす",
      "必要な",
      "彼らを"
    ],
    "status": "unlearned"
  },
  {
    "id": 1498,
    "level": "middle_3",
    "word": "protect",
    "meaning": "を守る、保護する",
    "options": [
      "生徒",
      "を守る、保護する",
      "番号",
      "警察"
    ],
    "status": "unlearned"
  },
  {
    "id": 1499,
    "level": "middle_3",
    "word": "accept",
    "meaning": "を受け入れる",
    "options": [
      "を受け入れる",
      "【時間・場所】から",
      "私に",
      "〜することができる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1500,
    "level": "middle_3",
    "word": "environment",
    "meaning": "環境",
    "options": [
      "たった今",
      "音",
      "環境",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1501,
    "level": "middle_3",
    "word": "establish",
    "meaning": "を設立する",
    "options": [
      "見る",
      "を設立する",
      "するとき",
      "の方へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1502,
    "level": "middle_3",
    "word": "imagine",
    "meaning": "を想像する",
    "options": [
      "未来",
      "生徒",
      "を動かす",
      "を想像する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1503,
    "level": "middle_3",
    "word": "discover",
    "meaning": "を発見する",
    "options": [
      "いくつかの",
      "猫",
      "を発見する",
      "変化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1504,
    "level": "middle_3",
    "word": "affect",
    "meaning": "に影響を与える",
    "options": [
      "日本",
      "環境",
      "時刻",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1505,
    "level": "middle_3",
    "word": "necessary",
    "meaning": "必要な",
    "options": [
      "必要な",
      "環境",
      "ついに、やっと",
      "部屋"
    ],
    "status": "unlearned"
  },
  {
    "id": 1506,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "〜さえ",
      "を設立する",
      "を聞く",
      "裏の、後ろの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1507,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "おおいに、たいへん",
      "裏の、後ろの",
      "質問",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1508,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "どれもない",
      "問題",
      "部分",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 1509,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "父",
      "〜できる",
      "を話す",
      "を通り抜けて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1510,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "彼らは",
      "を試す",
      "事実、現実",
      "〜の後で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1511,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "夏",
      "の向こう側に",
      "紙",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1512,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "質問",
      "それと",
      "まだ",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1513,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "〜することができる",
      "信じる",
      "最後の",
      "もまた"
    ],
    "status": "unlearned"
  },
  {
    "id": 1514,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "それと",
      "最も良い",
      "若い",
      "決してない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1515,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "国際的な",
      "親切な",
      "になった",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1516,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "を置く",
      "〜のあとに",
      "〜と〜の間",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1517,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "木",
      "すでに、もう",
      "たいていの",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1518,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "もう一つの",
      "考える",
      "有名な",
      "静かな"
    ],
    "status": "unlearned"
  },
  {
    "id": 1519,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "を置いていく",
      "着る",
      "を歌う",
      "1番め、最初"
    ],
    "status": "unlearned"
  },
  {
    "id": 1520,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "その",
      "まで、までは",
      "しばらくの間",
      "を開ける"
    ],
    "status": "unlearned"
  },
  {
    "id": 1521,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "を保つ",
      "のような",
      "市、都会",
      "腕"
    ],
    "status": "unlearned"
  },
  {
    "id": 1522,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "を読む",
      "〜に〜をさせる",
      "私に",
      "外に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1523,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "新しい",
      "理由",
      "〜と一緒に",
      "同じもの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1524,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "始まる",
      "だろうに",
      "大きい",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1525,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "科学技術",
      "〜以来",
      "〜だけ",
      "〜の様に見える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1526,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "ちがい",
      "手伝う",
      "言葉",
      "あれらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1527,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "ある、いる",
      "生活、人生",
      "問題",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1528,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "祭り",
      "どれもみな",
      "駅",
      "考える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1529,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "緑",
      "水",
      "彼女は",
      "を手渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1530,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "環境",
      "部分",
      "開発",
      "権利"
    ],
    "status": "unlearned"
  },
  {
    "id": 1531,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "理解する",
      "覆う",
      "切る",
      "を聞く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1532,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "〜の間",
      "【場所】に、で",
      "ここに",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1533,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "私たちの",
      "とまる、停止する",
      "劇",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1534,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "考える",
      "政府",
      "紙",
      "父"
    ],
    "status": "unlearned"
  },
  {
    "id": 1535,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "を言う",
      "〜できる",
      "すでに、もう",
      "を主催する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1536,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "手",
      "数学",
      "道",
      "番号"
    ],
    "status": "unlearned"
  },
  {
    "id": 1537,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "私に",
      "動く、引っ越す",
      "を飲む",
      "6月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1538,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "とても",
      "日本",
      "その",
      "特徴、論点"
    ],
    "status": "unlearned"
  },
  {
    "id": 1539,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "なぜなら",
      "〜のあとに",
      "を置いていく",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1540,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "大きい、広い",
      "それの、その",
      "本当に、実際に",
      "仕事"
    ],
    "status": "unlearned"
  },
  {
    "id": 1541,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "彼らの",
      "芸術",
      "帽子",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1542,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "祭り",
      "賛成する",
      "事実、現実",
      "市、都会"
    ],
    "status": "unlearned"
  },
  {
    "id": 1543,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "2",
      "紙",
      "大統領",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 1544,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "住む",
      "費やす",
      "参加する",
      "だけれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1545,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "を飲む",
      "壊れる、破る",
      "側、面",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1546,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "多分",
      "長い",
      "を持っている",
      "劇"
    ],
    "status": "unlearned"
  },
  {
    "id": 1547,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "1時間",
      "彼らは",
      "部分",
      "小さい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1548,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "〜だけ",
      "よりも",
      "最も良い",
      "〜以来"
    ],
    "status": "unlearned"
  },
  {
    "id": 1549,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "のまわりに",
      "置く",
      "全部、全員、全て",
      "他の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1550,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "離れて",
      "お金",
      "たくさんの",
      "黒い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1551,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "を撮る・取る",
      "まで、までは",
      "の上に",
      "歴史"
    ],
    "status": "unlearned"
  },
  {
    "id": 1552,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "状況",
      "を失う",
      "日曜日",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1553,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "行、線",
      "まで、までは",
      "食べ物",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 1554,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "今まで、かつて",
      "を含む",
      "決してない",
      "理解する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1555,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "〜で",
      "について、に関する",
      "ちがい",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1556,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "多くの",
      "木",
      "皿",
      "しかし"
    ],
    "status": "unlearned"
  },
  {
    "id": 1557,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "法律",
      "外に",
      "使う",
      "離れて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1558,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "彼らは",
      "ほとんど",
      "覆う",
      "を歌う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1559,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "全部、全員、全て",
      "です、ます",
      "を含む",
      "多分"
    ],
    "status": "unlearned"
  },
  {
    "id": 1560,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "どれもない",
      "そうしなければ",
      "続く",
      "たいていの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1561,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "去る",
      "どれもみな",
      "かつて",
      "決してない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1562,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "悪い",
      "を持っている",
      "大統領",
      "にとって"
    ],
    "status": "unlearned"
  },
  {
    "id": 1563,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "の向こう側に",
      "夜",
      "本当の",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1564,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "状況",
      "と会う",
      "変化",
      "使う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1565,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "を導く",
      "彼女は",
      "を好む",
      "早く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1566,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "学校",
      "最後の",
      "とまる、停止する",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 1567,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "を発見する",
      "彼自身を",
      "を歌う",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 1568,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "質問",
      "状況",
      "川",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1569,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "座る",
      "人、個人",
      "を切る",
      "人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1570,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "本当の",
      "よりもっと",
      "を着ている",
      "戦争"
    ],
    "status": "unlearned"
  },
  {
    "id": 1571,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "大きい",
      "成長する",
      "望む",
      "時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1572,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "滞在する",
      "理由",
      "と感じる",
      "〜のあとに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1573,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "を動かす",
      "人、個人",
      "彼自身を",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1574,
    "level": "middle_3",
    "word": "although",
    "meaning": "であるけれど",
    "options": [
      "なぜなら",
      "およそ、約、ごろ",
      "であるけれど",
      "として・〜のために"
    ],
    "status": "unlearned"
  },
  {
    "id": 1575,
    "level": "middle_3",
    "word": "second",
    "meaning": "秒",
    "options": [
      "側、面",
      "秒",
      "国家の",
      "3"
    ],
    "status": "unlearned"
  },
  {
    "id": 1576,
    "level": "middle_3",
    "word": "actually",
    "meaning": "実は、本当は",
    "options": [
      "医者",
      "参加する",
      "側、面",
      "実は、本当は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1577,
    "level": "middle_3",
    "word": "probably",
    "meaning": "多分",
    "options": [
      "多分",
      "を着ている",
      "図書館",
      "まだ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1578,
    "level": "middle_3",
    "word": "college",
    "meaning": "大学",
    "options": [
      "早く",
      "大学",
      "共通の",
      "向こうへ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1579,
    "level": "middle_3",
    "word": "human",
    "meaning": "人間の",
    "options": [
      "人間の",
      "国際的な",
      "共通の",
      "軽い・光"
    ],
    "status": "unlearned"
  },
  {
    "id": 1580,
    "level": "middle_3",
    "word": "die",
    "meaning": "死ぬ",
    "options": [
      "死ぬ",
      "向こうへ",
      "置く",
      "そこに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1581,
    "level": "middle_3",
    "word": "stay",
    "meaning": "滞在",
    "options": [
      "重要な",
      "滞在",
      "泳ぐ",
      "を主催する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1582,
    "level": "middle_3",
    "word": "fall",
    "meaning": "落ちる、降る",
    "options": [
      "いつも",
      "落ちる、降る",
      "を計画する",
      "非常に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1583,
    "level": "middle_3",
    "word": "cut",
    "meaning": "を切る",
    "options": [
      "りんご",
      "国際的な",
      "加える",
      "を切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1584,
    "level": "middle_3",
    "word": "interest",
    "meaning": "興味",
    "options": [
      "意味する",
      "を〜の状態にする",
      "興味",
      "について、に関する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1585,
    "level": "middle_3",
    "word": "death",
    "meaning": "死",
    "options": [
      "生徒",
      "死",
      "取る",
      "彼を"
    ],
    "status": "unlearned"
  },
  {
    "id": 1586,
    "level": "middle_3",
    "word": "course",
    "meaning": "進路",
    "options": [
      "の方へ",
      "進路",
      "本当に、実際に",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1587,
    "level": "middle_3",
    "word": "reach",
    "meaning": "に着く、到着する",
    "options": [
      "種類",
      "場所",
      "たいていの",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1588,
    "level": "middle_3",
    "word": "control",
    "meaning": "を管理する",
    "options": [
      "に話す",
      "日本",
      "よりも",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1589,
    "level": "middle_3",
    "word": "raise",
    "meaning": "手などを挙げる",
    "options": [
      "着る",
      "市、都会",
      "時間",
      "手などを挙げる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1590,
    "level": "middle_3",
    "word": "hard",
    "meaning": "一生懸命に",
    "options": [
      "あの",
      "を管理する",
      "教室",
      "一生懸命に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1591,
    "level": "middle_3",
    "word": "development",
    "meaning": "開発",
    "options": [
      "あれらの",
      "見る",
      "成長する",
      "開発"
    ],
    "status": "unlearned"
  },
  {
    "id": 1592,
    "level": "middle_3",
    "word": "report",
    "meaning": "報告",
    "options": [
      "報告",
      "たいていの",
      "裏の、後ろの",
      "最も"
    ],
    "status": "unlearned"
  },
  {
    "id": 1593,
    "level": "middle_3",
    "word": "possible",
    "meaning": "可能な",
    "options": [
      "可能な",
      "英語",
      "必要な",
      "特徴、論点"
    ],
    "status": "unlearned"
  },
  {
    "id": 1594,
    "level": "middle_3",
    "word": "whole",
    "meaning": "すべての",
    "options": [
      "し続ける",
      "必要な",
      "異なる",
      "すべての"
    ],
    "status": "unlearned"
  },
  {
    "id": 1595,
    "level": "middle_3",
    "word": "mind",
    "meaning": "精神",
    "options": [
      "を管理する",
      "手",
      "どれもない",
      "精神"
    ],
    "status": "unlearned"
  },
  {
    "id": 1596,
    "level": "middle_3",
    "word": "finally",
    "meaning": "ついに、やっと",
    "options": [
      "たった今",
      "ついに、やっと",
      "静かな",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1597,
    "level": "middle_3",
    "word": "decision",
    "meaning": "決定",
    "options": [
      "手",
      "決定",
      "いつも",
      "自然"
    ],
    "status": "unlearned"
  },
  {
    "id": 1598,
    "level": "middle_3",
    "word": "explain",
    "meaning": "説明する",
    "options": [
      "法律",
      "説明する",
      "英語",
      "山"
    ],
    "status": "unlearned"
  },
  {
    "id": 1599,
    "level": "middle_3",
    "word": "road",
    "meaning": "道路",
    "options": [
      "生徒",
      "道路",
      "まで、までは",
      "情報"
    ],
    "status": "unlearned"
  },
  {
    "id": 1600,
    "level": "middle_3",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "未来",
      "運転する",
      "本",
      "朝"
    ],
    "status": "unlearned"
  },
  {
    "id": 1601,
    "level": "middle_3",
    "word": "arm",
    "meaning": "腕",
    "options": [
      "2",
      "音楽",
      "腕",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1602,
    "level": "middle_3",
    "word": "break",
    "meaning": "壊れる、破る",
    "options": [
      "離れて",
      "について、に関する",
      "死",
      "壊れる、破る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1603,
    "level": "middle_3",
    "word": "difference",
    "meaning": "ちがい",
    "options": [
      "を受け取る",
      "を好む",
      "の向こう側に",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1604,
    "level": "middle_3",
    "word": "receive",
    "meaning": "を受け取る",
    "options": [
      "を受け取る",
      "を主催する",
      "〜と〜の間",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1605,
    "level": "middle_3",
    "word": "international",
    "meaning": "国際的な",
    "options": [
      "世界",
      "心",
      "国際的な",
      "どんな・どのように"
    ],
    "status": "unlearned"
  },
  {
    "id": 1606,
    "level": "middle_3",
    "word": "building",
    "meaning": "建物",
    "options": [
      "座る",
      "を研究する",
      "建物",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1607,
    "level": "middle_3",
    "word": "tax",
    "meaning": "税、税金",
    "options": [
      "する前に",
      "を試す",
      "税、税金",
      "死ぬ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1608,
    "level": "middle_3",
    "word": "agree",
    "meaning": "賛成する",
    "options": [
      "賛成する",
      "費やす",
      "を着ている",
      "どれもない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1609,
    "level": "middle_3",
    "word": "wear",
    "meaning": "を着ている",
    "options": [
      "もう一つの",
      "たった今",
      "できた",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 1610,
    "level": "middle_3",
    "word": "support",
    "meaning": "を支援する",
    "options": [
      "【時刻】に",
      "を支援する",
      "多くの",
      "側面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1611,
    "level": "middle_3",
    "word": "event",
    "meaning": "行事",
    "options": [
      "の方へ",
      "去る",
      "実現する",
      "行事"
    ],
    "status": "unlearned"
  },
  {
    "id": 1612,
    "level": "middle_3",
    "word": "matter",
    "meaning": "問題、困ったこと",
    "options": [
      "だろうに",
      "道路",
      "3",
      "問題、困ったこと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1613,
    "level": "middle_3",
    "word": "site",
    "meaning": "場所",
    "options": [
      "場所",
      "を話す",
      "2",
      "研究、調査"
    ],
    "status": "unlearned"
  },
  {
    "id": 1614,
    "level": "middle_3",
    "word": "cover",
    "meaning": "覆う",
    "options": [
      "持って来る",
      "親切な",
      "覆う",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1615,
    "level": "middle_3",
    "word": "realize",
    "meaning": "実現する",
    "options": [
      "しなければならない",
      "実現する",
      "早く",
      "税、税金"
    ],
    "status": "unlearned"
  },
  {
    "id": 1616,
    "level": "middle_3",
    "word": "condition",
    "meaning": "状況",
    "options": [
      "の前に",
      "状況",
      "自然",
      "彼は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1617,
    "level": "middle_3",
    "word": "increase",
    "meaning": "を増やす",
    "options": [
      "を増やす",
      "宿題",
      "私たちの",
      "を話す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1618,
    "level": "middle_3",
    "word": "protect",
    "meaning": "を守る、保護する",
    "options": [
      "に着く、到着する",
      "〜の後で",
      "顔",
      "を守る、保護する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1619,
    "level": "middle_3",
    "word": "accept",
    "meaning": "を受け入れる",
    "options": [
      "として・〜のために",
      "多くの",
      "を受け入れる",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 1620,
    "level": "middle_3",
    "word": "environment",
    "meaning": "環境",
    "options": [
      "を発見する",
      "私に",
      "環境",
      "ついに、やっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1621,
    "level": "middle_3",
    "word": "establish",
    "meaning": "を設立する",
    "options": [
      "〜と一緒に",
      "を設立する",
      "大統領",
      "時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1622,
    "level": "middle_3",
    "word": "imagine",
    "meaning": "を想像する",
    "options": [
      "英語",
      "果物",
      "山",
      "を想像する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1623,
    "level": "middle_3",
    "word": "discover",
    "meaning": "を発見する",
    "options": [
      "大統領",
      "映画",
      "を発見する",
      "祭り"
    ],
    "status": "unlearned"
  },
  {
    "id": 1624,
    "level": "middle_3",
    "word": "affect",
    "meaning": "に影響を与える",
    "options": [
      "店",
      "彼は",
      "家",
      "に影響を与える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1625,
    "level": "middle_3",
    "word": "necessary",
    "meaning": "必要な",
    "options": [
      "いつも",
      "必要な",
      "離れて",
      "〜の後で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1626,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "〜さえ",
      "そうしなければ",
      "意味する",
      "始まる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1627,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "裏の、後ろの",
      "私は、私が",
      "決定",
      "加える"
    ],
    "status": "unlearned"
  },
  {
    "id": 1628,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "学ぶ、習う",
      "晴れの",
      "どこ",
      "どれもない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1629,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "を計画する",
      "を通り抜けて",
      "私に",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1630,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "【時間・場所】から",
      "〜の後で",
      "駅",
      "〜の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1631,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "自転車",
      "の向こう側に",
      "未来",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1632,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "〜に〜をさせる",
      "事実、現実",
      "まだ",
      "になった"
    ],
    "status": "unlearned"
  },
  {
    "id": 1633,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "を発見する",
      "を与える、渡す",
      "非常に",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1634,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "〜することができる",
      "軽い・光",
      "決してない",
      "猫"
    ],
    "status": "unlearned"
  },
  {
    "id": 1635,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "になった",
      "1",
      "を支援する",
      "として"
    ],
    "status": "unlearned"
  },
  {
    "id": 1636,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "部屋",
      "切る",
      "〜と〜の間",
      "なぜなら"
    ],
    "status": "unlearned"
  },
  {
    "id": 1637,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "大きい",
      "たいていの",
      "ほとんど",
      "を受け取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1638,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "人",
      "まだ",
      "とても",
      "もう一つの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1639,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "を置いていく",
      "外に",
      "目",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1640,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "医者",
      "使う",
      "しばらくの間",
      "学ぶ、習う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1641,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "歌",
      "を経験する",
      "を保つ",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1642,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "人生",
      "〜に〜をさせる",
      "望む",
      "を動かす"
    ],
    "status": "unlearned"
  },
  {
    "id": 1643,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "を手伝う",
      "昨日",
      "同じもの",
      "ノート"
    ],
    "status": "unlearned"
  },
  {
    "id": 1644,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "始まる",
      "場所",
      "彼らを",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 1645,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "〜の様に見える",
      "季節",
      "手伝う",
      "時刻"
    ],
    "status": "unlearned"
  },
  {
    "id": 1646,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "手伝う",
      "どんな・どのように",
      "年",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1647,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "問題",
      "を説明する",
      "彼女は",
      "映画"
    ],
    "status": "unlearned"
  },
  {
    "id": 1648,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "果物",
      "開発",
      "どれもみな",
      "花"
    ],
    "status": "unlearned"
  },
  {
    "id": 1649,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "秒",
      "を手渡す",
      "もう一つの",
      "離れて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1650,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "1",
      "の前に",
      "権利",
      "【時刻】に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1651,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "を聞く",
      "おおいに、たいへん",
      "を置く",
      "本"
    ],
    "status": "unlearned"
  },
  {
    "id": 1652,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "〜の間",
      "彼は",
      "家族",
      "することがあり得る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1653,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "どれもみな",
      "劇",
      "手などを挙げる",
      "文化"
    ],
    "status": "unlearned"
  },
  {
    "id": 1654,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "ちょうど、方向に",
      "まで、までは",
      "〜さえ",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1655,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "を説明する",
      "を主催する",
      "生きる",
      "を運ぶ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1656,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "名前",
      "覆う",
      "本当に、実際に",
      "番号"
    ],
    "status": "unlearned"
  },
  {
    "id": 1657,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "を試す",
      "動く、引っ越す",
      "ほかの",
      "この"
    ],
    "status": "unlearned"
  },
  {
    "id": 1658,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "特徴、論点",
      "もっと",
      "〜に〜をさせる",
      "山"
    ],
    "status": "unlearned"
  },
  {
    "id": 1659,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "の方へ",
      "信じる",
      "どこ",
      "を計画する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1660,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "とても",
      "軽い・光",
      "大きい、広い",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1661,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "小さい",
      "しばらくの間",
      "報告",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1662,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "を着ている",
      "りんご",
      "事実、現実",
      "それの、その"
    ],
    "status": "unlearned"
  },
  {
    "id": 1663,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "待つ",
      "異なる",
      "研究、調査",
      "科学技術"
    ],
    "status": "unlearned"
  },
  {
    "id": 1664,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "全部、全員、全て",
      "座る",
      "だけれども",
      "〜の中へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1665,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "を置いていく",
      "側、面",
      "理解する",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1666,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "科学",
      "確信して",
      "を開ける",
      "長い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1667,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "小さい",
      "戻って、返して",
      "仕事",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 1668,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "を置く",
      "〜以来",
      "置く",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 1669,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "のまわりに",
      "この",
      "意味する",
      "手などを挙げる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1670,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "そこに",
      "離れて",
      "よりも",
      "緑"
    ],
    "status": "unlearned"
  },
  {
    "id": 1671,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "滞在する",
      "まで、までは",
      "花",
      "説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1672,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "を主催する",
      "住む",
      "音楽",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1673,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "どちらの",
      "を守る、保護する",
      "行、線",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1674,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "今まで、かつて",
      "成長する",
      "考える",
      "全ての、全部の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1675,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "を言う",
      "をがまんする",
      "他の",
      "来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1676,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "しかし",
      "〜以来",
      "なぜなら",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1677,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "法律",
      "なにか",
      "夜",
      "泳ぐ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1678,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "この前の",
      "ほとんど",
      "ほかの",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1679,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "月",
      "彼を",
      "人々",
      "を含む"
    ],
    "status": "unlearned"
  },
  {
    "id": 1680,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "彼らは",
      "を創造する",
      "続く",
      "【時間・場所】から"
    ],
    "status": "unlearned"
  },
  {
    "id": 1681,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "を試す",
      "かつて",
      "動く、引っ越す",
      "ちょうど、方向に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1682,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "大統領",
      "文化",
      "本",
      "少女"
    ],
    "status": "unlearned"
  },
  {
    "id": 1683,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "有名な",
      "し続ける",
      "本当の",
      "を導く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1684,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "行、線",
      "可能な",
      "変化",
      "本当に、実際に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1685,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "場所",
      "と会う",
      "を導く",
      "ベッド"
    ],
    "status": "unlearned"
  },
  {
    "id": 1686,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "人",
      "〜と一緒に",
      "とまる、停止する",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1687,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "忙しい",
      "すでに、もう",
      "を説明する",
      "私に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1688,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "歴史",
      "身体",
      "健康",
      "早く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1689,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "人、個人",
      "映画",
      "について、に関する",
      "彼の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1690,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "を買う",
      "戦争",
      "を続ける",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1691,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "教室",
      "に影響を与える",
      "の向こう側に",
      "成長する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1692,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "情報",
      "事実、現実",
      "について、に関する",
      "理由"
    ],
    "status": "unlearned"
  },
  {
    "id": 1693,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "5月",
      "彼自身を",
      "理由",
      "商売"
    ],
    "status": "unlearned"
  },
  {
    "id": 1694,
    "level": "middle_3",
    "word": "although",
    "meaning": "であるけれど",
    "options": [
      "であるけれど",
      "手",
      "特徴、論点",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1695,
    "level": "middle_3",
    "word": "second",
    "meaning": "秒",
    "options": [
      "歌",
      "秒",
      "彼自身を",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1696,
    "level": "middle_3",
    "word": "actually",
    "meaning": "実は、本当は",
    "options": [
      "年",
      "実は、本当は",
      "だろうに",
      "の方へ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1697,
    "level": "middle_3",
    "word": "probably",
    "meaning": "多分",
    "options": [
      "を聞く",
      "多分",
      "を生産する",
      "を勉強する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1698,
    "level": "middle_3",
    "word": "college",
    "meaning": "大学",
    "options": [
      "確信して",
      "腕",
      "ここに",
      "大学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1699,
    "level": "middle_3",
    "word": "human",
    "meaning": "人間の",
    "options": [
      "を生産する",
      "他の",
      "人間の",
      "取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1700,
    "level": "middle_3",
    "word": "die",
    "meaning": "死ぬ",
    "options": [
      "日、1日",
      "死ぬ",
      "社会",
      "腕"
    ],
    "status": "unlearned"
  },
  {
    "id": 1701,
    "level": "middle_3",
    "word": "stay",
    "meaning": "滞在",
    "options": [
      "大学",
      "先生",
      "滞在",
      "よりも"
    ],
    "status": "unlearned"
  },
  {
    "id": 1702,
    "level": "middle_3",
    "word": "fall",
    "meaning": "落ちる、降る",
    "options": [
      "最後の",
      "文化",
      "落ちる、降る",
      "滞在"
    ],
    "status": "unlearned"
  },
  {
    "id": 1703,
    "level": "middle_3",
    "word": "cut",
    "meaning": "を切る",
    "options": [
      "を生産する",
      "成長する",
      "を切る",
      "説明する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1704,
    "level": "middle_3",
    "word": "interest",
    "meaning": "興味",
    "options": [
      "を〜の状態にする",
      "6月",
      "の上に",
      "興味"
    ],
    "status": "unlearned"
  },
  {
    "id": 1705,
    "level": "middle_3",
    "word": "death",
    "meaning": "死",
    "options": [
      "に話す",
      "だから、なので",
      "死",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1706,
    "level": "middle_3",
    "word": "course",
    "meaning": "進路",
    "options": [
      "進路",
      "を支援する",
      "を着ている",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1707,
    "level": "middle_3",
    "word": "reach",
    "meaning": "に着く、到着する",
    "options": [
      "に着く、到着する",
      "劇",
      "外に",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1708,
    "level": "middle_3",
    "word": "control",
    "meaning": "を管理する",
    "options": [
      "を置く",
      "帰る、戻る",
      "6月",
      "を管理する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1709,
    "level": "middle_3",
    "word": "raise",
    "meaning": "手などを挙げる",
    "options": [
      "手などを挙げる",
      "だけれども",
      "文化",
      "本当の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1710,
    "level": "middle_3",
    "word": "hard",
    "meaning": "一生懸命に",
    "options": [
      "座る",
      "大学",
      "一生懸命に",
      "世界"
    ],
    "status": "unlearned"
  },
  {
    "id": 1711,
    "level": "middle_3",
    "word": "development",
    "meaning": "開発",
    "options": [
      "をがまんする",
      "開発",
      "自動車",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1712,
    "level": "middle_3",
    "word": "report",
    "meaning": "報告",
    "options": [
      "多くの",
      "報告",
      "を失う",
      "もし〜ならば"
    ],
    "status": "unlearned"
  },
  {
    "id": 1713,
    "level": "middle_3",
    "word": "possible",
    "meaning": "可能な",
    "options": [
      "赤",
      "可能な",
      "ほかの",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1714,
    "level": "middle_3",
    "word": "whole",
    "meaning": "すべての",
    "options": [
      "昨日",
      "すべての",
      "開発",
      "するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 1715,
    "level": "middle_3",
    "word": "mind",
    "meaning": "精神",
    "options": [
      "精神",
      "最後の",
      "を発見する",
      "〜の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1716,
    "level": "middle_3",
    "word": "finally",
    "meaning": "ついに、やっと",
    "options": [
      "参加する",
      "黒い",
      "たいていの",
      "ついに、やっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1717,
    "level": "middle_3",
    "word": "decision",
    "meaning": "決定",
    "options": [
      "芸術",
      "一生懸命に",
      "決定",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 1718,
    "level": "middle_3",
    "word": "explain",
    "meaning": "説明する",
    "options": [
      "もの、こと",
      "名前",
      "説明する",
      "〜だけ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1719,
    "level": "middle_3",
    "word": "road",
    "meaning": "道路",
    "options": [
      "今日",
      "私に",
      "実現する",
      "道路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1720,
    "level": "middle_3",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "運転する",
      "法律",
      "よりもっと",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 1721,
    "level": "middle_3",
    "word": "arm",
    "meaning": "腕",
    "options": [
      "〜できる",
      "2",
      "腕",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1722,
    "level": "middle_3",
    "word": "break",
    "meaning": "壊れる、破る",
    "options": [
      "食べ物",
      "壊れる、破る",
      "彼らは",
      "人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1723,
    "level": "middle_3",
    "word": "difference",
    "meaning": "ちがい",
    "options": [
      "情報",
      "たのむ",
      "なぜなら",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1724,
    "level": "middle_3",
    "word": "receive",
    "meaning": "を受け取る",
    "options": [
      "について、に関する",
      "そして",
      "最も",
      "を受け取る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1725,
    "level": "middle_3",
    "word": "international",
    "meaning": "国際的な",
    "options": [
      "国際的な",
      "にとって",
      "種類",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 1726,
    "level": "middle_3",
    "word": "building",
    "meaning": "建物",
    "options": [
      "気に懸ける",
      "建物",
      "店",
      "実現する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1727,
    "level": "middle_3",
    "word": "tax",
    "meaning": "税、税金",
    "options": [
      "全部、全員、全て",
      "その",
      "〜のあとに",
      "税、税金"
    ],
    "status": "unlearned"
  },
  {
    "id": 1728,
    "level": "middle_3",
    "word": "agree",
    "meaning": "賛成する",
    "options": [
      "駅",
      "〜で",
      "を運ぶ",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1729,
    "level": "middle_3",
    "word": "wear",
    "meaning": "を着ている",
    "options": [
      "数、数字",
      "動く、引っ越す",
      "たった今",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 1730,
    "level": "middle_3",
    "word": "support",
    "meaning": "を支援する",
    "options": [
      "かつて",
      "を支援する",
      "番号",
      "を作る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1731,
    "level": "middle_3",
    "word": "event",
    "meaning": "行事",
    "options": [
      "行事",
      "物語",
      "月",
      "私たちの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1732,
    "level": "middle_3",
    "word": "matter",
    "meaning": "問題、困ったこと",
    "options": [
      "をがまんする",
      "問題、困ったこと",
      "世界",
      "〜するとき"
    ],
    "status": "unlearned"
  },
  {
    "id": 1733,
    "level": "middle_3",
    "word": "site",
    "meaning": "場所",
    "options": [
      "を管理する",
      "米、ご飯",
      "場所",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1734,
    "level": "middle_3",
    "word": "cover",
    "meaning": "覆う",
    "options": [
      "を運ぶ",
      "覆う",
      "数、数字",
      "植物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1735,
    "level": "middle_3",
    "word": "realize",
    "meaning": "実現する",
    "options": [
      "新しい",
      "行事",
      "人々",
      "実現する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1736,
    "level": "middle_3",
    "word": "condition",
    "meaning": "状況",
    "options": [
      "話す",
      "方法",
      "〜するとき",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 1737,
    "level": "middle_3",
    "word": "increase",
    "meaning": "を増やす",
    "options": [
      "落ちる",
      "私に",
      "の上に",
      "を増やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 1738,
    "level": "middle_3",
    "word": "protect",
    "meaning": "を守る、保護する",
    "options": [
      "国家の",
      "を守る、保護する",
      "しなければならない",
      "と会う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1739,
    "level": "middle_3",
    "word": "accept",
    "meaning": "を受け入れる",
    "options": [
      "教える",
      "たった今",
      "この",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1740,
    "level": "middle_3",
    "word": "environment",
    "meaning": "環境",
    "options": [
      "環境",
      "本当に、実際に",
      "友達",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1741,
    "level": "middle_3",
    "word": "establish",
    "meaning": "を設立する",
    "options": [
      "を設立する",
      "参加する",
      "側、面",
      "1時間"
    ],
    "status": "unlearned"
  },
  {
    "id": 1742,
    "level": "middle_3",
    "word": "imagine",
    "meaning": "を想像する",
    "options": [
      "2",
      "大学",
      "戦争",
      "を想像する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1743,
    "level": "middle_3",
    "word": "discover",
    "meaning": "を発見する",
    "options": [
      "とまる、停止する",
      "を発見する",
      "税、税金",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 1744,
    "level": "middle_3",
    "word": "affect",
    "meaning": "に影響を与える",
    "options": [
      "植物",
      "良い",
      "に影響を与える",
      "家族"
    ],
    "status": "unlearned"
  },
  {
    "id": 1745,
    "level": "middle_3",
    "word": "necessary",
    "meaning": "必要な",
    "options": [
      "側、面",
      "であるけれど",
      "必要な",
      "を主催する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1746,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "進路",
      "〜さえ",
      "にとって",
      "未来"
    ],
    "status": "unlearned"
  },
  {
    "id": 1747,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "を好む",
      "裏の、後ろの",
      "使う",
      "かわいい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1748,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "去る",
      "どれもない",
      "下に",
      "を試す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1749,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "報告",
      "異なる",
      "この前の",
      "を通り抜けて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1750,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "を建てる",
      "ほかの",
      "開発",
      "〜の後で"
    ],
    "status": "unlearned"
  },
  {
    "id": 1751,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "下に",
      "特徴、論点",
      "の向こう側に",
      "〜と一緒に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1752,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "【手段・方法・原因】によって",
      "まだ",
      "戸、ドア",
      "英語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1753,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "を通り抜けて",
      "よりも",
      "研究、調査",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1754,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "祭り",
      "学ぶ、習う",
      "決してない",
      "を作る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1755,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "【時刻】に",
      "新しい",
      "りんご",
      "になった"
    ],
    "status": "unlearned"
  },
  {
    "id": 1756,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "〜と〜の間",
      "にとって",
      "続く",
      "米、ご飯"
    ],
    "status": "unlearned"
  },
  {
    "id": 1757,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "大学",
      "たいていの",
      "聞く",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1758,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "もう一つの",
      "まで、までは",
      "とまる、停止する",
      "座る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1759,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "晴れの",
      "を得る",
      "を置いていく",
      "国家の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1760,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "の上に",
      "しばらくの間",
      "を変える",
      "戦争"
    ],
    "status": "unlearned"
  },
  {
    "id": 1761,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "ちょうど、方向に",
      "として",
      "を保つ",
      "親切な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1762,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "歌",
      "を動かす",
      "〜に〜をさせる",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1763,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "同じもの",
      "を守る、保護する",
      "に影響を与える",
      "なにか"
    ],
    "status": "unlearned"
  },
  {
    "id": 1764,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "始まる",
      "全ての、全部の",
      "状況",
      "どちらの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1765,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "どれもない",
      "〜の様に見える",
      "できた",
      "ノート"
    ],
    "status": "unlearned"
  },
  {
    "id": 1766,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "劇",
      "手伝う",
      "を置く",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1767,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "猫",
      "を作る",
      "【場所】に、で",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1768,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "を運ぶ",
      "男性、男の人",
      "緑",
      "どれもみな"
    ],
    "status": "unlearned"
  },
  {
    "id": 1769,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "昨日",
      "を手渡す",
      "環境",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 1770,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "のような",
      "でない",
      "を手渡す",
      "権利"
    ],
    "status": "unlearned"
  },
  {
    "id": 1771,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "どこ",
      "をつかむ",
      "を聞く",
      "小さい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1772,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "1",
      "教室",
      "〜の間",
      "〜できる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1773,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "年",
      "を受け取る",
      "劇",
      "お金"
    ],
    "status": "unlearned"
  },
  {
    "id": 1774,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "祭り",
      "戸、ドア",
      "生きる",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1775,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "私に",
      "を保つ",
      "を主催する",
      "落ちる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1776,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "番号",
      "望む",
      "を見る",
      "ここに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1777,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "健康",
      "住む",
      "動く、引っ越す",
      "国際的な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1778,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "を開ける",
      "特徴、論点",
      "いつも",
      "見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1779,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "警察",
      "信じる",
      "規則",
      "おおいに、たいへん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1780,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "大きい、広い",
      "〜の",
      "動く、引っ越す",
      "しかし、けれども"
    ],
    "status": "unlearned"
  },
  {
    "id": 1781,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "法律",
      "国家の",
      "共通の",
      "状況"
    ],
    "status": "unlearned"
  },
  {
    "id": 1782,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "を設立する",
      "事実、現実",
      "彼の",
      "赤"
    ],
    "status": "unlearned"
  },
  {
    "id": 1783,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "研究、調査",
      "向こうへ",
      "〜するつもり",
      "大きい、広い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1784,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "だけれども",
      "問題",
      "季節",
      "たくさん"
    ],
    "status": "unlearned"
  },
  {
    "id": 1785,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "と会う",
      "果物",
      "これらの",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1786,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "長い",
      "〜の後で",
      "を得る",
      "を与える、渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1787,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "小さい",
      "払う",
      "を作る",
      "国"
    ],
    "status": "unlearned"
  },
  {
    "id": 1788,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "を主催する",
      "〜以来",
      "に話す",
      "有名な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1789,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "それは",
      "を買う",
      "のまわりに",
      "市、都会"
    ],
    "status": "unlearned"
  },
  {
    "id": 1790,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "〜の様に見える",
      "を与える、渡す",
      "離れて",
      "若い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1791,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "帽子",
      "場所",
      "地下鉄",
      "まで、までは"
    ],
    "status": "unlearned"
  },
  {
    "id": 1792,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "泳ぐ",
      "重要な",
      "多分",
      "もう、すでに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1793,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "科学",
      "にとって",
      "を飲む",
      "行、線"
    ],
    "status": "unlearned"
  },
  {
    "id": 1794,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "そこに",
      "いくつかの",
      "今まで、かつて",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1795,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "色々な",
      "をがまんする",
      "自然",
      "古い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1796,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "赤",
      "しかし、けれども",
      "もし〜ならば",
      "しかし"
    ],
    "status": "unlearned"
  },
  {
    "id": 1797,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "できた",
      "法律",
      "部屋",
      "緑"
    ],
    "status": "unlearned"
  },
  {
    "id": 1798,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "状況",
      "ほとんど",
      "どんな・どのように",
      "興味"
    ],
    "status": "unlearned"
  },
  {
    "id": 1799,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "道路",
      "を含む",
      "おおいに、たいへん",
      "自然"
    ],
    "status": "unlearned"
  },
  {
    "id": 1800,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "【時間・場所】から",
      "続く",
      "りんご",
      "感じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1801,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "持って来る",
      "〜できる",
      "かつて",
      "日、1日"
    ],
    "status": "unlearned"
  },
  {
    "id": 1802,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "大統領",
      "お金",
      "を管理する",
      "年"
    ],
    "status": "unlearned"
  },
  {
    "id": 1803,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "の方へ",
      "に話す",
      "本当の",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1804,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "場所",
      "変化",
      "〜のあとに",
      "医者"
    ],
    "status": "unlearned"
  },
  {
    "id": 1805,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "古い",
      "非常に",
      "を導く",
      "部分"
    ],
    "status": "unlearned"
  },
  {
    "id": 1806,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "とまる、停止する",
      "理由",
      "小さい",
      "を創造する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1807,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "費やす",
      "〜できる",
      "番号",
      "すでに、もう"
    ],
    "status": "unlearned"
  },
  {
    "id": 1808,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "たくさん",
      "市、都会",
      "健康",
      "月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1809,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "覆う",
      "でない",
      "悪い",
      "人、個人"
    ],
    "status": "unlearned"
  },
  {
    "id": 1810,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "を発見する",
      "のような",
      "戦争",
      "を設立する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1811,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "目",
      "成長する",
      "大統領",
      "しなければならない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1812,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "と会う",
      "側、面",
      "理由",
      "自然"
    ],
    "status": "unlearned"
  },
  {
    "id": 1813,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "もまた",
      "行事",
      "公園",
      "彼自身を"
    ],
    "status": "unlearned"
  },
  {
    "id": 1814,
    "level": "middle_3",
    "word": "although",
    "meaning": "であるけれど",
    "options": [
      "壊れる、破る",
      "を設立する",
      "夏",
      "であるけれど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1815,
    "level": "middle_3",
    "word": "second",
    "meaning": "秒",
    "options": [
      "を保つ",
      "秒",
      "いつも",
      "より良い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1816,
    "level": "middle_3",
    "word": "actually",
    "meaning": "実は、本当は",
    "options": [
      "を好む",
      "生活、人生",
      "数、数字",
      "実は、本当は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1817,
    "level": "middle_3",
    "word": "probably",
    "meaning": "多分",
    "options": [
      "落ちる、降る",
      "多分",
      "より良い",
      "物語"
    ],
    "status": "unlearned"
  },
  {
    "id": 1818,
    "level": "middle_3",
    "word": "college",
    "meaning": "大学",
    "options": [
      "座る",
      "大学",
      "ノート",
      "を必要とする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1819,
    "level": "middle_3",
    "word": "human",
    "meaning": "人間の",
    "options": [
      "を着ている",
      "をがまんする",
      "ある、いる",
      "人間の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1820,
    "level": "middle_3",
    "word": "die",
    "meaning": "死ぬ",
    "options": [
      "果物",
      "気に懸ける",
      "死ぬ",
      "およそ、約、ごろ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1821,
    "level": "middle_3",
    "word": "stay",
    "meaning": "滞在",
    "options": [
      "を失う",
      "を受け取る",
      "滞在",
      "切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1822,
    "level": "middle_3",
    "word": "fall",
    "meaning": "落ちる、降る",
    "options": [
      "と会う",
      "〜するつもり",
      "落ちる、降る",
      "日、1日"
    ],
    "status": "unlearned"
  },
  {
    "id": 1823,
    "level": "middle_3",
    "word": "cut",
    "meaning": "を切る",
    "options": [
      "もう一つの",
      "法律",
      "と会う",
      "を切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1824,
    "level": "middle_3",
    "word": "interest",
    "meaning": "興味",
    "options": [
      "英語",
      "一生懸命に",
      "興味",
      "国際的な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1825,
    "level": "middle_3",
    "word": "death",
    "meaning": "死",
    "options": [
      "死",
      "人間の",
      "を管理する",
      "建物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1826,
    "level": "middle_3",
    "word": "course",
    "meaning": "進路",
    "options": [
      "〜するつもり",
      "起こる",
      "帽子",
      "進路"
    ],
    "status": "unlearned"
  },
  {
    "id": 1827,
    "level": "middle_3",
    "word": "reach",
    "meaning": "に着く、到着する",
    "options": [
      "可能な",
      "赤",
      "に着く、到着する",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1828,
    "level": "middle_3",
    "word": "control",
    "meaning": "を管理する",
    "options": [
      "を管理する",
      "を主催する",
      "側、面",
      "3"
    ],
    "status": "unlearned"
  },
  {
    "id": 1829,
    "level": "middle_3",
    "word": "raise",
    "meaning": "手などを挙げる",
    "options": [
      "彼自身を",
      "人、個人",
      "手などを挙げる",
      "人生"
    ],
    "status": "unlearned"
  },
  {
    "id": 1830,
    "level": "middle_3",
    "word": "hard",
    "meaning": "一生懸命に",
    "options": [
      "同じもの",
      "考え",
      "側面",
      "一生懸命に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1831,
    "level": "middle_3",
    "word": "development",
    "meaning": "開発",
    "options": [
      "開発",
      "月",
      "側面",
      "本"
    ],
    "status": "unlearned"
  },
  {
    "id": 1832,
    "level": "middle_3",
    "word": "report",
    "meaning": "報告",
    "options": [
      "だろうに",
      "ちがい",
      "報告",
      "たのむ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1833,
    "level": "middle_3",
    "word": "possible",
    "meaning": "可能な",
    "options": [
      "を決める",
      "世界",
      "英語",
      "可能な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1834,
    "level": "middle_3",
    "word": "whole",
    "meaning": "すべての",
    "options": [
      "すべての",
      "川",
      "人々",
      "に直面する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1835,
    "level": "middle_3",
    "word": "mind",
    "meaning": "精神",
    "options": [
      "精神",
      "をがまんする",
      "を説明する",
      "季節"
    ],
    "status": "unlearned"
  },
  {
    "id": 1836,
    "level": "middle_3",
    "word": "finally",
    "meaning": "ついに、やっと",
    "options": [
      "ついに、やっと",
      "置く",
      "文化",
      "花"
    ],
    "status": "unlearned"
  },
  {
    "id": 1837,
    "level": "middle_3",
    "word": "decision",
    "meaning": "決定",
    "options": [
      "若い",
      "彼女は",
      "上へ",
      "決定"
    ],
    "status": "unlearned"
  },
  {
    "id": 1838,
    "level": "middle_3",
    "word": "explain",
    "meaning": "説明する",
    "options": [
      "彼女は",
      "男性、男の人",
      "説明する",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1839,
    "level": "middle_3",
    "word": "road",
    "meaning": "道路",
    "options": [
      "最後の",
      "道路",
      "山",
      "を見せる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1840,
    "level": "middle_3",
    "word": "drive",
    "meaning": "運転する",
    "options": [
      "の中に",
      "少女",
      "持って来る",
      "運転する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1841,
    "level": "middle_3",
    "word": "arm",
    "meaning": "腕",
    "options": [
      "駅",
      "しかし、けれども",
      "〜するつもり",
      "腕"
    ],
    "status": "unlearned"
  },
  {
    "id": 1842,
    "level": "middle_3",
    "word": "break",
    "meaning": "壊れる、破る",
    "options": [
      "壊れる、破る",
      "〜の様に見える",
      "使う",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 1843,
    "level": "middle_3",
    "word": "difference",
    "meaning": "ちがい",
    "options": [
      "を受け入れる",
      "最後の",
      "新しい",
      "ちがい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1844,
    "level": "middle_3",
    "word": "receive",
    "meaning": "を受け取る",
    "options": [
      "を受け取る",
      "世界",
      "ちがい",
      "木"
    ],
    "status": "unlearned"
  },
  {
    "id": 1845,
    "level": "middle_3",
    "word": "international",
    "meaning": "国際的な",
    "options": [
      "少年",
      "仕事・働く",
      "国際的な",
      "を発達させる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1846,
    "level": "middle_3",
    "word": "building",
    "meaning": "建物",
    "options": [
      "建物",
      "上へ",
      "開発",
      "だから、なので"
    ],
    "status": "unlearned"
  },
  {
    "id": 1847,
    "level": "middle_3",
    "word": "tax",
    "meaning": "税、税金",
    "options": [
      "本当に、実際に",
      "税、税金",
      "を創造する",
      "問題"
    ],
    "status": "unlearned"
  },
  {
    "id": 1848,
    "level": "middle_3",
    "word": "agree",
    "meaning": "賛成する",
    "options": [
      "国",
      "できた",
      "ほとんど",
      "賛成する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1849,
    "level": "middle_3",
    "word": "wear",
    "meaning": "を着ている",
    "options": [
      "を着ている",
      "〜できる",
      "を守る、保護する",
      "をする、行う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1850,
    "level": "middle_3",
    "word": "support",
    "meaning": "を支援する",
    "options": [
      "なぜなら",
      "すべての",
      "自転車",
      "を支援する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1851,
    "level": "middle_3",
    "word": "event",
    "meaning": "行事",
    "options": [
      "昨日",
      "変化",
      "行事",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1852,
    "level": "middle_3",
    "word": "matter",
    "meaning": "問題、困ったこと",
    "options": [
      "問題、困ったこと",
      "を言う",
      "早く",
      "小さい"
    ],
    "status": "unlearned"
  },
  {
    "id": 1853,
    "level": "middle_3",
    "word": "site",
    "meaning": "場所",
    "options": [
      "場所",
      "方法",
      "顔",
      "晴れの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1854,
    "level": "middle_3",
    "word": "cover",
    "meaning": "覆う",
    "options": [
      "〜のあとに",
      "聞く",
      "日本",
      "覆う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1855,
    "level": "middle_3",
    "word": "realize",
    "meaning": "実現する",
    "options": [
      "実現する",
      "落ちる、降る",
      "赤",
      "5月"
    ],
    "status": "unlearned"
  },
  {
    "id": 1856,
    "level": "middle_3",
    "word": "condition",
    "meaning": "状況",
    "options": [
      "状況",
      "待つ",
      "5月",
      "を設立する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1857,
    "level": "middle_3",
    "word": "increase",
    "meaning": "を増やす",
    "options": [
      "彼らの",
      "しばらくの間",
      "大学",
      "を増やす"
    ],
    "status": "unlearned"
  },
  {
    "id": 1858,
    "level": "middle_3",
    "word": "protect",
    "meaning": "を守る、保護する",
    "options": [
      "を続ける",
      "を守る、保護する",
      "朝",
      "を運ぶ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1859,
    "level": "middle_3",
    "word": "accept",
    "meaning": "を受け入れる",
    "options": [
      "大きい",
      "国際的な",
      "美しい",
      "を受け入れる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1860,
    "level": "middle_3",
    "word": "environment",
    "meaning": "環境",
    "options": [
      "とまる、停止する",
      "を説明する",
      "黒い",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 1861,
    "level": "middle_3",
    "word": "establish",
    "meaning": "を設立する",
    "options": [
      "を設立する",
      "を発見する",
      "法律",
      "猫"
    ],
    "status": "unlearned"
  },
  {
    "id": 1862,
    "level": "middle_3",
    "word": "imagine",
    "meaning": "を想像する",
    "options": [
      "です、ます",
      "実は、本当は",
      "を想像する",
      "水"
    ],
    "status": "unlearned"
  },
  {
    "id": 1863,
    "level": "middle_3",
    "word": "discover",
    "meaning": "を発見する",
    "options": [
      "を発見する",
      "簡単な",
      "事実、現実",
      "を切る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1864,
    "level": "middle_3",
    "word": "affect",
    "meaning": "に影響を与える",
    "options": [
      "を増やす",
      "を設立する",
      "に影響を与える",
      "なぜなら"
    ],
    "status": "unlearned"
  },
  {
    "id": 1865,
    "level": "middle_3",
    "word": "necessary",
    "meaning": "必要な",
    "options": [
      "を言う",
      "の前に",
      "実現する",
      "必要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1866,
    "level": "middle_3",
    "word": "even",
    "meaning": "〜さえ",
    "options": [
      "もまた",
      "信じる",
      "〜の中へ",
      "〜さえ"
    ],
    "status": "unlearned"
  },
  {
    "id": 1867,
    "level": "middle_3",
    "word": "back",
    "meaning": "裏の、後ろの",
    "options": [
      "手",
      "芸術",
      "裏の、後ろの",
      "紙"
    ],
    "status": "unlearned"
  },
  {
    "id": 1868,
    "level": "middle_3",
    "word": "any",
    "meaning": "どれもない",
    "options": [
      "これらの",
      "であるけれど",
      "を勉強する",
      "どれもない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1869,
    "level": "middle_3",
    "word": "through",
    "meaning": "を通り抜けて",
    "options": [
      "帽子",
      "手",
      "健康",
      "を通り抜けて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1870,
    "level": "middle_3",
    "word": "after",
    "meaning": "〜の後で",
    "options": [
      "〜の後で",
      "を受け入れる",
      "開発",
      "夏"
    ],
    "status": "unlearned"
  },
  {
    "id": 1871,
    "level": "middle_3",
    "word": "over",
    "meaning": "の向こう側に",
    "options": [
      "夏",
      "かばん",
      "忙しい",
      "の向こう側に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1872,
    "level": "middle_3",
    "word": "still",
    "meaning": "まだ",
    "options": [
      "自動車",
      "まだ",
      "上へ",
      "多くの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1873,
    "level": "middle_3",
    "word": "last",
    "meaning": "最後の",
    "options": [
      "だから、なので",
      "を続ける",
      "私に",
      "最後の"
    ],
    "status": "unlearned"
  },
  {
    "id": 1874,
    "level": "middle_3",
    "word": "never",
    "meaning": "決してない",
    "options": [
      "日曜日",
      "税、税金",
      "そこに",
      "決してない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1875,
    "level": "middle_3",
    "word": "become",
    "meaning": "になった",
    "options": [
      "ここに",
      "になった",
      "たった今",
      "になる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1876,
    "level": "middle_3",
    "word": "between",
    "meaning": "〜と〜の間",
    "options": [
      "まだ",
      "宿題",
      "〜と〜の間",
      "置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1877,
    "level": "middle_3",
    "word": "most",
    "meaning": "たいていの",
    "options": [
      "進路",
      "昨日",
      "大きい",
      "たいていの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1878,
    "level": "middle_3",
    "word": "another",
    "meaning": "もう一つの",
    "options": [
      "去る",
      "側面",
      "もう一つの",
      "を発見する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1879,
    "level": "middle_3",
    "word": "leave",
    "meaning": "を置いていく",
    "options": [
      "始まる",
      "を置いていく",
      "部屋",
      "若い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1880,
    "level": "middle_3",
    "word": "while",
    "meaning": "しばらくの間",
    "options": [
      "〜するとき",
      "しばらくの間",
      "花",
      "滞在する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1881,
    "level": "middle_3",
    "word": "keep",
    "meaning": "を保つ",
    "options": [
      "と書いてある",
      "を発見する",
      "を保つ",
      "確信して"
    ],
    "status": "unlearned"
  },
  {
    "id": 1882,
    "level": "middle_3",
    "word": "let",
    "meaning": "〜に〜をさせる",
    "options": [
      "市場",
      "どれもみな",
      "彼女は",
      "〜に〜をさせる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1883,
    "level": "middle_3",
    "word": "same",
    "meaning": "同じもの",
    "options": [
      "戦争",
      "終わる",
      "同じもの",
      "だろうに"
    ],
    "status": "unlearned"
  },
  {
    "id": 1884,
    "level": "middle_3",
    "word": "begin",
    "meaning": "始まる",
    "options": [
      "を通り抜けて",
      "を創造する",
      "始まる",
      "それと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1885,
    "level": "middle_3",
    "word": "seem",
    "meaning": "〜の様に見える",
    "options": [
      "〜の様に見える",
      "季節",
      "腕",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1886,
    "level": "middle_3",
    "word": "help",
    "meaning": "手伝う",
    "options": [
      "手伝う",
      "どちらの",
      "理由",
      "夜"
    ],
    "status": "unlearned"
  },
  {
    "id": 1887,
    "level": "middle_3",
    "word": "problem",
    "meaning": "問題",
    "options": [
      "問題",
      "とても",
      "〜の後で",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1888,
    "level": "middle_3",
    "word": "every",
    "meaning": "どれもみな",
    "options": [
      "国",
      "どれもみな",
      "〜さえ",
      "信じる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1889,
    "level": "middle_3",
    "word": "hand",
    "meaning": "を手渡す",
    "options": [
      "を手渡す",
      "青い",
      "精神",
      "持って来る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1890,
    "level": "middle_3",
    "word": "right",
    "meaning": "権利",
    "options": [
      "を建てる",
      "必要な",
      "権利",
      "自動車"
    ],
    "status": "unlearned"
  },
  {
    "id": 1891,
    "level": "middle_3",
    "word": "hear",
    "meaning": "を聞く",
    "options": [
      "ほとんど",
      "を聞く",
      "異なる",
      "しなければならない"
    ],
    "status": "unlearned"
  },
  {
    "id": 1892,
    "level": "middle_3",
    "word": "during",
    "meaning": "〜の間",
    "options": [
      "忙しい",
      "〜の間",
      "費やす",
      "異なる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1893,
    "level": "middle_3",
    "word": "play",
    "meaning": "劇",
    "options": [
      "紙",
      "【時間・場所】から",
      "劇",
      "環境"
    ],
    "status": "unlearned"
  },
  {
    "id": 1894,
    "level": "middle_3",
    "word": "government",
    "meaning": "政府",
    "options": [
      "実現する",
      "話す",
      "母",
      "政府"
    ],
    "status": "unlearned"
  },
  {
    "id": 1895,
    "level": "middle_3",
    "word": "run",
    "meaning": "を主催する",
    "options": [
      "を主催する",
      "長い",
      "りんご",
      "あの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1896,
    "level": "middle_3",
    "word": "number",
    "meaning": "番号",
    "options": [
      "番号",
      "この前の",
      "動く、引っ越す",
      "果物"
    ],
    "status": "unlearned"
  },
  {
    "id": 1897,
    "level": "middle_3",
    "word": "move",
    "meaning": "動く、引っ越す",
    "options": [
      "を切る",
      "種類",
      "動く、引っ越す",
      "問題、困ったこと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1898,
    "level": "middle_3",
    "word": "point",
    "meaning": "特徴、論点",
    "options": [
      "を受け入れる",
      "そのとき",
      "に着く、到着する",
      "特徴、論点"
    ],
    "status": "unlearned"
  },
  {
    "id": 1899,
    "level": "middle_3",
    "word": "believe",
    "meaning": "信じる",
    "options": [
      "歴史",
      "教える",
      "信じる",
      "によって"
    ],
    "status": "unlearned"
  },
  {
    "id": 1900,
    "level": "middle_3",
    "word": "large",
    "meaning": "大きい、広い",
    "options": [
      "もまた",
      "賛成する",
      "大きい、広い",
      "に直面する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1901,
    "level": "middle_3",
    "word": "national",
    "meaning": "国家の",
    "options": [
      "運転する",
      "まで、までは",
      "国家の",
      "に着く、到着する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1902,
    "level": "middle_3",
    "word": "fact",
    "meaning": "事実、現実",
    "options": [
      "可能な",
      "を話す",
      "参加する",
      "事実、現実"
    ],
    "status": "unlearned"
  },
  {
    "id": 1903,
    "level": "middle_3",
    "word": "study",
    "meaning": "研究、調査",
    "options": [
      "研究、調査",
      "机",
      "考え",
      "なぜなら"
    ],
    "status": "unlearned"
  },
  {
    "id": 1904,
    "level": "middle_3",
    "word": "though",
    "meaning": "だけれども",
    "options": [
      "だけれども",
      "を受け入れる",
      "しなければならない",
      "店"
    ],
    "status": "unlearned"
  },
  {
    "id": 1905,
    "level": "middle_3",
    "word": "side",
    "meaning": "側、面",
    "options": [
      "する前に",
      "種類",
      "戦争",
      "側、面"
    ],
    "status": "unlearned"
  },
  {
    "id": 1906,
    "level": "middle_3",
    "word": "long",
    "meaning": "長い",
    "options": [
      "税、税金",
      "多分",
      "を含む",
      "長い"
    ],
    "status": "unlearned"
  },
  {
    "id": 1907,
    "level": "middle_3",
    "word": "little",
    "meaning": "小さい",
    "options": [
      "たくさん",
      "かばん",
      "小さい",
      "を置く"
    ],
    "status": "unlearned"
  },
  {
    "id": 1908,
    "level": "middle_3",
    "word": "since",
    "meaning": "〜以来",
    "options": [
      "彼は",
      "〜以来",
      "情報",
      "〜できる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1909,
    "level": "middle_3",
    "word": "around",
    "meaning": "のまわりに",
    "options": [
      "秒",
      "良い",
      "のまわりに",
      "あの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1910,
    "level": "middle_3",
    "word": "away",
    "meaning": "離れて",
    "options": [
      "早く",
      "新しい",
      "を着ている",
      "離れて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1911,
    "level": "middle_3",
    "word": "until",
    "meaning": "まで、までは",
    "options": [
      "教室",
      "裏の、後ろの",
      "まで、までは",
      "腕"
    ],
    "status": "unlearned"
  },
  {
    "id": 1912,
    "level": "middle_3",
    "word": "yet",
    "meaning": "もう、すでに",
    "options": [
      "教室",
      "もう、すでに",
      "1番め、最初",
      "今日"
    ],
    "status": "unlearned"
  },
  {
    "id": 1913,
    "level": "middle_3",
    "word": "line",
    "meaning": "行、線",
    "options": [
      "行、線",
      "できた",
      "に影響を与える",
      "を見る"
    ],
    "status": "unlearned"
  },
  {
    "id": 1914,
    "level": "middle_3",
    "word": "ever",
    "meaning": "今まで、かつて",
    "options": [
      "【時刻】に",
      "今まで、かつて",
      "人、個人",
      "たくさんの"
    ],
    "status": "unlearned"
  },
  {
    "id": 1915,
    "level": "middle_3",
    "word": "stand",
    "meaning": "をがまんする",
    "options": [
      "をがまんする",
      "道",
      "季節",
      "止める"
    ],
    "status": "unlearned"
  },
  {
    "id": 1916,
    "level": "middle_3",
    "word": "however",
    "meaning": "しかし",
    "options": [
      "しかし",
      "学ぶ、習う",
      "をする、行う",
      "を支援する"
    ],
    "status": "unlearned"
  },
  {
    "id": 1917,
    "level": "middle_3",
    "word": "law",
    "meaning": "法律",
    "options": [
      "法律",
      "死",
      "もう、すでに",
      "彼女は"
    ],
    "status": "unlearned"
  },
  {
    "id": 1918,
    "level": "middle_3",
    "word": "almost",
    "meaning": "ほとんど",
    "options": [
      "ほとんど",
      "に影響を与える",
      "戦争",
      "の前に"
    ],
    "status": "unlearned"
  },
  {
    "id": 1919,
    "level": "middle_3",
    "word": "include",
    "meaning": "を含む",
    "options": [
      "あれらの",
      "を含む",
      "英語",
      "をがまんする"
    ],
    "status": "unlearned"
  },
  {
    "id": 1920,
    "level": "middle_3",
    "word": "continue",
    "meaning": "続く",
    "options": [
      "続く",
      "おおいに、たいへん",
      "情報",
      "を手渡す"
    ],
    "status": "unlearned"
  },
  {
    "id": 1921,
    "level": "middle_3",
    "word": "once",
    "meaning": "かつて",
    "options": [
      "と感じる",
      "と会う",
      "信じる",
      "かつて"
    ],
    "status": "unlearned"
  },
  {
    "id": 1922,
    "level": "middle_3",
    "word": "president",
    "meaning": "大統領",
    "options": [
      "すべての",
      "を含む",
      "大統領",
      "部屋"
    ],
    "status": "unlearned"
  },
  {
    "id": 1923,
    "level": "middle_3",
    "word": "real",
    "meaning": "本当の",
    "options": [
      "本当の",
      "なぜなら",
      "を含む",
      "3"
    ],
    "status": "unlearned"
  },
  {
    "id": 1924,
    "level": "middle_3",
    "word": "change",
    "meaning": "変化",
    "options": [
      "教える",
      "身体",
      "変化",
      "を着ている"
    ],
    "status": "unlearned"
  },
  {
    "id": 1925,
    "level": "middle_3",
    "word": "lead",
    "meaning": "を導く",
    "options": [
      "を導く",
      "と会う",
      "彼らの",
      "数学"
    ],
    "status": "unlearned"
  },
  {
    "id": 1926,
    "level": "middle_3",
    "word": "stop",
    "meaning": "とまる、停止する",
    "options": [
      "とまる、停止する",
      "どんな・どのように",
      "いつも",
      "終わる"
    ],
    "status": "unlearned"
  },
  {
    "id": 1927,
    "level": "middle_3",
    "word": "already",
    "meaning": "すでに、もう",
    "options": [
      "すでに、もう",
      "大統領",
      "医者",
      "ほとんど"
    ],
    "status": "unlearned"
  },
  {
    "id": 1928,
    "level": "middle_3",
    "word": "health",
    "meaning": "健康",
    "options": [
      "を含む",
      "を通り抜けて",
      "を見せる",
      "健康"
    ],
    "status": "unlearned"
  },
  {
    "id": 1929,
    "level": "middle_3",
    "word": "person",
    "meaning": "人、個人",
    "options": [
      "数、数字",
      "特徴、論点",
      "人、個人",
      "身体"
    ],
    "status": "unlearned"
  },
  {
    "id": 1930,
    "level": "middle_3",
    "word": "war",
    "meaning": "戦争",
    "options": [
      "自転車",
      "戦争",
      "を支援する",
      "重要な"
    ],
    "status": "unlearned"
  },
  {
    "id": 1931,
    "level": "middle_3",
    "word": "grow",
    "meaning": "成長する",
    "options": [
      "成長する",
      "身体",
      "彼を",
      "もっと"
    ],
    "status": "unlearned"
  },
  {
    "id": 1932,
    "level": "middle_3",
    "word": "reason",
    "meaning": "理由",
    "options": [
      "しかし",
      "もう、すでに",
      "理由",
      "払う"
    ],
    "status": "unlearned"
  },
  {
    "id": 1933,
    "level": "middle_3",
    "word": "himself",
    "meaning": "彼自身を",
    "options": [
      "を主催する",
      "新しい",
      "悪い",
      "彼自身を"
    ],
    "status": "unlearned"
  }
];

if (typeof module !== 'undefined') {
  module.exports = Words;
}

function sortWordsById(words) {
    return [...words]
        .map((word) => ({
            ...word,
            word: String(word.word || '').trim(),
        }))
        .sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
}

function findDuplicateWordIds(words) {
    const seen = new Set();
    const duplicates = new Set();

    words.forEach((word) => {
        const key = `${word.level || 'unknown'}:${String(word.word || '').trim().toLowerCase()}`;
        if (seen.has(key)) {
            duplicates.add(Number(word.id));
        } else {
            seen.add(key);
        }
    });

    return [...duplicates].sort((a, b) => a - b);
}

const duplicateWordIds = findDuplicateWordIds(Words);
if (duplicateWordIds.length > 0) {
    console.warn(`重複単語検出: ${duplicateWordIds.length} 件`, duplicateWordIds.slice(0, 20));
}

const middle1Words = sortWordsById(Words.filter((word) => word.level === 'middle_1'));
const middle2Words = sortWordsById(Words.filter((word) => word.level === 'middle_2'));
const middle3Words = sortWordsById(Words.filter((word) => word.level === 'middle_3'));

const quizData = [...middle1Words, ...middle2Words, ...middle3Words];
const STORAGE_KEY = 'english_app_progress';

let currentQuestionIndex = 0;
let score = 0;
let currentFilter = 'all';
let currentLevel = 'all'; 
let activeQuizWords = []; 

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    showDashboard();
});

function loadProgress() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const progressMap = JSON.parse(savedData);
        quizData.forEach(word => {
            if (progressMap[word.id]) {
                word.status = progressMap[word.id];
            }
        });
    }
}

function saveProgress() {
    const progressMap = {};
    quizData.forEach(word => {
        progressMap[word.id] = word.status;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressMap));
}

function resetProgress() {
    if (confirm("これまでの学習記録をリセットしますか？")) {
        localStorage.removeItem(STORAGE_KEY);
        quizData.forEach(word => word.status = 'unlearned');
        showDashboard();
    }
}

function getFilteredByLevelWords() {
    if (currentLevel === 'all') {
        return quizData;
    }
    return quizData.filter(w => w.level === currentLevel);
}

function changeLevel(level) {
    currentLevel = level;
    showDashboard();
}

// 配列をランダムにシャッフルする（フィッシャー–イェーツのシャッフル）
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 1. ダッシュボード（ホーム画面）
function showDashboard() {
    const quizContainer = document.getElementById('quiz-container');

    const targetWords = getFilteredByLevelWords();
    const total = targetWords.length;
    const mastered = targetWords.filter(w => w.status === 'mastered').length;
    const review = targetWords.filter(w => w.status === 'review').length;
    const unlearned = targetWords.filter(w => w.status === 'unlearned').length;

    const percentage = total > 0 ? Math.round((mastered / total) * 100) : 0;

    quizContainer.innerHTML = `
        <div class="dashboard-card">
            <h2>学習の進捗状況</h2>
            
            <div class="level-selector">
                <button class="level-btn ${currentLevel === 'all' ? 'active' : ''}" onclick="changeLevel('all')">すべて</button>
                <button class="level-btn ${currentLevel === 'middle_1' ? 'active' : ''}" onclick="changeLevel('middle_1')">中1</button>
                <button class="level-btn ${currentLevel === 'middle_2' ? 'active' : ''}" onclick="changeLevel('middle_2')">中2</button>
                <button class="level-btn ${currentLevel === 'middle_3' ? 'active' : ''}" onclick="changeLevel('middle_3')">中3</button>
            </div>

            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
            </div>
            <p class="percentage-text">習得度: ${percentage}% （${total}問中 ${mastered}問マスター）</p>

            <div class="status-summary">
                <div class="status-item status-mastered">
                    <span class="status-count">${mastered}</span>
                    <span class="status-label">🟢 覚えた</span>
                </div>
                <div class="status-item status-review">
                    <span class="status-count">${review}</span>
                    <span class="status-label">🟡 要復習</span>
                </div>
                <div class="status-item status-unlearned">
                    <span class="status-count">${unlearned}</span>
                    <span class="status-label">⚪ 未学習</span>
                </div>
            </div>

            <!-- 出題数の選択ドロップダウンを追加 -->
            <div class="question-count-selector" style="margin: 20px 0;">
                <label for="question-count" style="font-weight: bold; margin-right: 8px;">出題数:</label>
                <select id="question-count" style="padding: 8px 12px; font-size: 16px; border-radius: 6px;">
                    <option value="10">10問</option>
                    <option value="20">20問</option>
                    <option value="30">30問</option>
                    <option value="all">全問</option>
                </select>
            </div>

            <div class="button-group">
                <button class="start-btn" onclick="startQuiz()" ${total === 0 ? 'disabled' : ''}>ランダムテストを開始</button>
                <button class="secondary-btn" onclick="showWordList('all')">単語一覧・復習</button>
                <button class="reset-link-btn" onclick="resetProgress()">学習データをリセット</button>
            </div>
        </div>
    `;
}

// 2. クイズ開始（ランダム抽出処理）
function startQuiz() {
    const targetWords = getFilteredByLevelWords();
    if (targetWords.length === 0) {
        alert("該当する問題がありません。");
        return;
    }

    // ドロップダウンから選択された出題数を取得
    const countSelect = document.getElementById('question-count');
    const selectedCount = countSelect ? countSelect.value : 'all';

    // 対象の単語リストをシャッフル
    const shuffled = shuffleArray(targetWords);

    // 選択された問題数分だけ切り出す（全問の場合はそのまま）
    if (selectedCount === 'all') {
        activeQuizWords = shuffled;
    } else {
        const count = parseInt(selectedCount, 10);
        activeQuizWords = shuffled.slice(0, Math.min(count, shuffled.length));
    }

    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionIndex);
}

// 3. 単語一覧・復習画面
function showWordList(filter = 'all') {
    currentFilter = filter;
    const quizContainer = document.getElementById('quiz-container');

    let filteredWords = getFilteredByLevelWords();
    if (filter === 'review') {
        filteredWords = filteredWords.filter(w => w.status === 'review');
    } else if (filter === 'mastered') {
        filteredWords = filteredWords.filter(w => w.status === 'mastered');
    }

    const levelLabelMap = {
        all: '全学年',
        middle_1: '中1',
        middle_2: '中2',
        middle_3: '中3'
    };

    quizContainer.innerHTML = `
        <div class="word-list-card">
            <h2>単語一覧・振り返り（${levelLabelMap[currentLevel]}）</h2>
            
            <div class="filter-tabs">
                <button class="tab-btn ${filter === 'all' ? 'active' : ''}" onclick="showWordList('all')">すべて</button>
                <button class="tab-btn ${filter === 'review' ? 'active' : ''}" onclick="showWordList('review')">🟡 要復習</button>
                <button class="tab-btn ${filter === 'mastered' ? 'active' : ''}" onclick="showWordList('mastered')">🟢 覚えた</button>
            </div>

            <div class="word-list">
                ${filteredWords.length === 0 ? '<p class="empty-msg">該当する単語がありません</p>' : ''}
                ${filteredWords.map(item => `
                    <div class="word-item">
                        <div class="word-info">
                            <div>
                                <span class="badge-level">${levelLabelMap[item.level] || ''}</span>
                                <span class="word-english">${item.word}</span>
                            </div>
                            <span class="word-japanese">${item.meaning}</span>
                        </div>
                        <span class="badge badge-${item.status}">
                            ${item.status === 'mastered' ? '🟢 覚えた' : item.status === 'review' ? '🟡 要復習' : '⚪ 未学習'}
                        </span>
                    </div>
                `).join('')}
            </div>

            <button class="secondary-btn" onclick="showDashboard()">ダッシュボードに戻る</button>
        </div>
    `;
}

// 4. クイズ画面表示
function showQuestion(index) {
    const quizContainer = document.getElementById('quiz-container');
    const questionData = activeQuizWords[index];

    quizContainer.innerHTML = `
        <div class="quiz-card">
            <div class="question-number">問題 ${index + 1} / ${activeQuizWords.length}</div>
            <h2 class="word-display">${questionData.word}</h2>
            
            <div class="options-container">
                ${questionData.options.map((option) => `
                    <button class="option-btn" onclick="selectAnswer('${option}')">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// 5. 回答選択処理
function selectAnswer(selectedOption) {
    const currentData = activeQuizWords[currentQuestionIndex];
    
    if (selectedOption === currentData.meaning) {
        score++;
        currentData.status = 'mastered';
    } else {
        currentData.status = 'review';
    }

    saveProgress();
    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuizWords.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// 6. テスト結果画面
function showResult() {
    const quizContainer = document.getElementById('quiz-container');

    quizContainer.innerHTML = `
        <div class="result-card">
            <h2>テスト完了！</h2>
            <p class="score-text">${activeQuizWords.length}問中 <strong>${score}</strong> 問正解</p>
            <p>単語の学習状況が保存されました！</p>
            
            <div class="button-group">
                <button class="start-btn" onclick="showWordList('review')">間違えた単語を確認</button>
                <button class="secondary-btn" onclick="showDashboard()">ダッシュボードに戻る</button>
            </div>
        </div>
    `;
}