let votesAbhay = 0;
let votesShruti = 0;
let votesSagar = 0;
const votedUsers = new Set();

function vote(candidate) {
    const username = document.getElementById('username').value.trim();

    if (!username) {
        alert('Please enter your name before voting.');
        return;
    }

    if (votedUsers.has(username)) {
        alert('You have already voted!');
        return;
    }

    if (candidate === 'Abhay') {
        votesAbhay++;
        document.getElementById('votesAbhay').innerText = `Votes: ${votesAbhay}`;
    } else if (candidate === 'Shruti') {
        votesShruti++;
        document.getElementById('votesShruti').innerText = `Votes: ${votesShruti}`;
    } else if (candidate === 'Sagar') {
        votesSagar++;
        document.getElementById('votesSagar').innerText = `Votes: ${votesSagar}`;
    }

    votedUsers.add(username);
    alert(`Thank you for voting, ${username}!`);

    // Clear the input field after voting
    document.getElementById('username').value = '';
}
