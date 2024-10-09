const questions = [
    { "id": 1, "question": "agree", "choices": ["賛成する", "反対する", "忠告する", "文句を言う"], "answer": "賛成する" },
    { "id": 2, "question": "oppose", "choices": ["反対する", "賛成する", "先端", "要求する"], "answer": "反対する" },
    { "id": 3, "question": "advise", "choices": ["忠告する", "主張する", "申し出る", "助言"], "answer": "忠告する" },
    { "id": 4, "question": "tip", "choices": ["助言", "議論", "反論", "訴える"], "answer": "助言" },
    { "id": 5, "question": "discuss", "choices": ["議論する", "責任を問う", "主張する", "要求する"], "answer": "議論する" },
    { "id": 6, "question": "blame", "choices": ["責任を問う", "助言する", "申し出る", "文句を言う"], "answer": "責任を問う" },
    { "id": 7, "question": "argue", "choices": ["主張する", "反対する", "訴える", "申し出る"], "answer": "主張する" },
    { "id": 8, "question": "claim", "choices": ["要求する", "忠告する", "反論する", "訴える"], "answer": "要求する" },
    { "id": 9, "question": "complain", "choices": ["文句を言う", "賛成する", "忠告する", "主張する"], "answer": "文句を言う" },
    { "id": 10, "question": "offer", "choices": ["申し出る", "反論する", "責任を問う", "助言する"], "answer": "申し出る" },
    { "id": 11, "question": "suggest", "choices": ["提案する", "感謝する", "許す", "祝う"], "answer": "提案する" },
    { "id": 12, "question": "recommend", "choices": ["推薦する", "謝る", "示唆する", "説明する"], "answer": "推薦する" },
    { "id": 13, "question": "grateful", "choices": ["感謝している", "許す", "感心する", "提案する"], "answer": "感謝している" },
    { "id": 14, "question": "apologize", "choices": ["謝る", "祝う", "推薦する", "説明する"], "answer": "謝る" },
    { "id": 15, "question": "excuse", "choices": ["言い訳", "約束", "説明する", "感謝する"], "answer": "言い訳" },
    { "id": 16, "question": "celebrate", "choices": ["祝う", "感心する", "伝える", "免除する"], "answer": "祝う" },
    { "id": 17, "question": "admire", "choices": ["感心する", "謝る", "提案する", "人工的な"], "answer": "感心する" },
    { "id": 18, "question": "impress", "choices": ["感銘を与える", "祝う", "説明する", "推薦する"], "answer": "感銘を与える" },
    { "id": 19, "question": "award", "choices": ["賞", "研究", "情報", "電動の"], "answer": "賞" },
    { "id": 20, "question": "describe", "choices": ["説明する", "感謝する", "許す", "材料"], "answer": "説明する" },
    { "id": 21, "question": "explain", "choices": ["説明する", "感心する", "伝える", "推薦する"], "answer": "説明する" },
    { "id": 22, "question": "communicate", "choices": ["意思の疎通をはかる", "祝う", "約束する", "電気の"], "answer": "意思の疎通をはかる" },
    { "id": 23, "question": "express", "choices": ["表現する", "祝う", "感謝する", "許す"], "answer": "表現する" },
    { "id": 24, "question": "promise", "choices": ["約束", "伝える", "感謝する", "研究"], "answer": "約束" },
    { "id": 25, "question": "information", "choices": ["情報", "電気の", "急行", "賞"], "answer": "情報" },
    { "id": 26, "question": "technology", "choices": ["技術", "感銘を与える", "材料", "研究"], "answer": "技術" },
    { "id": 27, "question": "research", "choices": ["研究", "人工的な", "祝う", "材料"], "answer": "研究" },
    { "id": 28, "question": "material", "choices": ["材料", "感謝する", "感心する", "約束する"], "answer": "材料" },
    { "id": 29, "question": "artificial", "choices": ["人工的な", "免除する", "技術", "急行"], "answer": "人工的な" },
    { "id": 30, "question": "electric", "choices": ["電気の", "感謝する", "材料", "感銘を与える"], "answer": "電気の" },
    { "id": 31, "question": "invent", "choices": ["発明する", "発見する", "達成する", "貯金する"], "answer": "発明する" },
    { "id": 32, "question": "discover", "choices": ["発見する", "発達する", "創造する", "試合"], "answer": "発見する" },
    { "id": 33, "question": "develop", "choices": ["発達する", "改善する", "発明する", "努力する"], "answer": "発達する" },
    { "id": 34, "question": "skill", "choices": ["技術", "才能", "努力", "状態"], "answer": "技術" },
    { "id": 35, "question": "ability", "choices": ["能力", "発明", "容態", "貯金"], "answer": "能力" },
    { "id": 36, "question": "talent", "choices": ["才能", "条件", "状況", "試合"], "answer": "才能" },
    { "id": 37, "question": "effort", "choices": ["努力", "練習", "農作物", "改善"], "answer": "努力" },
    { "id": 38, "question": "practice", "choices": ["練習", "試合", "達成", "救う"], "answer": "練習" },
    { "id": 39, "question": "game", "choices": ["試合", "才能", "条件", "容態"], "answer": "試合" },
    { "id": 40, "question": "achieve", "choices": ["達成する", "忍耐強い", "貯金する", "発見する"], "answer": "達成する" },
    { "id": 41, "question": "manage", "choices": ["経営する", "改善する", "状態", "設立する"], "answer": "経営する" },
    { "id": 42, "question": "improve", "choices": ["改善する", "貯金する", "忍耐強い", "農作物"], "answer": "改善する" },
    { "id": 43, "question": "produce", "choices": ["生産する", "発展させる", "試合", "発明する"], "answer": "生産する" },
    { "id": 44, "question": "create", "choices": ["創造する", "救う", "努力する", "医学"], "answer": "創造する" },
    { "id": 45, "question": "establish", "choices": ["設立する", "発展させる", "容態", "才能"], "answer": "設立する" },
    { "id": 46, "question": "save", "choices": ["救う", "達成する", "努力する", "忍耐強い"], "answer": "救う" },
    { "id": 47, "question": "medicine", "choices": ["薬", "医学", "技術", "容態"], "answer": "薬" },
    { "id": 48, "question": "patient", "choices": ["患者", "状態", "試合", "農作物"], "answer": "患者" },
    { "id": 49, "question": "condition", "choices": ["状態", "発見する", "貯金する", "創造する"], "answer": "状態" },
    { "id": 50, "question": "medical", "choices": ["医療の", "経営する", "試合", "忍耐強い"], "answer": "医療の" }
];

