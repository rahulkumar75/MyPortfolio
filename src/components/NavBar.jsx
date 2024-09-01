import React, { useState } from "react";
import { IconButton, Typography, Drawer, Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll"; // Smooth Scrolling

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const openDrawer = () => setNav(true);
  const closeDrawer = () => setNav(false);

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className="text-5xl font-signature ml-2">Rahul</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <li
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            <a href="/resume.pdf" download>
              Resume
            </a>
          </li>
        </ul>

        {/* Burger Icon for Mobile Navigation */}
        <IconButton variant="text" size="lg" onClick={openDrawer} className="md:hidden">
          {nav ? <XMarkIcon className="h-8 w-8 stroke-2" /> : <Bars3Icon className="h-8 w-8 stroke-2" />}
        </IconButton>

        {/* Drawer for Mobile Navigation */}
        <Drawer open={nav} onClose={closeDrawer} className="bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <Card  shadow={false} className="h-[calc(100vh-(-1rem))] w-full p-4 bg-black bg-opacity-50">
            <Typography variant="h5" color="blue-gray" className="mb-6 text-center ">
              Menu
            </Typography>
            <List>
              {links.map(({ id, link }) => (
                <ListItem key={id} className="py-4 text-2xl capitalize ">
                  <ListItemPrefix>
                    <ChevronRightIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Link to={link} smooth duration={500} onClick={closeDrawer}>
                    {link}
                  </Link>
                </ListItem>
              ))}
              <ListItem className="py-4 text-2xl">
                <ListItemPrefix>
                  <ChevronRightIcon className="h-5 w-5" />
                </ListItemPrefix>
                <a href="/resume.pdf" download onClick={closeDrawer}>
                  Resume
                </a>
              </ListItem>
            </List>
          </Card>
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
