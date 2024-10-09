const questions = [
    { id: 1, question: "apple", choices: ["りんご", "バナナ", "オレンジ", "ぶどう"], answer: "りんご" },
    { id: 2, question: "run", choices: ["走る", "飛ぶ", "泳ぐ", "歩く"], answer: "走る" },
    { id: 3, question: "book", choices: ["本", "ペン", "ノート", "鉛筆"], answer: "本" },
    { id: 4, question: "cat", choices: ["猫", "犬", "鳥", "魚"], answer: "猫" }
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
    currentQuestionIndex = Math.floor(Math.random() * selectedQuestions.length);
    showQuestion();
}

// 範囲を選択する関数
function selectRange() {
    const range = document.querySelector('input[name="question-range"]:checked').value;
    selectedQuestions = questions.filter(q => q.id <= range); // IDに基づいてフィルタリング
    currentQuestionIndex = Math.floor(Math.random() * selectedQuestions.length);
    showQuestion();
}

// ボタンの設定
document.getElementById('start-button').onclick = selectRange;

showQuestion();

