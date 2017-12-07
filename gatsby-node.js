// const path = require("path");

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   // match templates
//   const articleTpl = path.resolve("src/templates/article.js");
//   const newNoteTpl = path.resolve("src/templates/newNote.js");
//   const oldNoteTpl = path.resolve("src/templates/oldNote.js");
//   const projectTpl = path.resolve("src/templates/project.js");
//   const albumTpl = path.resolve("src/templates/album.js");
//   const setTemplate = tpl => {
//     switch (tpl) {
//       case "project":
//         return projectTpl;
//       case "oldNote":
//         return oldNoteTpl;
//       case "article":
//         return articleTpl;
//       case "album":
//         return albumTpl;
//       case "newNote":
//       default:
//         return newNoteTpl;
//     }
//   };

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 250)
//             html
//             id
//             frontmatter {
//               date
//               path
//               title
//               tpl
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: setTemplate(node.frontmatter.tpl),
//         context: {} // additional data can be passed via context
//       });
//     });
//   });
// };
