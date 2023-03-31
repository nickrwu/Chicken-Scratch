import { useState } from "react";
import './App.css';
import { Configuration, OpenAIApi } from "openai";
function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI,
  });
  let answerArray = []
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

    answerArray = res.data.choices[0].text.split("\n");
    answerArray.shift();
    answerArray.shift();
    setResult(answerArray);

    /*
       
    */

  }




  return (

    <div>
      <input placeholder="Get questions for your exam!" onChange={(e) => setPrompt(e.target.value)}></input>
      <button onClick={getQuestions}>Hi</button>
      {result.length > 0 ? <ul>
        {result.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul> : <></>}



    </div>
  );
}

export default App;
