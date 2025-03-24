const omikujiButton = document.getElementById('omikujiButton');
const resultDiv = document.getElementById('result');

const results = [
    { name: '大吉', image: 'images/daikichi.png', probability: 0.01 },
    { name: '中吉', image: 'images/chukichi.png', probability: 0.053 },
    { name: '小吉', image: 'images/shokichi.png', probability: 0.053 },
    { name: '吉', image: 'images/kichi.png', probability: 0.053 },
    { name: '半吉', image: 'images/hankichi.png', probability: 0.053 },
    { name: '末吉', image: 'images/suekichi.png', probability: 0.053 },
    { name: '凶', image: 'images/kyo.png', probability: 0.01 },
    { name: '小凶', image: 'images/shokyo.png', probability: 0.053 },
    { name: '半凶', image: 'images/hankyokyo.png', probability: 0.053 },
    { name: '末凶', image: 'images/suekyo.png', probability: 0.053 },
    { name: '大凶', image: 'images/daikyo.png', probability: 0.01 },
    { name: '平', image: 'images/taira.png', probability: 0.053 },
    { name: '向吉', image: 'images/mukoukichi.png', probability: 0.053 },
    { name: '末向吉', image: 'images/suekouchi.png', probability: 0.053 },
    { name: '凶後吉', image: 'images/kyogokichi.png', probability: 0.053 },
    { name: '吉凶未分', image: 'images/kikkyoumibun.png', probability: 0.053 },
    { name: '吉凶相交', image: 'images/kikkyousaikou.png', probability: 0.053 },
    { name: '凶後末吉', image: 'images/kyogosuekichi.png', probability: 0.053 },
    { name: '願望虚不成', image: 'images/ganboukyoninarazu.png', probability: 0.053 },
    { name: '吉事遅来', image: 'images/kichijijirirai.png', probability: 0.053 },
    { name: '再凶後吉', image: 'images/saikyoukoukichi.png', probability: 0.053 },
    { name: '吉凶相半', image: 'images/kikkyousouhan.png', probability: 0.053 }
];

omikujiButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    let cumulativeProbability = 0;
    let selectedResult = null;

    for (const result of results) {
        cumulativeProbability += result.probability;
        if (randomNumber <= cumulativeProbability) {
            selectedResult = result;
            break;
        }
    }

    if (selectedResult) {
        resultDiv.innerHTML = `<p>${selectedResult.name}</p><img src="${selectedResult.image}" alt="${selectedResult.name}">`;
    }
});
