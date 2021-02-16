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
Utilize your whiteboard skills to solve the problem with accurate, runnable code, according to the steps in the Rubric and example whiteboard layout.

Example
By the end of the interview, your whiteboard should resemble the example whiteboard layout, with an additional section of actual code, in the language of your course:

example whiteboard layout.

Documentation
The interviewer should take detailed notes on the Rubric form. Points should be assessed for every item on the Rubric. The total points should be summed and recorded on the form.

Submission Instructions
Review the notes your interviewer recorded for you on the Rubric.
Submit the final result of your interview as a candidate to Canvas:
Paste the link the rubric that evaluated you as a candidate (either a google doc, or a photo of a printout)
Comment on your submission with summary of how it went for you, what went well, and what you’d like to improve

======================================================================

Interview 01
Design a system to track browser navigation history.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Create a Navigator class responsible for tracking history of locations as well as allowing back and forward movement.
Navigator class should have back, forward and go methods.
back method takes no arguments and returns the previous location or NULL if there is none.
forward method takes no arguments and returns the next location or NULL if there is none.
go method should take a string argument representing the desired location.
The functionality should mimic a web browsers navigation history.
This problem can be approached in several ways:
The Navigator class should be created with good OOP design
Navigating to a new location should replace anything that was “forward” of the current point.
Some kind of data structure should be used for keeping track of the history.
Since moving forward and backwards is always linear, consider the tradeoffs of using a doubly-linked list, or 2 stacks, or an array with careful index management.
The candidate should consider time and space.
Each API operation should happen independent of the size of the history object: O(1)
Since potentially every page visited could be stored, worst case is likely O(n) space.
Some interesting edge cases may arise. Handle them as stretch goals.
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
You are welcome to make up your own examples, or modify these as needed.

Input	Output
link(1), link(2), link(3), back()	2
link(1), link(2), back(), link(3), back()	1, 1
link(1), link(2), link(3), link(4), back(), forward(), link(5), back()	3, 4, 4
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

=======================================================================

Interview 02
Identify anagrams.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Ask the candidate to write a function to validate whether or not two given strings are anagrams (contain the same letters).
Disregard spaces
Help the candidate understand the definition of a anagram if they are unsure of it.
Two strings are anagrams if one can be built from exactly the same letters as the other.
Avoid utilizing any of the built-in methods available in your language.
This problem can be solved using different approaches:
Look at each letter in the first string, and determine if it’s in the second string (removing it, if found).
This is an O(n^2) brute-force solution
Sort the characters in each string, and then see if they are equal.
Best sorts are O(n log n), so this won’t be better than that.
Use a hash to count the occurances of each charater in the first string, and ensure the second string matches.
This requires a single pass through both strings, so at worst is O(n).
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
"Eleven plus two", "Twelve plus one"	TRUE
"Clint Eastwood", "Old West Action"	TRUE
"Software", "Swear often"	FALSE
"Astronomers", "Moon starers"	TRUE
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

