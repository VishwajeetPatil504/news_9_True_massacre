import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "‘True massacre’: Gaza child casualties cross 4,000 as Israeli raids expand",
    date: '05 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `At least 9,770 people killed in nearly a month of Israeli strikes, according to the Palestinian health ministry.`,
    content: `At least 4,008 children have been killed in the ongoing war in Gaza as the death toll after nearly a month of Israeli bombings hits 9,770, according to the Palestinian health ministry.

    On Sunday afternoon, an Israeli air strike hit several houses near a school at the Bureji refugee camp in central Gaza, killing at least 13 people, according to officials at Al-Aqsa Hospital.
    The camp is home to an estimated 46,000 people and was struck last Thursday as well.
    Footage verified by Al Jazeera on Sunday showed people searching under the rubble of houses to retrieve the victims.

It was the third refugee camp to be hit by Israeli air strikes in the past 24 hours. More than 50 Palestinians were killed in attacks on Gaza’s al-Maghazi and Jabalia refugee camps.
Arafat Abu Mashaia, a resident of al-Maghazi camp, said the Israeli air strike flattened several multi-storey homes where people forced out of other parts of Gaza were sheltering.
“It was a true massacre,” he said early on Sunday as he stood on the wreckage of destroyed homes. “All here are peaceful people. I challenge anyone who says there were resistance [fighters] here.”

The camp, a built-up residential area, is located in the evacuation zone where Israel’s military had urged Palestinian civilians to seek refuge as it focuses its military offensive on the north.

Saeed al-Nejma, 53, said he was asleep with his family when the blast hit the neighbourhood. “All night, I and the other men were trying to pick the dead from the rubble. We got children, dismembered, torn apart flesh,” he said.
According to the United Nations, 1.5 million people are now internally displaced in Gaza out of a population of 2.3 million.

The strikes and displacement come as US Secretary of State Antony Blinken met with Palestinian President Mahmoud Abbas in the occupied West Bank on Sunday.

Blinken reaffirmed Washington’s position calling for “humanitarian pauses” in Gaza to protect civilians and allow foreign nationals to leave while “still enabling Israel to achieve its objective” to defeat Hamas.

Both Egypt and Jordan rebuked that position publicly at a news conference on Saturday, instead calling for an immediate ceasefire – echoing the stance of other leaders in the region.

Meanwhile, Israeli Prime Minister Benjamin Netanyahu again rejected the idea of halting the offensive, ignoring appeals and protests across the world.

“There will be no ceasefire without the return of our hostages, we say this to both our enemies and our friends. We will continue until we beat them,” Netanyahu told air and ground crews at the Ramon Air Force Base in southern Israel on Sunday.

Israel says it is targeting Hamas fighters and assets, accusing the group of using civilians as human shields. Critics say Israel’s strikes are disproportionate, considering the large number of civilians killed.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
