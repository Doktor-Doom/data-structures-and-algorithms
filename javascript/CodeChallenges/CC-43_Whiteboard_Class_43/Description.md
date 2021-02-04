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

=====================================

Interview 01
Estimate water usage for a given sprinkler system.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Avoid utilizing any of the built-in methods available in your language.
Ask the candidate to write a function to calculate the water usage for a sprinkler system schematic provided.
The sprinkler system is made of an inlet and a number of connected sprinkler heads that spray water.
Each single spinkler head has a T connection that can be connected to 0, 1, or 2 other sprinklers.
There are no connected loops in the system. That is, any given sprinkler head is connected to one other spinkler where water comes from (or the inlet), and potentially some downstream heads.
Each sprinkler head is configured for a certain amount of output, each potentially different, in millileters per minute.
Distance between sprinkler heads is irrelevant.
The function should be able to start at any given sprinkler, and return the water used from that point on in the system.
Start by directing the candidate to decide in what flexible format they want the schematic to be provided.
What data sctructure best models the described system?
The best representation is a binary tree, where the first sprinkler fed from the inlet is the root.
Each node value is the water output that sprinkler head is configured for.
Note: This is NOT a BST (so higher/lower values can be anywhere), and there is no guarantee that the tree will be balanced.
Then the candidate should write a function that recieves a binary tree, and figures out the total about of output of the system.
This means summing the node values across the whole tree
This problem can be approached in several ways:
Every node needs to be visited to add them all up.
This means the whole tree needs to be traversed.
So any solution for n nodes should require O(n) time and use O(1) extra space.
The candidate may choose breath-first traversal
This can take more code to implement
The preferred solution is a recursive depth-first traversal
At each node, return the output for the node you are on, added to the total usage for each child node.
The code becomes very expressive:
total = value + totalUsage(leftChild) + totalUsage(rightUsage)
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input: (value, leftBranch, rightBranch)	Output: total usage
(35, (41, (33,,), (52,,) ), (59, (30, ,), (44, ,)))	294
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

============================================================

Interview 02
Convert a year to Roman Numerals.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Actual code is required for a complete answer
Avoid utilizing any of the built-in methods available in your language.
Ask the candidate to write a function to convert an integer to it’s roman numeral equivalent.
Input will be positive integers less than 5,000
Help the candidate understand the definition of a roman numeral if needed.
You can share this reference chart if needed
This problem can be solved using different approaches:
The candidate might want to build up the new string by repeatedly adding the highest possible roman strings (while reducing the target number the same value), then moving a current index to the next highest value.
The index might point into 2 parallel 1-dimensional arrays, carefully built to correlate the roman letters to the numeric value, from highlest to lowest.
dec = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
rom = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
Alternatively, the string and value equivalent might be stored in an object, a tuple, or a hash.
The candidate can then loop: concatenating the string, and reducing the target, while the target is more than the value of the current index.
If you consider n the value of the target number, this method takes O(1) time and uses O(1) extra space, since it has to loop through the possible values for any given number.
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example
Input	Output
"1900"	"MCM"
"634"	"DCXXXIV"
"2020"	"MMXX"
"2099"	"MMXCIX"
Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.



