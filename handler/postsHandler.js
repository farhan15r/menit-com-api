import { Op } from "sequelize";
import model from "../models/index.js";

const getAllPosts = async (req, res) => {
  console.log(Date(), `: request GET:${req.url}`);

  const posts = await model.Post.findAll({
    order: [["id", "DESC"]],
    include: [{ model: model.Category, as: "category" }],
  });

  const filteredPosts = posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category.name,
    image: post.image,
  }));

  res.json(filteredPosts);
};

const getPostBySlug = async (req, res) => {
  console.log(Date(), `: request GET:${req.url}`);

  const post = await model.Post.findOne({
    where: { slug: req.params.slug },
    include: [{ model: model.Category, as: "category" }],
  });

  if (post) {
    const filteredPost = {
      title: post.title,
      body: post.body,
      category: post.category.name,
      image: post.image,
    };

    res.json(filteredPost);
  } else {
    res.status(404).send("Not found");
  }
};

const searchPosts = async (req, res) => {
  console.log(Date(), `: request GET:${req.url}`);
  const searchQuery = req.query.search_query;

  const posts = await model.Post.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${searchQuery}%` } },
        { body: { [Op.like]: `%${searchQuery}%` } },
      ],
    },
    order: [["id", "DESC"]],
  });

  res.json(posts);
};

export { getAllPosts, getPostBySlug, searchPosts };
