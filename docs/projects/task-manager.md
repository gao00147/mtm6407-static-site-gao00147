---
layout: project
title: "Student Task Manager"
course: "MTM6302 Final Project"
summary: "A dashboard for students to keep assignments, due dates and priorities in one place."
role: "Developer, building a classmate's app idea"
type: "Client project"
tools: "HTML, CSS, JavaScript, localStorage"
repo: "https://github.com/gao00147/student-task-manager-app"
---

<script setup>
import { withBase } from 'vitepress'
</script>

The Student Task Manager helps college students keep assignments, due dates and priorities in one place. Students juggle assignments, projects, quizzes and personal stuff all at once, and it's easy to lose track of what's due first. This app puts everything in one clean dashboard.

![Student Task Manager on desktop, showing stats, the add task form and a list of tasks](/images/task-hifi-desktop.png)

## A real client process

The final project for MTM6302 was set up like a client job. Every student posted an app idea, then built someone else's idea while acting as the client for their own.

So this app came from a classmate's idea, not mine. I talked through the requirements with my client, got the wireframes approved before coding, and collected their feedback and a testing evaluation at the end.

## Features

- Add a task with a name, due date, priority and optional notes
- Edit a task in place, mark it complete, or delete it (with a confirm step)
- Filter by All, Incomplete or Completed, and by priority
- Priority colours: red for high, amber for medium, green for low, sorted from high to low
- Overdue tasks get their own colour, so they don't get mixed up with high priority
- Stats for total, completed and overdue tasks, plus a progress bar
- Everything is saved in `localStorage`, so tasks are still there after a refresh

No login and no backend. It's all in the browser.

## Design process

I made lo-fi wireframes and hi-fi mockups for desktop, tablet and mobile before writing any code.

![Lo-fi desktop wireframe of the task manager](/images/task-wireframe-desktop.png)

The mobile version stacks everything into one column, keeping the add form and filters at the top where they're easy to reach.

<img :src="withBase('/images/task-hifi-mobile.png')" alt="Student Task Manager on mobile" style="max-width: 320px; margin: 16px auto; display: block;">

## Tech

Vanilla HTML, CSS and JavaScript only. No frameworks were allowed, so all the DOM work is done by hand: building the task list, event listeners for every action, filtering with array methods, and saving to `localStorage`.

Breakpoints:

| Screen | Width |
| --- | --- |
| Mobile | 480px and below |
| Tablet | 481px to 767px |
| Desktop | 768px and up |

## What I learned

Building from someone else's idea is a different skill. I learned to ask questions early, write the requirements down, and get sign off on the wireframe before coding. Part of the grade was also a technical interview about my own code, which pushed me to keep it simple and readable.
