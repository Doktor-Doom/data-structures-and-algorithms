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

=========================================

Interview 01
Rotate a matrix.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Ask the candidate to write a function to rotate a 3x3 matrix (an array of integers), by 90 degrees clockwise.
Avoid utilizing any of the built-in methods available to your language.
Don’t let the candidate get scared by the term “matrix”… It’s just an array of arrays.
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to at least convince you that their code works to solve the problem.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
[ [1, 1, 1], [2, 2, 2], [3, 3, 3] ]	[ [3, 2, 1], [3, 2, 1], [3, 2, 1] ]
[ [3, 2, 1], [3, 2, 1], [3, 2, 1] ]	[ [3, 3, 3], [2, 2, 2], [1, 1, 1] ]
The candidate should draw the input and output as a square of integers.

Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

========================================================

Interview 02
Find largest product possible of 3 integers from within a list.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Avoid utilizing any of the built-in methods available in your language.
Ask the candidate to write a function to identify the largest possible result of multiplying together some 3 numbers from an array of integers
A tricky edge case is related to how negative numbers are handled.
You don’t need to mention this at the start. If the candidate asks about negative numers, you can confirm: “It’s an array of integers”, so negative numbers would be a possibility.
Remember, if only 1 negative number is multiplied with 2 positive numbers, the resulting product will be negative. But 2 negative numbers multiplied with one positive number will result in a positive number.
Possible approaches:
Sort the list, and mulitple the last 3 numbers together.
This does not account for a list of eg, all negative numbers. But they are there at the start of the list. What should be done with them?
Time and space complexity of this depend on what sorting algorithm the candidate might use. Be sure the candidate can correctly select a proper sorting algorithm, and can tell you the correct complexities.
Traverse the list, keeping track of the 3 largest numbers identifed.
This would be similar to an algorithm to find the max value in a list.
The 3 values might be held in a queue of size 3: when a new high is found, it’s enqueued, and the oldest value is dequeued.
To account for negative numbers, the candidate would also need to accumulate the 2 lowest, negative numbers, as the array is traversed. Perhaps in a second queue?
Since this can be done in a single pass throug the array, time complexity is O(n). It only needs to store up to 5 values in the supporting list of min / max numbers, so extra space complexity is O(1).
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
[18, 3, 42, 17, 9, 27]	20,412
[4, 0, -5, 3, -1, -6, 2]	120
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.