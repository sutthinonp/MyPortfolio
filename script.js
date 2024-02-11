function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById("link1");
const link3 = document.getElementById("link3");

if (link1) {
  link1.addEventListener('click', () => {
    scrollToElement('.header');
  });
}

// Remove the event listener for the removed "Login" button

if (link3) {
  link3.addEventListener('click', () => {
    scrollToElement('.copyright');
  });
}
