import axios from 'axios';

const Card = (article) => {

  const wrapper = document.createElement('div');
  const headlineField = document.createElement('div');
  const authorField = document.createElement('div');
  const imgField = document.createElement('div');
  const actualImg = document.createElement('img');
  const authorName = document.createElement('span');

  wrapper.classList.add('card');
  headlineField.classList.add('headline');
  authorField.classList.add('author');
  imgField.classList.add('img-container');

  wrapper.appendChild(headlineField);
  wrapper.appendChild(authorField);
  authorField.appendChild(imgField);
  imgField.appendChild(actualImg);
  authorField.appendChild(authorName);

  headlineField.textContent = article.headline;
  actualImg.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;
  console.log(actualImg);

  wrapper.addEventListener('click', (event) => {
    console.log(article.headline);
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return wrapper;
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
    .then(response => {
      const articlesData = response.data.articles;
      const container = document.querySelector(selector);

      const articleCategories = Object.keys(articlesData);

      articleCategories.forEach(category => {
        const articlesArray = articlesData[category];
        
        articlesArray.forEach(article => {
          container.appendChild(Card(article));
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
