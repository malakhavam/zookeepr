jest.mock('fs');
const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
  
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

test("creates a zookeepr object", () => {
  const zookeepr = createNewZookeeper(
    { name: "Darlene", id: "jg2" },
    zookeepers
  );

  expect(zookeepr.name).toBe("Darlene");
  expect(zookeepr.id).toBe("jg2");
});

test("filters by query", () => {
  const startingZookeepers = [
    {
        id: "3",
        name: "Linda",
        age: 48,
        favoriteAnimal: "otter"
        },
        {
        id: "4",
        name: "Ryan",
        age: 20,
        favoriteAnimal: "dog"
        }
  ];

  const updatedZookeepers = filterByQuery({ name: "Linda" }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
  const startingZookeepers = [
    {
        id: "3",
        name: "Linda",
        age: 48,
        favoriteAnimal: "otter"
        },
        {
        id: "4",
        name: "Ryan",
        age: 20,
        favoriteAnimal: "dog"
        }
  ];

  const result = findById("3", startingZookeepers);

  expect(result.name).toBe("Linda");
});

test("checks favourite animal", () => {
  const zookeepr = {
    id: "3",
    name: "Linda",
    age: 48,
    favoriteAnimal: "otter"
    };

  const invalidZookeepr = {
    id: "3",
    name: "Linda",
    age: 48,
    };

  const result = validateZookeeper(zookeepr);
  const result2 = validateZookeeper(invalidZookeepr);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});