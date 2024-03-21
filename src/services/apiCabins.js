import supabase, { supabaseUrl } from "./supabase";

//* R E A D
export async function getCabins() {
  const { data: Cabins, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("💥Cabins could not be loaded");
  }

  return Cabins;
}

//* C R E A T E - E D I T
export async function createEditCabin(newCabin, id) {
  //  const hasImagePath = newCabin.image?.startswith?.(supabaseUrl);
  const hasImagePath = newCabin.image?.startsWith?.("https://");

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //////////////////////////
  // 1) Create/Edit Cabin
  let query = supabase.from("Cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("💥Cabin could not be created");
  }

  //////////////////////////
  // 2) Upload Image

  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //////////////////////////
  // 3) Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error(
      "💥Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

//* D E L E T E
export async function deleteCabin(id) {
  const { error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("💥Cabin could not be deleted");
  }

  return null;
}
