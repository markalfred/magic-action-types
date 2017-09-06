# :sparkles: Magical :sparkles: Action Types (for Flux, Redux, etc)

# But why tho?

This is annoying.

```js
const INCREMENT = 'app/counter/INCREMENT'
const DECREMENT = 'app/counter/DECREMENT'
```

This is weird.

```js
const types = keyMirror({
  INCREMENT: null,
  DECREMENT: null,
})
```

### But this is :sparkles: magical :sparkles:

```js
const { INCREMENT, DECREMENT } = types('app/counter')
```

# Usage
```bash
npm install magic-action-types
```

Use object destructuring to simplify your action type definitions.

```js
import types from 'magic-action-types'

const { INCREMENT, DECREMENT } = types()
// INCREMENT === "INCREMENT"
// DECREMENT === "DECREMENT"
```

Pass a namespace to the types function.

```js
const { INCREMENT, DECREMENT } = types('app/counter')
// INCREMENT === "app/counter/INCREMENT"
// DECREMENT === "app/counter/DECREMENT"
```

Go ahead, save your namespace too.

```js
const counterTypes = types('app/counter')

const { INCREMENT, DECREMENT } = counterTypes
// INCREMENT === "app/counter/INCREMENT"
// DECREMENT === "app/counter/DECREMENT"
```
