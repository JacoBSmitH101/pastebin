import { Request, Response, NextFunction } from 'express';
import { items, Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';
// Create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { content, viewsLeft = null } = req.body;
    const newItem: Item = { id: uuidv4(), content: content, createdAt: Date.now().toString() };
    viewsLeft && viewsLeft != -1 ? newItem.viewsLeft = viewsLeft : null;
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// // Read all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    items.forEach(item => {
      item.viewsLeft ? item.viewsLeft-- : null;
      if (item.viewsLeft == 0) {
        const index = items.indexOf(item);
        items.splice(index, 1);
      }
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
};
//
// // Read single item
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const item = items.find((i) => i.id === id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

      item.viewsLeft ? item.viewsLeft-- : null;
if (item.viewsLeft == 0) {
        const index = items.indexOf(item);
        items.splice(index, 1);
      }
    res.json(item);
  } catch (error) {
    next(error);
  }
};
//
// // Update an item
// export const updateItem = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const id = parseInt(req.params.id, 10);
//     const { name } = req.body;
//     const itemIndex = items.findIndex((i) => i.id === id);
//     if (itemIndex === -1) {
//       res.status(404).json({ message: 'Item not found' });
//       return;
//     }
//     items[itemIndex].name = name;
//     res.json(items[itemIndex]);
//   } catch (error) {
//     next(error);
//   }
// };
//
// // Delete an item
// export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const id = parseInt(req.params.id, 10);
//     const itemIndex = items.findIndex((i) => i.id === id);
//     if (itemIndex === -1) {
//       res.status(404).json({ message: 'Item not found' });
//       return;
//     }
//     const deletedItem = items.splice(itemIndex, 1)[0];
//     res.json(deletedItem);
//   } catch (error) {
//     next(error);
//   }
// };
