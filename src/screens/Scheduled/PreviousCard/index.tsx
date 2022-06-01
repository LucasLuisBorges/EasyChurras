import React from "react";
import { StyleSheet } from "react-native";
import { SendButton } from "../../../components/SendButton";

import * as S from "./styles";

interface IProps {
  title: string;
  date: string;
}

export function PreviousCard({ title, date } : IProps) {
  const image = 
  {uri: 'https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg'}

  return (
    <S.Container style={boxShadow.shadow}>
      <S.Image
        source={image}
      />

      <S.WrapperInfo>
        <S.Title>
          {title}
        </S.Title>

        <S.Date>
          {date}
        </S.Date>
      </S.WrapperInfo>

      <SendButton
        size={46}
      />
      
    </S.Container>
  );
}

const boxShadow = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5.46,

    elevation: 12,
  },
});
