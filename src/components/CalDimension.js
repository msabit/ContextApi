import React, {useState, useEffect} from 'react';
import {
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const hp = (n)=>{
  return (n*height)/100;
}
const wp=(n)=>{
  return (n*width)/100;
}
 