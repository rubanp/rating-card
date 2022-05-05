const ratingOptions: string[] = ['oneStar',
  'twoStar',
  'threeStar',
  'fourStar',
  'fiveStar',
];

window.addEventListener('load', () => {
  const labels = document.querySelectorAll('label');
  labels.forEach((label) => {
    label.style.transition = '0.3s';
  });
  const submitButton = document.querySelector('input[type="submit"]') as HTMLFormElement;
  submitButton.style.transition = '0.5s';
});

let rating: number;

function enableSubmit() {
  const submitButton = document.querySelector('input[type="submit"]') as HTMLFormElement;
  submitButton.removeAttribute('disabled');
}

function reset() {
  const labels = document.querySelectorAll('label');
  labels.forEach((label) => {
    label.classList.add('rating-label-hover');
    label.classList.remove('selected');
  });
}

function toggleSelection(label: HTMLLabelElement) {
  reset();
  label.classList.remove('rating-label-hover');
  label.classList.add('selected');
}

const ratingInputs = document.querySelectorAll('input[type="radio"]');
ratingInputs.forEach((input) => {
  input.addEventListener('click', () => {
    const selection = input.getAttribute('id') as string;
    toggleSelection(document.querySelector(`label[for='${selection}']`) as HTMLLabelElement);
    rating = ratingOptions.indexOf(selection) + 1;
    enableSubmit();
  });
});

function setRating() {
  const receivedRating = document.querySelector('#received-rating') as HTMLDivElement;
  receivedRating.innerText = `You selected ${rating} out of 5`;
}

function submit() {
  const submitButton = document.querySelector('input[type="submit"]') as HTMLFormElement;

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    setRating();
    const ratingCard = document.querySelector('#rating-card') as HTMLDivElement;
    const thankYouCard = document.querySelector('#thank-you-card') as HTMLDivElement;
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
  });
}

submit();

export {};
