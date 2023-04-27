const quotes = [
      {
      quote: "삶이 있는 한 희망은 있다.",
      author: "키케로"
      },
      {
      quote: "산다는것 그것은 치열한 전투이다.",
      author: "로망로랑"
      },
      {
      quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
      author: "파울로 코엘료"
      },
      {
      quote: "신은 용기있는자를 결코 버리지 않는다.",
      author: "켄러"
      },
      {
      quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
      author: "헬렌켈러"
      },
      {
      quote: "피할수 없으면 즐겨라.",
      author: "로버트 엘리엇"
      },
      {
            quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
            author: "F.스콧 핏제랄드"
      },
      {
            quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
            author: "앙드레 말로"
      },
      {
            quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
            author: "톰 모나건"
      },
      {
            quote: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
            author: "에디슨"
      }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

//Math.round(), Math.ceil(), Math.floor

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author