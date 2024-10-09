const questions = [
    {
        question: "apple",
        choices: ["りんご", "バナナ", "オレンジ", "ぶどう"],
        answer: "りんご"
    },
    {
        question: "run",
        choices: ["走る", "飛ぶ", "泳ぐ", "歩く"],
        answer: "走る"
    },
    {
        question: "book",
        choices: ["本", "ペン", "ノート", "鉛筆"],
        answer: "本"
    },
    {
        question: "cat",
        choices: ["猫", "犬", "鳥", "魚"],
        answer: "猫"
    }
];

let currentQuestionIndex = 0;

// Fisher-Yatesアルゴリズムを使って配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = questions[currentQuestionIndex];

    // 質問を表示
    questionElement.textContent = `「${currentQuestion.question}」の意味は？`;
    choicesElement.innerHTML = '';

    // 選択肢をシャッフル
    const shuffledChoices = [...currentQuestion.choices]; // 配列をコピー
    shuffleArray(shuffledChoices);

    // シャッフルした選択肢をボタンとして追加
    shuffledChoices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        alert('正解！');
    } else {
        alert('不正解！');
    }
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    showQuestion();
}

document.getElementById('next-button').onclick = showQuestion;

showQuestion();
