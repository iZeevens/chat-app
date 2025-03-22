import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../model/languageSlice";
import { RootState } from "@app/store/store";
import {
  Container,
  Content,
  Title,
  Item,
  StyledArowUp,
  StyledArowDown,
} from "./LanguageSwitcher.styles";
import Language from "@assets/lang.svg?react";

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: "ru" | "en") => {
    dispatch(setLanguage(language));
  };

  return (
    <Container>
      <Language />
      <Title>{currentLanguage.toUpperCase()}</Title>
      <div>
        {isOpen ? (
          <StyledArowDown onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <StyledArowUp onClick={() => setIsOpen(!isOpen)} />
        )}

        <Content $isOpen={isOpen}>
          <Item
            onClick={() => handleLanguageChange("ru")}
            $isActive={currentLanguage === "ru"}
          >
            RU
          </Item>
          <Item
            onClick={() => handleLanguageChange("en")}
            $isActive={currentLanguage === "en"}
          >
            EN
          </Item>
        </Content>
      </div>
    </Container>
  );
};
