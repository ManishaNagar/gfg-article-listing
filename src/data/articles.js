const articles = [
  {
    id: 1,
    title: "Introduction to React",
    category: "Web Development",
    description: "Learn the basics of React and component-based UI.",
    summary: "Learn the basics of React including components, JSX, and state management...",
    content: "React is a JavaScript library used to build user interfaces. It follows a component-based architecture. In React, you can create reusable UI components. JSX is a syntax extension that allows you to write HTML-like code in JavaScript. State management is crucial in React for handling dynamic data and user interactions. React also has a virtual DOM that optimizes rendering performance. Overall, React is a powerful tool for building modern web applications.",
    readTime: "5 min",
    author: "GeeksforGeeks"
  },
  {
    id: 2,
    title: "Arrays in Data Structures",
    category: "DSA",
    description: "Understand arrays and their operations.",
    summary: "Learn the basics of arrays.",
    content: "Arrays are a fundamental data structure in programming. They store multiple values in a single variable. Arrays are indexed, starting from 0. You can access, modify, and iterate through array elements using their indices. Common operations include insertion, deletion, searching, and sorting. Arrays can be of fixed size (static) or dynamic. In many programming languages, arrays are implemented as contiguous blocks of memory, which allows for efficient access. However, they may require resizing when adding or removing elements, which can impact performance. Overall, arrays are a versatile and widely used data structure in computer science.",
    readTime: "7 min",
    author: "GeeksforGeeks"
  },
  {
    id: 3,
    title: "CSS Flexbox Guide",
    category: "Web Development",
    description: "Create responsive layouts using Flexbox.",
    summary: "Learn CSS Flexbox.",
    content: "CSS Flexbox is a layout model that allows you to design flexible and responsive layouts. With Flexbox, you can easily align and distribute space among items in a container. The main axis is defined by the flex-direction property, which can be set to row, column, row-reverse, or column-reverse. The justify-content property controls the alignment of items along the main axis, while align-items controls alignment along the cross axis. Flexbox also provides properties like flex-wrap for handling overflow and flex-grow, flex-shrink, and flex-basis for controlling how items grow or shrink. Overall, Flexbox is a powerful tool for creating modern web layouts with ease.",
    readTime: "6 min",
    author: "GeeksforGeeks"
  },
  {
    id: 4,
    title: "Operating System Basics",
    category: "Core CS",
    description: "Introduction to OS concepts.",
    summary: "Learn OS basics.",
    content: "An operating system is system software that manages computer hardware and software resources. It provides a user interface and controls the execution of programs. Key concepts in operating systems include processes, threads, memory management, file systems, and device management. The OS handles multitasking, allowing multiple processes to run concurrently. It also manages system resources efficiently to ensure optimal performance. Popular operating systems include Windows, macOS, Linux, and Unix. Understanding operating system basics is essential for computer science students and professionals.",
    readTime: "8 min",
    author: "GeeksforGeeks"
  },
  {
    id: 5,
    title: "Linked Lists Explained",
    category: "DSA",    
    description: "Understand linked lists and their operations.",
    summary: "Learn linked lists.",
    content: "A linked list is a linear data structure where elements are stored in nodes...",
    readTime: "7 min",
    author: "GeeksforGeeks"
  },
  {
    id: 6,
    title: "JavaScript Promises",
    category: "Web Development",
    description: "Learn about JavaScript promises and async programming.",
    summary: "Understand JavaScript promises.",
    content: "JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation. They allow you to write asynchronous code in a more synchronous fashion. A promise can be in one of three states: pending, fulfilled, or rejected. You can create a promise using the Promise constructor, which takes a function with resolve and reject parameters. Promises have then() and catch() methods for handling success and error cases, respectively. They also support chaining, allowing you to perform multiple asynchronous operations in sequence. Overall, promises are a powerful tool for managing asynchronous code in JavaScript.",
    readTime: "6 min",
    author: "GeeksforGeeks"
  },
  {
    id: 7,
    title: "Binary Trees in Data Structures",
    category: "DSA",
    description: "Learn about binary trees and their traversal techniques.",
    summary: "Understand binary trees.",
    content: "A binary tree is a tree data structure in which each node has at most two children. The topmost node is called the root. Each node contains a value and references to its left and right children. Binary trees are used in various applications such as expression parsing, searching, and sorting. Common traversal techniques include in-order, pre-order, and post-order traversals. In-order traversal visits the left subtree, the node itself, and then the right subtree. Pre-order traversal visits the node first, then the left subtree, and finally the right subtree. Post-order traversal visits the left subtree, the right subtree, and then the node itself. Understanding binary trees is essential for solving many algorithmic problems in computer science.",
    readTime: "8 min",
    author: "GeeksforGeeks"
  },
  {    
    id: 8,
    title: "Introduction to Algorithms",
    category: "Core CS",
    description: "Learn the fundamentals of algorithms.",
    summary: "Understand basic algorithms.",
    content: "An algorithm is a step-by-step procedure for solving a problem. It is a set of instructions that can be implemented in code to perform a specific task. Algorithms are essential for efficient problem-solving and are used in various fields such as computer science, mathematics, and engineering. Common types of algorithms include sorting algorithms (like quicksort and mergesort), searching algorithms (like binary search), and graph algorithms (like Dijkstra's algorithm). Analyzing the time and space complexity of algorithms is crucial for understanding their efficiency. Overall, learning about algorithms is fundamental for anyone interested in programming and computer science.",
    readTime: "9 min",
    author: "GeeksforGeeks"
  }
];

export default articles;
