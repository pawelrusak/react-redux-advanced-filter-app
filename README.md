<h1 align="center">React Redux Advanced Filter App</h1>

<p align="center">
  <em>User Management Table built with React, Redux (Toolkit), and TypeScript,
  <br />including advanced filtering with data fetching from a mock API.</em>
</p>

<p align="center">
  <a href="https://react-redux-advanced-filter-app.onrender.com/"><strong>Demo</strong></a>
  <br />
</p>

## Approach Summary & Key Challenges

### Approach Summary

- I didn't want to 'reinvent the wheel' when it came to the UI, so I used [Material UI](https://mui.com/material-ui/). It looks good, has a wide range of components, and it should also ensure accessibility out of the box,
- I chose Redux Toolkit instead of Classic Redux because it reduces a lot of boilerplate code. In particular, Redux Toolkit Query simplifies managing request state and cache management,
- To ensure a high level of user experience for filtering, I didn't implement separate input fields for `name`, `username`, `phone`, and `email`. Instead, I used a select element to choose the field specify and a text input for filtering.
- Additionally, for better user experience, I added highlighting to the column being searched and also implemented [normalization](/src/shared/utils/strings.utils.ts) for searched strings so that unnecessary characters wouldn't affect the search,
- I used a feature-based folder structure instead of organizing by types,
- I treated types as the 'source of truth' and aimed to apply [interface segregation](https://en.wikipedia.org/wiki/Interface_segregation_principle) from [SOLID](https://en.wikipedia.org/wiki/SOLID) principles for shared types, especially for types like [`User`](./src//features//users//users.types.ts)

### Key Challenges

I had to carefully consider how to handle data filtering, as there were two possible approaches:

- `A`: Sending a new request to the API each time the search criteria changes, which can be a good solution for large datasets.
- `B`: Filtering data locally, which works well but is only efficient for smaller datasets.

The JSONPlaceholder API allows [filtering using query parameters](https://jsonplaceholder.typicode.com/guide/), and the users dataset seemed like it could be large (after all, there are more than 8 billion people). At first, I wanted to follow approach `A`, but after testing the API, I realized it was limited to exact matches on field values. Because of these limitations, I decided to implement approach `B` using the [Redux selector](/src/features//users/users.selectors.ts).
