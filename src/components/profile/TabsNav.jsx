import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { storeDataType } from "../../assets/data/data";
import { useDispatch } from 'react-redux';
import {setDisplayData} from "../store/slice/productListSlice"
export default function TabsNav() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    
    setValue(newValue);
  };

    return (
      <Box sx={{ width: '100%', display:"flex", justifyContent:"center", mb:"25px"}}>
      <Tabs
        onChange={handleChange}
        value={value}
          
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {storeDataType.map((el, index) => (
          <Tab
            sx={{ color:"#b02c35", fontSize:"18px" }}
            key={index}
            label={el}
            selected={value === index}
            onClick={()=>dispatch(setDisplayData(el))}
          />
        ))}
      </Tabs>
    </Box>      
    );
}
