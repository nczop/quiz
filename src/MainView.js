import React from "react";

export default function MainView(props) {
  const handleButton = () => {
    props.handleButton();
  };

  const handleButtonLetsPlay = () => {
    props.handleButtonLetsPlay();
  };
  return (
    <>
      <button className="drawQuestion" onClick={handleButton}>
        Lista pytań
      </button>
      <button className="drawQuestion" onClick={handleButtonLetsPlay}>
        Zagrajmy
      </button>
    </>
  );
}

// export default function MainView() {
//   return (
//     <>
//       <button className="drawQuestion" onClick={() => alert("policja")}>
//         Lista pytań
//       </button>
//       <button className="drawQuestion" onClick={() => alert("policja")}>
//         Zagrajmy
//       </button>
//     </>
//   );
// }

// export default MainView;
