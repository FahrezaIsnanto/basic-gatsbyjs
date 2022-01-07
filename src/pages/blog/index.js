import React from 'react'
import {Link,graphql} from 'gatsby';
import Layout from '../../components/Layout'

const Blog = ({data}) => {
    console.log(data.allMdx.nodes);
    return (
        <Layout pageTitle="My Blog Post">
           {
               data.allMdx.nodes.map(blog=>{
                   return (
                       <article key={blog.id}>
                           <h2><Link to={`/blog/${blog.slug}`}>{blog.frontmatter.title}</Link></h2>
                           <p>Posted : {blog.frontmatter.date}</p>
                       </article>
                   )
               })
           }
        </Layout>
    )
}

export const data = graphql`
    query{
        allMdx(sort:{fields:frontmatter___date,order:DESC}){
            nodes{
                frontmatter{
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                id
                slug
                body
            }
        }
    }
`;


export default Blog
