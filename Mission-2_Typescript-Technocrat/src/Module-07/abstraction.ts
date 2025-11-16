//* Abstraction: the 3rd pillar of OOP
//* Abstraction is the process of hiding the internal details of an application from the outer world. Abstraction is used to describe things in simple terms. It’s used to create a boundary between the application and the client programs.

//* We can implement abstraction two ways
//* 1. interface
//* 2. abstract class

//* Idea == abstraction
// interface MediaPlayer {
//     paly(): void;
//     pause(): void;
//     stop(): void;
// };

//* implementation
// class MusicPlayer implements MediaPlayer {
//     paly() {
//         return `Music playing`;
//     };

//     pause() {
//         return `Music paused`;
//     };

//     stop() {
//         return `Music stooped`;
//     };
// };

//* create a instance
// const XPlayer = new MusicPlayer();
// console.log(XPlayer.paly());

//* create abstraction with leader class

//* create idea == abstraction class
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
};

//* implementation with another child class
class MusicPlayer extends MediaPlayer{
    play(): void {
        console.log('Playing music');
    };

    pause(): void {
        console.log('Music is paused!');
    };

    stop(): void {
        console.log('Music is stooped!');
    };
};

//* create instance
const XPlayer = new MusicPlayer();
XPlayer.play();