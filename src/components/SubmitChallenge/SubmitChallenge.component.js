import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SubmitChallenge.styles.scss";
import { getOneChallengeAction } from "../../redux/actions/challengesActions";
import Header from "../Header/Header.component";
import { useParams, useHistory } from "react-router-dom";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/chaos";

function SubmitChallenge() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getOneChallengePetition = (id) => dispatch(getOneChallengeAction(id));

  useEffect(() => {
    if (id != null) {
      getOneChallengePetition(id);
    }
  }, []);
  const challenge = useSelector((state) => state.challenges.challenge_selected);
  const [code, setCode] = useState("");
  return (
    <div className="container">
      <Header />
      <div className="submitChallenge">
        <div className="submitChallenge__content">
          <h1>{challenge?.title}</h1>
          <div className="submitChallenge__text">
            <p>{challenge?.text}</p>
            <label for="test-data" className="underline">
              Test data:
            </label>
            <textarea
              id="test-data"
              value={challenge?.input}
              className="submitChallenge__input"
            ></textarea>
            <label for="editor" className="underline">
              Your solution:
            </label>
            <AceEditor
              id="editor"
              width={100}
              placeholder=" YOUR CODE HERE!, You can write in any language you want."
              mode="javascript"
              theme="chaos"
              fontSize={16}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={code}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
            
            <form action="">
            <label for="" className="underline">
              Your Answer:
            </label>
              <input placeholder="Paste here the answer from your program" type="text" className="input-answer"/>
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitChallenge;
