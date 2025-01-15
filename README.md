<h2> Documentation </h2>

<h3>Components</h3>

<!-- Header Component -->
<h4>Header Component</h4>
<p>The <strong>Header Component</strong> provides navigation across the application, including links to Home, Job Listings, and the Job Application form.</p>
<ul>
  <li>Contains navigation menu items.</li>
  <li>Displays the logo and company name prominently.</li>
  <li>Integrates responsive design for different screen sizes.</li>
  using navbar class - nav-item nav-link
  to naigate to home - Jobs - about us
</ul>

<!-- Banner Component -->
<h4>Banner Component</h4>
<p>The <strong>Banner Component</strong> displays a welcoming banner with a job portal tagline or promotional message.</p>
<ul>
  <li>Typically placed on the homepage.</li>
  <li>Includes a call-to-action button linking to the job listings or application form.</li>
  only text and image
</ul>

<!-- Footer Component -->
<h4>Footer Component</h4>
<p>The <strong>Footer Component</strong> contains contact information, company policies, and links to social media.</p>
<ul>
  <li>Displays copyright information.</li>
</ul>

<!-- Home Component -->
<h4>Home Component</h4>
<p>The <strong>Home Component</strong> serves as the main entry point to the job portal.</p>
<ul>
  <li>Includes the <code>Banner</code> and <code>Job List</code> components.</li>
</ul>

<!-- Job Card Component -->
<h4>Job Card Component</h4>
<p>The <strong>Job Card Component</strong> displays individual job postings.</p>
<ul>
  <li>Shows job title, location, and salary information.</li>
  <li>Includes a button to view more details or apply.</li>
  <li>Used within the <code>Job List Component</code> to display multiple jobs.</li>
</ul>

<!-- Job List Component -->
<h4>Job List Component</h4>
<p>The <strong>Job List Component</strong> is responsible for listing all available jobs.</p>
<ul>
  <li>Renders multiple <code>Job Card</code> components.</li>
  <li>
</ul>

<!-- Job Application Form Component -->
<h4>Job Application Form Component</h4>
<p>The <strong>Job Application Form Component</strong> provides a form using Angular Reactive forms for users to submit job applications.</p>
<ul>
  <li>Includes fields for user details (e.g., name, email, resume).</li>
  <li>Integrates validation to ensure form fields are filled correctly.</li>
  <li>Submits data to the backend and routes to the <code>Submission Success</code> component on successful application.</li>
</ul>

<!-- Job Application List Component -->
<h4>Job Application List Component</h4>
<p>The <strong>Job Application List Component</strong> displays a list of all applications submitted by a user.</p>
<ul>
  <li>Allows users to view and manage their previous applications.</li>
</ul>

<!-- Submission Success Component -->
<h4>Submission Success Component</h4>
<p>The <strong>Submission Success Component</strong> displays a confirmation message after a job application is successfully submitted.</p>
<ul>
  <li>Thanks the user for applying and provides additional instructions.</li>
  <li>Includes a button to return to the job listings or view application status.</li>
</ul>

<h3>Interface</h3>

<!-- Job Application Class -->
<h4>Job Application Interface</h4>
<p>The <strong>Job Application Class<strong> defines the structure of a job application object.</p>
<ul>
  <li><code>id</code>: Unique identifier for each application.</li>
  <li><code>jobId</code>: Reference to the job ID associated with this application.</li>
  <li><code>applicantName</code>: Name of the applicant.</li>
  <li><code>email</code>: Email address of the applicant.</li>
  <li><code>resume</code>: Link or file containing the applicant's resume.</li>
  <li><code>status</code>: Current status of the application (e.g., Submitted, In Review).</li>
  <li><code>submissionDate</code>: Date the application was submitted.</li>
</ul>

<h2>App Routing Documentation</h2>

<p>This module defines the routing structure for the <strong>AlwaysApply Job Portal</strong>. Each route is mapped to a specific component, allowing users to navigate through different sections of the application.</p>

<h3>Route Definitions</h3>

<ul>
  <!-- Edit Form Route -->
  <li>
    <strong>Path:</strong> <code>edit/:id</code>
    <ul>
      <li><strong>Component:</strong> <code>EditFormComponent</code></li>
      <li><strong>Description:</strong> Allows users to edit a specific job application by passing an <code>id</code> parameter.</li>
    </ul>
  </li>

  <!-- About Route -->
  <li>
    <strong>Path:</strong> <code>about</code>
    <ul>
      <li><strong>Component:</strong> <code>AboutComponent</code></li>
      <li><strong>Description:</strong> Displays information about the job portal and company.</li>
    </ul>
  </li>

  <!-- Submission Success Route -->
  <li>
    <strong>Path:</strong> <code>submission</code>
    <ul>
      <li><strong>Component:</strong> <code>SubmissionSuccessComponent</code></li>
      <li><strong>Description:</strong> Displays a confirmation message after a successful job application submission.</li>
    </ul>
  </li>

  <!-- Job Application List Route -->
  <li>
    <strong>Path:</strong> <code>job-list</code>
    <ul>
      <li><strong>Component:</strong> <code>JobApplicationListComponent</code></li>
      <li><strong>Description:</strong> Shows a list of job applications that the user has submitted.</li>
    </ul>
  </li>

  <!-- Job Application Form Route -->
  <li>
    <strong>Path:</strong> <code>job-application</code>
    <ul>
      <li><strong>Component:</strong> <code>JobApplicationFormComponent</code></li>
      <li><strong>Description:</strong> Provides a form for users to apply to a job.</li>
    </ul>
  </li>

  <!-- Home Route (Default Route) -->
  <li>
    <strong>Path:</strong> <code>''</code> (empty path)
    <ul>
      <li><strong>Component:</strong> <code>HomeComponent</code></li>
      <li><strong>Description:</strong> The default route, displaying the homepage with a list of available jobs.</li>
    </ul>
  </li>
</ul>

<h3>Module Imports and Exports</h3>
<ul>
  <li><strong>Imports:</strong> The <code>RouterModule.forRoot(routes)</code> method initializes the routing configuration with the defined routes.</li>
  <li><strong>Exports:</strong> The <code>RouterModule</code> is exported to make the routing available across the application.</li>
</ul>

<h3>Routing Example Usage</h3>
<p>Use the <code>routerLink</code> directive in HTML to navigate to different routes:</p>
<pre><code>&lt;a routerLink="/job-list"&gt;View Job Applications&lt;/a&gt;</code></pre>
<pre><code>&lt;a routerLink="/about"&gt;About Us&lt;/a&gt;</code></pre>

<p>With this configuration, users can access each component by navigating to the corresponding URL paths, enhancing navigation and user experience across the job portal.</p>

# JobPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
