Mock Interviews
Specifications
Read all of the following instructions carefully.
Today, you and a peer will take turns interviewing each other with a code challenge
The interviewer will score the candidate according to the Whiteboard Rubric
Notes can be taken in an electronic copy of the doc, or a print out of it
In either case, the completed rubric will be given to the candidate for review purposes
The candidate submits the rubric with the score they achieved as a candidate
Each interview should be timeboxed to a strict 30 minutes
Interview questions
Don’t look at the interview questions until you decide who will be the first interviewer.

The first interviewer will ask this question
The second interviewer will ask this question
Structure
Utilize your whiteboard skills to solve the problem according to the steps in the Rubric, and example whiteboard layout.

Example
By the end of the interview, your whiteboard should resemble the example whiteboard layout:

example whiteboard layout.

Documentation
The interviewer should take detailed notes on the Rubric form. Points should be assessed for every item on the Rubric. The total points should be summed and recorded on the form.

Submission Instructions
Review the notes your interviewer recorded for you on the Rubric.
Submit the final result of your interview as a candidate to Canvas:
Paste the link the rubric that evaluated you as a candidate (either a google doc, or a photo of a printout)
Comment on your submission with summary of how it went for you, what went well, and what you’d like to improve

==========================================

Interview 01
Reverse a string, three different ways.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Ask the candidate to write 3 functions, that each utilize a different algorithms for reversing a string.
One of the 3 methods may utilize any of the built-in methods, except for String#reverse, available in your language. The other 2 may not.
This problem can be approached in many ways….
Popular techniques involve converting the string to an array of characters, reversing the array, and then converting back to a string.
Encourage the candidate to try at least one recursive solution, with no loops (for / while).
A base case should be clearly identified
The recursive call might look like concatenating the last character of the string, with reverse of the whole string (without the last char).
rev = str[lastChar] + strWithoutLastChar
Ensure the candidate evaluates Big O for every algorithm. Be extra thoughtful of what any built-in methods are doing under the hood!
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
"Code Fellows"	"swolleF edoC"
"Tacocat"	"tacocaT"
"A ship in port is safe, but that's not what ships are built for."	".rof tliub era spihs tahw ton s'taht tub ,efas si trop ni pihs A"
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

==============================================================

Interview 02
Sanitize spaces in a URL.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Ask the candidate to write a function to sanitize a url, by encoding all spaces (an illegal character) into %20, the hexidecimal value for a space, in the ISO-Latin character set.
Avoid utilizing any built-in string-replace methods available in your language.
This problem can be solved using different approaches:
Whatever the candidate comes up with, have them analyze the Big O, time and space.
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
"http://code.org/hour of code.html"	"http://code.org/hour%20of%20code.html"
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.