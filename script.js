const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'An Old Dog', 'Oh, Sleeper', 'Anywhere But Here', 'The Midway State'];

// Function to strip "a", "an", "the" from the beginning of a string
function strip(article) {
    return article.replace(/^(a |an |the )/i, '').trim();
}

// Sorting the bands ignoring "a", "an", "the"
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Rendering sorted list
const ul = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});
