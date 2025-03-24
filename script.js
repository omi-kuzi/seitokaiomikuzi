const omikujiButton = document.getElementById('omikujiButton');
const resultDiv = document.getElementById('result');

const results = [
    { name: '大吉', image: '1.png',', probability: 0.053 },
    { name: '中吉', image: '2.png',', probability: 0.053 },
    { name: '小吉', image: '3.png',', probability: 0.053 },
    { name: '吉', image: '4.png',', probability: 0.053 },
    { name: '半吉', image: '5.png', probability: 0.053 },
    { name: '末吉', image: '6.png', probability: 0.053 },
    { name: '凶', image: '7.png', probability: 0.053 },
    { name: '小凶', image: '8.png', probability: 0.053 },
    { name: '半凶', image: '9.png', probability: 0.053 },
    { name: '末凶', image: '10.png', probability: 0.053 },
    { name: '大凶', image: '11.png', probability: 0.053 },
    { name: '平', image: '12.png', probability: 0.053 },
    { name: '向吉', image: '13.png', probability: 0.053 },
    { name: '末向吉', image: '14.png', probability: 0.053 },
    { name: '凶後吉', image: '15.png', probability: 0.053 },
    { name: '吉凶未分', image: '16.png', probability: 0.053 },
    { name: '吉凶相交', image: '17.png', probability: 0.053 },
    { name: '凶後末吉', image: '18.png', probability: 0.053 },
    { name: '願望虚不成', image: '19.png', probability: 0.053 },
    { name: '吉事遅来', image: '20.png', probability: 0.01 },
    { name: '再凶後吉', image: '21.png', probability: 0.01 },
    { name: '吉凶相半', image: '22.png', probability: 0.01 }
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
