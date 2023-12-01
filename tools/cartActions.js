export function AddToCart(db, data) {
  if (!localStorage.getItem(db)) {
    localStorage.setItem(db, JSON.stringify([data]));
    return "item added to cart";
  }
  let stored_item = localStorage.getItem(db);
  stored_item = JSON.parse(stored_item);
  let item = stored_item.filter((item) => {
    return data.id == item.id;
  });

  if (item.length) return;
  let new_items = [...stored_item, data];
  localStorage.setItem(db, JSON.stringify(new_items));

  return null;
}

export const db_name = "fruits_unique";

export function getCartItems(db) {
  if (!localStorage.getItem(db)) return false;
  let items = localStorage.getItem(db);
  items = JSON.parse(items);
  return items;
}
export function editCart(db, item_id, count) {
  if (!localStorage.getItem(db)) return false;
  let items = localStorage.getItem(db);
  items = JSON.parse(items);
  let item = items.filter((item) => {
    return item.id == item_id;
  });
  if (!item) return;
  let newLIst = items;
  let index = newLIst.indexOf(item[0]);
  item[0].quantity = count;
  newLIst[index] = item[0];
  newLIst = JSON.stringify(newLIst);
  localStorage.setItem(db, newLIst);
}
export function deleteCartItem(db, id) {
  if (!localStorage.getItem(db)) return false;
  let items = localStorage.getItem(db);
  items = JSON.parse(items);
  let new_items = items.filter((item) => {
    return String(item.id) != String(id);
  });

  localStorage.setItem(db, JSON.stringify(new_items));
  return "Item deleted";
}
