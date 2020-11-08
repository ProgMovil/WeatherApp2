import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Content,
    Spinner,
    H1,
    View,
    H2,
    Button

} from "native-base";
import backend from "../api/backend";
import getEnvVars from "../enviroment";
import { FlatList } from "react-native-gesture-handler";

const {apiKey,apiHost}= getEnvVars();

const { width, height } = Dimensions.get("window");

const ScrBusqueda=({ route , navigation })=>{
    const {search}=route.params;
    console.log(search);
    return(

    <Text>Nombre y mas {search}</Text>
    )
}

export default ScrBusqueda;