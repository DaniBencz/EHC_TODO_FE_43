# Objective

Develop a feature-rich Todo application using technology of your choice and TypeScript that closely matches the provided designs and leverages state management.

# Brief

Your task is to create a Todo application with the following functionality and features. The designs (mobile and desktop versions as static JPGs) and a style guide (containing font, color palette, sizing, etc.) are provided. Use your best judgment to implement specific style details like font size, padding, and margins.

Your application must include:

* Hover states for all interactive elements
* Light and dark mode toggle
* Basic todos management features:
  * Adding new todos
  * Marking todos as complete
  * Deleting todos from the list
  * Filtering todos (all, active, complete)
  * Clearing all completed todos
* Use of state management for handling application state.

**Bonus:**

* Implement drag and drop functionality to allow users to reorder todo items

Follow the tasks below to guide your implementation.

---

## Task 1: Project Setup and Initial Configuration

* Initialize a new project.
* Configure TypeScript for strict type checking.
* Set up a basic state management structure.

## Task 2: Responsive User Interface

* Create the layout for the Todo application following the provided mobile and desktop designs.
* Implement a header with a light/dark mode toggle.
* Design a main section to display todos.
* Ensure all interactive elements (e.g., buttons for adding, deleting, marking as complete) have visual hover states.
* Adapt the layout based on the device's screen size.

## Task 3: Todo Application Functionality

* Develop components for:

  * Todo item
  * Todo list and filters
  * Input form for adding new todos
* Implement the following features:

  * **Adding New Todos:** Create an input component that adds todos to the list with a text description. Validate that the input is not empty.
  * **Marking Todos as Complete:** Add a mechanism (e.g., a checkbox) to mark a todo as complete.
  * **Deleting Todos:** Provide a button to remove a todo from the list.
  * **Filtering Todos:** Create filters to view all todos, only active todos, or only completed todos.
  * **Clearing Completed Todos:** Add a control to remove all todos that have been marked as complete.

## Task 4: Bonus Feature (Optional)

* A responsive layout that adapts to different screen sizes (mobile and desktop)
* Implement drag and drop functionality allowing users to reorder the todo items.
* Utilize a library of your choice to support drag and drop.
* Ensure that the state updates correctly when the order changes.

**Bonus Objectives:**

* Enhance the drag and drop reordering feature with animations.
* Add end-to-end (e2e) tests validating the overall user journey.

## Testing Requirements

Write unit tests for at least the core functionality:

* Addition of a new todo
* Marking a todo as complete
* Deletion of a todo
* Filtering todos based on their completion status

---

## Task 5: DevOps — GitHub Actions Workflow

Extend your project with a **GitHub Actions CI workflow**:

* Create a workflow file in `.github/workflows/ci.yml`.
* The workflow must run on:

  * Pull requests targeting `main` branch
  * Pushes to `main` branch
  * Manual triggers
* The workflow must:

  * Run lint checks and unit tests.
  * Build the application.
  * Cache dependencies to improve workflow performance.
  * Upload build artifacts and test reports.


---

# Evaluation Criteria

* **Correctness:** The application functions as expected, with all major features implemented.
* **TypeScript Best Practices:** Strong type usage, clear interfaces/types, adherence to industry standards and best practices.
* **Maintainability:** Code quality, organization, component structure, and documentation.
* **Responsiveness:** The UI should adapt effectively between mobile and desktop screens.
* **Completion:** All features (including bonus features if implemented) are complete.
* **Testing:** Adequate unit tests and potential end-to-end tests that verify core functionality.
* **Commit History:** A clear and incremental commit history that demonstrates your development process.
* **DevOps:** CI workflow correctness, caching, artifacts and documentation.

---

# Submission

Please organize, design, test, and document your code as if it were going into production — then push your changes to your GitHub under the name **EHC_TODO_FE_43**.

Have fun coding! 🚀
**The ElevateHealthcare Team**