/*

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const cards = document.querySelectorAll(".card");

    // Binary search function to find matching cards
    function binarySearch(query) {
        const matchingCards = [];
        let low = 0;
        let high = cards.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            const cardId = cards[mid].id;
            if (cardId.includes(query)) {
                matchingCards.push(cards[mid]);
                // Expand search area to find all matching cards
                let left = mid - 1;
                let right = mid + 1;
                while (left >= 0 && cards[left].id.includes(query)) {
                    matchingCards.push(cards[left]);
                    left--;
                }
                while (right < cards.length && cards[right].id.includes(query)) {
                    matchingCards.push(cards[right]);
                    right++;
                }
                return matchingCards;
            } else if (cardId.localeCompare(query) < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        if (matchingCards.length === 0) {
            alert("No records");
        }
        return matchingCards;
    }
    

    // Function to show/hide cards based on the search query and filter type
    function filterCards(query, type) {
        const matchingCards = binarySearch(query);
        cards.forEach(card => {
            const cardType = card.getAttribute("data-type");
            const matchesType = type === "all" || cardType === type;
            if (matchesType && matchingCards.includes(card)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener("input", function() {
        const query = this.value.trim();
        const type = filterType.value;
        filterCards(query, type);
    });

    // Event listener for filter type change
    filterType.addEventListener("change", function() {
        const query = searchInput.value.trim();
        const type = this.value;
        filterCards(query, type);
    });
});



*/


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const sortSelect = document.getElementById("sort");
    const cardsContainer = document.querySelector(".columns");

    const cards = document.querySelectorAll(".card");




   
    // Binary search function to find matching cards
    function binarySearch(query) {
        const matchingCards = [];
        let low = 0;
        let high = cards.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            const cardId = cards[mid].id;
            if (cardId.includes(query)) {
                matchingCards.push(cards[mid]);
                // Expand search area to find all matching cards
                let left = mid - 1;
                let right = mid + 1;
                while (left >= 0 && cards[left].id.includes(query)) {
                    matchingCards.push(cards[left]);
                    left--;
                }
                while (right < cards.length && cards[right].id.includes(query)) {
                    matchingCards.push(cards[right]);
                    right++;
                }
                return matchingCards;
            } else if (cardId.localeCompare(query) < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
       // if (matchingCards.length === 0) {
       //     alert("No records");
       // }
        return matchingCards;
    }

    // Function to show/hide cards based on the search query and filter type
    function filterCards(query, type) {
        const matchingCards = binarySearch(query);
        cards.forEach(card => {
            const cardType = card.getAttribute("data-type");
            const matchesType = type === "all" || cardType === type;
            if (matchesType && matchingCards.includes(card)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener("input", function() {
        const query = this.value.trim();
        const type = filterType.value;
        filterCards(query, type);
    });

    // Event listener for filter type change
    filterType.addEventListener("change", function() {
        const query = searchInput.value.trim();
        const type = this.value;
        filterCards(query, type);
    });
/*
    // Event listener for sorting change
    sortSelect.addEventListener("change", function() {
        const sortOption = this.value;
        let sortedCards = Array.from(cards);

        // Sort cards based on the selected option
        if (sortOption === "name") {
            sortedCards.sort((a, b) => a.textContent.localeCompare(b.textContent));
        } else if (sortOption === "date") {
            sortedCards.sort((a, b) => {
                const yearA = parseInt(a.getAttribute("data-year"));
                const yearB = parseInt(b.getAttribute("data-year"));
                return yearA - yearB;
            });
        }

        // Clear existing cards
        cardsContainer.innerHTML = "";

        // Append sorted cards to the container
        sortedCards.forEach(card => {
            cardsContainer.appendChild(card);
        });
    });

    */

    
    


    function quickSort(arr, comparator) {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[Math.floor(arr.length / 2)];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === Math.floor(arr.length / 2)) {
                continue;
            }
            if (comparator(arr[i], pivot) < 0) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left, comparator), pivot, ...quickSort(right, comparator)];
    }

    // Comparator function for sorting by name
    function compareByName(a, b) {
        return a.textContent.localeCompare(b.textContent);
    }

    // Comparator function for sorting by date
    function compareByDate(a, b) {
        const yearA = parseInt(a.getAttribute("data-year"));
        const yearB = parseInt(b.getAttribute("data-year"));
        return yearA - yearB;
    }

    sortSelect.addEventListener("change", function() {
        const sortOption = this.value;
        let sortedCards;

        if (sortOption === "name") {
            sortedCards = quickSort(Array.from(cards), compareByName);
        } else if (sortOption === "date") {
            sortedCards = quickSort(Array.from(cards), compareByDate);
        }

        // Clear existing cards
        cardsContainer.innerHTML = "";

        // Append sorted cards to the container
        sortedCards.forEach(card => {
            cardsContainer.appendChild(card);
        });
    });




});
