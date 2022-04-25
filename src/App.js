import "./App.css";
import Button from "./components/Button";

import Input from "./components/Input";
import SearchIcon from "@mui/icons-material/Search";

import Paragraph from "./components/Paraghraph";

import Link from "./components/Link";

import Icon from "./components/Icon";
import AttachmentIcon from "@mui/icons-material/Attachment";

import H3 from "./components/H3";

import H1 from "./components/H1";

import NavBar from "./components/Nav";
import { NavBarData } from "./components/Nav/navBarData";

function App() {
  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar
        homeIcon={NavBarData[0].icon}
        homeTitle={NavBarData[0].title}
        aboutUsIcon={NavBarData[1].icon}
        aboutUsTitle={NavBarData[1].title}
        contactUsIcon={NavBarData[2].icon}
        contactUsTitle={NavBarData[2].title}
        cartIcon={NavBarData[3].icon}
      />
      {/* Button Component */}
      <Button
        type={"submit"}
        id={"1"}
        onClick={() => {
          alert("1");
        }}
      >
        click here
      </Button>

      {/* Input Component */}
      <Input
        type={"text"}
        placeholderText={"type here to search"}
        icon={<SearchIcon />}
      />

      {/* Paragraph Component */}
      <Paragraph
        paragraphContent={"This is Transformed text to capital"}
        paragraphStyle={{
          textTransform: "uppercase",
          fontWeight: "bolder",
          fontSize: "2rem",
          color: "blue",
        }}
      />

      {/* Link Component */}
      <Link returnedLink={"https://www.google.com/"} linkText={"Google"} />

      {/* icon Component */}
      <Icon iconComponent={<AttachmentIcon />} />

      {/* H3 Component */}
      <H3 h3Text={"this is h3 text"} h3Title={"h3 test mouse over"} />

      {/* H1 Component */}

      <H1 h1Text={"this is h1 text"} h1Title={"h1 test mouse over"} />
    </div>
  );
}

export default App;
