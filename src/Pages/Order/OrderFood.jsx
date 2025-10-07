import OrderFoodImg from "../../assets/OrderFood/11.jpg";
// rsc die ekta component structure toiri kora jai

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OrderFood = () => {
  const categories = ['pizza','soups','desserts','drinks','salads','offered']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
//   console.log(menu)

// console.log(category)
  const todaysOffers = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salads"); //salads ke select kore ctrl D marle duitai select hoye jabe.
//   console.log(salads)
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soups");
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "desserts");

  return (
    <div className="my-5">
        <Helmet>
                <title>Sundarban ||| Order Food</title>
              </Helmet>
      <Cover title="Order Your Food" img={OrderFoodImg}></Cover>

      <div className="my-5 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
            <Tab>Salads</Tab>
            <Tab>Today's Offer</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
           <TabPanel>
          <OrderTab items={salads}></OrderTab>
            
          </TabPanel>
          <TabPanel>
            <OrderTab items={todaysOffers}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
