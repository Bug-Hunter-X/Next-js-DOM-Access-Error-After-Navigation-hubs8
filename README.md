# Next.js DOM Access Error After Navigation

This repository demonstrates a common error in Next.js applications where you try to access the DOM before it's fully rendered after navigation.  This often results in `null` being returned from `document.getElementById` or similar DOM manipulation methods.

## The Bug

The `bug.js` file shows a component that uses `next/router` to navigate to another page.  However, it attempts to access a DOM element immediately after navigation, which can lead to errors if the target page's DOM hasn't fully loaded.

## The Solution

The `bugSolution.js` file demonstrates how to resolve the issue. The solution employs the `useEffect` hook and the `router.isReady` property to make sure that the DOM is completely rendered before interacting with it.