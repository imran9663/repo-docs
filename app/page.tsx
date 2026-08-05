import { markdownComponents } from "@/components/common/markdownComponents";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `# 🧑‍💻 Comprehensive React Machine Coding Interview Handbook (5+ Years Experience)

> A practical handbook focused on **product thinking**, **interview expectations**, **MVP definition**, **concepts tested**, **edge cases**, and **evaluation criteria**.
>
> **This handbook intentionally excludes source code, implementation steps, algorithms, and code flow.**

---

## 📑 Table of Contents

- [🎯 How Senior React Machine Coding Interviews Work](#-how-senior-react-machine-coding-interviews-work)
- [✅ Evaluation Criteria](#-evaluation-criteria)
- [🛠️ Universal Engineering Checklist](#️-universal-engineering-checklist)
- [🗂️ Project Playbooks](#️-project-playbooks)
  - [1. 📁 File Explorer](#1--file-explorer)
  - [2. 🗂️ Kanban Board](#2--kanban-board)
  - [3. 🔍 Autocomplete Search](#3--autocomplete-search)
  - [4. ♾️ Infinite Scroll](#4--infinite-scroll)
  - [5. 📊 Data Table](#5--data-table)
  - [6. 🛒 Shopping Cart](#6--shopping-cart)
  - [7. 🔔 Toast Notification](#7--toast-notification)
  - [8. 🪟 Modal System](#8--modal-system)
  - [9. 🧲 Drag & Drop List](#9--drag--drop-list)
  - [10. 📝 Multi-Step Form](#10--multi-step-form)
  - [11. 💬 Nested Comments](#11--nested-comments)
  - [12. 📈 Dashboard](#12--dashboard)
  - [13. 📜 Virtualized List](#13--virtualized-list)
  - [14. 🔄 React Query CRUD](#14--react-query-crud)
  - [15. 🪝 Custom Hooks Library](#15--custom-hooks-library)
- [📅 Interview Day Strategy](#-interview-day-strategy)
- [🗓️ Recommended Learning Order](#️-recommended-learning-order)
- [☑️ Final Checklist](#️-final-checklist)

---

## 🎯 How Senior React Machine Coding Interviews Work

**Typical timeline:**

- Requirement discussion (5–10 min)
- Product planning (5 min)
- Development (45–90 min)
- Feature demonstration
- Follow-up discussion
- Improvement suggestions

**Interviewers primarily evaluate:**

- Requirement understanding
- Product thinking
- UI decomposition
- State organization
- Scalability
- Accessibility
- Performance awareness
- Maintainability
- Communication

---

## ✅ Evaluation Criteria

Every project is generally judged on:

- Requirement clarification
- Component decomposition
- Reusability
- UX
- Responsive design
- Accessibility
- Loading, empty, and error states
- Edge-case handling
- Performance
- Naming consistency
- Product mindset

---

## 🛠️ Universal Engineering Checklist

Before considering a project complete, verify:

- Responsive UI
- Keyboard navigation
- Loading state
- Empty state
- Error state
- Success feedback
- Disabled states
- Accessibility
- Consistent spacing
- Smooth interactions
- Scalability
- Reusable components

---

## 🗂️ Project Playbooks

The following playbooks cover 15 commonly asked machine coding projects. Each entry lists the product context, difficulty, expected time, tested concepts, MVP scope, edge cases, evaluation focus, and optional bonus features.

> **Note:** The **Interviewer's Evaluation** and **Bonus Features** categories are consistent across all projects (per the [Evaluation Criteria](#-evaluation-criteria) above), so they are summarized briefly within each entry.

### 1. 📁 File Explorer

| Attribute | Details |
|---|---|
| **Inspired By** | VS Code Explorer, Finder |
| **Difficulty** | High |
| **Expected Time** | 60–75 min |
| **Companies** | VS Code, Microsoft, Google |

- **Concepts Tested:** Recursive rendering, tree data, state management, component composition, accessibility, performance
- **MVP:** Display nested folders/files, expand/collapse, create file/folder, rename, delete, icons
- **Edge Cases:** Deep nesting, prevent duplicate names, prevent deleting root, keyboard navigation, scalable tree
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 2. 🗂️ Kanban Board

| Attribute | Details |
|---|---|
| **Inspired By** | Trello, Jira |
| **Difficulty** | High |
| **Expected Time** | 75–90 min |
| **Companies** | Atlassian, Razorpay, Swiggy |

- **Concepts Tested:** Drag & drop, complex state, list reconciliation, UX, performance
- **MVP:** Columns, CRUD tasks, move cards, reorder, task count
- **Edge Cases:** Stable ordering, smooth drag, responsive layout, future extensibility
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 3. 🔍 Autocomplete Search

| Attribute | Details |
|---|---|
| **Inspired By** | Amazon Search |
| **Difficulty** | Very High |
| **Expected Time** | 45–60 min |
| **Companies** | Amazon, Meesho, Swiggy |

- **Concepts Tested:** Debouncing, async operations, API integration, accessibility, keyboard navigation
- **MVP:** Search, suggestions, loading state, empty state, selection
- **Edge Cases:** Avoid excessive requests, handle race conditions, error state
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 4. ♾️ Infinite Scroll

| Attribute | Details |
|---|---|
| **Inspired By** | Instagram Feed |
| **Difficulty** | High |
| **Expected Time** | 45–60 min |
| **Companies** | Amazon, Microsoft |

- **Concepts Tested:** Pagination, lazy loading, Intersection Observer, performance
- **MVP:** Initial load, load more, loader, end indicator
- **Edge Cases:** Duplicate prevention, scroll position preservation, API failures
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 5. 📊 Data Table

| Attribute | Details |
|---|---|
| **Inspired By** | Admin Dashboard |
| **Difficulty** | High |
| **Expected Time** | 60 min |
| **Companies** | BrowserStack, PhonePe |

- **Concepts Tested:** Sorting, filtering, pagination, memoization, reusability
- **MVP:** Table, search, sort, pagination, selection
- **Edge Cases:** Large datasets, responsive layout, accessibility
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 6. 🛒 Shopping Cart

| Attribute | Details |
|---|---|
| **Inspired By** | E-commerce |
| **Difficulty** | Medium |
| **Expected Time** | 45 min |
| **Companies** | Flipkart, Walmart |

- **Concepts Tested:** Business logic, derived state, CRUD, persistence
- **MVP:** Add/remove items, quantity control, totals, empty cart state
- **Edge Cases:** Invalid quantity, duplicate items, price sync
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 7. 🔔 Toast Notification

| Attribute | Details |
|---|---|
| **Inspired By** | Enterprise Apps |
| **Difficulty** | Medium |
| **Expected Time** | 30 min |
| **Companies** | Microsoft, Startups |

- **Concepts Tested:** Context API, global state, timers, portals
- **MVP:** Show, dismiss, queue, types
- **Edge Cases:** Stacking, animation, accessibility
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 8. 🪟 Modal System

| Attribute | Details |
|---|---|
| **Inspired By** | Every App |
| **Difficulty** | High |
| **Expected Time** | 30 min |
| **Companies** | Adobe, Microsoft |

- **Concepts Tested:** Portals, focus management, accessibility, reusability
- **MVP:** Open, close, overlay, sizes
- **Edge Cases:** Focus trap, escape key handling, background scroll lock
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 9. 🧲 Drag & Drop List

| Attribute | Details |
|---|---|
| **Inspired By** | Task apps |
| **Difficulty** | High |
| **Expected Time** | 45 min |
| **Companies** | Atlassian, Razorpay |

- **Concepts Tested:** Drag-and-drop, events, UX, immutable updates
- **MVP:** Drag, drop, reorder
- **Edge Cases:** Mobile support, keyboard support, smooth UX
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 10. 📝 Multi-Step Form

| Attribute | Details |
|---|---|
| **Inspired By** | Checkout |
| **Difficulty** | High |
| **Expected Time** | 60 min |
| **Companies** | Zoho, Freshworks |

- **Concepts Tested:** Forms, validation, navigation, persistence
- **MVP:** Steps, validation, progress indicator, submit
- **Edge Cases:** Back navigation, partial completion, optional steps
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 11. 💬 Nested Comments

| Attribute | Details |
|---|---|
| **Inspired By** | Reddit |
| **Difficulty** | Medium |
| **Expected Time** | 60 min |
| **Companies** | Reddit-like startups |

- **Concepts Tested:** Recursion, trees, nested updates
- **MVP:** Comments, replies, collapse, delete
- **Edge Cases:** Deep nesting, hierarchy management, performance
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 12. 📈 Dashboard

| Attribute | Details |
|---|---|
| **Inspired By** | Analytics |
| **Difficulty** | Medium |
| **Expected Time** | 60 min |
| **Companies** | Paytm, FinTech |

- **Concepts Tested:** Layouts, widgets, visualization, responsive design
- **MVP:** Cards, charts, activity feed
- **Edge Cases:** Loading state, widget reuse, responsive grid
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 13. 📜 Virtualized List

| Attribute | Details |
|---|---|
| **Inspired By** | Large datasets |
| **Difficulty** | High |
| **Expected Time** | 75 min |
| **Companies** | Google, Atlassian |

- **Concepts Tested:** Windowing, memory optimization, rendering performance
- **MVP:** Large list, smooth scrolling, render visible rows only
- **Edge Cases:** Dynamic row heights, scroll accuracy
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 14. 🔄 React Query CRUD

| Attribute | Details |
|---|---|
| **Inspired By** | Enterprise CRUD |
| **Difficulty** | High |
| **Expected Time** | 60 min |
| **Companies** | Product companies |

- **Concepts Tested:** Server state, cache, optimistic UI, sync
- **MVP:** CRUD operations, loading, errors, feedback
- **Edge Cases:** Cache consistency, retry logic, sync
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

### 15. 🪝 Custom Hooks Library

| Attribute | Details |
|---|---|
| **Inspired By** | Shared utilities |
| **Difficulty** | Medium |
| **Expected Time** | 45 min |
| **Companies** | Senior rounds |

- **Concepts Tested:** Abstraction, reusability, API design
- **MVP:** Reusable hooks, documentation
- **Edge Cases:** Naming, extensibility, testing
- **Bonus Features:** Persistence, animations, keyboard shortcuts, responsive improvements, better empty/loading/error experiences

---

## 📅 Interview Day Strategy

1. Clarify requirements first.
2. Define MVP before adding extras.
3. Build core functionality first.
4. Leave polishing for the end.
5. Test the happy path and edge cases.
6. Explain trade-offs clearly.

---

## 🗓️ Recommended Learning Order

A 90-day roadmap for working through the playbooks above.

### Month 1

- Modal System
- Toast Notification
- Shopping Cart
- Data Table
- Autocomplete Search

### Month 2

- Infinite Scroll
- Multi-Step Form
- Drag & Drop List
- Nested Comments
- Dashboard

### Month 3

- File Explorer
- Kanban Board
- Virtualized List
- React Query CRUD
- Custom Hooks Library

---

## ☑️ Final Checklist

Before every interview, ensure you can confidently discuss:

- Requirement clarification
- MVP prioritization
- Edge cases
- Accessibility
- Performance
- Scalability
- Trade-offs
- Future enhancements
- Testing strategy
- Product thinking

**Good luck with your React interview preparation!** 🚀`
const page = () => {
  return (
    <article className="mx-4 overflow-scroll">
      <Markdown components={markdownComponents}>{markdown}</Markdown>
    </article>

  )
}

export default page