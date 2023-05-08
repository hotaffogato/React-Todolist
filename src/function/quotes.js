const quotes = [
    {
        quote:"'박제가 되어버린 천재'를 아시오?",
        author:"이상, 『날개』",
    },{
        quote:"인간은 노력하는 한, 방황하는 법이다.",
        author:"괴테, 『파우스트』",
    },{
        quote:"닿을 수 없는 별에 도달하기 위하여!",
        author:"미겔, 『돈키호테』",
    },{
        quote:"큰 갑충으로 변해있었다.",
        author:"프란츠 카프카, 『변신』",
    },{
        quote:"나를 이스마엘이라 부르라.",
        author:"허먼 멜빌, 『모비 딕』",
    },{
        quote:"옥에도 티가 있고 좋은 일에는 탈도 많다.",
        author:"조설근, 『홍루몽』",
    },{
        quote:"내 속에서 솟아나오려는 것, 바로 그것을 나는 살아보려고 했다.",
        author:"헤르만 헤세, 『데미안』",
    },{
        quote:"나의 이름은 '아무도 아닌'입니다.",
        author:"호메로스, 『오디세이아』",
    },{
        quote:"그는 완전히 잊고, 모든 것들을 잊고선, 일어나 다시금 시작하고 싶어합니다.",
        author:"도스토옙스키, 『죄와 벌』",
    },{
        quote:"고개를 들어... 별을 찾으면 되니까.",
        author:"단테, 『신곡』",
    }
]



export const QuoteApp = () => {

    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]

    return(
    <div id="quotes">
        <div>{randomQuote.quote}</div>
        <div>{randomQuote.author}</div>
    </div>
    )
}