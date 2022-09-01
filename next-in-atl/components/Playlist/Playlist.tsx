import React from "react";
import { ISongInfo, Song } from "../Song/Song";
import styles from "./Playlist.module.scss";

const songList = [
    {
        imageLink: "./assets/Drake_-_Take_Care_cover.jpg",
        title: "Shot For Me",
        album: "Take Care",
        duration: "3:44"
    },
    {
        imageLink: "./assets/sonderson.jpg",
        title: "Sonder Son (Interlude)",
        album: "Sonder Son",
        duration: "1:40"
    },
    {
        imageLink: "./assets/reputationjpeg.jpg",
        title: "Delicate",
        album: "Reputation",
        duration: "3:51"
    },
    {
        imageLink: "./assets/graduation.jpg",
        title: "Flashing Lights",
        album: "Graduation",
        duration: "3:57"
    },
];

export const Playlist = () => {

    return (
        <div className={styles.playlist}>
            <div className={styles["table-header"]}>
                <span className={styles["song-nr"]}>
                    #
                </span>
                <span className={styles["song-cover"]}>
                    Cover
                </span>
                <span className={styles["song-title"]}>
                    Title
                </span>
                <span className={styles["song-album"]}>
                    Album
                </span>
                <span className={styles["song-duration"]}>
                    Duration
                </span>
            </div>

            <div id="songs-wrapper" className={styles["songs"]}>
                {/* <Song index={1} songInfo={songList[0]} /> */}
                {songList.map(function (details, index) {
                return<Song index={index + 1} songInfo={details} />
            } ) }
            </div>
        </div>
    );
};