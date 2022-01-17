import React from "react";
import { Grid, Box, Spinner } from "grommet";
import Post from "../components/Post";


class PostListPage extends React.Component {
  state = {
    loading: true,
    posts: [],
    notFound: false,
  };

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=qBNzx05GwbvWeXpOkNMez2isMMRInQ8ucXb0O8op&count=20"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ 
          posts: data,
          loading: false,
        });
        
      })
      .catch((err) => {
        this.setState({
          notFound: true,
          loading: true,
        });
      });
  }
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      // <Box
      //   align="start"
      //   height="xxlarge"
      //   overflow="scroll"
      //   round="small"
      //   direction="column"
      //   pad="small"
      // >

      //   {this.state.posts.map((post) => {
      //     return <Post post={post} key={post.title} />;
      //   })}
      // </Box>

      //       <Grid
      //   rows={['xlarge', 'large']}
      //   columns={['xxlarge', 'large']}
      //   gap="small"
      //   areas={[
      //     { name: 'main', start: [1, 1], end: [1, 1] },
      //   ]}
      // >

      //   <Box gridArea="main" background="light-2">
      //           {this.state.posts.map((post) => {
      //            return <Post post={post} key={post.title} />;
      //          })}
      //   </Box>
      // </Grid>

      <Grid
        rows={["xxxlarge"]}
        columns={["large"]}
        gap="small"
        areas={[
          // { name: "header", start: [0, 0], end: [1, 0] },
          // { name: "nav", start: [0, 0], end: [1, 0] },
          { name: "main", start: [0, 0], end: [0, 0] },
        ]}
      >
        {/* <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="light-5" /> */}
        <Box gridArea="main" round="xsmall" gap="medium">
                       {this.state.posts.map((post) => {
                  return <Post post={post} key={post.title} />;
                })}
        </Box>
      </Grid>
    );
  }
}

export default PostListPage;
