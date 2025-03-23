import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "@shared/hooks/useClickOutside";
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
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: "ru" | "en") => {
    dispatch(setLanguage(language));
    setIsOpen(false);
  };

  useClickOutside(dropDownRef, () => setIsOpen(false));

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

        <Content $isOpen={isOpen} ref={dropDownRef}>
          <Item
            variant="outline"
            onClick={() => handleLanguageChange("ru")}
            $isActive={currentLanguage === "ru"}
          >
            RU
          </Item>
          <Item
            variant="outline"
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
