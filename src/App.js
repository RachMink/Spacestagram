import React, { Component, useContext } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  Nav,
  Sidebar,
  Avatar,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Menu, Domain, Linkedin, Github } from 'grommet-icons';
import PostListPage from "./pages/PostsListPage"

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      red: "#E3180A",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='small'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    
    return (
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box
              overflow={{ horizontal: "auto" }}
              width={size === "small" ? "200px" : "400px"}
              fill
              full
            >
              <AppBar>
                <Heading level="3" margin="none">
                  Welcome to Spacestagram Earthlings!
                </Heading>
                <Button
                  icon={<Menu />}
                  onClick={() =>
                    this.setState({ showSidebar: !this.state.showSidebar })
                  }
                />
              </AppBar>
              <Box
                direction="row"
                flex
                overflow={({ vertical: "scroll" }, { horizontal: "hidden" })}
              >
                <Box flex align="center" justify="center">
                  <PostListPage />
                </Box>
                {!showSidebar || size !== "small" ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Sidebar
                      background="brand"
                      header={
                        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                      }
                      footer={
                        <Button
                          icon={<FormClose />}
                          hoverIndicator
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      }
                    >
                      <Nav gap="small">
                        <Button
                          icon={<Github />}
                          href={"https://github.com/RachMink"}
                          hoverIndicator
                        />
                        <Button
                          icon={<Linkedin />}
                          href={"https://www.linkedin.com/in/rachelhminkowitz/"}
                          hoverIndicator
                        />
                        <Button
                          icon={<Domain />}
                          href={
                            "https://rachmink.github.io/personalWebsite/index.html"
                          }
                          hoverIndicator
                        />
                      </Nav>
                    </Sidebar>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Sidebar
                      background="brand"
                      header={
                        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                      }
                      footer={
                        <Button
                          icon={<FormClose />}
                          hoverIndicator
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      }
                    >
                      <Nav gap="small">
                        <Button
                          icon={<Github />}
                          target={"_blank"}
                          href={"https://github.com/RachMink"}
                          hoverIndicator
                        />
                        <Button
                          icon={<Linkedin />}
                          href={"https://www.linkedin.com/in/rachelhminkowitz/"}
                          hoverIndicator
                        />
                        <Button
                          icon={<Domain />}
                          href={
                            "https://rachmink.github.io/personalWebsite/index.html"
                          }
                          hoverIndicator
                        />
                      </Nav>
                    </Sidebar>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;