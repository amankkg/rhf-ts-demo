# rhf-ts-demo

Demo of a component which simplifies usage of 'react-hook-form`'s `Controller` component with custom inputs.

## Idea

Pass in a `control` instance from `useForm` and all other props should be inferred from it.

## Problem

There is a type-level issue with `Input` props, especially with `control`.
