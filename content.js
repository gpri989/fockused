chrome.storage.local.get('blockedUrls', function (data) {
    var blockedUrls = data.blockedUrls || [];
    if (blockedUrls.some(url => window.location.href.startsWith(url))) {
        document.title = "Blocked By Fockused";
        document.body.innerHTML = "";
        // Create the iframe element
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
        iframe.width = '100%';
        iframe.height = '100%';

        // Set the iframe's styles to fill the entire screen
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.bottom = '0';
        iframe.style.right = '0';

        // Append the iframe to the body
        document.body.appendChild(iframe);
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://cdn-icons-png.flaticon.com/512/6711/6711656.png';
        document.getElementsByTagName('head')[0].appendChild(link);
        var overlayDiv = document.createElement('div');
        overlayDiv.setAttribute('id', 'overlay-div');
        overlayDiv.style.background = getRandomGradient();
        overlayDiv.innerHTML = '<div id="motivation-quote">' + getRandomQuote() + '</div>';
        var overlayStyle = overlayDiv.style;
        overlayStyle.position = 'fixed';
        overlayStyle.top = '0';
        overlayStyle.left = '0';
        overlayStyle.width = '100%';
        overlayStyle.height = '100%';
        overlayStyle.display = 'flex';
        overlayStyle.justifyContent = 'center';
        overlayStyle.alignItems = 'center';
        overlayStyle.zIndex = '9999';
        var quoteElement = overlayDiv.querySelector('#motivation-quote');
        quoteElement.style.fontSize = '2rem';
        quoteElement.style.color = 'white';
        quoteElement.style.textAlign = 'center';
        quoteElement.style.width = '70%';
        quoteElement.style.lineHeight = '1.5';
        document.body.appendChild(overlayDiv);
    }
});
function getRandomGradient() {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return gradient;
}
function getRandomQuote() {
    var quotes = [
        { quote: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.', author: 'Christian D. Larson' },
        { quote: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
        { quote: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt' },
        { quote: 'You are never too old to set another goal or to dream a new dream.', author: 'C.S. Lewis' },
        { quote: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
        { quote: 'It always seems impossible until it’s done.', author: 'Nelson Mandela' },
        { quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { quote: 'If you don’t stand for something, you will fall for anything.', author: 'Malcolm X' },
        { quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
        { quote: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
        { quote: 'You can’t build a reputation on what you are going to do.', author: 'Henry Ford' },
        { quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.', author: 'Thomas Edison' },
        { quote: 'Never let the fear of striking out keep you from playing the game.', author: 'Babe Ruth' },
        { quote: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' },
        { quote: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
        { quote: 'You have to learn the rules of the game. And then you have to play better than anyone else.', author: 'Albert Einstein' },
        { quote: 'If you want to achieve greatness, stop asking for permission.', author: 'Unknown' },
        { quote: 'The only limit to our realization of tomorrow will be our doubts of today.', author: 'Franklin D. Roosevelt' },
        { quote: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
        { quote: 'It’s not the years in your life that count. It’s the life in your years.', author: 'Abraham Lincoln' },
        { quote: 'As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.', author: 'John F. Kennedy' },
        { quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', author: 'Helen Keller' },
        { quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.', author: 'Walt Whitman' },
        { quote: 'You can never cross the ocean until you have courage to lose sight of the shore.', author: 'Christopher Columbus' },
        { quote: 'Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.', author: 'Chantal Sutherland' },
        { quote: 'Create the highest, grandest vision possible for your life, because you become what you believe.', author: 'Oprah Winfrey' },
        { quote: 'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.', author: 'Steve Jobs' },
        { quote: 'If you want to live a happy life, tie it to a goal, not to people or things.', author: 'Albert Einstein' },
        { quote: 'Happiness is not something readymade. It comes from your own actions.', author: 'Dalai Lama' },
        { quote: 'If you always do what interests you, at least one person is pleased.', author: 'Katharine Hepburn' },
        { quote: 'Don’t let yesterday take up too much of today.', author: 'Will Rogers' },
        { quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', author: 'Albert Einstein' },
        { quote: 'You’re never too important to be nice to people.', author: 'Unknown' },
        { quote: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
        { quote: 'Happiness is not a goal; it is a by-product.', author: 'Eleanor Roosevelt' },
        { quote: 'The more that you read, the more things you will know. The more that you learn, the more places you’ll go.', author: 'Dr. Seuss' },
        { quote: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
        { quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.', author: 'Albert Einstein' },
        { quote: 'The only thing standing between you and your goal is the story you keep telling yourself that you can’t achieve it.', author: 'Jordan Belfort' },
        { quote: 'Be the change you wish to see in the world.', author: 'Mahatma Gandhi' },
        { quote: 'The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.', author: 'Eleanor Roosevelt' },
        { quote: 'The best way out is always through.', author: 'Robert Frost' },
        { quote: 'I skate to where the puck is going to be, not where it has been.', author: 'Wayne Gretzky' },
        { quote: 'Don’t wait. The time will never be just right.', author: 'Napoleon Hill' },
        { quote: 'You don’t have to be great to start, but you have to start to be great.', author: 'Zig Ziglar' },
        { quote: 'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' },
        { quote: 'The only thing worse than being blind is having sight but no vision.', author: 'Helen Keller' }
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    return '&#8220; ' + quote.quote + ' &#8221;<br><span style="color: white; font-size: 1.5rem; font-style: italic;">- ' + quote.author + '</span>';
}
