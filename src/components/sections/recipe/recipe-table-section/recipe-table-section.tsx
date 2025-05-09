import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

import { PortionInput } from '~/components/shared/inputs/portion-input/portion-input';
import { Ingredient } from '~/constants/data/recipes';
import { usePortionCalculator } from '~/hooks/use-portion-calculator';

type RecipeTableSectionProps = {
    ingredients: Ingredient[];
    portions: number;
};

export const RecipeTableSection: React.FC<RecipeTableSectionProps> = ({
    ingredients,
    portions,
}) => {
    const { currentPortions, setCurrentPortions, calculatePortion } =
        usePortionCalculator(portions);

    return (
        <TableContainer w='100%' as='section'>
            <Table variant='recipe' size='custom'>
                <Thead>
                    <Tr>
                        <Th>Ингридиенты</Th>
                        <Th textAlign='right' py={2}>
                            <PortionInput value={currentPortions} onChange={setCurrentPortions} />
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ingredients.map((ingredient, index) => (
                        <Tr key={ingredient.title}>
                            <Td>{ingredient.title}</Td>
                            <Td textAlign='right'>
                                <Text as='span' data-test-id={`ingredient-quantity-${index}`}>
                                    {calculatePortion(ingredient)}
                                </Text>{' '}
                                {ingredient.measureUnit}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
