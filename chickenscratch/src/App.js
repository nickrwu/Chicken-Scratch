import { useState } from "react";
import './App.css';
import { Configuration, OpenAIApi } from "openai";
function App() {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const getQuestions = async () => {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(res.data.choices[0].text);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    <div>
      <input onChange={(e) => setPrompt(e.target.value)}></input>
      <button onClick={getQuestions}>Hi</button>
    </div>
  );
}

export default App;
