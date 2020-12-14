# Data Structures and Algorithms

## Create a copy of this repository

1. Create a new repository in your GitHub account called `data-structures-and-algorithms`
1. Clone the empty repository to your machine
1. Choose the "Download" option under "Clone or Download" for this repository
1. Copy that .zip file inside of the local `data-structures-and-algorithms` repo created in step 2
1. Unzip the file there
1. Remove the .zip file
1. Run the command `npm install` from the repository root directory
1. Do an `ACP` of the `data-structures-and-algorithms` repository

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Each Data Structure should be implemented separately in a language specific manner, in a properly named folder.
  - i.e. `linked-lists`
- For daily challenges:
  - Each implementation should have a challenges folder, named `challenges`
  - Within the challenges folder, a subfolder bearing the name of the challenge
    - i.e. `remove-duplicates`
  - Within the proper subfolder:
    - A README.md that will house your challenge summary, whiteboard photos
    - Your implementation and tests for the code challenge
    - Perform your work in accordance with your 401 language's instructions

The final structure should resemble this:

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |
  ├── [language]
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── [data-structure-name]
  │       └── challenges
  │   └── ...
  |
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```
> Class-01 (dec07)
[ArrayReverse-CC-01] (./javascript/CodeChallenges/CC14_Array-Reverse/README.md)

> Class-02 (dec08)
[Array-Shift-CC-02] (./javascript/CodeChallenges/CC14_Array-Reverse/CC-02_Array_Shift/README.md)

> Class-03 (dec09)
[Array-Binary-Search] (./)

> Class-04 (dec-10)
[Whiteboard-Interview-Practice] (./javascript/CodeChallenges/CC14_Array-Reverse/CC-04_Whitboard_Interview/README.md)

> Class-05 (dec-11)
[Linked-List] (./javascript/Data_Structures/CC-05_Linked-Lists/README.md)