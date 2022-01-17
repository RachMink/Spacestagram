import {React,useState} from "react";
import {RWebShare} from "react-web-share";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
} from "grommet";
import { Favorite, ShareRounded } from "grommet-icons";

// const theme = {
//   global: {
//     colors:{
//       red: '#FF0000'
//     },
//     like: {
//       position: "absolute",
//       font: "large",
//     },
//   },
// };

function Post({ post }) {
  const [color, setColor] = useState('plain');

  const changeColor = () => {
     return color === 'plain' ? setColor('red') : setColor('plain');
  };
  return (
    <Box round="xsmall" elevation="medium" overflow="auto">
      <Box height="medium">
        <Image alt="NASA Image of the day" src={post.url} fit="cover" />
      </Box>
      <Box pad={{ horizontal: "small" }}>
        <Box
          margin={{ top: "small" }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none">
              {post.title} &#8226; {post.date}
            </Heading>
            <Text color="dark-3" size="small">
              {post.explanation}
            </Text>
          </Box>
        </Box>
        <Text size="xsmall" margin={{ vertical: "xsmall" }} truncate></Text>
      </Box>

      {/* card footer */}
      <Box
        tag="footer"
        direction="row"
        align="center"
        justify="between"
        pad={{ left: "small", right: "small", vertical: "small" }}
      >
        <Button
          a11yTitle={`Favorite ${post.title}`}
          onClick={() => {
            changeColor();
          }}
        >
          <Box>
            <Favorite color={color} />
          </Box>
        </Button>

        <RWebShare
          data={{
            text: "Here's a cool space photo I found! ",
            url: `${post.url}`,
            title: "Share via",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button a11yTitle={`Share ${post.title}`}>
            <Box>
              <ShareRounded color={color} />
            </Box>
          </Button>
        </RWebShare>
      </Box>
    </Box>
  );
}

export default Post;
