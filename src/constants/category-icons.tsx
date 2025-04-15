import BiletsIcon from '~/assets/icons/category-icons/bilets-icon.svg';
import ChildIcon from '~/assets/icons/category-icons/child-icon.svg';
import DesertsIcon from '~/assets/icons/category-icons/deserts-icon.svg';
import DrinksIcon from '~/assets/icons/category-icons/drinks-icon.svg';
import FirstIcon from '~/assets/icons/category-icons/first-icon.svg';
import GrillIcon from '~/assets/icons/category-icons/grill-icon.svg';
import MedicalIcon from '~/assets/icons/category-icons/medical-icon.svg';
import NationalIcon from '~/assets/icons/category-icons/national-icon.svg';
import SaladsIcon from '~/assets/icons/category-icons/salads-icon.svg';
import SaucesIcon from '~/assets/icons/category-icons/sauces-icon.svg';
import SecondIcon from '~/assets/icons/category-icons/second-icon.svg';
import SnacksIcon from '~/assets/icons/category-icons/snacks-icon.svg';
import VeganIcon from '~/assets/icons/category-icons/vegan-icon.svg';

export const categoryIcons = {
    salads: SaladsIcon,
    sauces: SaucesIcon,
    drinks: DrinksIcon,
    snacks: SnacksIcon,
    'first-dishes': FirstIcon,
    'second-dishes': SecondIcon,
    grill: GrillIcon,
    'desserts-and-baking': DesertsIcon,
    preserves: BiletsIcon,
    vegan: VeganIcon,
    kids: ChildIcon,
    medical: MedicalIcon,
    national: NationalIcon,
} as const;

export type CategoryKey = keyof typeof categoryIcons;
