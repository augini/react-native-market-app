import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (
  { title, price, category, description, images, latitude, longitude },
  onUploadProgress
) => {
  const data = new FormData();
  data.append("title", title);
  data.append("price", price);
  data.append("categoryId", category.value);
  data.append("description", description);
  images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  data.append("location", JSON.stringify({ latitude, longitude }));
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  postListing,
};
