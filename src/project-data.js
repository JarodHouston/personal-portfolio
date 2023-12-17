import TwentyFortyEightImage from "./images/2048-spinoff-image.png";
import WoodokuImage from "./images/woodoku-box-image.png";
import ToDoListImage from "./images/ToDoListImage.png";
import BattleshipImage from "./images/BattleshipImage.png";
import TasteUCLAImage from "./images/tasteUCLAlogo.png";

export default [
  {
    id: 5,
    name: "tasteUCLA",
    description:
      "A place where UCLA students can review food from ASUCLA restaurants on campus!",
    image: TasteUCLAImage,
    altText: "tasteUCLA logo",
    link: "https://github.com/JENCS/TasteUCLA",
  },
  {
    id: 1,
    name: "2048 Spinoff",
    description:
      "Combining numbers can feel like math, so why not combine colors instead? The rules are like 2048. Use the 'wasd' keys to shift the blocks in the corresponding direction. Combine like colors to get a new color. See what colors you can unlock!",
    image: TwentyFortyEightImage,
    altText:
      "Image of the game 2048 Spinoff. Tiles are colored instead of numbered.",
    link: "https://github.com/JarodHouston/2048-Spinoff",
  },
  {
    id: 2,
    name: "Woodoku",
    description:
      "A remake of Woodoku, a unique version of Sudoku! Place wooden blocks to complete rows, columns, or boxes on the grid. Keep playing until there are no more spots for you to place the blocks.",
    image: WoodokuImage,
    altText:
      "Image of the game Woodoku. Displays a 9x9 grid filled with different connected wooden blocks.",
    link: "https://github.com/JarodHouston/Woodoku",
  },
  {
    id: 3,
    name: "To-Do List",
    description:
      "A simple To-Do List that can be downloaded and used as a Google Chrome extension. Create a task at the bottom. Remove a task by clicking on it. Easy!",
    image: ToDoListImage,
    altText: "Image of the To-Do List with 3 created items.",
    link: "https://github.com/JarodHouston/To-Do-List",
  },
  {
    id: 4,
    name: "Battleship",
    description:
      "It's Battleship! This one-player version allows you to go up against an AI that can strategically guess the locations of your ships. Can you beat the computer?",
    image: BattleshipImage,
    altText:
      "Example screenshot of the game: depicts your 10x10 grid with ships and where your opponent has attacked",
    link: "https://github.com/JarodHouston/Battleship",
  },
];
