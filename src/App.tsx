import * as React from "react";
import "./styles.scss";

export default function App() {
  const [actionDone, setActionDone] = React.useState(false);
  const [bonusActionDone, setBonusActionDone] = React.useState(false);
  const [interactWithObjectDone, setInteractWithObjectDone] = React.useState(
    false
  );
  const [reactionDone, setReactionDone] = React.useState(false);
  const [moveDone, setMoveDone] = React.useState(false);
  const finishTurn = () => {
    setActionDone(false);
    setBonusActionDone(false);
    setInteractWithObjectDone(false);
    setReactionDone(false);
    setMoveDone(false);
  };

  return (
    <div className="app">
      <h1>DND Turn Tracker</h1>
      <ul className="container">
        <li className={actionDone ? "done" : undefined}>
          <span className="left">Action</span>
          <span className="right">
            <button disabled={actionDone} onClick={() => setActionDone(true)}>
              Complete
            </button>
          </span>
        </li>
        <li className={bonusActionDone ? "done" : undefined}>
          <span className="left">Bonus Action</span>
          <span className="right">
            <button
              disabled={bonusActionDone}
              onClick={() => setBonusActionDone(true)}
            >
              Complete
            </button>
          </span>
        </li>
        <li className={interactWithObjectDone ? "done" : undefined}>
          <span className="left">Interact with Object</span>
          <span className="right">
            <button
              disabled={interactWithObjectDone}
              onClick={() => setInteractWithObjectDone(true)}
            >
              Complete
            </button>
          </span>
        </li>
        <li className={reactionDone ? "done" : undefined}>
          <span className="left">Reaction</span>
          <span className="right">
            <button
              disabled={reactionDone}
              onClick={() => setReactionDone(true)}
            >
              Complete
            </button>
          </span>
        </li>
        <li className={moveDone ? "done" : undefined}>
          <span className="left">Move</span>
          <span className="right">
            <button disabled={moveDone} onClick={() => setMoveDone(true)}>
              Complete
            </button>
          </span>
        </li>
        <li className="finish-turn">
          <span className="left" />
          <span className="right">
            <button onClick={finishTurn}>Finish Turn</button>
          </span>
        </li>
      </ul>
    </div>
  );
}
