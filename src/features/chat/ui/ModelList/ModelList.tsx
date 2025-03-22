import { useState } from "react";
import {
  ModelListContainer,
  ModelListSelectedContent,
  ModelListSelected,
  ModelDropdown,
  ModelDropdownItem,
  ModelDropdownText,
} from "./ModelList.styles";
import ArrowUpIcon from "@assets/arrow-up.svg?react";
import ArrowDownIcon from "@assets/arrow-down.svg?react";
import { models } from "@shared/index";

export const ModelList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number>(0);

  const handleChangeModel = (index: number) => {
    if (index === selected) return;

    setSelected(index);
  };

  return (
    <ModelListContainer>
      <ModelListSelectedContent onClick={() => setIsOpen((prev) => !prev)}>
        {models[selected].element}
        <ModelListSelected>{models[selected].name}</ModelListSelected>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </ModelListSelectedContent>
      {isOpen && (
        <ModelDropdown>
          {models.map((item, index) => (
            <ModelDropdownItem
              $isActive={index === selected}
              onClick={() => handleChangeModel(index)}
              key={index}
            >
              {item.element}
              <ModelDropdownText>{item.name}</ModelDropdownText>
            </ModelDropdownItem>
          ))}
        </ModelDropdown>
      )}
    </ModelListContainer>
  );
};
