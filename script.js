const omikujiButton = document.getElementById('omikujiButton');
const resultDiv = document.getElementById('result');

const results = [
    { name: '大吉', image: 'images/1.png',', probability: 0.053 },
    { name: '中吉', image: 'images/2.png',', probability: 0.053 },
    { name: '小吉', image: 'images/3.png',', probability: 0.053 },
    { name: '吉', image: 'images/4.png',', probability: 0.053 },
    { name: '半吉', image: 'images/5.png', probability: 0.053 },
    { name: '末吉', image: 'images/6.png', probability: 0.053 },
    { name: '凶', image: 'images/7.png', probability: 0.053 },
    { name: '小凶', image: 'images/8.png', probability: 0.053 },
    { name: '半凶', image: 'images/9.png', probability: 0.053 },
    { name: '末凶', image: 'images/10.png', probability: 0.053 },
    { name: '大凶', image: 'images/11.png', probability: 0.053 },
    { name: '平', image: 'images/12.png', probability: 0.053 },
    { name: '向吉', image: 'images/13.png', probability: 0.053 },
    { name: '末向吉', image: 'images/14.png', probability: 0.053 },
    { name: '凶後吉', image: 'images/15.png', probability: 0.053 },
    { name: '吉凶未分', image: 'images/16.png', probability: 0.053 },
    { name: '吉凶相交', image: 'images/17.png', probability: 0.053 },
    { name: '凶後末吉', image: 'images/18.png', probability: 0.053 },
    { name: '願望虚不成', image: 'images/19.png', probability: 0.053 },
    { name: '吉事遅来', image: 'images/20.png', probability: 0.01 },
    { name: '再凶後吉', image: 'images/21.png', probability: 0.01 },
    { name: '吉凶相半', image: 'images/22.png', probability: 0.01 }
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
