import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles.video}>
      {props.videos.map((video) => (
        <VideoItem key={video.key} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
