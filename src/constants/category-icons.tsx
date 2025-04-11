import BiletsIcon from '~/assets/icons/category-icons/bilets-icon.svg?react';
import ChildIcon from '~/assets/icons/category-icons/child-icon.svg?react';
import DesertsIcon from '~/assets/icons/category-icons/deserts-icon.svg?react';
import DrinksIcon from '~/assets/icons/category-icons/drinks-icon.svg?react';
import FirstIcon from '~/assets/icons/category-icons/first-icon.svg?react';
import GrillIcon from '~/assets/icons/category-icons/grill-icon.svg?react';
import MedicalIcon from '~/assets/icons/category-icons/medical-icon.svg?react';
import NationalIcon from '~/assets/icons/category-icons/national-icon.svg?react';
import SaladsIcon from '~/assets/icons/category-icons/salads-icon.svg?react';
import SaucesIcon from '~/assets/icons/category-icons/sauces-icon.svg?react';
import SecondIcon from '~/assets/icons/category-icons/second-icon.svg?react';
import SnacksIcon from '~/assets/icons/category-icons/snacks-icon.svg?react';
import VeganIcon from '~/assets/icons/category-icons/vegan-icon.svg?react';

export const categoryIcons: Record<string, React.JSX.Element> = {
    salads: <SaladsIcon />,
    sauces: <SaucesIcon />,
    drinks: <DrinksIcon />,
    snacks: <SnacksIcon />,
    'first-dishes': <FirstIcon />,
    'second-dishes': <SecondIcon />,
    grill: <GrillIcon />,
    'desserts-and-baking': <DesertsIcon />,
    preserves: <BiletsIcon />,
    vegan: <VeganIcon />,
    kids: <ChildIcon />,
    medical: <MedicalIcon />,
    national: <NationalIcon />,
};
