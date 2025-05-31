# 📚 Data Structures and Algorithms (JavaScript)

Welcome to the **Data Structures and Algorithms** repository built with **JavaScript**!  
This repo contains clean and well-organized implementations of popular **DSA topics** to help you learn, practice, and master your coding skills.

---

## 📂 Contents

| 📚 Topic                    | 📝 Description                                              | 🔗 Link                                                                     |
| --------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| 💡 Problem Solving Approach | Learn how to break down problems into manageable steps      | [📖 Read Guide](./Problem%20Solving%20Approach/Problem_Solving_Approach.md) |
| 🧩 Problem Solving Patterns | Discover reusable logic patterns for common coding problems | [🧠 Learn More](./Problem%20Solving%20Patterns/Problem_Solving_Patterns.md) |
| 🔁 Recursion                | Understand the concept and use cases of recursive functions | [🔍 Dive In](./Recursion/Recursion.md)                                      |
| 🔎 Searching Algorithms     | Implement linear, binary, and other searching techniques    | [👓 Overview](./Searching-Algorithms/Searching_Algorithms.md)               |
| 🔃 Sorting Algorithms       | Learn about sorting methods like bubble, quick, and merge   | [📘 See Docs](./Sorting-Algorithms/Sorting_Algorithms.md)                   |
| 🗃️ Data Structures          | Explore stacks, queues, trees, linked lists, and more       | [🛠️ Go to Docs](./Data-Structures/Data_Structures.md)                       |

---

## 🐞 Debug Configuration (VS Code)

To easily debug any JavaScript file using **Visual Studio Code**, follow these steps:

1. 📝 Open the JavaScript file you want to run.
2. ▶️ Press `F5` or click on the **Run and Debug** icon in the sidebar.
3. 🛠️ Add the following config in `.vscode/launch.json` if it doesn't exist:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Current File",
      "program": "${file}",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
