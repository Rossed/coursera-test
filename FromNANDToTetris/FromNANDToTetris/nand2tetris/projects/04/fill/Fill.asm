// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Fill.asm

// Runs an infinite loop that listens to the keyboard input.
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel;
// the screen should remain fully black as long as the key is pressed. 
// When no key is pressed, the program clears the screen, i.e. writes
// "white" in every pixel;
// the screen should remain fully clear as long as no key is pressed.

// Put your code here.

(START)
	@8192
	D=A
	@i 		//Number of  pixels
	M=D

	@n  	//Check variable
	M=0

	@16384
	D=A
	@b 		//Starting register for screen memory map
	M=D

	@24576   //KBD address
	D=M

	@LOOPTWO  //LOOPTWO if address is equal to zero
	D;JEQ

	@LOOP 	//LOOP if KBD adress is not equal to zero
	0;JMP

(LOOP)
	@n 		//Check variable, starts at 0
	D=M 	//Set D to check variable
	@i 		//Equals 8192
	D=D-M
	@START
	D;JEQ   //Jump if n=a, or n=8191, ie all registers are 1

	@b 		//Selecting register
	A=M 	
	M=-1 	//Set register to 1

	@b 		//add on to the register
	M=M+1

	@n 		//add one to check variable
	D=M+1
	M=D

	@LOOP 	//Repeat loop
	0;JMP

(LOOPTWO)
	@n
	D=M
	@i
	D=D-M
	@START
	D;JEQ   //Jump if n=x, or n=8191, ie all registers are 0

	@b
	A=M
	M=0

	@b
	M=M+1

	@n
	D=M+1
	M=D

	@LOOPTWO
	0;JMP


