# Mock Interviews
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
![WB](./assets/DataStructuresWhiteboard.png)

Documentation
The interviewer should take detailed notes on the Rubric form. Points should be assessed for every item on the Rubric. The total points should be summed and recorded on the form.

Submission Instructions
Review the notes your interviewer recorded for you on the Rubric.
Submit the final result of your interview as a candidate to Canvas:
Paste the link the rubric that evaluated you as a candidate (either a google doc, or a photo of a printout)
Comment on your submission with summary of how it went for you, what went well, and what you’d like to improve

## Interview 01

Given an adjacency matrix representation of a graph, return the adjacency list representation.

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
Give the candidate an example of what the adjacency matrix could look like (see below for example)
we can safely assume that the input is goin gto be a 2D array.
the candidate will want to use a nested for loop to iterate through the matrix and determine from there what vertices connect to others.
To assist in the construction of the adjacency list, each row of the matrix is going to be a separate node.
for every 1 in that row, that is going to be a valid connection and can then be converted to the list for construciton.

Input:
``` 
| a b c d e 
a| 0 1 0 0 1 
b| 1 0 1 1 0
c| 0 1 0 1 0 
d| 0 1 1 0 1 
e| 1 0 0 1 0
```

Output:
```
a| -> b -> e

b|-> a -> c -> d

c| -> b -> d

d| -> b -> c -> e

e| -> a -> e
```

Stretch Goals
Are you able to tell which vertices has the most connections?

Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.

## Interview 02

Given a graph, are 2 given nodes connected?

Specifications
Read all of the following instructions carefully.
Act as an interviewer, giving a candidate a code challenge
Score the candidate according to the Whiteboard Rubric
You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate
Feature Tasks
The candidate should write a function that accepts as input two nodes and a graph, represented as an adjacency list.
The format of the adjacency list can be specified by the candidate.
The function should traverse the graph, using any traversal method.
The traversal should start at one node, and continue until the second node is found, or the traversal is completed.
The return type of this method will be boolean.
The candidate should be able to traverse through the adjacency list of Node A and determine if Node B exists.

Input:

Two nodes: Node D, Node G

Graph:
```
a| -> B -> C
b| -> D -> A
c| -> A -> D
d| -> B -> C -> F
e| -> F
f| -> E -> G
g| -> F
```
```
Output: True
```
Structure
Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Documentation
Record detailed notes on the rubric, to share with the candidate when the interview is complete.