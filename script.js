// Replace these URLs with the actual API endpoints
const paraphraseApiUrl = 'https://api.example.com/paraphrase';
const plagiarismApiUrl = 'https://api.example.com/plagiarism';
const grammarApiUrl = 'https://api.example.com/grammar';
const summarizationApiUrl = 'https://api.example.com/summarize';

async function makeApiCall(url, text) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('output').innerText = 'Error: ' + error.message;
    }
}

function paraphraseText() {
    const text = document.getElementById('inputText').value;
    makeApiCall(paraphraseApiUrl, text);
}

function checkPlagiarism() {
    const text = document.getElementById('inputText').value;
    makeApiCall(plagiarismApiUrl, text);
}

function checkGrammar() {
    const text = document.getElementById('inputText').value;
    makeApiCall(grammarApiUrl, text);
}

function summarizeText() {
    const text = document.getElementById('inputText').value;
    makeApiCall(summarizationApiUrl, text);
}