let currentQuestionIndex = 0;
let selectedQuestions = [];

// Fisher-Yatesアルゴリズムを使って配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 質問を表示する関数
function showQuestion() {
    if (selectedQuestions.length === 0) {
        alert('問題がありません。範囲を選択してください。');
        return;
    }

    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    questionElement.textContent = `「${currentQuestion.question}」の意味は？`;
    choicesElement.innerHTML = '';

    const shuffledChoices = [...currentQuestion.choices];
    shuffleArray(shuffledChoices);

    shuffledChoices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

// 答えをチェックする関数
function checkAnswer(choice) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        alert('正解！');
    } else {
        alert('不正解！');
    }
    // 次の質問へ進むボタンを表示
    document.getElementById('next-button').style.display = 'block';
}

// 次の質問を表示する処理
document.getElementById('next-button').onclick = () => {
    currentQuestionIndex = Math.floor(Math.random() * selectedQuestions.length);
    showQuestion();
    document.getElementById('next-button').style.display = 'none';
};


// 範囲を選択する関数
function selectRange() {
    const range = document.querySelector('input[name="question-range"]:checked').value;
    selectedQuestions = questions.filter(q => q.id <= parseInt(range, 10)); // IDに基づいてフィルタリング
    currentQuestionIndex = Math.floor(Math.random() * selectedQuestions.length);
    showQuestion();
}

// ボタンの設定
// ボタンの設定
document.getElementById('start-button').onclick = () => {
    selectRange();
    showQuestion(); // ここで初めて問題を表示
};


