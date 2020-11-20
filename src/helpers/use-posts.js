import { useStaticQuery, graphql } from "gatsby"

const usePosts = () => {
  const {
    allMdx: { edges: posts },
  } = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
          edges {
            node {
              frontmatter {
                slug
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 250) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return posts.map(({ node: { frontmatter: { slug, title, image } } }) => ({
    slug,
    title,
    image: image?.childImageSharp?.fluid,
  }))
}

export default usePosts