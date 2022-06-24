# Lap1 Code Challenge - GoogleClone

# Exercise Description

Within your pair, work on developing a Google like application. In other words, create your own server, and front end - with Google's look - that communicate with one other so that:

- when pressing the left side button, an API call should be executed and users should be shown a page with ten results
- when pressing the right side button, user should be taken to the page of one of the results searched by the user

Extension: You may make use of a Google Search API. Also - if you use your own API - you can have limited selection of 'result' options that might be returned for a few search terms.

# Implementation

## Installation and usage

- Git clone/download the repository
- Open repository using GitBash or GitDesktop
- Open repository in Visual Studio Code

### Server

- Right click on the server folder and choose `Open in Integrated Terminal`
- Run command `npm start`

### Client

- Navigate into the client folder
- Open homepage.html via live server plugin</br>
  Note! another way to open the file is right click and selecting `Copy Path`, then paste it in the browser

### Technologies

- GitHub
- GitBash (or GitDesktop, or any terminal)
- Visual Studio Code
- CSS
- HTML
- JavaScript
- API
- Node.js

### Usage

Having opened the homepage, the user should see several options to access - as does Google. However, for the purpose of this project only the `Google Search` and `I'm feeling lucky` button functionalities will be addressed.

In case the user selected the `Google Search` button, then the user should be redirected to a new page. The new page will present several results in a Google list of results format from an API created by us. Thus, several of the items in the list can be accesed, and will redirect the user accordingly.

In case the user wishes to select the `I'm Feeling Lucky` button, the user must give an input to the text area with any of the following terms: facebook, reddit, amazon, sky, youtube, netflix, microsoft, github, steam, instagram. Then, the user should be redirected to a new page that will display the result as an item in a Google list of results format. However, if no input is given, then the user will be prompted with an informative message.
</br>

Note: Google list of results is created with the following template:

- url
- title
- description
- tags

## Process

The overall process was a great collaboration!

To begin with, the project kick off with a short meeting to run through the tasks, and ensure the team's focus and understanding of the requierments and needed deliverables.

Moving on, tasks were divided in two main areas, server side and client side. The task were then allocated to each of the team members. And still, whilst the project was progressing the divison of tasks has gone.

Next, during the duration of the working day several meetings were done at an interval of about 1h to 2h via Slack. This approached proved to be of great benefit for performance, and error handling. Additionaly, it helped keeping the team focused and motivated. Thus, the project had implemented a similar approach to the extreme programming.

Then, taking the process in terms of milestiones there were two significant ones - before, and after reviewing. The before reviewing stage had implemented a straight foward, yet wide approach. To better clarify, two pages were created with the associated buttons - `Google Search`, `I'm Feeling Lucky` - followimg the structure of the desired outcome. And the design was basic. Next, the after reviewing stage, used only one page to display the results by making use of the `sessionStorage()` object, and the `.createElement()` and `.append()`. In other words, depending on which button is selected, a value will be stored for the session and used to determine the results - whether showing the full list, or just one item.

### Bugs

- For the latest design, the `I'm Feeling Lucky` button fails to do the random set of the text
- For the implemeted design, the image is misplaced, the button aspect should be improved, and few other elements need to be added (that are on the latest design)

### Future work

- Integrating the new design
- Adjusting the design of the result.html

# Wins and challenges

Completing the task has brought several accomplishements namely:

- An increase of the communication skills, motivation, and focus

Yet, there were several challenges such as:

- Structuring the process
- Overlooking the importance of using comments in the code

# Licence

[MIT licence](https://opensource.org/licenses/mit-license.php)
