import minireset from './minireset';

class RatingCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.style.width = '100%';
  }

  connectedCallback() {
    const shadow = this.shadowRoot as ShadowRoot;
    shadow.innerHTML = `
    <link rel="stylesheet" href="./components/x-rating-card.css">
        <div id="container">
            <div id='img-container'>
                <img src="../static/star.svg" alt="Star">
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <form action="">
                <div id="ratings">
                    <label for="one-star">1</label>
                    <input type="radio" id="one-start" name="rating">
                    <label for="two-star">2</label>
                    <input type="radio" id="two-start" name="rating">
                    <label for="three-star">3</label>
                    <input type="radio" id="three-start" name="rating">
                    <label for="four-star">4</label>
                    <input type="radio" id="four-start" name="rating">
                    <label for="five-star">5</label>
                    <input type="radio" id="five-start" name="rating">
                </div>
                <input type="submit" value="submit">
            </form>
        </div>
    `;
    shadow.prepend(minireset);
  }
}
export default RatingCard;
