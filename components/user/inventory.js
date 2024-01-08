"use client";
import { getStorage, deleteObject, ref } from "firebase/storage";
export default function Inventory({ data }) {
  const handleDelete = async (id) => {
    setLoading(true);
    const docRef = doc(db, "fruits", id);
    const item = await getDoc(docRef);
    const imageName = item.data().imageName;
    const storage = getStorage();
    const imageref = ref(storage, "images/" + imageName);

    deleteObject(imageref)
      .then(async () => {
        await deleteDoc(docRef);
      })
      .catch((error) => console.error(error));

    const newArray = data.filter((item) => {
      return item.id != id;
    });
  };
  return (
    <>
      {data && (
        <div className="w-full overflow-x-auto p-2 ">
          <table className="w-full">
            <thead className="font-semibold red-border">
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Category</td>
                <td>Price</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((prodcut) => {
                  return (
                    <tr key={prodcut.id}>
                      <td>{prodcut.name || "name"}</td>
                      <td>{prodcut.description || "description"}</td>
                      <td>{prodcut.category || "category"}</td>
                      <td>{prodcut.price || "price"}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(prodcut.id)}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
