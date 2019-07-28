# TypeScript Exercises

> Go to [Stackblitz](https://stackblitz.com/) and create a new TypeScript project, go to `index.ts`, and erase its contents.

1. Create a class `Dog` with two variables: `age` and `name`
2. Give these members `number` and `string` types respectively
3. Add access modifiers to the class members, make them `private` and `public` respectively.
4. Add a constructor to the class. Pass the `age` parameter, and assign it to `age` variable. Do the same with `name`
5. Remove the declaration and the assignation you just wrote by using the shortcut explained [here](https://kendaleiv.com/typescript-constructor-assignment-public-and-private-keywords/)
6. Give the constructor a default value for the `name` member: `Beethoven`. Do the same for `age` using any value.
7. Create the class `Animal` and the class `Cat`. Make sure `Cat` and `Dog` inherits from `Animal` using `extends`.
8. Outside of the classes, create a `enum` called `BreedType` and assign it: `Bulldog`, `Pug`, `Beagle`.
9. Create an `interface` named `Mammal` with the `breedType` variable (using `BreedType` as the type).
10. Create a method called `breed()` inside the `Mammal` interface and ensure it returns an `Animal`.
11. Make `Dog` and `Cat` classes implement `Mammal` and fix any issues (When dogs breed, it should return a new dog with the default constructor values. Same logic applies for cats).

**Test your solution:**

```typescript
const myDog = new Dog(9, 'Rex')
myDog.breedType = BreedType.Pug;
const puppy = myDog.breed();

console.log(myDog.name); // Rex
console.log(myDog.breedType); // 1
console.log(puppy.name); // Beethoven
```
