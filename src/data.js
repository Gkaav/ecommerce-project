export const assetsBaseUrl =
  "res.cloudinary.com/dc2c49xov/image/upload/v1703352357/ecommerce-page"

export const loggedInUser = {
  name: "Ryan Welles",
  profileImage: "image-avatar.png"
}

export const product = {
  images: {
    thumbnails: [
      "image-product-4-thumbnail.jpg",
      "image-product-3-thumbnail.jpg",
      "image-product-2-thumbnail.jpg",
      "image-product-1-thumbnail.jpg"
    ],
    originals: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg"
    ]
  },
  reviews: [
    {
      user: "Ryan Welles",
      starRating: 4,
      writtenReview:
        "The quality is good considering the affordable price point. They look good with jeans and are quite comfortable for daily wear.",
      headline: "Good for its price"
    },
    {
      user: "Emily Moore",
      starRating: 5,
      writtenReview:
        "Comfortable for long walks, and they've held up great so far. They've quickly become my go-to pair!",
      headline: "Great quality"
    },
    {
      user: "Patricia Lebsack",
      starRating: 5,
      writtenReview:
        "Absolutely love these sneakers! They have a sleek, modern design with a comfortable fit right out of the box.",
      headline: "Recommended"
    }
  ]
}
