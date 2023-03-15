type Point = [number, number];

type Triangle = {
  points: [Point, Point, Point];
};

type Quadrilateral = {
  points: [Point, Point, Point, Point];
};

type Shape = Triangle | Quadrilateral;
const myShape: Shape = {
  points: [
    [0, 0],
    [0, 1],
    [1, 1],
    // [1, 0],
  ],
};

export {};
