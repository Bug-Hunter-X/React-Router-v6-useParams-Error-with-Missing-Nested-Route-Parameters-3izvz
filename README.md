# React Router v6 useParams Bug with Missing Nested Route Parameters

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6 with nested routes.  If a URL parameter is missing, `useParams` returns an empty object, potentially causing errors.  This example shows the problem and a solution using optional chaining and error handling.

## Problem

When accessing nested route parameters, if one level is missing, the entire `useParams` object becomes empty causing errors further down the component tree.  This isn't always obvious to debug, especially in larger apps.

## Solution

The provided solution uses optional chaining (`?.`) to safely access parameters and provides better error handling to gracefully manage missing parameters.  Consider using a loading state while fetching data based on these parameters or a fallback UI for cases when params are missing.