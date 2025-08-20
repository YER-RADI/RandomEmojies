import './App.css';

function App() {
		const Random_Emojies = () => {
			const btn = document.getElementById("emoji");
			const emojis = [
				"😆",
				"😅",
				"🤣",
				"😂",
				"😀",
				"🤑",
				"🤨",
				"🙂",
				"😊",
				"😗",
				"😛",
				"😏",
				"🤥",
				"😴",
				"🥺",
				"😧",
				"😇",
				"😳",
				"🙃",
				"🥴",
				"🧐",
				"🤨",
				"😒",
				"🤔",
				"🤭",
				"🥰",
				"🤐",
				"👀",
				"🤔",
				"🤪",
				"🥲",
				"😃",
				"😁",
				"😬",
			];
			
			btn.addEventListener("mouseover", () => {
				btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
			});
		};
	return (
		<div className="App">
					<div id="emoji" onMouseOver={Random_Emojies}>🤣</div>
		</div>
	);
}

export default App;
