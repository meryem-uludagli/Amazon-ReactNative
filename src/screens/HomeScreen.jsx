import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../companents/Header";
import SubHeader from "../companents/SubHeader";
import Categories from "../companents/Categories";
import Carousel from "../companents/Carousel";
import Services from "../companents/Services";
import Deals from "../companents/Deals";
import Brands from "../companents/Brands";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Carousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
