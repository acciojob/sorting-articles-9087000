//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'An Old Dog', 'Anywhere But Here'];

        // Function to strip "a", "an", "the" from the beginning of a string
        function strip(article) {
            return article.replace(/^(a |an |the )/i, '').trim();
        }

        // Sort the bands ignoring "a", "an", "the"
        const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

        // Select the UL element
        const ul = document.getElementById('band');

        // Display the sorted articles as list items
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            ul.appendChild(li);
        });
