# Development Exercise

You are free to use whatever technologies you want to use but the project or container should be all self-contained.  The assumption is that the consumer of the project has access to `node` as a system binary.  It is highly recommended to use `node` if you need to run a local webserver to deliver the project on a browser; if you need any other dependencies outside of `node` please include it in the project README. In the README please provide instructions on how to run the application e.g.; within the project root run `npm i && npm start` You are free to use whatever web libraries that are needed to achieve the exercise.  You are free to mutate or transform the source dataset to another type but the values and its columns should be preserved.

* Please create a project that allows a user to interact with the attached dataset.
    * Base
        * Create a view that displays entries as blocks or squares with the name visible within the clustered block
        * Limit the view to a set of forty-two entries when initially loaded
        * When the user focuses or clicks on an entry enable the user to view additional available information about the entry : Title = `title`, Gender = `isMale`, Culture = `culture`, DOB: `dateOfBirth`
        * Each of the below user-abilities can be reset by a hard refresh of the browser by the user
            * Enable the user the ability to show all entries in no particular order
            * Enable the user the ability to show the entries by its corresponding `isAlive` value
            * Enable the user the ability to show the entries by their `popularity` in descending order
        * If there are any empty results with any of the user interactions, please display an appropriate sean bean reference
        * Enable the user to display an area that has a pie chart of the proportional genders of the entries
    * Extras
        * Enable the user to reset the view back to the initially loaded view to avoid a hard refresh
        * Enable random order of entries when initially loaded
        * Incorporate deferred loading to scroll more to replace the ability to show all
        * Enable the user to show the entries by their `popularity` in ascending order as well
        * Enable to the user to display a dendrogram of the entries by their clustered house, please omit an entry with empty `house` values

Please provide a self-contained archive file of the exercise.

## Install dependencies
```
npm install
```

## Run Application
```
npm start
```

## Run tests
```
npm test
```
