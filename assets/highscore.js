//JavaScript for High Score

let scoresBtn = document.querySelector(
	"#view-high-scores"
);

//This function retrieves scores from local storage

function printHighscores() {
	let highscores =
		JSON.parse(
			window.localStorage.getItem(
				"highscores"
			)
		) || [];
	highscores.sort(function (a, b) {
		return b.score - a.score;
	});
	highscores.forEach(function (
		score
	) {
		let liTag =
			document.createElement(
				"li"
			);
		liTag.textContent =
			score.name +
			" - " +
			score.score;
		let olEl =
			document.getElementById(
				"highscores"
			);
		olEl.appendChild(liTag);
	});
}

//This function clears the previous scores
function clearHighscores() {
	window.localStorage.removeItem(
		"highscores"
	);
	window.location.reload();
}
document.getElementById(
	"clear"
).onclick = clearHighscores;

printHighscores();
