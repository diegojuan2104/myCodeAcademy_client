import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SubmitChallenge.styles.scss";
import { getOneChallengeAction } from "../../redux/actions/challengesActions";
import Header from "../Header/Header.component";
import { useParams, useHistory } from "react-router-dom";
import AceEditor from "react-ace";
import 'brace/mode/javascript';
import 'brace/theme/chaos';

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
  return (
    <div className="container">
      <Header />
      <div className="submitChallenge">
        <div className="submitChallenge__content">
          <h1>{challenge?.title}</h1>
          <div className="submitChallenge__text">
            <p>{challenge?.text}</p>
            <p>Input:</p>
            <textarea
              value={challenge?.input}
              className="submitChallenge__input"
            ></textarea>
            <AceEditor
              placeholder="Placeholder Text"
              mode="javascript"
              theme="chaos"
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitChallenge;
