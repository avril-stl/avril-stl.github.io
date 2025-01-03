import React, { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import TerminalModal from '../components/terminalModal';

const PhaserGame = () => {  

  const gameContainerRef = useRef(null);

  useEffect(() => {
    // Phaser Game standard Config?
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight, 
      parent: gameContainerRef.current, 
      scene: {
        preload,
        create,
        update,
      }
    };
    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, []);

  function preload() {
    console.log("Loading assets...");
    this.load.image('star', '/logo192.png'); 
    this.load.audio('starSound1', '/sounds/harp_1.wav');  
    this.load.audio('starSound2', '/sounds/harp_2.wav'); 
    this.load.audio('starSound3', '/sounds/harp_3.wav');
    this.load.audio('starSound4', '/sounds/harp_4.wav'); 
  }

  function create() {
    this.cameras.main.setBackgroundColor(0x041724);
    
    const num_stars = 12;
    this.stars = [];
    this.lineGraphics = this.add.graphics(); 

    const sounds = [
      'starSound1',
      'starSound2', 
      'starSound3',
      'starSound4'
    ];

    this.clickedStars = [];  // stars clicked on
    this.lines = [];         // lines between stars 

    //Add stars to the scene
    for (let i = 0; i < num_stars; i++) {
      const x = Phaser.Math.Between(0, this.sys.game.config.width);  // Random X position
      const y = Phaser.Math.Between(0, this.sys.game.config.height);  // Random Y position
      const soundKey = sounds[Phaser.Math.Between(0, sounds.length - 1)];  // Random sound from the pool

      //Create the star sprite
      let star = this.add.sprite(x, y, 'star');
      star.setDisplaySize(50, 50);
      star.setInteractive();
      star.on('pointerdown', () => {
        this.sound.play(soundKey);  
        this.clickedStars.push({ x, y, sound: soundKey });

        //Draw lines if at least two stars have been clicked
        if (this.clickedStars.length > 1) {
          const lastStar = this.clickedStars[this.clickedStars.length - 1];
          const secondLastStar = this.clickedStars[this.clickedStars.length - 2];

          //Store the line connection 
          this.lines.push({
            start: secondLastStar,
            end: lastStar,
            sounds: [secondLastStar.sound, lastStar.sound],
          });

          this.drawLine(secondLastStar, lastStar);
        }
      });

      //Store star 
      this.stars.push({
        sprite: star,
        sound: soundKey,
        x: x,
        y: y
      });
    }

    // Define the drawLine method on the scene
    this.drawLine = function(start, end) {
      this.lineGraphics.lineStyle(3, 0xadebff, 1);
      this.lineGraphics.beginPath();
      this.lineGraphics.moveTo(start.x, start.y);
      this.lineGraphics.lineTo(end.x, end.y);
      this.lineGraphics.strokePath();
    };

    this.playLineSounds = function(line) {
      console.log("Playing sounds for line", line);
      line.sounds.forEach((soundKey, index) => {
        setTimeout(() => {
          console.log("Playing sound:", soundKey);
          this.sound.play(soundKey);
        }, index * 800);  
      });

      // Play the sounds of connected lines recursively
      this.lines.forEach((connectedLine) => {
        if (connectedLine !== line) {
          if (
            (connectedLine.start === line.start || connectedLine.start === line.end) ||
            (connectedLine.end === line.start || connectedLine.end === line.end)
          ) {
            connectedLine.sounds.forEach((soundKey, index) => {
              setTimeout(() => {
                console.log("Playing connected sound:", soundKey);
                this.sound.play(soundKey);
              }, index * 800); 
            });
          }
        }
      });
    };

    this.input.keyboard.on('keydown-P', () => {
      // Check if there are any clicked stars
      if (this.clickedStars.length > 0) {
        // Play the sounds in the order they were clicked
        this.clickedStars.forEach((clickedStar, index) => {
          setTimeout(() => {
            console.log("Playing sound for clicked star:", clickedStar.sound);
            this.sound.play(clickedStar.sound); 
          }, index * 800); 
        });
      } else {
        console.log("No stars clicked yet.");
      }
    });

  }

  function update() {}

  return <div ref={gameContainerRef} style={{ width: '100%', height: '100%' }} />;
};

export default PhaserGame;
