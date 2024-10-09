import { View, Text, Image, StyleSheet } from 'react-native'
import React, { FC, useMemo } from 'react'
import { imageData } from '@utils/dummyData';
import AutoScroll from "@homielab/react-native-auto-scroll";
import { screenHeight, screenWidth } from '@utils/Scaling';


const ProductSlider = () => {
    const rows=useMemo(()=>{
        let result=[];
        for(let i=0;i<imageData.length;i+=4){
            result.push(imageData.slice(i,i+4));
        }
        return result;
    },[]);

  return (
    <View pointerEvents='none' style={{marginTop:20}}>
      <AutoScroll style={styles.autoScroll} endPaddingWidth={0} duration={10000}>
          <View style={styles.gridContainer}>
            {
                rows?.map((row:any,rowIndex:number)=>{
                   return <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
                })
            }
          </View>
      </AutoScroll>
    </View>
  )
}

const Row:FC<{row:typeof imageData;rowIndex:number}>=({row,rowIndex})=>{
    const horizontalShift=rowIndex%2===0 ? -18:18;
      return(
        <View style={[styles.row,{transform:[{translateX:horizontalShift}]}]}>
            {
                row?.map((image,imageIndex)=>(
                    <View style={styles.itemContainer} key={imageIndex}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))
            }
        </View>
      )
}
const MemoizedRow=React.memo(Row);
export default ProductSlider;


const styles=StyleSheet.create({
    autoScroll:{
      position:'absolute',
      zIndex:-2,
      backgroundColor:'#fff'
    },
    gridContainer:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'visible'
    },
    row:{
        flexDirection:'row',
        marginBottom:10
    },
    itemContainer:{
        marginBottom:12,
        marginHorizontal:10,
        height:screenHeight * 0.13,
        width:screenWidth * 0.30,
        justifyContent:'center',
        backgroundColor:'#e9f7f8',
        borderRadius:25,
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
})