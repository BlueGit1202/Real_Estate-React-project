import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="76f9SQcCvFw"
        onClose={() => setOpen(false)}
      />
      <button
        className="popup-youtube slide-play-button border-0 bg-danger"
        onClick={() => setOpen(true)}
      >
        <i className="fa fa-play" />
      </button>
    </React.Fragment>
  );
};

const VideoPopup2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="76f9SQcCvFw"
        onClose={() => setOpen(false)}
      />
      <button
        className="popup-youtube slide-play-button border-0"
        onClick={() => setOpen(true)}
      >
        <i className="fa fa-play" style={{ color: "#E50202" }} />
      </button>
    </React.Fragment>
  );
};
export { VideoPopup2 };
export default VideoPopup;
