# World & Spatial System

Defines navigable space abstractly.

```ts
interface Location {
  id: string
  name: string
  type: "town" | "dungeon"
  entryScene: string
}
```
